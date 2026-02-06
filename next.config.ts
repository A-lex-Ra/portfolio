import type { NextConfig } from "next";

// Only use basePath when deploying to GitHub Pages (set DEPLOY_TO_GITHUB_PAGES=true)
const deployToGithubPages = process.env.DEPLOY_TO_GITHUB_PAGES === 'true';
const repoName = 'portfolio'; // TODO: Update this to your actual repository name

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: deployToGithubPages ? `/${repoName}/` : '',
  basePath: deployToGithubPages ? `/${repoName}` : '',
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
