"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="
      fixed top-4 left-1/2 -translate-x-1/2 z-50
      px-8 py-4 rounded-2xl
      bg-white/30
      backdrop-blur-xl
      border border-white/40
      inline-flex items-center
    "
    >
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">Gen AI IDS</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="#" className="hover:text-orange-500 transition">
            Dashboard
          </Link>
          <Link href="#" className="hover:text-orange-500 transition">
            About us
          </Link>
          <Link href="/login" className="hover:text-orange-500 transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
