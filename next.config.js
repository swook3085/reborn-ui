/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@controller': path.resolve(__dirname, 'src/controller'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@interpace': path.resolve(__dirname, 'src/shared/interface'),
        '@template': path.resolve(__dirname, 'src/template'),
        '@resource': path.resolve(__dirname, 'src/resource'),
        '@images': path.resolve(__dirname, 'src/resource/images'),
      },
      ...config.resolve,
    }
    return config
  },
}

module.exports = nextConfig
