import Image from 'next/image';
import {
  Bolt,
  BookMarked,
  BookOpen,
  Columns3Cog,
  Info,
  Menu,
  Phone,
  School,
  Trash2,
  UserIcon,
  UserRoundCog,
} from 'lucide-react';
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger, Sheet } from '../ui/sheet';
import Link from 'next/link';
import ChangeTheme from '../ui/changeTheme';

export default function DashboardHeader() {
  return (
    <header className="bg-black w-full shadow-md">
      <div className="px-3 p-2 mx-auto max-w-7xl flex justify-between items-center gap-16 text-white">
        <div className="flex items-center font-medium justify-between gap-2">
          <BookOpen className="w-10 h-10 p-2 bg-blue-600 rounded-lg text-white" />
          <p>TamanduAI-Classs</p>
        </div>

        <ul className="max-sm:hidden flex gap-8 items-center">
          <li>
            <ChangeTheme />
          </li>
          <li className="cursor-pointer hover:bg-gray-500/50 p-2 rounded-lg">
            <BookMarked strokeWidth={2} />
          </li>
          <li className="cursor-pointer hover:bg-gray-500/50 p-2 rounded-lg">
            <Bolt strokeWidth={2} />
          </li>
          <li className="">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="rounded-full border-2 border-blue-500"
              width={50}
              height={50}
            />
          </li>
        </ul>
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-slate-100">
            <SheetHeader className="w-full m-0 p-2">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between border-b border-gray-600 p-2"
                  href="/dashboard"
                >
                  Dashboard
                  <Columns3Cog className="inline mr-2" />
                </Link>
              </li>
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between border-b border-gray-600 p-2"
                  href="/dashboard/profile"
                >
                  Perfil
                  <UserIcon className="inline mr-2" />
                </Link>
              </li>
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between border-b border-gray-600 p-2"
                  href="/dashboard/settings"
                >
                  Configurações
                  <UserRoundCog className="inline mr-2" />
                </Link>
              </li>
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between border-b border-gray-600 p-2"
                  href="/dashboard/school"
                >
                  Escola
                  <School className="inline mr-2" />
                </Link>
              </li>
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between border-b border-gray-600 p-2"
                  href="/dashboard/contact"
                >
                  Contato
                  <Phone className="inline mr-2" />
                </Link>
              </li>
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between border-b border-gray-600 p-2"
                  href="/dashboard/about"
                >
                  Sobre
                  <Info className="inline mr-2" />
                </Link>
              </li>
              <li className="w-[90%] mx-auto">
                <Link
                  className="flex justify-between text-red-600 p-2"
                  href="/dashboard/delete-account"
                >
                  Deletar conta
                  <Trash2 className="inline mr-2" />
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
