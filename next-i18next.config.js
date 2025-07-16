const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'ar', 'fr', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  // Support for right-to-left languages
  rtl: {
    ar: true,
  },
  
  // Fallback behavior
  fallbackLng: {
    default: ['en'],
    ar: ['en'],
    fr: ['en'],
    es: ['en'],
  },
  
  // Namespace configuration
  ns: ['common', 'scenarios', 'analytics', 'resources'],
  defaultNS: 'common',
  
  // Development settings
  debug: process.env.NODE_ENV === 'development',
  saveMissing: process.env.NODE_ENV === 'development',
  
  // Production optimizations
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
};