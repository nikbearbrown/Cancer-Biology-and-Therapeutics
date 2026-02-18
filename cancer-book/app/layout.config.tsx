import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center space-x-2">
        {/* Simple emoji or symbol as icon */}
        <span className="text-xl">🧬</span>
        
        {/* Title text */}
        <span className="text-sm font-medium">
          Cancer Biology Textbook
        </span>
      </div>
    ),
  },
};