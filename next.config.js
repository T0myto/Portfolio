const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  serverRuntimeConfig: {
    port: 3001
  }
};

module.exports = nextConfig;
