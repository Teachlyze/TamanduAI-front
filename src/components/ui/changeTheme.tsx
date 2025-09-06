'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // pega do localStorage ou sistema
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-2 text-sm cursor-pointer rounded-md font-medium 
        transition-all duration-300 ease-in-out
        transform active:scale-95 bg-gradient-to-r
        ${
          theme === 'dark'
            ? 'from-blue-500 to-white hover:bg-black text-black'
            : 'from-blue-700 to-gray-800 hover:bg-gray-50 text-white'
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
