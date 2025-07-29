import { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Cookie-politik - DjurhuusData",
  description: "Information om hvordan DjurhuusData anvender cookies på hjemmesiden i overensstemmelse med dansk lovgivning.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie-politik</h1>
            
            <div className="prose prose-gray max-w-none space-y-6">
              <p className="text-gray-600 text-sm">Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hvad er cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies er små tekstfiler, der placeres på din computer eller mobilenhed, når du besøger en hjemmeside. 
                  Cookies bruges bredt til at få hjemmesider til at fungere eller fungere mere effektivt, samt til at give 
                  information til ejerne af webstedet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hvordan anvender vi cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DjurhuusData anvender cookies til forskellige formål. Vi kategoriserer vores cookies i følgende typer:
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nødvendige cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. De aktiveres automatisk 
                      og kan ikke deaktiveres gennem vores cookie-banner.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Sikkerhedscookies til beskyttelse mod CSRF-angreb</li>
                      <li>Session cookies til at opretholde din forbindelse</li>
                      <li>Cookie-samtykke præferencer</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Funktionalitets cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Disse cookies gør det muligt for hjemmesiden at huske valg, du foretager (såsom dit brugernavn, 
                      sprog eller den region, du befinder dig i) og give forbedrede, mere personlige funktioner.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Sprogindstillinger</li>
                      <li>Brugerindstillinger og præferencer</li>
                      <li>Indkøbskurv funktionalitet</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden ved at 
                      indsamle og rapportere information anonymt.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Google Analytics (hvis aktiveret)</li>
                      <li>Besøgsstatistikker</li>
                      <li>Performance målinger</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing cookies</h3>
                    <p className="text-gray-700 mb-2">
                      Disse cookies bruges til at vise relevante annoncer og måle effektiviteten af vores 
                      markedsføringskampagner.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Sociale medier integrations</li>
                      <li>Målrettede annoncer</li>
                      <li>Konverteringssporing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dine rettigheder</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I henhold til dansk lovgivning og GDPR har du følgende rettigheder vedrørende cookies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Ret til at give samtykke:</strong> Du kan frit vælge, hvilke ikke-nødvendige cookies du accepterer</li>
                  <li><strong>Ret til at trække samtykke tilbage:</strong> Du kan til enhver tid ændre dine cookie-indstillinger</li>
                  <li><strong>Ret til information:</strong> Du har ret til at vide, hvilke cookies vi anvender og hvorfor</li>
                  <li><strong>Ret til sletning:</strong> Du kan slette cookies fra din browser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sådan administrerer du cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Du kan administrere dine cookie-indstillinger på følgende måder:
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Gennem vores cookie-banner</h3>
                  <p className="text-blue-800">
                    Når du første gang besøger hjemmesiden, vises vores cookie-banner. Du kan vælge indstillinger 
                    for at tilpasse dine præferencer for hver kategori af cookies.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gennem din browser</h3>
                  <p className="text-gray-700 mb-3">
                    Du kan også administrere cookies direkte i din browsers indstillinger:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Chrome:</strong> Indstillinger → Avanceret → Beskyttelse af personlige oplysninger og sikkerhed → Cookies</li>
                    <li><strong>Firefox:</strong> Indstillinger → Beskyttelse af personlige oplysninger og sikkerhed → Cookies og webstedsdata</li>
                    <li><strong>Safari:</strong> Indstillinger → Beskyttelse af personlige oplysninger → Administrer webstedsdata</li>
                    <li><strong>Edge:</strong> Indstillinger → Cookies og webstedsrettigheder</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tredjeparts cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vores hjemmeside kan indeholde cookies fra tredjeparter. Disse cookies er underlagt de respektive 
                  tredjeparts privatlivspolitikker:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                  <li><strong>Facebook Pixel:</strong> <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook Data Policy</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opdateringer af denne politik</h2>
                <p className="text-gray-700 leading-relaxed">
                  Vi forbeholder os retten til at opdatere denne cookie-politik fra tid til anden. Væsentlige ændringer 
                  vil blive kommunikeret via vores hjemmeside eller gennem en ny cookie-banner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt os</h2>
                <p className="text-gray-700 leading-relaxed">
                  Hvis du har spørgsmål til vores brug af cookies, kan du kontakte os:
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                  <p className="text-gray-800">
                    <strong>DjurhuusData</strong><br />
                    E-mail: info@djurhuusdata.dk<br />
                    Telefon: +45 XX XX XX XX
                  </p>
                </div>
              </section>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">📋 Lovgrundlag</h3>
                <p className="text-yellow-800 text-sm">
                  Denne cookie-politik er udarbejdet i overensstemmelse med Databeskyttelsesforordningen (GDPR), 
                  Databeskyttelsesloven og ePrivacy-direktivet, som implementeret i dansk ret.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
