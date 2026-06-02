const githubPagesBasePath = "/gibsooon";

export const siteBasePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true" ? githubPagesBasePath : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return `${siteBasePath}/${path}`;
  }

  return `${siteBasePath}${path}`;
}
