"use client"
import { useState } from 'react'

const PRIVACY_TEXT = `Privatlivspolitik for DjurhuusData

Virksomhed
DjurhuusData v/ Arne Djurhuus
Enkeltmandsvirksomhed, 
CVR: 45545075
Adresse: Frederiksberggade 22, st. sal., 6640 Lunderskov
Telefon: 21 36 00 35
E-mail: arne@djurhuusdata.dk 
Website: www.djurhuusdata.dk

1. Dataansvarlig
Arne Djurhuus er ansvarlig for behandlingen af person- og kundedata via www.djurhuusdata.dk.

2. Indsamlede oplysninger
Vi indsamler:
Navn og e-mail gennem kontaktformular.
Tekniske data (fx IP-adresse, browser, tidspunkter) via cookies og serverlogfiler.
Kontaktoplysninger fra e-mailkorrespondance og telefonhenvendelser.
Frivilligt oplyste data, fx ved brug af nyhedsbrev eller projektspecifik information.

3. Formål
Data bruges til:
At besvare henvendelser og fortsætte professionel dialog.
At analysere og forbedre brugeroplevelsen på hjemmesiden.
At sende nyhedsbreve eller tilbud, forudsat at du har givet samtykke.

4. Retsgrundlag
Behandling baseres på:
Samtykke (GDPR art. 6, stk. 1, litra a)
Legitim interesse i webanalyse (GDPR art. 6, stk. 1, litra f)
Kontraktlige forpligtelser for kunder (GDPR art. 6, stk. 1, litra b)

5. Opbevaring og sletning
Oplysninger opbevares kun så længe, det er nødvendigt. Du kan til enhver tid anmode om sletning — medmindre anden lovgivning forhindrer det.

6. Videregivelse
Oplysninger deles kun, når det er nødvendigt for driften:
Hosting hos Vercel
E-mail hos Simply.com
Backend/services via (Formspree)
Vi garanterer, at tredjepartsleverandører overholder gældende databeskyttelseslovgivning.

7. Cookies
Vi bruger cookies til at forbedre brugeroplevelsen, markedsføring og analyse:
Tekniske cookies (nødvendige for drift)
Analytiske cookies (trafik, adfærd)
Marketingcookies (hvis relevant med samtykke)
Du kan til enhver tid ændre cookie-indstillinger via banneret eller browserens privatindstillinger.

8. Dine rettigheder
Du har altid ret til at:
Få indsigt i hvilke data vi har om dig
Få korrigeret fejlagtige oplysninger
Få slettet dine data (med forbehold for lovpligtig opbevaring)
Trække samtykke tilbage
Gøre indsigelse mod behandling
Kontakt os på: arne@djurhuusdata.dk

9. Klageadgang
Hvis du mener, at din behandling er i strid med GDPR, kan du klage til:
Datatilsynet Carl Jacobsens Vej 35
2500 Valby
Hjemmeside: www.datatilsynet.dk


10. Ændringer i politikken
Privatlivspolitikken kan opdateres. Ændringer vil blive offentliggjort her med dato.
Ikrafttrædelse: 22/07/2025
`;
const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kontaktinformation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base">
                <span className="font-medium">Navn:</span> Arne Djurhuus
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:arne@djurhuusdata.dk"
                  className="hover:text-blue-300 transition-colors duration-200 break-all"
                  aria-label="Send email til Arne Djurhuus"
                >
                  arne@djurhuusdata.dk
                </a>
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Telefon:</span>{' '}
                <a
                  href="tel:+4521360035"
                  className="hover:text-blue-300 transition-colors duration-200"
                  aria-label="Ring til Arne Djurhuus"
                >
                  +45 21 36 00 35
                </a>
              </p>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>Webudvikling</li>
              <li>Softwareudvikling</li>
              <li>Database design</li>
              <li>IT konsulentservice</li>
              <li>Systemintegration</li>
            </ul>
          </div>
          {/* Om virksomheden */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">DjurhuusData</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Datamatiker studerende under udvikling.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-xs sm:text-sm text-gray-400">CVR: 45545075</p>
              <p className="text-xs sm:text-sm text-gray-400">København, Danmark</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; {currentYear} DjurhuusData. Alle rettigheder forbeholdes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Læs vores privatlivspolitik"
            >
              Privatlivspolitik
            </button>
            <a
              href="#handelsbetingelser"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center sm:text-left"
              aria-label="Læs vores handelsbetingelser"
            >              Handelsbetingelser
            </a>
          </div>
        </div>
      </div>
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowPrivacy(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh] relative"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Privatlivspolitik for DjurhuusData</h2>
            <div className="text-gray-800 text-sm md:text-base whitespace-pre-line leading-relaxed font-sans">
              {PRIVACY_TEXT}
            </div>
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Luk privatlivspolitik"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
