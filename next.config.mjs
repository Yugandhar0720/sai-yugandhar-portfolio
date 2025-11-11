/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'sai-yugandhar-portfolio'; // your GitHub repo name

const nextConfig = {
  output: 'export',               // writes static site to /out during "next build"
  images: { unoptimized: true },  // required for GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
