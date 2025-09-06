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
    <div className="flex flex-col min-h-screen mx-auto w-full">
      <DashboardHeader />
      <Main
        props="flex flex-col items-center
    min-h-screen w-full mt-1"
      >
        {children}
      </Main>
    </div>
  );
}
