import { ProductService } from '../services/productService'
import { getAllProducts as getStaticProducts, getProductBySlug as getStaticProductBySlug } from '../data/products'

/**
 * Fallback service that tries Supabase first, then falls back to static data
 * This ensures the website works even if Supabase isn't configured yet
 */
export class ProductServiceWithFallback {
  
  /**
   * Get all products, with fallback to static data
   */
  static async getAllProducts() {
    try {
      // Try Supabase first
      const products = await ProductService.getAllProducts()
      
      // If we get data from Supabase, use it
      if (products && products.length > 0) {
        return products
      }
      
      // Otherwise fall back to static data
      console.log('Falling back to static product data')
      return getStaticProducts()
    } catch (error) {
      console.log('Supabase not available, using static product data:', error instanceof Error ? error.message : String(error))
      return getStaticProducts()
    }
  }

  /**
   * Get product by slug, with fallback to static data
   */
  static async getProductBySlug(slug: string) {
    try {
      // Try Supabase first
      const product = await ProductService.getProductBySlug(slug)
      
      // If we get a product from Supabase, use it
      if (product) {
        return product
      }
      
      // Otherwise fall back to static data
      console.log('Product not found in Supabase, falling back to static data')
      return getStaticProductBySlug(slug)
    } catch (error) {
      console.log('Supabase not available, using static product data:', error instanceof Error ? error.message : String(error))
      return getStaticProductBySlug(slug)
    }
  }
}
