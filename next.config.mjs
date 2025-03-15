/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from any domain
      },
    ],
  },
  assetPrefix: isProd ? '/aamitn.github.io/' : '',
  basePath: isProd ? '/aamitn.github.io' : '',
  output: 'export'
};

export default nextConfig;
