"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CartIcon from './CartIcon'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="bg-blue-900 text-white shadow-lg" role="navigation" aria-label="Hovednavigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">          <div className="flex items-center">
            <div className="flex-shrink-0 -ml-4 md:-ml-8">
              <Link 
                href="/" 
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="DjurhuusData - Gå til forsiden"
              >
                <img 
                  src="/logo/Logo Dark-trans.png" 
                  alt="DjurhuusData Logo" 
                  className="max-h-16 w-auto" 
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/om-mig"
              className="hover:text-blue-200 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
              aria-label="Gå til Om mig sektion"
            >
              Om mig
            </Link>
            <Link
              href="/produkter"
              className="hover:text-blue-200 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
              aria-label="Gå til Produkter sektion"
            >
              Produkter
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-blue-200 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200"
              aria-label="Gå til Kontakt sektion"
            >
              Kontakt
            </Link>
            <div className="ml-4">
              <CartIcon />
            </div>
          </div>

          {/* Mobile menu button and cart icon */}
          <div className="md:hidden flex items-center space-x-2">
            <CartIcon />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-200 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Åbn hovedmenu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
          <Link
            href="/om-mig"
            className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            aria-label="Gå til Om mig sektion"
          >
            Om mig
          </Link>
          <Link
            href="/produkter"
            className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            aria-label="Gå til Produkter sektion"
          >
            Produkter
          </Link>
          <Link
            href="/kontakt"
            className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            aria-label="Gå til Kontakt sektion"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-opacity duration-500 ${showTopBtn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-label="Tilbage til toppen"
        style={{transitionProperty: 'opacity'}}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}

export default Navigation
