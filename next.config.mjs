import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const repositoryName = "gibsooon";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGitHubPages
    ? {
        assetPrefix: `/${repositoryName}`,
        basePath: `/${repositoryName}`,
        images: {
          unoptimized: true
        },
        output: "export",
        trailingSlash: true
      }
    : {}),
  reactStrictMode: true,
  turbopack: {
    root: projectRoot
  }
};

export default nextConfig;
