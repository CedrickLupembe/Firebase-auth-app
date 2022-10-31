/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // <== Domain name
  },
  swcMinify: true,
};

module.exports = nextConfig;
