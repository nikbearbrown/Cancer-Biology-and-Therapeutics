"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import { MessageCircle, X } from "lucide-react";
import { OramaChatBox } from "@orama/react-components";
import { useTheme } from "next-themes";

export function AskAIButton(): JSX.Element {
  const { theme } = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  const getColorScheme = (theme: string | undefined): "light" | "dark" | "system" | undefined => {
    if (theme === "light" || theme === "dark") return theme;
    return "system";
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="ask-ai-button fixed bottom-4 right-4 z-10 flex items-center gap-2 rounded-xl 
                  bg-secondary text-secondary-foreground shadow-lg backdrop-blur-lg 
                  md:bottom-8 md:right-8 px-4 py-2 transition-colors duration-200 
                  hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-100 
                  dark:hover:bg-primary dark:hover:text-white"
      >
        <MessageCircle className="size-4" />
        Ask AI
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-sm z-50">
          <div className="relative bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full shadow-xl overflow-visible" style={{ height: "80vh" }}>
            <button 
              onClick={toggleModal} 
              className="absolute -top-4 -right-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 
                        z-[60] p-2 rounded-full transition-colors bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <X className="size-5" />
            </button>
            
            <div 
              className="absolute inset-0 overflow-y-auto"
              style={{ borderRadius: "12px" }}
            >
              <OramaChatBox
                colorScheme={getColorScheme(theme)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                index={{
                  endpoint: process.env.NEXT_PUBLIC_ORAMA_ENDPOINT || "https://cloud.orama.run/v1/indexes/YOUR_CANCER_INDEX_ID",
                  api_key: process.env.NEXT_PUBLIC_ORAMA_API_KEY || "YOUR_CANCER_API_KEY",
                }}
                sourceBaseUrl="http://localhost:3000/"
                sourcesMap={{ title: "section", description: "content", path: "url" }}
                suggestions={[
                  "What are the hallmarks of cancer?",
                  "How does cancer disrupt normal cell biology?",
                  "Explain oncogenes and tumor suppressor genes",
                  "What is the difference between DNA and RNA viruses in cancer?",
                  "How do checkpoint inhibitors work in immunotherapy?",
                  "What is the Warburg effect in cancer metabolism?",
                  "Explain the tumor microenvironment",
                  "How does angiogenesis contribute to cancer progression?"
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}