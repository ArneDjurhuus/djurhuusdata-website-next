/**
 * TypeScript interfaces for the product data structure
 */

export interface ProductImage {
  src: string;
  alt: string;
  isPrimary: boolean;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  type: 'physical' | 'software';
  price: string;
  description: string;
  features: string[];
  technologies: string[];
  delivery_time?: string;
  image?: string;
  images?: ProductImage[];
  created_at?: string;
  updated_at?: string;
}

export interface CreateProductData {
  slug: string;
  name: string;
  category: string;
  type: 'physical' | 'software';
  price: string;
  description: string;
  features: string[];
  technologies: string[];
  delivery_time?: string;
  image?: string;
  images?: ProductImage[];
}

export interface UpdateProductData {
  slug?: string;
  name?: string;
  category?: string;
  type?: 'physical' | 'software';
  price?: string;
  description?: string;
  features?: string[];
  technologies?: string[];
  delivery_time?: string;
  image?: string;
  images?: ProductImage[];
}
