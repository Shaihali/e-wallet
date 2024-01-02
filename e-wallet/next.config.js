/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: Boolean(process.env.TYPED_ROUTES),
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
