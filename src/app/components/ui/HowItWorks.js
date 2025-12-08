"use client";
import Image from "next/image";
import howimg from "../../assets/howitwork.png";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-black mb-4">
        How It Works
      </h1>

      <div className="w-full flex justify-center mb-10">
        <div className="w-24 h-1 bg-black rounded-full"></div>
      </div>

      <div className="w-full mt-12 flex justify-center">
        <div className="w-[90%] md:w-[80%]">
          <Image
            src={howimg}
            alt="How It Works Illustration"
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
