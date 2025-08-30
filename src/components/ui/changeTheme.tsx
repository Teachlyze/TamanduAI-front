'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className={`
        px-2 text-sm rounded-md font-medium 
        transition-all duration-300 ease-in-out
        transform active:scale-95
        ${
          theme === 'dark'
            ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
            : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200'
        }
        shadow-sm hover:shadow-md
      `}
    >
      {theme === 'dark' ? (
        <div className="flex items-center gap-2 transition-all duration-200">
          <span className="text-yellow-400 transition-transform duration-200 hover:rotate-12">
            ☀️
          </span>
          <p>Tema Claro</p>
        </div>
      ) : (
        <div className="flex items-center gap-2 transition-all duration-200">
          <span className="text-blue-400 transition-transform duration-200 hover:-rotate-12">
            🌙
          </span>
          <p>Tema Escuro</p>
        </div>
      )}
    </button>
  );
}
