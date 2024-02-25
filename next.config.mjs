/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      }
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { aws4: false };

    return config;
  },
};

export default nextConfig;
