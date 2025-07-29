const Contact = () => {
  return (
    <section 
      id="kontakt" 
      className="py-20 bg-gray-50"
      role="main"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontakt mig
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Har du et projekt i tankerne? Lad os diskutere, hvordan jeg kan hjælpe dig
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktinformation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Lad os tage en snak
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Jeg er altid interesseret i at høre om nye projekter og udfordringer. 
                Uanset om du har brug for en komplet løsning eller bare vil diskutere 
                en idé, så er du velkommen til at kontakte mig.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Email</p>
                  <a 
                    href="mailto:arne@djurhuusdata.dk" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label="Send email til Arne Djurhuus"
                  >
                    arne@djurhuusdata.dk
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Telefon</p>
                  <a 
                    href="tel:+4512345678" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label="Ring til Arne Djurhuus"
                  >
                    +45 21 36 00 35
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Lokation</p>
                  <p className="text-gray-600">København, Danmark</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Hurtig respons
              </h4>
              <p className="text-gray-600 text-sm">
                Jeg stræber efter at svare på alle henvendelser inden for 24 timer. 
                For akutte sager er du velkommen til at ringe direkte.
              </p>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form action="https://formspree.io/f/mldljgjz" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Navn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  aria-describedby="name-help"
                />
                <p id="name-help" className="text-xs text-gray-500 mt-1">
                  Dit fulde navn
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  aria-describedby="email-help"
                />
                <p id="email-help" className="text-xs text-gray-500 mt-1">
                  Din email adresse
                </p>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Emne *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  aria-describedby="subject-help"
                />
                <p id="subject-help" className="text-xs text-gray-500 mt-1">
                  Kort beskrivelse af dit ærinde
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Besked *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  aria-describedby="message-help"
                ></textarea>
                <p id="message-help" className="text-xs text-gray-500 mt-1">
                  Fortæl mig om dit projekt eller spørgsmål
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Send kontaktformular"
              >
                Send besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
