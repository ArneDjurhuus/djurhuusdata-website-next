import { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Kurv - DjurhuusData",
  description: "Se dine valgte produkter og færdiggør din bestilling hos DjurhuusData.",
};

export default function CartPage() {
  return (
    <>
      <Navigation />
      <Cart />
      <Footer />
    </>
  );
}
