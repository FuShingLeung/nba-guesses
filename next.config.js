/** @type {import('next').NextConfig} */
const { FORCE_COLOR } = process.env;
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: FORCE_COLOR,
  },
};

module.exports = nextConfig;
