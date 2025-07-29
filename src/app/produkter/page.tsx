import { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { getAllProducts } from "../../data/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produkter - DjurhuusData",
  description: "Se alle IT-produkter og løsninger fra DjurhuusData - webudvikling, softwareudvikling, API-integration og mere.",
};

export default function ProductsPage() {
  const allProducts = getAllProducts();

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mine produkter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Udforsk mine IT-løsninger og services - fra webudvikling til specialiserede hardwareløsninger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/produkter/${product.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className={`h-48 flex items-center justify-center ${
                  product.type === 'physical' 
                    ? 'bg-gradient-to-br from-green-100 to-green-200' 
                    : 'bg-gradient-to-br from-blue-100 to-blue-200'
                }`}>
                  <div className="text-center">
                    <svg 
                      className={`w-16 h-16 mx-auto mb-2 ${
                        product.type === 'physical' ? 'text-green-700' : 'text-blue-700'
                      }`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      {product.type === 'physical' ? (
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                      )}
                    </svg>
                    <p className={`text-sm font-medium ${
                      product.type === 'physical' ? 'text-green-700' : 'text-blue-700'
                    }`}>
                      {product.type === 'physical' ? 'Hardware' : 'Software'}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.type === 'physical' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">
                      {product.price}
                    </span>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Se detaljer →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Har du brug for en skræddersyet løsning?
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Kontakt mig for et tilbud
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
