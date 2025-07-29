const AboutMe = () => {
  return (
    <section 
      id="om-mig" 
      className="py-20 bg-gray-50"
      role="main"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Om mig
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Undersøger IT-branchen, dette er min portefølje af projekter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <p>Profilbillede kommer her</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Min baggrund
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jeg er en passioneret udvikler med interesse for at skabe innovative løsninger.
                Jeg er igang med at oparbejde og udvikle mine færdigheder inden for softwareudvikling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jeg har arbejdet med en række af forskellige teknologier og 
                brancher, hvilket har givet mig en unik forståelse af, hvordan 
                teknologi kan optimere forretningsprocesser.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mine kompetencer
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>React & JavaScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Node.js & Python</li>
                    <li>Databaser (SQL/NoSQL)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Git & Version Control</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialer</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Systemintegration</li>
                    <li>Performance optimering</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
