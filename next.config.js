const { withCloudflarePages } = require('@cloudflare/next-on-pages/plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* experimental: {
    appDir: true,
  },
  reactStrictMode: true, */
  output: "export",
};

module.exports = withCloudflarePages({
  nextConfig
});
// SAAS next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass();

module.exports = nextConfig;

// next.config.js
module.exports = {
  trailingSlash: true,
  // Otros ajustes de configuración
};