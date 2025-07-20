import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import React from 'react';
import '../globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TamanduAI',
  description: 'Sua gestão educacional com inteligência',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex max-sm:flex-col min-h-screen">
      <header className="sm:max-w-[80px] w-full bg-blue-600 text-white max-sm:shadow-md">
        <nav className="w-full flex flex-col items-center gap-12 bg-black h-full p-4">
          <Link href={'/'} className="bg-blue-400 text-white p-2 rounded-lg mb-14">
            Opção
          </Link>
          <div className='w-full flex flex-col gap-12'>
            <Link href={'/'}>Opção</Link>
            <Link href={'/'}>Opção</Link>
            <Link href={'/'}>Opção</Link>
            <Link href={'/'}>Opção</Link>
          </div>
        </nav>
      </header>
      <Main>{children}</Main>
    </div>
  );
}
