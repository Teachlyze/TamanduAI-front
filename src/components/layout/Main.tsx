export default function Main({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-blue-200 w-full">
            <div className="w-full">
                {children}
            </div>
        </main>
    );
}