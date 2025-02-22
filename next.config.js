/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Cache optimization
  experimental: {
    optimizeCss: true,
    workerThreads: true,
    optimizePackageImports: ['framer-motion', '@tailwindcss/typography']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true
}

module.exports = nextConfig 