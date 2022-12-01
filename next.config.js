/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
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
