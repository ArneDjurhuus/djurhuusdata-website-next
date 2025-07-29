# Supabase Setup Instructions

This guide will help you set up Supabase for your product data management.

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Set a project name (e.g., "djurhuusdata-products")
6. Set a database password (save this somewhere secure)
7. Choose a region close to your users
8. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings → API
2. Copy the following values:
   - `Project URL` (starts with https://)
   - `anon public` key (under Project API keys)

## 3. Update Environment Variables

1. Open your `.env.local` file
2. Replace the placeholder values with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Set Up Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the following SQL commands:

### Create the products table:

\`\`\`sql
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);
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
\`\`\`

### Insert your existing product data:

\`\`\`sql
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
\`\`\`

3. Execute each SQL block separately (run the CREATE TABLE commands first, then the INSERT commands)

## 5. Test the Setup

1. Run your development server: \`npm run dev\`
2. Navigate to your products page to see if the data loads correctly
3. Check the browser console for any errors

## 6. Row Level Security (Optional but Recommended)

For production, you should enable Row Level Security:

\`\`\`sql
-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow read access for everyone
CREATE POLICY "Enable read access for all users" ON products
    FOR SELECT USING (true);

-- Allow insert/update/delete only for authenticated users (if needed)
CREATE POLICY "Enable insert for authenticated users only" ON products
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON products
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON products
    FOR DELETE USING (auth.role() = 'authenticated');
\`\`\`

## 7. Backup Your Original Data (Optional)

Keep your \`src/data/products.js\` file as a backup until you're sure everything works correctly with Supabase.

## Benefits of This Setup

✅ **Scalable**: Easy to add new products through the Supabase dashboard or API  
✅ **Real-time**: Changes are immediately reflected on your website  
✅ **Type-safe**: Full TypeScript support with proper typing  
✅ **Admin-friendly**: You can manage products through the Supabase dashboard  
✅ **Backup**: Automatic backups with Supabase  
✅ **Performance**: Built-in caching and optimized queries  

## Next Steps

- Set up an admin panel for product management
- Add image upload functionality to Supabase Storage
- Implement search and filtering
- Add product analytics and tracking
