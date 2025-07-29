import Link from 'next/link'

const Hero = () => {
  return (
    <section 
      id="hjem" 
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Velkommen til{' '}
            <span className="text-blue-300">DjurhuusData</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Professionelle IT-løsninger skræddersyet til dine behov. <br />Dette er en portefølje af mine projekter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produkter"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Se mine produkter"
            >
              Se produkter
            </Link>
            <Link
              href="/kontakt"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Kontakt mig for at diskutere dit projekt"
            >
              Kontakt mig
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
