export const physicalProducts = [
  {
    id: 1,
    slug: "dd-privacypen",
    name: "DD-PrivacyPEN",
    category: "Hardware",
    type: "physical",
    price: "Fra 179,45 kr",
    description: "USB med integreret TailsOS, din linux-baseret PC i baglommen.",
    features: [
      "Forhåndsinstalleret med TailsOS – The Amnesic Incognito Live System",
      "Efterlader ingen spor på værtsmaskinen",
      "Privacy first: Designet til anonymitet og sikkerhed",
      "Kør sikkert internet uden at efterlade spor",
      "Live-operativsystem – start direkte fra USB",
      "Beskyt dig mod overvågning og censur"
    ],
    technologies: ["Tails", "Encryption", "Debian Linux", "Tor-netværket"],
    deliveryTime: "2-3 hverdage",
    image: "server",
    images: [
      {
        src: "/products/tailsOS-usb/tailsOS-usb.jpg",
        alt: "DD-PrivacyPEN USB med TailsOS - Hovedbillede",
        isPrimary: true
      },
      {
        src: "/products/tailsOS-usb/tailsOS-usb-aluminium.jpg",
        alt: "DD-PrivacyPEN aluminium USB",
        isPrimary: false
      },
      {
        src: "/products/tailsOS-usb/tailsOS-usb-black.jpg",
        alt: "DD-PrivacyPEN sort USB",
        isPrimary: false
      }
    ]
  }
]

export const softwareProducts = [
  {
    id: 2,
    slug: "webshop-solution",
    name: "Webshop Løsning",
    category: "E-commerce",
    type: "software",
    price: "Fra 15.000 kr",
    description: "Komplet e-commerce platform med produktstyring, betalingsintegration og kundeservice. Inkluderer responsive design, SEO-optimering og analytics.",
    features: [
      "Responsive design til alle enheder",
      "Integreret betalingsløsning (Quickpay/Stripe)",
      "Produktkatalog med kategorier",
      "Ordrestyring og kundeservice",
      "SEO-optimering og analytics",
      "Admin panel til produktstyring"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    deliveryTime: "4-6 uger",
    image: "webshop"
  },
  {
    id: 3,
    slug: "portfolio-website",
    name: "Portfolio Website",
    category: "Web Development",
    type: "software",
    price: "Fra 8.000 kr",
    description: "Professionel portfolio eller virksomhedshjemmeside med moderne design, optimeret for søgemaskiner og alle enheder.",
    features: [
      "Responsive og mobilvenligt design",
      "SEO-optimering for Google",
      "Kontaktformular med integration",
      "CMS til indholdstyring",
      "Performance optimering",
      "SSL-certifikat og sikkerhed"
    ],
    technologies: ["React", "Tailwind CSS", "Headless CMS"],
    deliveryTime: "2-3 uger",
    image: "portfolio"
  },
  {
    id: 4,
    slug: "api-integration",
    name: "API Integration",
    category: "Backend Services",
    type: "software",
    price: "Fra 10.000 kr",
    description: "Professionel API udvikling og integration til forbindelse af forskellige systemer og services. Sikker og skalerbar løsning.",
    features: [
      "RESTful API udvikling",
      "Database design og optimering",
      "Sikkerhed og authentication",
      "Dokumentation og testing",
      "Rate limiting og caching",
      "Monitoring og logging"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    deliveryTime: "3-5 uger",
    image: "api"
  },
]

export const getAllProducts = () => {
  return [...physicalProducts, ...softwareProducts]
}

export const getProductBySlug = (slug) => {
  const allProducts = getAllProducts()
  return allProducts.find(product => product.slug === slug)
}
