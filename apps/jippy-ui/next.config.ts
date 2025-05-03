/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js to transpile your local workspace packages
  transpilePackages: [
    '@devicepitstop/core',
    '@devicepitstop/repairshopr-sdk'
  ],
};

export default nextConfig;
