'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import { Toaster as SonnerToaster } from 'sonner';
import { ToastProvider } from '@/components/ui/toast';

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
      <ToastProvider>
        {children}
        <SonnerToaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            classNames: {
              toast: 'font-sans',
              title: 'font-semibold',
              description: 'text-sm opacity-90',
              error: 'bg-destructive text-destructive-foreground border-destructive/50',
              success: 'bg-green-600 text-white border-green-700/50',
              warning: 'bg-yellow-500 text-white border-yellow-600/50',
              info: 'bg-blue-500 text-white border-blue-600/50',
            },
          }}
        />
      </ToastProvider>
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
