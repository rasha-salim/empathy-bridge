/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages deployment
  // Set basePath only when deploying to GitHub Pages (when GITHUB_ACTIONS is true)
  // This allows the app to work both locally and on GitHub Pages
  basePath: process.env.GITHUB_ACTIONS ? '/empathy-bridge' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/empathy-bridge/' : '',
}

module.exports = nextConfig