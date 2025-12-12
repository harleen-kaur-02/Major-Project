// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import hrimage from "../../assets/heroimage.png";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center gap-10">
//         <div className="text-left flex flex-col justify-center h-full mt-16 md:mt-0">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-black">
//             AI-Powered Intrusion Detection System
//           </h1>

//           <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
//             A next-generation Generative AI–driven intrusion detection system
//             that identifies security threats in real time, predicts attack
//             patterns, and strengthens cybersecurity with adaptive intelligence.
//           </p>

//           <Link
//             href="/mlmodel"
//             className="
//               relative inline-flex items-center gap-3
//               bg-[#6cd2c2] text-black text-lg font-medium
//               px-8 py-2 rounded-full border-2 border-black
//               transition-all duration-200
//               shadow-[6px_8px_0px_#000]
//               hover:translate-y-1 hover:translate-x-1
//               hover:shadow-[3px_4px_0px_#000]
//               active:translate-y-2 active:translate-x-2
//               active:shadow-[0px_0px_0px_#000]
//               w-fit
//             "
//           >
//             <span>Explore</span>
//             <span className="text-2xl -mr-2">→</span>
//           </Link>
//         </div>
//         <div className="relative w-full mt-6 md:mt-20 h-[280px] md:h-full block">
//           <Image
//             src={hrimage}
//             alt="Intrusion Detection Illustration"
//             fill
//             className="object-contain md:object-cover rounded-none"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import Link from "next/link";
import { Geist } from 'next/font/google';


const geist = Geist({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Hero() {
  return (
    
    <section className="relative min-h-screen bg-black flex items-center justify-center text-white overflow-hidden">

      {/* FULL Next.js Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute top-[-180px] left-[-180px] w-[360px] h-[360px] rounded-full border border-white/15"></div>
        <div className="absolute bottom-[-180px] right-[-180px] w-[360px] h-[360px] rounded-full border border-white/15"></div>
      </div>

      {/* CONTENT WRAPPER (GRID BOX) — ADDED top & bottom padding */}
      <div className="relative container mx-auto px-6 text-center max-w-4xl mt-10 pt-10 pb-10">

        {/* === VERTICAL LINES (FULL HEIGHT MATCH) === */}
        <div className="absolute top-0 bottom-0 left-0 border-l border-dashed border-white/30"></div>
        <div className="absolute top-0 bottom-0 right-0 border-l border-dashed border-white/30"></div>

        {/* ========== GRID CONTENT ========== */}
        <div className="relative">

          {/* TOP LINE */}
          <div className="relative mb-6">
            <div className="absolute left-1/2 -translate-x-1/2 w-[69vw] border-b border-dashed border-white/30"></div>
          </div>

          {/* HEADING */}
<h1
  className={`
    ${geist.className}
    text-[74px]
    leading-[74px]
    font-semibold
    text-[rgb(237,237,237)]
    mt-5 mb-4 relative z-10
  `}
>
  QuantumSentinel IDS
</h1>


          {/* BELOW HEADING */}
          <div className="relative mb-10">
            <div className="absolute left-1/2 -translate-x-1/2 w-[69vw] border-b border-dashed border-white/30"></div>
          </div>

          {/* SUBHEADING */}
<p
  className="
    text-[20px]
    leading-[36px]
    font-[400]
    text-[rgb(136,136,136)]
    mb-10 px-4 md:px-0
    font-[Geist,Inter,-apple-system,system-ui,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif]
  "
>
  Used by next-generation cyber platforms, this system enables you to detect{" "}
  <span className="text-white font-semibold">real-time security threats</span>{" "}
  with adaptive intelligence powered by Generative AI.
</p>


          {/* LINE UNDER SUBHEADING */}
          <div className="relative mb-10">
            <div className="absolute left-1/2 -translate-x-1/2 w-[69vw] border-b border-dashed border-white/30"></div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-center mt-16 gap-5">
            <Link
              href="/mlmodel"
              className="px-8 py-3 rounded-lg bg-white text-black font-semibold text-lg transition hover:bg-gray-200"
            >
              Get Started
            </Link>

            <Link
              href="/learn"
              className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold text-lg transition hover:border-gray-300 hover:text-white"
            >
              Learn More
            </Link>
          </div>

          {/* FOOTNOTE */}
          <p className="text-gray-500 mt-3 text-sm mb-4">
            ~ AI-IDS • powered by Generative Intelligence
          </p>

          {/* FOOTER LINE */}
          <div className="relative mt-5 mb-10">
            <div className="absolute left-1/2 -translate-x-1/2 w-[69vw] border-b border-dashed border-white/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
