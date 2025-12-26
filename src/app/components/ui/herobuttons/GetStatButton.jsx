"use client";

import Link from "next/link";

export default function GetStatButton({ text = "Get Started", onClick }) {
  return (
    <Link href="/mlmodel">
      <button onClick={onClick} className="relative group">
        <div
          className="
            relative
            w-[180px] h-[64px]
            rounded-full
            bg-[#ced4da]
            p-[4px]
            shadow-[0_18px_30px_rgba(0,0,0,0.6)]
            cursor-pointer
          "
        >
          <div
            className="
              relative
              w-full h-full
              rounded-full
              bg-[#adb5bd]
              overflow-hidden
              flex items-center
              px-4
            "
          >

            <div
              className="
                absolute left-6 top-1/2
                -translate-y-1/2
                w-[45%] h-[70%]
                bg-white/15
                blur-xl
                rounded-full
              "
            />

            <div
              className="
                absolute left-2
                w-12 h-12
                rounded-full
                bg-gradient-to-br
                from-[#2c2c2c]
                to-black
                shadow-[inset_0_3px_6px_rgba(255,255,255,0.15),_0_10px_20px_rgba(0,0,0,0.8)]
                flex items-center justify-center
                text-white text-xl

                transition-transform
                duration-800
                ease-in-out

                group-hover:translate-x-[110px]
              "
            >
              →
            </div>

            <span
              className="
                relative z-10
                ml-12
                text-sm font-semibold
                text-black

                transition-all
                duration-800
                ease-in-out

                group-hover:-translate-x-8
              "
            >
              {text}
            </span>
          </div>
        </div>
      </button>
    </Link>
  );
}
