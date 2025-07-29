/**
 * Database migration script for Supabase
 * 
 * This script contains the SQL commands to create the products table
 * and insert the existing product data.
 * 
 * Run these commands in your Supabase SQL Editor:
 * https://supabase.com/dashboard/project/YOUR_PROJECT_ID/sql
 */

export const createProductsTableSQL = `
-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('physical', 'software')),
  price VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  technologies JSONB NOT NULL DEFAULT '[]',
  delivery_time VARCHAR(100),
  image VARCHAR(255),
  images JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- Create index on type for filtering
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at 
    BEFORE UPDATE ON products 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
`;

export const insertProductsDataSQL = `
-- Insert existing product data
INSERT INTO products (
  id, slug, name, category, type, price, description, features, technologies, delivery_time, image, images
) VALUES 
-- Physical Products
(
  1, 
  'dd-privacypen', 
  'DD-PrivacyPEN', 
  'Hardware', 
  'physical', 
  'Fra 179,45 kr',
  'USB med integreret TailsOS, din linux-baseret PC i baglommen.',
  '["Forhåndsinstalleret med TailsOS – The Amnesic Incognito Live System", "Efterlader ingen spor på værtsmaskinen", "Privacy first: Designet til anonymitet og sikkerhed", "Kør sikkert internet uden at efterlade spor", "Live-operativsystem – start direkte fra USB", "Beskyt dig mod overvågning og censur"]'::jsonb,
  '["Tails", "Encryption", "Debian Linux", "Tor-netværket"]'::jsonb,
  '2-3 hverdage',
  'server',
  '[
    {
      "src": "/products/tailsOS-usb/tailsOS-usb.jpg",
      "alt": "DD-PrivacyPEN USB med TailsOS - Hovedbillede",
      "isPrimary": true
    },
    {
      "src": "/products/tailsOS-usb/tailsOS-usb-aluminium.jpg",
      "alt": "DD-PrivacyPEN aluminium USB",
      "isPrimary": false
    },
    {
      "src": "/products/tailsOS-usb/tailsOS-usb-black.jpg",
      "alt": "DD-PrivacyPEN sort USB",
      "isPrimary": false
    }
  ]'::jsonb
),

-- Software Products
(
  2,
  'webshop-solution',
  'Webshop Løsning',
  'E-commerce',
  'software',
  'Fra 15.000 kr',
  'Komplet e-commerce platform med produktstyring, betalingsintegration og kundeservice. Inkluderer responsive design, SEO-optimering og analytics.',
  '["Responsive design til alle enheder", "Integreret betalingsløsning (Quickpay/Stripe)", "Produktkatalog med kategorier", "Ordrestyring og kundeservice", "SEO-optimering og analytics", "Admin panel til produktstyring"]'::jsonb,
  '["React", "Node.js", "MongoDB", "Stripe API"]'::jsonb,
  '4-6 uger',
  'webshop',
  '[]'::jsonb
),
(
  3,
  'portfolio-website',
  'Portfolio Website',
  'Web Development',
  'software',
  'Fra 8.000 kr',
  'Professionel portfolio eller virksomhedshjemmeside med moderne design, optimeret for søgemaskiner og alle enheder.',
  '["Responsive og mobilvenligt design", "SEO-optimering for Google", "Kontaktformular med integration", "CMS til indholdstyring", "Performance optimering", "SSL-certifikat og sikkerhed"]'::jsonb,
  '["React", "Tailwind CSS", "Headless CMS"]'::jsonb,
  '2-3 uger',
  'portfolio',
  '[]'::jsonb
),
(
  4,
  'api-integration',
  'API Integration',
  'Backend Services',
  'software',
  'Fra 10.000 kr',
  'Professionel API udvikling og integration til forbindelse af forskellige systemer og services. Sikker og skalerbar løsning.',
  '["RESTful API udvikling", "Database design og optimering", "Sikkerhed og authentication", "Dokumentation og testing", "Rate limiting og caching", "Monitoring og logging"]'::jsonb,
  '["Node.js", "Express", "MongoDB", "JWT"]'::jsonb,
  '3-5 uger',
  'api',
  '[]'::jsonb
);

-- Reset the sequence to continue from the highest ID
SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));
`;

// Utility function to execute migration if you want to run it programmatically
export async function runMigration() {
  console.log(`
  To set up your Supabase database:
  
  1. Go to your Supabase project dashboard
  2. Navigate to the SQL Editor
  3. Copy and paste the following SQL commands:
  
  First, create the table:
  ${createProductsTableSQL}
  
  Then, insert the data:
  ${insertProductsDataSQL}
  
  4. Run each command separately
  5. Update your .env.local file with your Supabase credentials
  `);
}
