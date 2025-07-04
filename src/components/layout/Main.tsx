export default function Main({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                {children}
            </div>
        </main>
    );
}