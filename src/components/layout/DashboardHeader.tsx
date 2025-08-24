import {
  Columns3Cog,
  Menu,
  Info,
  Phone,
  UserIcon,
  Trash,
  School,
  UserRoundCog,
} from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';

export default function DashboardHeader() {
  return (
    <header className="p-2 flex sm:flex-col max-sm:justify-between items-center gap-16 bg-black/80 text-white">
      <Link href={'/'} className="font-bold">
        <Columns3Cog size={40} />
      </Link>

      <div className="flex sm:hidden ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md bg-transparent text-white">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="px-2 bg-black text-white border-r-2 border-gray-400">
            <SheetHeader className="py-4 px-2">
              <SheetTitle className="subtitle text-white">Navegação</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 px-2 overflow-y-auto h-[80vh]">
              <Link
                href="/Profile"
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Perfil
                <UserIcon className="inline ml-1" />
              </Link>
              <Link
                href={'/Dashboard'}
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Configurar Turma
                <Columns3Cog size={28} />
              </Link>
              <Link
                href={'/Dashboard'}
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Deletar Turma
                <Trash size={28} />
              </Link>
              <Link
                href={'/Dashboard'}
                className="text flex justify-between w-full hover:bg-gray-700/40 rounded-lg p-2"
              >
                Escolas
                <School size={28} />
              </Link>
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
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="max-sm:hidden flex sm:flex-col gap-6">
        <Link href={'/Dashboard'} className="font-bold">
          <Columns3Cog size={28} />
        </Link>
        <Link href={'/Dashboard'} className="font-bold">
          <Trash size={28} />
        </Link>
        <Link href={'/Dashboard'} className="font-bold">
          <School size={28} />
        </Link>
        <Link href={'/Dashboard'} className="font-bold">
          <UserRoundCog size={28} />
        </Link>
      </div>
    </header>
  );
}
