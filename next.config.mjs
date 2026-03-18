/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow dev requests from common local origins to avoid future blocking
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:6000',
    'http://127.0.0.1:6000',
    'http://localhost:7000',
    'http://127.0.0.1:7000',
  ],
};

export default nextConfig;
