const basePath = process.env.PAGES_BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
};

module.exports = nextConfig;
