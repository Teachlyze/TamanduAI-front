'use client';
import { Info, Phone, LayoutDashboard, UserIcon, Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link href="/" className="text-3xl font-medium drop-shadow-2xl cursor-pointer">
        TamanduAI
      </Link>

      <div className="md:hidden ml-auto">
        {/* Botão para abrir o menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md bg-black text-white">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="px-2 bg-black text-white border-r-2 border-gray-400">
            <SheetHeader className="py-4 px-2">
              <SheetTitle className="subtitle text-white">Navegação</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 px-2">
              <Link
                href="/Sobre"
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Sobre
                <Info className="inline ml-1" />
              </Link>
              <Link
                href="/Contato"
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Contato
                <Phone className="inline ml-1" />
              </Link>
              <Link
                href="/Dashboard"
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Dashboard
                <LayoutDashboard className="inline ml-1" />
              </Link>
              <Link
                href="/Profile"
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Perfil
                <UserIcon className="inline ml-1" />
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="space-x-6 flex">
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/Sobre"
            className="shadow-md rounded-lg p-2 hover:bg-yellow-800 bg-yellow-500 text-black hover:text-white
            transition-all ease-in-out font-medium flex items-center gap-2"
          >
            <Info size={16} /> Sobre nós
          </Link>
          <Link
            href="/Contato"
            className="shadow-md rounded-lg p-2 hover:bg-yellow-800 bg-yellow-500 text-black hover:text-white
            transition-all ease-in-out font-medium flex items-center gap-2"
          >
            <Phone size={16} /> Contato
          </Link>
          <Link
            href="/Dashboard"
            className="shadow-md rounded-lg p-2 hover:bg-yellow-800 bg-yellow-500 text-black hover:text-white
            transition-all ease-in-out font-medium flex items-center gap-2"
          >
            <LayoutDashboard size={16} /> Dashboard
          </Link>
          <Link
            href="/Profile"
            className="text-white border-2 border-yellow-500 
              duration-150 transition-all ease-in-out bg-black hover:scale-105 hover:bg-yellow-800 rounded-full font-medium flex p-2 items-center gap-1"
          >
            <UserIcon strokeWidth={2} height={24} width={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
