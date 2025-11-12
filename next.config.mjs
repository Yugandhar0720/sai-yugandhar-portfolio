/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'sai-yugandhar-portfolio'; // your GitHub repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // ✅ These 2 lines are CRITICAL for GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  // ✅ Ensures internal links and assets work
  trailingSlash: true,
};

export default nextConfig;
