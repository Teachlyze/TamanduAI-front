'use client';
import { Info, Phone, LayoutDashboard, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useRouter,usePathname} from "next/navigation";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

export default function Header(){
    const router = useRouter(); 
    return (
        <header className="flex justify-between items-center p-4 shadow-md bg-white">
            <h1 className="text-3xl font-bold text-black">TamanduAI</h1>
            <nav className="space-x-6 flex">
                <div className="md:hidden flex items-center gap-4">
                    <Select onValueChange={(value) => {
                        console.log(value);
                            if (value === "sobre") {
                                router.push("/Sobre");
                            } else if (value === "contato") {
                                router.push("/Contato");
                            } else if (value === "dashboard") {
                                router.push("/Dashboard");
                            }
                        }}>
                            <SelectTrigger className="max-w-40 bg-white" defaultValue='none'>
                                <SelectValue placeholder="Páginas" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="sobre">Sobre</SelectItem>
                                <SelectItem value="contato">Contato</SelectItem>
                                <SelectItem value="dashboard">Dashboard</SelectItem>
                            </SelectContent>
                    </Select>
                    <div className="flex items-center">
                        <Link href="/Profile" className="bg-white border-2 rounded-full border-blue-500 font-medium flex p-2 items-center gap-1">
                            <UserIcon/>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6 text-black">
                    <Link href="/Sobre" className="hover:text-yellow-300 font-medium flex items-center gap-2">
                        <Info size={16}/> Sobre nós
                    </Link>
                    <Link href="/Contato" className="hover:text-yellow-300 font-medium flex items-center gap-2">
                        <Phone size={16}/> Contato
                    </Link>
                    <Link href="/Dashboard" className="hover:text-yellow-300 font-medium flex items-center gap-2">
                        <LayoutDashboard size={16}/> Dashboard
                    </Link>
                    <Link href="/Profile" className="text-black bg-white rounded-full font-medium flex p-2 items-center gap-1">
                        <UserIcon strokeWidth={2}/>
                    </Link>
                </div>
            </nav>
      </header>
    )
}