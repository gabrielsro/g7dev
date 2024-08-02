export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid place-content-center">
      <div className="lg:max-w-[1200px]">{children}</div>
    </div>
  );
}
