/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:type/:params*',
        destination: `${process.env.API_URL}:type?_type=json&serviceKey=${process.env.API_KEY}&:params`,
      },
    ]
  },
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@controller': path.resolve(__dirname, 'src/controller'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@interpace': path.resolve(__dirname, 'src/shared/interface'),
      },
      ...config.resolve,
    }
    return config
  },
}

module.exports = nextConfig
