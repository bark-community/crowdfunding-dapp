/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add specified modules to webpack externals
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

module.exports = nextConfig;
