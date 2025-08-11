import { NextResponse } from 'next/server';
import type { OramaDocument } from 'fumadocs-core/search/orama-cloud';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';

export const revalidate = false;

export async function GET() {
  const results: OramaDocument[] = [];
  const basePath = path.join(process.cwd(), 'content/docs');
  
  try {
    const items = await fs.readdir(basePath, { withFileTypes: true });
    
    for (const item of items) {
      if (!item.isDirectory()) continue;
      
      const chapterPath = path.join(basePath, item.name);
      
      try {
        // Read chapter meta.json to get chapter info
        let chapterTitle = item.name;
        let chapterDescription = '';
        
        try {
          const chapterMetaPath = path.join(chapterPath, 'meta.json');
          const chapterMeta = JSON.parse(await fs.readFile(chapterMetaPath, 'utf-8'));
          chapterTitle = chapterMeta.title || item.name;
        } catch {
          // If no meta.json, use folder name
        }
        
        const files = await fs.readdir(chapterPath, { withFileTypes: true });
        
        for (const file of files) {
          // Only process .mdx files, skip meta.json
          if (!file.name.endsWith('.mdx')) continue;
          
          const filePath = path.join(chapterPath, file.name);
          
          try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const { data, content: bodyContent } = matter(fileContent);
            
            // Clean content for better search and remove markdown formatting
            const cleanContent = bodyContent
              .replace(/#{1,6}\s/g, '') // Remove markdown headers
              .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
              .replace(/\*(.*?)\*/g, '$1') // Remove italic
              .replace(/```[\s\S]*?```/g, '') // Remove code blocks
              .replace(/`([^`]*)`/g, '$1') // Remove inline code
              .replace(/\[([^\]]*)\]\([^\)]*\)/g, '$1') // Remove links, keep text
              .replace(/\n+/g, ' ') // Replace newlines with spaces
              .replace(/\s+/g, ' ') // Normalize whitespace
              .trim();
            
            const sectionId = file.name.replace('.mdx', '');
            const url = `/${item.name}/${sectionId}`;
            
            // Extract section number and title from filename or content
            const sectionTitle = data.title || 
              sectionId.replace(/_/g, ' ')
                      .replace(/^\d+\s*/, '') // Remove leading numbers
                      .replace(/([A-Z])/g, ' $1') // Add space before capitals
                      .trim();
            
            // Create meaningful description
            let description = data.description || 
              cleanContent.slice(0, 250) + (cleanContent.length > 250 ? '...' : '');
            
            // Enhanced structured data for better search
            const structuredData = {
              chapter: item.name,
              chapterTitle: chapterTitle,
              section: sectionId,
              sectionNumber: sectionId.match(/^(\d+)/)?.[1] || null,
              category: 'cancer-biology',
              type: 'textbook-section',
              keywords: extractKeywords(data.title, cleanContent),
              wordCount: cleanContent.split(' ').length,
              hasFormulas: bodyContent.includes('$$') || bodyContent.includes('$'),
              hasTables: bodyContent.includes('|'),
              hasImages: bodyContent.includes('!['),
              ...data.structuredData
            };
            
            results.push({
              id: url,
              url: url,
              title: sectionTitle,
              description: description,
              content: cleanContent, // Full content for comprehensive search
              structured: structuredData,
            });
            
          } catch (error) {
            console.warn(`Could not process file ${filePath}:`, error);
            continue;
          }
        }
      } catch (error) {
        console.warn(`Could not read chapter ${item.name}:`, error);
        continue;
      }
    }
  } catch (error) {
    console.error('Could not read content directory:', error);
  }
  
  // Sort results by chapter and section for better organization
  results.sort((a, b) => {
    const chapterA = a.structured.chapter || '';
    const chapterB = b.structured.chapter || '';
    const sectionA = parseInt(a.structured.sectionNumber || '0');
    const sectionB = parseInt(b.structured.sectionNumber || '0');
    
    if (chapterA !== chapterB) {
      return chapterA.localeCompare(chapterB);
    }
    return sectionA - sectionB;
  });
  
  console.log(`Successfully indexed ${results.length} sections across ${new Set(results.map(r => r.structured.chapter)).size} chapters`);
  return NextResponse.json(results);
}

// Helper function to extract relevant keywords
function extractKeywords(title: string = '', content: string = ''): string[] {
  const text = (title + ' ' + content).toLowerCase();
  const cancerKeywords = [
    'oncogene', 'tumor suppressor', 'metastasis', 'angiogenesis', 'apoptosis',
    'chemotherapy', 'immunotherapy', 'radiation', 'mutation', 'carcinogen',
    'malignant', 'benign', 'biopsy', 'staging', 'prognosis', 'biomarker',
    'targeted therapy', 'precision medicine', 'clinical trial', 'survival'
  ];
  
  return cancerKeywords.filter(keyword => text.includes(keyword));
}
