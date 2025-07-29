import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../../../components/Navigation";
import ProductDetail from "../../../components/ProductDetail";
import Footer from "../../../components/Footer";
import { getAllProducts, getProductBySlug } from "../../../data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = getAllProducts();
  
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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
  const product = getProductBySlug(slug);

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
