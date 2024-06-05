/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tvtime.com',
      },
      {
        protocol: 'https',
        hostname: 'dbkpop.com',
      },
    ],
  },
};

export default nextConfig;
