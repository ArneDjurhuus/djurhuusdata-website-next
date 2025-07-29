import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Siden blev ikke fundet
            </h2>
            <p className="text-gray-600 mb-8">
              Beklager, men den side du leder efter eksisterer ikke eller er blevet flyttet.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Gå til forsiden
            </Link>
            <Link
              href="/produkter"
              className="block bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Se produkter
            </Link>
            <Link
              href="/kontakt"
              className="block text-blue-600 hover:text-blue-800 font-medium underline"
            >
              Kontakt mig
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
