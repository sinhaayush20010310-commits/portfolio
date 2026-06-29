import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCommandPalette } from '../../hooks';

const commands = [
  { label: 'Go to Home', action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), icon: '🏠', shortcut: 'H' },
  { label: 'Go to About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), icon: '👤', shortcut: 'A' },
  { label: 'Go to Skills', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), icon: '⚡', shortcut: 'S' },
  { label: 'Go to Experience', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), icon: '💼', shortcut: 'E' },
  { label: 'Go to Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), icon: '🚀', shortcut: 'P' },
  { label: 'Go to Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), icon: '📧', shortcut: 'C' },
  { label: 'Download Resume', action: () => window.open('/resume.pdf'), icon: '📄', shortcut: 'R' },
  { label: 'Open GitHub', action: () => window.open('https://github.com/ayushsinha', '_blank'), icon: '🐙', shortcut: '' },
  { label: 'Open LinkedIn', action: () => window.open('https://linkedin.com/in/ayushsinha', '_blank'), icon: '💼', shortcut: '' },
];

export default function CommandPalette() {
  const { isOpen, setIsOpen } = useCommandPalette();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
      if (e.key === 'Enter' && filtered[selected]) {
        filtered[selected].action();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, filtered, selected]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Palette */}
          <div className="fixed top-1/4 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg px-4">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="glass-dark rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setSelected(0); }}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent text-white placeholder-gray-600 text-sm focus:outline-none"
                />
                <kbd className="text-xs text-gray-600 bg-white/5 px-1.5 py-0.5 rounded font-mono">ESC</kbd>
              </div>

              {/* Results */}
              <div className="py-2 max-h-64 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-gray-600 text-sm py-6">No commands found</p>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.label}
                      onClick={() => { cmd.action(); setIsOpen(false); }}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        selected === i ? 'bg-primary-600/20 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="text-base w-6">{cmd.icon}</span>
                      <span className="flex-1 text-left">{cmd.label}</span>
                      {cmd.shortcut && (
                        <kbd className="text-xs text-gray-600 bg-white/5 px-1.5 py-0.5 rounded font-mono">
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-white/5 flex items-center gap-4 text-xs text-gray-600">
                <span className="flex items-center gap-1"><kbd className="bg-white/5 px-1 rounded font-mono">↑↓</kbd> Navigate</span>
                <span className="flex items-center gap-1"><kbd className="bg-white/5 px-1 rounded font-mono">↵</kbd> Select</span>
                <span className="ml-auto font-mono">Ctrl+K</span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
