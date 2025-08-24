import type { Metadata } from 'next';
import Main from '@/components/layout/Main';
import React from 'react';
import '../globals.css';
import DashboardHeader from '@/components/layout/DashboardHeader';

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
      <DashboardHeader />
      <Main
        props="flex flex-col items-center justify-center 
    min-h-screen bg-blue-200 w-full"
      >
        {children}
      </Main>
    </div>
  );
}
