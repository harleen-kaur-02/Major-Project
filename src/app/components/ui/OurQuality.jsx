"use client";
import localFont from "next/font/local";

const calSans = localFont({
  src: "../../../../public/fonts/Fellix-Medium.ttf",
  weight: "400",
  style: "normal",
});

export default function OurQuality() {
  return (
    <section className="relative w-full bg-black text-white py-40 overflow-hidden">

      <div className="relative flex justify-center mb-36">
        <div
          className="
            absolute
            -top-[220%]
            w-[1000px]
            h-[1000px]
            rounded-full
            bg-[radial-gradient(circle,rgba(37,99,235,0.22),transparent_65%)]
            blur-[2px]
            z-0
          "
        />

        <h2
          className={`
            ${calSans.className}
            relative z-10
            text-center
            text-[61px]
            leading-[60px]
            font-normal
            text-white
          `}
        >
          Intelligence That <br />
          Detects Everything
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-40 items-start">

        <div className="relative flex flex-col items-center">
          <svg width="560" height="560" viewBox="0 0 560 560">
            <circle
              cx="280"
              cy="280"
              r="260"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="1.5 12"
              strokeLinecap="round"
              opacity="0.95"
            />

            <text
              x="280"
              y="200"
              textAnchor="middle"
              fontSize="10"
              letterSpacing="0.25em"
              fill="white"
              opacity="0.18"
            >
              THERE ARE PATHS IN THE WORLD THAT CAN’T BE SEEN
            </text>

            <text
              x="280"
              y="340"
              textAnchor="middle"
              fontSize="160"
              fontWeight="300"
              fill="white"
            >
              100%
            </text>
          </svg>

          <p className="mt-10 text-center text-[20px] leading-relaxed text-white/80 max-w-md">
            Of security threats were accurately classified <br />
            by our generative AI engine
          </p>
        </div>

        <div className="relative flex flex-col items-center translate-x-[-32px]">
          <svg width="600" height="560" viewBox="0 0 560 560">
            <circle
              cx="220"
              cy="280"
              r="240"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.25"
            />
            <circle
              cx="340"
              cy="280"
              r="240"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.25"
            />
            <circle
              cx="280"
              cy="280"
              r="100"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.25"
            />

            <text
              x="280"
              y="340"
              textAnchor="middle"
              fontSize="160"
              fontWeight="300"
              fill="white"
            >
              +250%
            </text>
          </svg>

          <p className="mt-10 text-center text-[20px] leading-relaxed text-white/80 max-w-md">
            Proven intrusion detection performance <br />
            powered by generative intelligence
          </p>
        </div>

      </div>
    </section>
  );
}
