import { NextResponse } from 'next/server';
import { type OramaDocument } from 'fumadocs-core/search/orama-cloud';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const revalidate = false;

export async function GET() {
  const baseDir = path.join(process.cwd(), 'content/docs');
  const dirs = await fs.readdir(baseDir, { withFileTypes: true });

  const results: OramaDocument[] = [];

  for (const dirent of dirs) {
    if (!dirent.isDirectory()) continue;

    const filePath = path.join(baseDir, dirent.name, 'index.mdx');

    try {
      const raw = await fs.readFile(filePath, 'utf8');
      const { data } = matter(raw);

      results.push({
        id: `/${dirent.name}`,
        url: `/${dirent.name}`,
        title: data.title || dirent.name,
        description: data.description || '',
        structured: data.structuredData || {},
      });
    } catch {
      // skip unreadable or missing files
      continue;
    }
  }

  return NextResponse.json(results);
}
