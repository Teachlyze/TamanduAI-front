import Footer from '@/components/layout/Footer';
import HomePageTemplate from '@/templates/home/page';
import Main from '@/components/layout/Main';
import { UserIcon, Info, Phone, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <Link href="/" className="text-3xl font-medium drop-shadow-2xl cursor-pointer">
          TamanduAI
        </Link>
        <nav className="space-x-6 flex">
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/Sobre"
              className="shadow-md rounded-lg p-2 hover:bg-green-500 hover:text-white
            transition-all ease-in-out border-2 border-green-500 font-medium flex items-center gap-2"
            >
              <Info size={16} /> Sobre nós
            </Link>
            <Link
              href="/Contato"
              className="shadow-md rounded-lg p-2 hover:bg-green-500 hover:text-white
            transition-all ease-in-out border-2 border-green-500 font-medium flex items-center gap-2"
            >
              <Phone size={16} /> Contato
            </Link>
            <Link
              href="/Dashboard"
              className="shadow-md rounded-lg p-2 hover:bg-green-500 hover:text-white
            transition-all ease-in-out border-2 border-green-500 font-medium flex items-center gap-2"
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>
            <Link
              href="/Profile"
              className="text-black border-2 border-white hover:border-green-500 duration-150 transition-all ease-in-out bg-white rounded-full font-medium flex p-2 items-center gap-1"
            >
              <UserIcon strokeWidth={2} />
            </Link>
          </div>
        </nav>
      </header>
      <Main
        props="
    flex flex-col items-center
    min-h-screen bg-blue-200"
      >
        <HomePageTemplate />
      </Main>
      <Footer prop="bg-slate-200" />
    </>
  );
}
