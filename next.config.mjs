/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  webpack: (config) => {
    config.resolve.fallback = { aws4: false };

    return config;
  },
};

export default nextConfig;
