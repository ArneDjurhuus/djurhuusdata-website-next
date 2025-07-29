import { supabase } from '../lib/supabase';

/**
 * Utility functions for testing and validating Supabase connection
 */
export class SupabaseUtils {
  
  /**
   * Test the connection to Supabase
   * @returns {Promise<boolean>} True if connection is successful
   */
  static async testConnection(): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('products')
        .select('count')
        .limit(1);
      
      return !error;
    } catch (error) {
      console.error('Supabase connection test failed:', error);
      return false;
    }
  }

  /**
   * Validate environment variables
   * @returns {object} Validation result with details
   */
  static validateEnvironment() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const validation = {
      isValid: false,
      issues: [] as string[],
      url: !!url,
      key: !!key,
    };

    if (!url) {
      validation.issues.push('NEXT_PUBLIC_SUPABASE_URL is missing');
    } else if (!url.startsWith('https://')) {
      validation.issues.push('NEXT_PUBLIC_SUPABASE_URL should start with https://');
    } else if (!url.includes('.supabase.co')) {
      validation.issues.push('NEXT_PUBLIC_SUPABASE_URL should contain .supabase.co');
    }

    if (!key) {
      validation.issues.push('NEXT_PUBLIC_SUPABASE_ANON_KEY is missing');
    } else if (key.length < 100) {
      validation.issues.push('NEXT_PUBLIC_SUPABASE_ANON_KEY seems too short');
    }

    validation.isValid = validation.issues.length === 0;
    
    return validation;
  }

  /**
   * Get database health status
   * @returns {Promise<object>} Health status with details
   */
  static async getDatabaseHealth() {
    try {
      const startTime = Date.now();
      
      const { error, count } = await supabase
        .from('products')
        .select('id', { count: 'exact' })
        .limit(1);

      const responseTime = Date.now() - startTime;

      return {
        isHealthy: !error,
        responseTime,
        productCount: count || 0,
        error: error?.message || null,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      return {
        isHealthy: false,
        responseTime: null,
        productCount: 0,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      };
    }
  }

  /**
   * Perform a full system check
   * @returns {Promise<object>} Complete system status
   */
  static async performSystemCheck() {
    const envValidation = this.validateEnvironment();
    const connectionTest = await this.testConnection();
    const databaseHealth = await this.getDatabaseHealth();

    return {
      environment: envValidation,
      connection: connectionTest,
      database: databaseHealth,
      overall: envValidation.isValid && connectionTest && databaseHealth.isHealthy,
      timestamp: new Date().toISOString(),
    };
  }
}
