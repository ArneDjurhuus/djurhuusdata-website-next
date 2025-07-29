import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../../../components/Navigation";
import ProductDetail from "../../../components/ProductDetail";
import Footer from "../../../components/Footer";
import { ProductService } from "../../../services/productService";
import type { Product } from "../../../types/product";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await ProductService.getAllProducts();
  
  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await ProductService.getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produkt ikke fundet - DjurhuusData",
    };
  }

  return {
    title: `${product.name} - DjurhuusData`,
    description: product.description,
    openGraph: {
      title: `${product.name} - DjurhuusData`,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await ProductService.getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}
