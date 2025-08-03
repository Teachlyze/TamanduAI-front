import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white p-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} TamanduAI. Todos os direitos reservados.</p>
                <nav className="mt-2">
                    <ul className="flex justify-center space-x-4">
                        <Link href="/privacy" className="hover:underline">
                            Política de Privacidade
                        </Link>
                        <Link href="/terms" className="hover:underline">
                            Termos de Uso
                        </Link>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}