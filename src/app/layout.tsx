import type { Metadata } from "next"
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "TamanduAI",
  description: "Sua gestão educacional com inteligência",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
          {children}
      </body>
    </html>
  );
}
