'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { ReactNode, Suspense, useEffect, useState } from 'react';

// Wrapper que só renderiza após o client montar
function ThemeContent({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // evita mismatch

  return (
    <div
      className={`min-h-screen antialiased ${theme === 'light' ? 'light' : 'dark'} bg-white dark:bg-black/10`}
    >
      {children}
    </div>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={false}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange={false}
      >
        <ThemeContent>{children}</ThemeContent>
      </ThemeProvider>
    </Suspense>
  );
}
