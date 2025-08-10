/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  async rewrites() {
    const locales = ['en', 'vi', 'ru', 'fr', 'zh', 'ko', 'ja', 'hi', 'es', 'bn', 'pt', 'de']
    // Strip locale prefixes from URLs (e.g., /en/sale -> /sale)
    return [
      { source: `/:locale(${locales.join('|')})`, destination: '/' },
      { source: `/:locale(${locales.join('|')})/:path*`, destination: '/:path*' },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
