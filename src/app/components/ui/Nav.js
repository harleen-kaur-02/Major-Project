"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT — Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-white">QuantumSentinel IDS</h1>
        </div>

        {/* CENTER — Nav Links with underline hover */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          
          <Link href="#" className="relative group text-white">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#" className="relative group text-white">
            Dashboard
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="#" className="relative group text-white">
            About us
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/login" className="relative group text-white">
            Login
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* RIGHT — Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-1 rounded-lg bg-black border border-white/20 text-white hover:bg-white/20 transition">
            Start
          </button>
          <button className="px-4 py-1 rounded-lg bg-white text-black hover:bg-gray-200 transition">
            Learn
          </button>
        </div>

      </div>
    </nav>
  );
}
