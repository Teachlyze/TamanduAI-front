import Link from 'next/link';

export default function Footer({ prop }: { prop: string }) {
  return (
    <footer className={`${prop} text-black font-medium p-4`}>
      <div className="container mx-auto text-center text-sm">
        <p>
          © {new Date().getFullYear()} TamanduAI. Todos os direitos reservados.
        </p>
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
