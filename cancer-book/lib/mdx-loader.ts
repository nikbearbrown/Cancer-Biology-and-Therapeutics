// lib/mdx-loader.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { cache } from 'react';

interface PageData {
  title: string;
  description: string;
  full: boolean;
  content: React.ReactElement; // The compiled MDX content
  lastModified?: string;
}

// Cache the page loading for better performance
export const getPageBySlug = cache(async (slug: string[]) => {
  const baseDir = path.join(process.cwd(), 'content/docs');

  const flatPath = path.join(baseDir, `${slug.join('/')}.mdx`);
  const indexPath = path.join(baseDir, ...slug, 'index.mdx');

  let filePath: string;

  try {
    // Try flat path first
    await fs.access(flatPath);
    filePath = flatPath;
  } catch {
    try {
      // Try index fallback
      await fs.access(indexPath);
      filePath = indexPath;
    } catch {
      console.error(`Page not found at either ${flatPath} or ${indexPath}`);
      return null;
    }
  }

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(raw);
    const stats = await fs.stat(filePath);

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          development: process.env.NODE_ENV === 'development',
        },
      },
    });

    return {
      data: {
        title: data.title || slug.join(' / '),
        description: data.description || '',
        full: data.full ?? true,
        content: mdxContent,
        lastModified: stats.mtime.toISOString(),
      } as PageData,
    };
  } catch (error) {
    console.error(`Failed to load or parse MDX at ${filePath}:`, error);
    return null;
  }
});

export const getAllSlugs = cache(async () => {
  const dir = path.join(process.cwd(), 'content/docs');
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    const slugs = await Promise.all(
      entries
        .filter((e) => e.isDirectory())
        .map(async (dirent) => {
          // Check if index.mdx exists
          const indexPath = path.join(dir, dirent.name, 'index.mdx');
          try {
            await fs.access(indexPath);
            return [dirent.name];
          } catch {
            return null;
          }
        })
    );

    return slugs.filter(Boolean) as string[][];
  } catch (error) {
    console.error('Failed to get all slugs:', error);
    return [];
  }
});

// Helper to get navigation structure
export const getNavigationTree = cache(async () => {
  const slugs = await getAllSlugs();
  const pages = await Promise.all(
    slugs.map(async (slug) => {
      const page = await getPageBySlug(slug);
      return page ? { slug: slug[0], ...page.data } : null;
    })
  );

  return pages.filter(Boolean).sort((a, b) => {
    // Sort by title or implement custom ordering
    return a!.title.localeCompare(b!.title);
  });
});