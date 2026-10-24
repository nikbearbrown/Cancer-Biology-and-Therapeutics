'use client';
import { OramaChatBox } from '@orama/react-components';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';

export function ChatSidebar() {
  const { theme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure theme is loaded
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getColorScheme = (theme: string | undefined): 'light' | 'dark' | 'system' | undefined => {
    if (theme === 'light' || theme === 'dark') return theme;
    return 'system';
  };

  const suggestions = [
    "What are the hallmarks of cancer?",
    "How does cancer disrupt normal cell biology?",
    "Explain oncogenes and tumor suppressor genes",
    "What is the difference between DNA and RNA viruses in cancer?",
    "How do checkpoint inhibitors work in immunotherapy?",
    "What is the Warburg effect in cancer metabolism?",
    "Explain the tumor microenvironment and cancer stem cells",
    "How does angiogenesis contribute to cancer progression?",
    "What are the principles of chemotherapy?",
    "How does targeted therapy differ from traditional chemotherapy?"
  ];

  if (isCollapsed) {
    return (
      <aside className="w-12 border-l bg-background flex flex-col items-center sticky top-0 h-screen">
        <button
          onClick={() => setIsCollapsed(false)}
          className="p-3 hover:bg-accent rounded-md mt-4 transition-colors"
          aria-label="Open chat sidebar"
        >
          <MessageSquare size={20} />
        </button>
      </aside>
    );
  }

  return (
    <aside className="w-[400px] max-w-full border-l bg-background sticky top-0 h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-sm font-medium flex items-center gap-2">
          <MessageSquare size={16} />
          Cancer Biology Assistant
        </h2>
        <button
          onClick={() => setIsCollapsed(true)}
          className="p-1 hover:bg-accent rounded-md transition-colors"
          aria-label="Collapse chat sidebar"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="flex-1 overflow-hidden">
        {isLoaded ? (
          <div className="h-full">
            <OramaChatBox
              colorScheme={getColorScheme(theme)}
              style={{ width: '100%', height: '100%' }}
              index={{
                endpoint: process.env.NEXT_PUBLIC_ORAMA_ENDPOINT || 'https://cloud.orama.run/v1/indexes/YOUR_CANCER_INDEX_ID',
                api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY || 'YOUR_CANCER_API_KEY',
              }}
              sourceBaseUrl={typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}
              sourcesMap={{ 
                title: 'section', 
                description: 'content', 
                path: 'url' 
              }}
              suggestions={suggestions}
              placeholder="Ask about cancer biology and treatment..."
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
    </aside>
  );
}