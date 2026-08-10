import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';

const distDir = resolve('dist');
const siteOrigin = 'https://itungnails.com';
const issues = [];

if (!existsSync(distDir)) {
  console.error('dist/ does not exist. Run the Astro build first.');
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const absolutePath = join(directory, entry);
    return statSync(absolutePath).isDirectory() ? walk(absolutePath) : [absolutePath];
  });
}

function fileToRoute(file) {
  const localPath = relative(distDir, file).split(sep).join('/');
  if (localPath === 'index.html') return '/';
  if (localPath.endsWith('/index.html')) return `/${localPath.slice(0, -'index.html'.length)}`;
  return `/${localPath}`;
}

function targetFile(pathname) {
  if (pathname === '/') return join(distDir, 'index.html');
  if (pathname.endsWith('/')) return join(distDir, pathname, 'index.html');
  return join(distDir, pathname);
}

function pageHasId(file, hash) {
  if (!hash || !existsSync(file) || extname(file) !== '.html') return true;
  const id = decodeURIComponent(hash.slice(1));
  const html = readFileSync(file, 'utf8');
  return html.includes(`id="${id}"`) || html.includes(`name="${id}"`);
}

const htmlFiles = walk(distDir).filter((file) => file.endsWith('.html'));
const pageEntries = htmlFiles.map((file) => ({
  file,
  route: fileToRoute(file),
  html: readFileSync(file, 'utf8'),
}));

for (const page of pageEntries) {
  const anchors = [...page.html.matchAll(/<a\b[^>]*\bhref=(?:"([^"]+)"|'([^']+)')/gi)];

  for (const match of anchors) {
    const href = match[1] ?? match[2];
    if (!href || href.startsWith('#') || /^(?:mailto:|tel:|javascript:)/i.test(href)) continue;

    let url;
    try {
      url = new URL(href, `${siteOrigin}${page.route}`);
    } catch {
      issues.push(`${page.route}: invalid href ${href}`);
      continue;
    }

    if (url.origin !== siteOrigin) continue;

    const pathname = decodeURIComponent(url.pathname);
    const hasFileExtension = Boolean(extname(pathname));
    if (pathname !== '/' && !hasFileExtension && !pathname.endsWith('/')) {
      issues.push(`${page.route}: internal page link must end with / (${href})`);
      continue;
    }

    const destination = targetFile(pathname);
    if (!existsSync(destination)) {
      issues.push(`${page.route}: missing internal target ${href}`);
      continue;
    }

    if (!pageHasId(destination, url.hash)) {
      issues.push(`${page.route}: missing anchor target ${href}`);
    }
  }

  const canonical = page.html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (canonical) {
    const canonicalUrl = new URL(canonical);
    if (canonicalUrl.origin !== siteOrigin) {
      issues.push(`${page.route}: canonical must use ${siteOrigin}`);
    }
    if (canonicalUrl.pathname !== '/' && !canonicalUrl.pathname.endsWith('/')) {
      issues.push(`${page.route}: canonical must end with / (${canonical})`);
    }
  }

  const footerCount = (page.html.match(/<footer\b[^>]*class="[^"]*bg-it-dark[^"]*"/gi) ?? []).length;
  if (footerCount !== 1) {
    issues.push(`${page.route}: expected one footer, found ${footerCount}`);
  }

  if (page.html.includes('https://itungnails.com/favicon.svg')) {
    issues.push(`${page.route}: references missing favicon.svg publisher logo`);
  }
}

const blogIndex = pageEntries.find((page) => page.route === '/blog/');
const articleRoutes = pageEntries
  .map((page) => page.route)
  .filter((route) => route.startsWith('/blog/') && route !== '/blog/');

if (articleRoutes.length !== 30) {
  issues.push(`/blog/: expected 30 article pages, found ${articleRoutes.length}`);
}

if (blogIndex) {
  for (const route of articleRoutes) {
    if (!blogIndex.html.includes(`href="${route}"`)) {
      issues.push(`/blog/: article missing from grouped index ${route}`);
    }
  }
} else {
  issues.push('missing /blog/ index');
}

for (const route of articleRoutes) {
  const article = pageEntries.find((page) => page.route === route);
  if (article && !article.html.includes('id="related-reading-title"')) {
    issues.push(`${route}: missing contextual related-reading section`);
  }
}

if (issues.length > 0) {
  console.error(`Internal QA failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Internal QA passed: ${pageEntries.length} HTML pages, ${articleRoutes.length} blog articles.`);
