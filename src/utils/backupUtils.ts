import fs from 'fs';
import path from 'path';
import { ProductService } from '../services/productService';
import type { Product } from '../types/product';

interface ComparisonDifference {
  type: 'missing_in_supabase' | 'extra_in_supabase';
  slug: string;
}

/**
 * Backup and restore utilities for product data
 */
export class BackupUtils {
  
  /**
   * Export all products to JSON file
   * @param filePath - Path to save the backup file
   */
  static async exportProducts(filePath?: string) {
    try {
      const products = await ProductService.getAllProducts();
      const backup = {
        exportedAt: new Date().toISOString(),
        version: '1.0',
        productCount: products.length,
        products: products
      };

      const backupPath = filePath || path.join(process.cwd(), 'backups', `products-backup-${Date.now()}.json`);
      
      // Ensure backup directory exists
      const backupDir = path.dirname(backupPath);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
      
      console.log(`✅ Products exported to: ${backupPath}`);
      console.log(`📊 Exported ${products.length} products`);
      
      return {
        success: true,
        filePath: backupPath,
        count: products.length
      };
    } catch (error) {
      console.error('❌ Export failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Import products from JSON file (for disaster recovery)
   * Warning: This will not handle conflicts - use with caution
   * @param filePath - Path to the backup file
   */
  static async importProducts(filePath: string) {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`Backup file not found: ${filePath}`);
      }

      const backupData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (!backupData.products || !Array.isArray(backupData.products)) {
        throw new Error('Invalid backup file format');
      }

      console.log(`📁 Loading backup from: ${filePath}`);
      console.log(`📅 Backup created: ${backupData.exportedAt}`);
      console.log(`📊 Products to import: ${backupData.productCount}`);

      // Note: This is a simple import - in production you'd want to handle conflicts
      const results = [];
      for (const product of backupData.products) {
        try {
          // Remove id and timestamps for clean import
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id, created_at, updated_at, ...productData } = product;
          const created = await ProductService.createProduct(productData);
          results.push({ success: true, product: created });
        } catch (error) {
          results.push({ 
            success: false, 
            product: product.slug, 
            error: error instanceof Error ? error.message : 'Unknown error' 
          });
        }
      }

      const successful = results.filter(r => r.success).length;
      const failed = results.filter(r => !r.success).length;

      console.log(`✅ Successfully imported: ${successful} products`);
      if (failed > 0) {
        console.log(`❌ Failed to import: ${failed} products`);
      }

      return {
        success: true,
        imported: successful,
        failed: failed,
        results: results
      };
    } catch (error) {
      console.error('❌ Import failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Compare local JSON data with Supabase data
   * @param localDataPath - Path to local products.js or JSON file
   */
  static async compareWithLocal(localDataPath: string) {
    try {
      // Import local data (you'd adjust this based on your file format)
      const localProducts = await import(localDataPath);
      const supabaseProducts = await ProductService.getAllProducts();

      const comparison = {
        local: {
          count: localProducts.getAllProducts?.()?.length || 0,
          products: localProducts.getAllProducts?.() || []
        },
        supabase: {
          count: supabaseProducts.length,
          products: supabaseProducts
        },
        differences: [] as ComparisonDifference[]
      };

      // Simple comparison by slug
      const localSlugs = new Set<string>(comparison.local.products.map((p: Product) => p.slug));
      const supabaseSlugs = new Set<string>(comparison.supabase.products.map(p => p.slug));

      // Find missing in Supabase
      for (const slug of localSlugs) {
        if (!supabaseSlugs.has(slug)) {
          comparison.differences.push({
            type: 'missing_in_supabase',
            slug: slug
          });
        }
      }

      // Find extra in Supabase
      for (const slug of supabaseSlugs) {
        if (!localSlugs.has(slug)) {
          comparison.differences.push({
            type: 'extra_in_supabase',
            slug: slug
          });
        }
      }

      return comparison;
    } catch (error) {
      console.error('❌ Comparison failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}
