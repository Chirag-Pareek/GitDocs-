import { useState } from 'react';
import { categories } from '@/data/tutorials';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { AnimatedMascot } from '@/components/AnimatedMascot';

interface SidebarProps {
  currentTutorialId: string;
  onSelectTutorial: (id: string) => void;
}

const categoryBoxIcons: Record<string, string> = {
  'learn-git': '◇',
  'beginner': '>_',
  'getting-started': '{ }',
  'collaborating': '⊞',
  'advanced': '⚡',
};

export function Sidebar({ currentTutorialId, onSelectTutorial }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['beginner', 'getting-started']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Global tutorial counter
  let tutorialCounter = 0;

  return (
    <aside
      className="w-72 h-[calc(100vh-33px)] overflow-y-auto"
      style={{
        background: '#000',
        borderRight: '1px dashed rgba(255,255,255,0.08)',
      }}
    >
      {/* Logo */}
      <div style={{ borderBottom: '1px dashed rgba(255,255,255,0.08)' }} className="p-5">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onSelectTutorial('learn-git-overview')}
        >
          {/* Logo box with sparkles */}
          <div className="sparkle-container">
            <div
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10"
              style={{
                border: '1.5px solid rgba(255,255,255,0.2)',
                borderRadius: '3px',
              }}
            >
              <AnimatedMascot size={44} className="opacity-100" />
            </div>
            <span className="sparkle" />
            <span className="sparkle" />
            <span className="sparkle" />
            <span className="sparkle" />
          </div>
          <div>
            <h1 className="font-bold text-lg shimmer-text" style={{ letterSpacing: '-0.03em' }}>GitDocs+</h1>
            <p className="text-xs font-mono-space tracking-wider" style={{ color: 'rgba(255,255,255,0.25)' }}>
              DOCUMENTATION
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 pb-24">
        <div className="mb-4">
          <span className="category-header">
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>—</span>
            TOPICS
          </span>
        </div>

        {categories.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);

          return (
            <div key={category.id} className="mb-1">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white/4 group"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  borderRadius: '2px',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="boxed-icon group-hover:border-white/30 group-hover:text-white/70">
                    {categoryBoxIcons[category.id] || '·'}
                  </span>
                  <span className="transition-all group-hover:translate-x-0.5">{category.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform" style={{ color: 'rgba(255,255,255,0.2)' }} />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" style={{ color: 'rgba(255,255,255,0.2)' }} />
                )}
              </button>

              {isExpanded && (
                <div className="ml-2 mt-1 space-y-0.5 animate-slide-up">
                  {category.tutorials.map((tutorial) => {
                    tutorialCounter++;
                    const numLabel = String(tutorialCounter).padStart(2, '0');
                    return (
                      <button
                        key={tutorial.id}
                        onClick={() => onSelectTutorial(tutorial.id)}
                        className={`w-full text-left px-3 py-2 text-sm transition-all duration-200 flex items-center gap-2.5 group/item ${
                          currentTutorialId === tutorial.id
                            ? 'bg-white/6'
                            : 'hover:bg-white/3'
                        }`}
                        style={{
                          color: currentTutorialId === tutorial.id ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                          borderRadius: '2px',
                          borderLeft: currentTutorialId === tutorial.id ? '2px solid rgba(255,255,255,0.5)' : '2px solid transparent',
                        }}
                      >
                        <span className="num-label">[{numLabel}]</span>
                        <span className="transition-all group-hover/item:translate-x-0.5 group-hover/item:text-white/70">{tutorial.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer with Ghost Mascot */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          borderTop: '1px dashed rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.95)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mascot */}
            <AnimatedMascot size={40} />
            <div>
              <div className="text-xs font-mono-space tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
                GitDocs+ v2.0
              </div>
              <div className="text-[10px] font-mono-space" style={{ color: 'rgba(255,255,255,0.15)' }}>
                MONOCHROME EDITION
              </div>
            </div>
          </div>
          {/* Pulse dot */}
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.5)',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </aside>
  );
}
