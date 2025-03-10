"use server";

import fs from "fs/promises"; // Use async-friendly fs
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const markdownDir = path.join(process.cwd(), "../docs/markdown");

export interface MarkdownPage {
  order: number;
  title: string;
  ogImage: string;
  description: string;
  slug: string[];
  contentHtml: string;
}

async function readMarkdownFiles(
  dir = markdownDir, 
  slug: string[] = []
): Promise<MarkdownPage[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  let pages: MarkdownPage[] = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subPages = await readMarkdownFiles(entryPath, [...slug, entry.name]);
      pages = pages.concat(subPages);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const fileContents = await fs.readFile(entryPath, "utf8");
      const { data, content } = matter(fileContents);
      const contentHtml = (await remark().use(html).process(content)).toString();

      pages.push({
        order: data.order || 0,
        title: data.title || "Untitled",
        description: data.description || "",
        ogImage: data.ogImage || "/jpg/og.jpg",
        slug: [...slug, entry.name.replace(".md", "")],
        contentHtml,
      });
    }
  }

  return pages.sort((a, b) => a.order - b.order);
}

// ✅ Now async to comply with Server Actions
export async function getMarkdownPages() {
  return await readMarkdownFiles();
}
