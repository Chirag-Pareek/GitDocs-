import { Highlight, themes } from 'prism-react-renderer';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'bash', showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block my-5 group w-full max-w-full overflow-hidden rounded-md border border-white/5">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px dashed rgba(255,255,255,0.08)',
        }}
      >
        <div className="flex items-center gap-3">
          {/* Monochrome dots instead of traffic-light */}
          <div className="flex gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full transition-all group-hover:bg-white/15"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            />
            <div
              className="w-2.5 h-2.5 rounded-full transition-all group-hover:bg-white/12"
              style={{ border: '1px solid rgba(255,255,255,0.12)' }}
            />
            <div
              className="w-2.5 h-2.5 rounded-full transition-all group-hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            />
          </div>
          <span
            className="text-[10px] tracking-widest uppercase font-mono-space"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-2.5 py-1 text-xs font-mono-space tracking-wider transition-all duration-200 hover:bg-white/5"
          style={{
            color: copied ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '2px',
          }}
        >
          {copied ? (
            <>
              <span style={{ fontSize: '10px' }}>✓</span>
              <span>COPIED</span>
            </>
          ) : (
            <>
              <span style={{ fontSize: '10px' }}>⊞</span>
              <span>COPY</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <Highlight
        theme={{
          ...themes.vsDark,
          plain: {
            color: 'rgba(255,255,255,0.6)',
            backgroundColor: 'transparent',
          },
          styles: [
            { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: 'rgba(255,255,255,0.25)' } },
            { types: ['namespace'], style: { opacity: 0.7 } },
            { types: ['string', 'attr-value'], style: { color: 'rgba(255,255,255,0.55)' } },
            { types: ['punctuation', 'operator'], style: { color: 'rgba(255,255,255,0.35)' } },
            { types: ['entity', 'url', 'symbol', 'number', 'boolean', 'variable', 'constant', 'property', 'regex', 'inserted'], style: { color: 'rgba(255,255,255,0.55)' } },
            { types: ['atrule', 'keyword', 'attr-name', 'selector'], style: { color: 'rgba(255,255,255,0.80)', fontWeight: '600' } },
            { types: ['function', 'deleted', 'tag'], style: { color: 'rgba(255,255,255,0.7)' } },
            { types: ['function-variable'], style: { color: 'rgba(255,255,255,0.65)' } },
            { types: ['tag', 'selector', 'keyword'], style: { color: 'rgba(255,255,255,0.75)' } },
          ],
        }}
        code={code.trim()}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-5 overflow-x-auto text-sm leading-relaxed`}
            style={{
              ...style,
              background: 'rgba(255,255,255,0.01)',
              margin: 0,
              fontFamily: "'Space Mono', 'JetBrains Mono', monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row group/line">
                {showLineNumbers && (
                  <span
                    className="table-cell text-right pr-5 select-none w-10 transition-colors group-hover/line:text-white/30"
                    style={{ color: 'rgba(255,255,255,0.12)' }}
                  >
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
