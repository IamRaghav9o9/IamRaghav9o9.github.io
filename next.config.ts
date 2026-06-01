import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
let basePath = '';

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
  // If deploying to a user site (e.g. '<username>.github.io'), basePath must be empty
  if (!repoName.endsWith('.github.io')) {
    basePath = `/${repoName}`;
  }
}

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
};

export default nextConfig;
