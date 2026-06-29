import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';
type ColorTheme = 'indigo' | 'cyan' | 'violet' | 'rose' | 'emerald' | 'amber';

interface ThemeContextType {
  theme: Theme;
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  setColorTheme: (color: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  colorTheme: 'indigo',
  toggleTheme: () => {},
  setColorTheme: () => {},
});

export const colorThemes: Record<ColorTheme, { primary: string; secondary: string; label: string }> = {
  indigo: { primary: '#6366f1', secondary: '#22d3ee', label: 'Indigo' },
  cyan: { primary: '#22d3ee', secondary: '#a78bfa', label: 'Cyan' },
  violet: { primary: '#a78bfa', secondary: '#f472b6', label: 'Violet' },
  rose: { primary: '#fb7185', secondary: '#fb923c', label: 'Rose' },
  emerald: { primary: '#34d399', secondary: '#22d3ee', label: 'Emerald' },
  amber: { primary: '#fbbf24', secondary: '#f97316', label: 'Amber' },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [colorTheme, setColorThemeState] = useState<ColorTheme>('indigo');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme;
    const savedColor = localStorage.getItem('colorTheme') as ColorTheme;
    if (saved) setTheme(saved);
    if (savedColor) setColorThemeState(savedColor);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const colors = colorThemes[colorTheme];
    document.documentElement.style.setProperty('--color-primary', colors.primary);
    document.documentElement.style.setProperty('--color-secondary', colors.secondary);
    localStorage.setItem('colorTheme', colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const setColorTheme = (color: ColorTheme) => setColorThemeState(color);

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
