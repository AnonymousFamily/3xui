import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Set DEPLOY_TARGET=static to produce a fully static export (e.g. for GitHub
// Pages). Search already uses a static index, and OG images are prerendered, so
// the export is self-contained. Default (unset) builds for Vercel/Node hosting.
const isStaticExport = process.env.DEPLOY_TARGET === 'static';
// The fork publishes project Pages at https://anonymousfamily.github.io/3xui/.
// GitHub Pages serves this repository under /3xui, unlike the upstream custom
// domain which served from /. Prefix Next's static assets and internal routes
// so the exported site keeps its styles and navigation on project Pages.
const githubPagesBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '/3xui';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // On the static host (GitHub Pages) emit directory-style routes
  // (`en/index.html` rather than `en.html`) so URLs with a trailing slash —
  // including the root `/` → `/en/` redirect — resolve instead of 404ing.
  ...(isStaticExport
    ? {
        output: 'export',
        trailingSlash: true,
        basePath: githubPagesBasePath,
        images: { unoptimized: true },
      }
    : {}),
};

export default withMDX(config);
