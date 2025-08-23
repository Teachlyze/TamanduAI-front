import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
