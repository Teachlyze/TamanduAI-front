export default function Main({
  children,
  props,
}: Readonly<{
  children: React.ReactNode;
  props?: string;
}>) {
  return (
    <main className={props}>
      <div className="w-full">{children}</div>
    </main>
  );
}
