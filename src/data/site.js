// Single source of truth for brand + contact details.
export const SITE = {
  name: 'Travel Bill Pro',
  tagline: 'All-in-One Platform for Travel Enterprises',
  // Production origin (no trailing slash). Used for canonical URLs, Open Graph, sitemap and schema.
  // Change this one value when you move to a custom domain.
  url: 'https://travelbillpro.pages.dev',
  email: 'accounts@travelbillpro.com',
  // Business phone — used for every Call and WhatsApp link on the site
  phoneDisplay: '+91 84569 70530',
  phoneE164: '+918456970530',
  phoneHref: 'tel:+918456970530',
  whatsappHref: 'https://wa.me/918456970530?text=Hi%20Travel%20Bill%20Pro%2C%20I%27d%20like%20a%20demo.',
  location: 'Hyderabad, Telangana',
  // The software app isn't public yet, so "Log In" leads to the demo booking page (no broken link).
  loginUrl: '/demo',
  ogImage: '/og-image.jpg',
  // Add real profile URLs here; empty ones are hidden (no broken links) and filled ones feed schema `sameAs`.
  social: {
    linkedin: '',
    instagram: '',
    youtube: '',
    x: '',
  },
}

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
