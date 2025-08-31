'use client';
import { Info, Phone, LayoutDashboard, UserIcon, Menu, Home, BookOpen, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isHomePage 
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-white/10"
        : "bg-white dark:bg-gray-900 shadow-md"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="flex items-center group" 
            aria-label="TamanduAI Home"
          >
            <div className="relative h-10 w-10 flex-shrink-0">
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 transition-all duration-300">
              TamanduAI
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="px-2 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
                <SheetHeader className="py-4 px-2">
                  <SheetTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                    Navegação
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 px-2 mt-4">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      pathname === '/' 
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    <Home className="h-5 w-5" />
                    Início
                  </Link>
                  <Link
                    href="/sobre"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      pathname === '/sobre' 
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    <Info className="h-5 w-5" />
                    Sobre
                  </Link>
                  <Link
                    href="/contato"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      pathname === '/contato' 
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    <MessageSquare className="h-5 w-5" />
                    Contato
                  </Link>
                  <Link
                    href="/dashboard"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      pathname.startsWith('/dashboard') 
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                </nav>
                
                <div className="mt-6 px-2">
                  <Link
                    href="/profile"
                    className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <span>Minha Conta</span>
                    <UserIcon className="h-5 w-5" />
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={cn(
                "relative group text-sm font-medium transition-colors",
                pathname === '/'
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              )}
            >
              Início
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300",
                pathname === '/' ? 'w-full' : 'group-hover:w-full'
              )}></span>
            </Link>
            <Link 
              href="/sobre" 
              className={cn(
                "relative group text-sm font-medium transition-colors",
                pathname === '/sobre'
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              )}
            >
              Sobre
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300",
                pathname === '/sobre' ? 'w-full' : 'group-hover:w-full'
              )}></span>
            </Link>
            <Link 
              href="/contato" 
              className={cn(
                "relative group text-sm font-medium transition-colors",
                pathname === '/contato'
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              )}
            >
              Contato
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300",
                pathname === '/contato' ? 'w-full' : 'group-hover:w-full'
              )}></span>
            </Link>
            <Link 
              href="/dashboard" 
              className={cn(
                "relative group text-sm font-medium transition-colors",
                pathname.startsWith('/dashboard')
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              )}
            >
              Dashboard
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300",
                pathname.startsWith('/dashboard') ? 'w-full' : 'group-hover:w-full'
              )}></span>
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <UserIcon className="h-5 w-5" />
              <span>Minha Conta</span>
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Acessar Plataforma
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
