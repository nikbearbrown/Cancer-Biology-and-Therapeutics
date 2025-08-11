// app/physics-book/layout.tsx
import './global.css';
import 'katex/dist/katex.css';

import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';
import { ChatSidebar } from '@/components/ChatSidebar';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <div className="flex flex-1 min-h-screen">
            <div className="flex-1">
              <DocsLayout tree={source.pageTree} {...baseOptions}>
                {children}
              </DocsLayout>
            </div>
            <ChatSidebar />
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
