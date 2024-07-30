import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex justify-between p-4 border-b w-screen lg:pr-10">
      <Link href="/">
        <div className="text-xl font-semibold">G7 Dev</div>
      </Link>
      <div className="flex gap-4 items-center lg:gap-10">
        <Link href="/blog">
          <div>Blog</div>
        </Link>
        <Link href="/about">
          <div>About</div>
        </Link>
      </div>
    </nav>
  );
}
