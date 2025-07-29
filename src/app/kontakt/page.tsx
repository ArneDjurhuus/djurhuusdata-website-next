import { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Kontakt - DjurhuusData",
  description: "Kontakt Arne Djurhuus for IT-løsninger, webudvikling og softwareudvikling. Ring på +45 21 36 00 35 eller send en besked.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <Contact />
      <Footer />
    </>
  );
}
