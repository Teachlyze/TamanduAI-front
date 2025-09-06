'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, Suspense, useEffect, useState } from 'react';

// Wrapper que só renderiza após o client montar
function ThemeContent({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // evita mismatch

  return (
    <div
      className={`min-h-screen antialiased bg-slate-200 dark:bg-black/10`}
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
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={true}
      >
        <ThemeContent>{children}</ThemeContent>
      </ThemeProvider>
    </Suspense>
  );
}
