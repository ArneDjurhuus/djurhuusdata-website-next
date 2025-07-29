import { Metadata } from "next";
import Navigation from "../../components/Navigation";
import AboutMe from "../../components/AboutMe";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Om mig - DjurhuusData",
  description: "Lær mere om Arne Djurhuus og hans baggrund inden for IT-udvikling, webudvikling og softwareudvikling.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutMe />
      <Footer />
    </>
  );
}
