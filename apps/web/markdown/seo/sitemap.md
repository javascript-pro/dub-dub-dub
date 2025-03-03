---
order: 10
title: "Sitemap"
description: ""
icon: "xml"
ogImage: "/jpg/og.jpg"
---
> Sitemaps are an old fashioned and effictive way of helping Search Engines to index our content. Instead of relying on spiders to follow links, indexing as it goes, we offer the spider a standardised list of all the pages on one URL

#### generate-sitemap.js

Here's a complete Node.js script to generate an XML sitemap for your docs app by recursively reading the /src/markdown folder. This script will save the sitemap to the /public/sitemap.xml file.

```javascript
const fs = require('fs');
const path = require('path');

// Config
const MARKDOWN_DIR = path.join(__dirname, 'src', 'markdown');
const PUBLIC_DIR = path.join(__dirname, 'public');
const BASE_URL = '/'; // Replace with your actual site URL
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

// Helper to get all markdown file paths recursively
function getMarkdownPaths(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      return getMarkdownPaths(fullPath, relativePath);
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      return relativePath.replace(/\.md$/, '');
    }

    return [];
  });
}

// Generate XML sitemap content
function generateSitemap(urls) {
  const xmlUrls = urls.map(url => `
    <url>
      <loc>${BASE_URL}/${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>
  `).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${xmlUrls}
</urlset>`;
}

// Generate and save the sitemap
function createSitemap() {
  const paths = getMarkdownPaths(MARKDOWN_DIR);
  const urls = paths.map(path => path.replace(/\\/g, '/')); // Convert Windows paths to URL-friendly format
  const sitemap = generateSitemap(urls);

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_FILE, sitemap, 'utf-8');
  console.log(`Sitemap generated at: ${SITEMAP_FILE}`);
}

// Run the script
createSitemap();

```

#### Add the npm script

In your package.json, add the following under "scripts" and update the build process to create a fresh sitemap every build

```javascript
"scripts": {
  "build": "yarn generate-sitemap && next build",
  "generate-sitemap": "node generate-sitemap.js"
}
```

#### Add the sitemap to the head html.

```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

#### Add or update robots.txt

```txt
User-agent: *
Disallow:

Sitemap: https://your-docs-app-url.com/sitemap.xml
```
