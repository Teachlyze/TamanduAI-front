export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2023 TamanduAI. Todos os direitos reservados.</p>
                <nav className="mt-2">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="/privacy" className="hover:underline">Política de Privacidade</a></li>
                        <li><a href="/terms" className="hover:underline">Termos de Uso</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}