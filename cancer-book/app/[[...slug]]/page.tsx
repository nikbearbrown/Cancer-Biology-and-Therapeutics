// app/[...slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { getPageBySlug, getAllSlugs } from '@/lib/mdx-loader';

type Params = { slug?: string[] };

export default async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const page = await getPageBySlug(resolvedParams.slug || []);
  
  if (!page) {
    notFound();
  }

  return (
    <DocsPage 
      full={page.data.full}
      tableOfContent={{ 
        enabled: false,
        footer: (
          <div className="text-xs text-muted-foreground mt-4">
            Last updated: {new Date(page.data.lastModified || '').toLocaleDateString()}
          </div>
        )
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description && (
        <DocsDescription>{page.data.description}</DocsDescription>
      )}
      <DocsBody>
        {/* Render the compiled MDX content directly */}
        {page.data.content}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams(): Promise<{ slug?: string[] }[]> {
  const slugs = await getAllSlugs();
  return [
    { slug: undefined }, // For root path
    ...slugs.map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<Params> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const page = await getPageBySlug(resolvedParams.slug || []);
  
  if (!page) {
    return {
      title: 'Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const title = page.data.title;
  const description = page.data.description;
  const slug = resolvedParams.slug?.join('/') || '';

  return {
    title: title ? `${title} | Cancer Biology Textbook` : 'Cancer Biology Textbook',
    description: description || 'Comprehensive cancer biology and therapeutics textbook.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/${slug}`,
      images: [
        {
          url: '/physics-volume-1-cover.jpg',
          width: 1200,
          height: 630,
          alt: 'Cancer Biology Textbook',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/physics-volume-1-cover.jpg'],
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}