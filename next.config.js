/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  // Keep static city page folders available when sitemap.xml readdir's them at runtime.
  experimental: {
    outputFileTracingIncludes: {
      '/sitemap.xml': ['./app/trt-clinics/**/*'],
    },
  },
}

module.exports = nextConfig
