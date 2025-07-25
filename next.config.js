/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for deployment, but allow SSR for development with i18n
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment
  // Set basePath only when deploying to GitHub Pages (when GITHUB_ACTIONS is true)
  // This allows the app to work both locally and on GitHub Pages
  basePath: process.env.GITHUB_ACTIONS ? '/unboxing-empathy' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/unboxing-empathy/' : '',
  
  // i18n configuration - only enable when not using static export
  ...(!process.env.GITHUB_ACTIONS && process.env.NODE_ENV !== 'production' && {
    i18n: {
      locales: ['en', 'ar', 'fr', 'es'],
      defaultLocale: 'en',
      localeDetection: true,
    },
  }),
}

module.exports = nextConfig