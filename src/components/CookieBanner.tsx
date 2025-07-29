"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true as these are required
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(cookieConsent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
        setShowBanner(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCustomPreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto p-6">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  🍪 Vi anvender cookies på denne hjemmeside
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Denne hjemmeside anvender cookies for at sikre, at du får den bedste oplevelse. 
                  Nødvendige cookies er altid aktiveret for at sikre grundlæggende funktionalitet. 
                  Du kan vælge at acceptere alle cookies eller tilpasse dine indstillinger.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Læs mere i vores{' '}
                  <Link href="/privatlivspolitik" className="text-blue-600 hover:underline">
                    privatlivspolitik
                  </Link>
                  {' '}og{' '}
                  <Link href="/cookie-politik" className="text-blue-600 hover:underline">
                    cookie-politik
                  </Link>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Indstillinger
                </button>
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Kun nødvendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Accepter alle
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Cookie-indstillinger
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid gap-4">
                {/* Necessary Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Nødvendige cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. 
                        De kan ikke deaktiveres.
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Analyse cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden 
                        ved at indsamle og rapportere information anonymt.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Marketing cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Bruges til at vise relevante annoncer og måle effektiviteten af 
                        vores markedsføringskampagner.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Funktionalitets cookies</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Gør det muligt at huske valg, du har foretaget (som brugernavn, 
                        sprog eller region) og give forbedrede funktioner.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('functional')}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.functional ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                        } px-1`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Kun nødvendige
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Gem indstillinger
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
