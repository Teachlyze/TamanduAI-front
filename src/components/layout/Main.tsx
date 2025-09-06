export default function Main({
  children,
  props,
}: Readonly<{
  children: React.ReactNode;
  props?: string;
}>) {
  return (
    <main className={`${props} mx-auto`}>
      <div className="w-full">{children}</div>
    </main>
  );
}
