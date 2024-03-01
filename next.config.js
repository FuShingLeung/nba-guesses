/** @type {import('next').NextConfig} */
const { BALLDONTLIE_ENDPOINT, BALLDONTLIE_API_KEY } = process.env;
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  env: {
    BALLDONTLIE_ENDPOINT,
    BALLDONTLIE_API_KEY,
  },
};

module.exports = nextConfig;
