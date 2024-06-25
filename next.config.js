/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

// SAAS next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass();

module.exports = nextConfig;
