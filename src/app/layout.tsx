import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { Providers } from '@/components/ProviderTheme';

export const metadata: Metadata = {
  title: 'TamanduAI - Gestão educacional inteligente',
  description:
    'Transforme a gestão da sua instituição com automações, relatórios inteligentes e muito mais.',
  openGraph: {
    title: 'TamanduAI - Gestão educacional inteligente',
    description: 'A plataforma que revoluciona o ensino híbrido com automação e inovação.',
    url: 'https://tamanduaifront.vercel.app/',
    siteName: 'TamanduAI',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'TamanduAI - Gestão educacional inteligente',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TamanduAI - Gestão educacional inteligente',
    description: 'Plataforma para escolas que buscam inovação, automação e eficiência.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased text-black dark:text-white dark:bg-black/40`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
