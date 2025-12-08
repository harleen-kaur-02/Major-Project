"use client";
import Image from "next/image";
import Link from "next/link";
import hrimage from "../../assets/heroimage.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center gap-10">
        <div className="text-left flex flex-col justify-center h-full mt-16 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-black">
            AI-Powered Intrusion Detection System
          </h1>

          <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
            A next-generation Generative AI–driven intrusion detection system
            that identifies security threats in real time, predicts attack
            patterns, and strengthens cybersecurity with adaptive intelligence.
          </p>

          <Link
            href="/mlmodel"
            className="
              relative inline-flex items-center gap-3
              bg-[#6cd2c2] text-black text-lg font-medium
              px-8 py-2 rounded-full border-2 border-black
              transition-all duration-200
              shadow-[6px_8px_0px_#000]
              hover:translate-y-1 hover:translate-x-1
              hover:shadow-[3px_4px_0px_#000]
              active:translate-y-2 active:translate-x-2
              active:shadow-[0px_0px_0px_#000]
              w-fit
            "
          >
            <span>Explore</span>
            <span className="text-2xl -mr-2">→</span>
          </Link>
        </div>
        <div className="relative w-full mt-6 md:mt-20 h-[280px] md:h-full block">
          <Image
            src={hrimage}
            alt="Intrusion Detection Illustration"
            fill
            className="object-contain md:object-cover rounded-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
