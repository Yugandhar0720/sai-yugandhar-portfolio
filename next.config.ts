/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'sai-yugandhar-portfolio'; // your repo name on GitHub

const nextConfig = {
  output: 'export',               // enable static export
  images: { unoptimized: true },  // disable image optimizer for GH Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
