"use client";
import Image from "next/image";
import Link from "next/link";
import { Bell, Home, Search } from "lucide-react";
import profimg from "../../assets/prof.png";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="w-40 h-8 rounded-full bg-blue-800 flex items-center justify-center font-bold">
          QuantumSentinel
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-white/40 w-4 h-4" />
          <input
            placeholder="Search logs, IPs, threats..."
            className="bg-[#111827] pl-10 pr-4 py-2 rounded-xl text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/">
          <button className="p-2 rounded-full cursor-pointer bg-[#111827] hover:bg-[#1f2937] transition">
            <Home size={16} />
          </button>
        </Link>

        <button className="p-2 rounded-full bg-[#111827]">
          <Bell size={16} />
        </button>

        <div className="flex items-center gap-2">
          <Image src={profimg} className="w-8 h-8 rounded-full" alt="profile" />
          <div className="text-sm">
            <p className="font-medium">Mayank Singh</p>
            <p className="text-white/50 text-xs">
              CSE • Student
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
