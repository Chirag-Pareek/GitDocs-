import { useEffect, useRef } from 'react';
import type { Tutorial } from '@/data/tutorials';
import { CodeBlock } from './CodeBlock';
import { AnimatedMascot } from '@/components/AnimatedMascot';

interface TutorialContentProps {
  tutorial: Tutorial;
}

// Monochrome boxed icons as inline text
function BoxedLabel({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: '28px',
        height: '28px',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '3px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        color: 'rgba(255,255,255,0.5)',
      }}
    >
      {label}
    </span>
  );
}


export function TutorialContentRenderer({ tutorial }: TutorialContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = contentRef.current?.querySelectorAll('.content-section');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [tutorial.id]);

  return (
    <article className="max-w-4xl animate-fade-in" ref={contentRef}>
      {/* Header */}
      <header className="mb-10 pb-8" style={{ borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2 text-xs mb-4 font-mono-space tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span>{tutorial.category}</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>{tutorial.title}</span>
        </div>
        <h1
          className="text-4xl lg:text-5xl font-bold mb-5"
          style={{
            color: 'rgba(255,255,255,0.95)',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
          }}
        >
          {tutorial.title}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {tutorial.description}
        </p>

        {/* Typing cursor effect */}
        <div className="mt-6 flex items-center gap-2">
          <span className="font-mono-space text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Reading
          </span>
          <span
            className="inline-block w-2 h-4"
            style={{
              background: 'rgba(255,255,255,0.4)',
              animation: 'typing 1s ease-in-out infinite',
            }}
          />
        </div>
      </header>

      {/* Content */}
      <div className="space-y-6">
        {tutorial.content.map((section, index) => {
          switch (section.type) {
            case 'paragraph':
              return (
                <p
                  key={index}
                  className="content-section opacity-0 leading-relaxed"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {section.content}
                </p>
              );

            case 'heading':
              return (
                <h2
                  key={index}
                  className="content-section opacity-0 text-2xl font-bold mt-12 mb-5"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    letterSpacing: '-0.03em',
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {section.content}
                </h2>
              );

            case 'subheading':
              return (
                <h3
                  key={index}
                  className="content-section opacity-0 text-xl font-semibold mt-10 mb-4"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    letterSpacing: '-0.02em',
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {section.content}
                </h3>
              );

            case 'code':
              return (
                <div key={index} className="content-section opacity-0" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CodeBlock
                    code={section.code || ''}
                    language={section.language || 'bash'}
                  />
                </div>
              );

            case 'list':
              return (
                <ul key={index} className="content-section opacity-0 space-y-3 ml-2" style={{ animationDelay: `${index * 0.05}s` }}>
                  {section.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      <span
                        className="mt-2 flex-shrink-0"
                        style={{
                          width: '5px',
                          height: '5px',
                          border: '1px solid rgba(255,255,255,0.3)',
                          borderRadius: '1px',
                          transform: 'rotate(45deg)',
                        }}
                      />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );

            case 'info':
              return (
                <div key={index} className="content-section opacity-0 info-box" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex items-start gap-3">
                    <BoxedLabel label="i" />
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{section.content}</p>
                  </div>
                </div>
              );

            case 'warning':
              return (
                <div key={index} className="content-section opacity-0 info-box warning" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex items-start gap-3">
                    <BoxedLabel label="!" />
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{section.content}</p>
                  </div>
                </div>
              );

            case 'tip':
              return (
                <div key={index} className="content-section opacity-0 info-box success" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex items-start gap-3">
                    <BoxedLabel label="✓" />
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>{section.content}</p>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Footer with Cat Mascot */}
      <footer className="mt-20 pt-8" style={{ borderTop: '1px dashed rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AnimatedMascot size={48} title="beep boop!" />
            <div>
              <div className="text-xs font-mono-space tracking-wider" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Last updated: April 2026
              </div>
              <div className="text-[10px] font-mono-space mt-1" style={{ color: 'rgba(255,255,255,0.15)' }}>
                GitDocs+ — Monochrome Edition
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono-space text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
              GitDocs+
            </span>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.3)',
                animation: 'pulseGlow 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-8 mb-4 flex items-center gap-3">
          <div className="flex-1" style={{ borderTop: '1px dashed rgba(255,255,255,0.06)' }} />
          <span className="font-mono-space text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.1)' }}>
            END OF DOCUMENT
          </span>
          <div className="flex-1" style={{ borderTop: '1px dashed rgba(255,255,255,0.06)' }} />
        </div>
      </footer>
    </article>
  );
}
