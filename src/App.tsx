import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TutorialContentRenderer } from '@/components/TutorialContent';
import { tutorials, getTutorial } from '@/data/tutorials';
import { Menu, Search, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedMascot } from '@/components/AnimatedMascot';

function App() {
  const [currentTutorialId, setCurrentTutorialId] = useState<string>('learn-git-overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 15);
    return () => clearInterval(interval);
  }, []);

  const currentTutorial = getTutorial(currentTutorialId) || tutorials['learn-git-overview'];

  // Close sidebar when selecting a tutorial on mobile
  const handleSelectTutorial = (id: string) => {
    setCurrentTutorialId(id);
    setSidebarOpen(false);
  };

  // Handle escape key to close sidebar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Filter tutorials based on search
  const filteredTutorials = Object.values(tutorials).filter(
    (tutorial) =>
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const marqueeItems = [
    'GitDocs+',
    '27 TUTORIALS',
    'LEARN GIT',
    'BRANCH & MERGE',
    'OPEN SOURCE',
    'VERSION CONTROL',
    'COLLABORATE',
    'GitDocs+',
    '27 TUTORIALS',
    'LEARN GIT',
    'BRANCH & MERGE',
    'OPEN SOURCE',
    'VERSION CONTROL',
    'COLLABORATE',
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[100] px-4">
        <AnimatedMascot size={96} className="mb-4" />
        <div className="font-mono-space tracking-[0.2em] text-white/70 text-sm">
          [{progress.toString().padStart(2, '0')}%]
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* ─── MARQUEE TICKER ─── */}
      <div className="marquee-container fixed top-0 left-0 right-0 z-[60]">
        <div className="marquee-content">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] fixed left-0 top-[33px] z-50 lg:z-40`}>
        <Sidebar
          currentTutorialId={currentTutorialId}
          onSelectTutorial={handleSelectTutorial}
        />
      </div>

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen flex flex-col pt-[33px]">
        {/* Header */}
        <header className="sticky top-[33px] z-30 bg-black/90 backdrop-blur-md" style={{ borderBottom: '1px dashed rgba(255,255,255,0.1)' }}>
          <div className="flex items-center justify-between px-5 py-3">
            {/* Left: Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-white/5"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.5)' }} />
              </Button>

              {/* Search */}
              <div className="relative">
                {showSearch ? (
                  <div className="flex items-center gap-2 animate-fade-in">
                    <Input
                      type="text"
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 sm:w-64 bg-white/5 border-dashed border-white/10 text-white placeholder:text-white/30 focus:border-white/20 font-mono-space text-sm"
                      autoFocus
                      onBlur={() => {
                        if (!searchQuery) setShowSearch(false);
                      }}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/40 hover:text-white/80 hover:bg-white/5 font-mono-space text-xs tracking-wider"
                      onClick={() => {
                        setSearchQuery('');
                        setShowSearch(false);
                      }}
                    >
                      ESC
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSearch(true)}
                    className="hover:bg-white/5 group"
                  >
                    <Search className="w-4 h-4 transition-all group-hover:scale-110" style={{ color: 'rgba(255,255,255,0.4)' }} />
                  </Button>
                )}

                {/* Search Results Dropdown */}
                {searchQuery && showSearch && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black border border-dashed animate-scale-in" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                    {filteredTutorials.length > 0 ? (
                      filteredTutorials.map((tutorial, idx) => (
                        <button
                          key={tutorial.id}
                          onClick={() => {
                            handleSelectTutorial(tutorial.id);
                            setSearchQuery('');
                            setShowSearch(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-white/5 transition-all duration-200 group"
                          style={{ borderBottom: idx < filteredTutorials.length - 1 ? '1px dashed rgba(255,255,255,0.08)' : 'none' }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="num-label">{String(idx + 1).padStart(2, '0')}</span>
                            <div>
                              <div className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{tutorial.title}</div>
                              <div className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.35)' }}>{tutorial.description}</div>
                            </div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm font-mono-space" style={{ color: 'rgba(255,255,255,0.3)' }}>No results found</div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/chirag-pareek-369b4b265/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover:bg-white/5">
                  <Linkedin className="w-4 h-4 transition-all group-hover:scale-110" style={{ color: 'rgba(255,255,255,0.5)' }} />
                </Button>
              </a>
              <a
                href="https://x.com/lchi_no"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="ghost" size="icon" className="hover:bg-white/5">
                  <X className="w-4 h-4 transition-all group-hover:scale-110 group-hover:rotate-90" style={{ color: 'rgba(255,255,255,0.5)' }} />
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-5 lg:p-10 w-full max-w-full min-w-0 overflow-x-hidden">
          <TutorialContentRenderer tutorial={currentTutorial} />
        </main>
      </div>
    </div>
  );
}

export default App;
