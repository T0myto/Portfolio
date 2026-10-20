const basePath = process.env.PAGES_BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  trailingSlash: true,
};

module.exports = nextConfig;
