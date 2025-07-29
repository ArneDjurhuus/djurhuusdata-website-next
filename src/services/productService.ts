import { supabase } from '../lib/supabase'
import type { Product, CreateProductData, UpdateProductData } from '../types/product'

/**
 * Product service for handling all database operations related to products
 */
export class ProductService {
  
  /**
   * Get all products from the database
   * @returns {Promise<Product[]>} Array of all products
   */
  static async getAllProducts(): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true })

      if (error) {
        console.error('Error fetching products:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Error in getAllProducts:', error)
      return []
    }
  }

  /**
   * Get a single product by slug
   * @param {string} slug - The product slug
   * @returns {Promise<Product|null>} Product object or null if not found
   */
  static async getProductBySlug(slug: string): Promise<Product | null> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          return null
        }
        console.error('Error fetching product by slug:', error)
        throw error
      }

      return data
    } catch (error) {
      console.error('Error in getProductBySlug:', error)
      return null
    }
  }

  /**
   * Get products by type (physical or software)
   * @param {string} type - Product type ('physical' or 'software')
   * @returns {Promise<Product[]>} Array of products of the specified type
   */
  static async getProductsByType(type: 'physical' | 'software'): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('type', type)
        .order('id', { ascending: true })

      if (error) {
        console.error('Error fetching products by type:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Error in getProductsByType:', error)
      return []
    }
  }

  /**
   * Get products by category
   * @param {string} category - Product category
   * @returns {Promise<Product[]>} Array of products in the specified category
   */
  static async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .order('id', { ascending: true })

      if (error) {
        console.error('Error fetching products by category:', error)
        throw error
      }

      return data || []
    } catch (error) {
      console.error('Error in getProductsByCategory:', error)
      return []
    }
  }

  /**
   * Create a new product
   * @param {CreateProductData} productData - Product data
   * @returns {Promise<Product>} Created product
   */
  static async createProduct(productData: CreateProductData): Promise<Product> {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([productData])
        .select()
        .single()

      if (error) {
        console.error('Error creating product:', error)
        throw error
      }

      return data
    } catch (error) {
      console.error('Error in createProduct:', error)
      throw error
    }
  }

  /**
   * Update a product
   * @param {number} id - Product ID
   * @param {UpdateProductData} updates - Fields to update
   * @returns {Promise<Product>} Updated product
   */
  static async updateProduct(id: number, updates: UpdateProductData): Promise<Product> {
    try {
      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Error updating product:', error)
        throw error
      }

      return data
    } catch (error) {
      console.error('Error in updateProduct:', error)
      throw error
    }
  }

  /**
   * Delete a product
   * @param {number} id - Product ID
   * @returns {Promise<boolean>} Success status
   */
  static async deleteProduct(id: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting product:', error)
        throw error
      }

      return true
    } catch (error) {
      console.error('Error in deleteProduct:', error)
      return false
    }
  }
}
