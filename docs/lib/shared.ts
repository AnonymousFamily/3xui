export const appName = '3x-ui';
export const appTagline = 'Advanced web panel for managing Xray-core servers';

// Public assets need the repository prefix on GitHub Pages. Next automatically
// prefixes its own assets and <Link> routes through next.config.mjs.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const withBasePath = (path: string) => `${basePath}${path}`;

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// The 3x-ui product repository — used for the navbar GitHub link,
// build-time star/release stats, and install commands.
export const productRepo = {
  user: 'MHSanaei',
  repo: '3x-ui',
  branch: 'main',
};

// Where these docs live in the 3x-ui monorepo — used for "Edit on GitHub" links.
export const gitConfig = {
  user: 'MHSanaei',
  repo: '3x-ui',
  branch: 'main',
  docsDir: 'docs/content/docs',
};

export const productRepoUrl = `https://github.com/${productRepo.user}/${productRepo.repo}`;

// AI-generated interactive wiki of the 3x-ui codebase.
export const deepWikiUrl = `https://deepwiki.com/${productRepo.user}/${productRepo.repo}`;

// Official 3x-ui community channel on Telegram (announcements & support).
export const telegramChannel = 'XrayUI';
export const telegramChannelUrl = `https://t.me/${telegramChannel}`;

// Support the developer — donation page with funding goals/targets.
export const donateUrl = 'https://donate.sanaei.dev/';

// Public site origin, used for metadataBase / canonical URLs / OG images.
// Defaults to this fork's GitHub Pages project URL; the deploy workflow also
// sets it explicitly so generated metadata uses the published site address.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://anonymousfamily.github.io/3xui';
