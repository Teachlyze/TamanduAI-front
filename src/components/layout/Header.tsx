export default function Header(){
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">TamanduAI</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Início</a></li>
                    <li><a href="/about" className="hover:underline">Sobre nós</a></li>
                    <li><a href="/contact" className="hover:underline">Contatar</a></li>
                </ul>
            </nav>
        </header>
    )
}