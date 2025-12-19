"use client";
import { useRef, useState } from "react";

const glassCard =
  "rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b1220]/90 to-[#020617]/95 backdrop-blur-xl shadow-inner";

const DATA = [
  { month: "Jan", value: 8.2 },
  { month: "Feb", value: 7.6 },
  { month: "Mar", value: 8.1 },
  { month: "Apr", value: 7.9 },
  { month: "May", value: 9.3 },
  { month: "Jun", value: 12.8 },
  { month: "Jul", value: 24.56 },
  { month: "Aug", value: 18.2 },
  { month: "Sep", value: 21.7 },
  { month: "Oct", value: 19.3 },
  { month: "Nov", value: 26.4 },
  { month: "Dec", value: 29.1 },
];

const HEIGHT = 220;
const WIDTH = 1200;
const SCALE_Y = 3.5;

const getAvg = (data, i, w = 3) => {
  const slice = data.slice(Math.max(0, i - w + 1), i + 1);
  return slice.reduce((s, d) => s + d.value, 0) / slice.length;
};

export default function TrafficOverview() {
  const ref = useRef(null);
  const raf = useRef(null);
  const [active, setActive] = useState(6);

  const onMove = (e) => {
    if (raf.current) return;

    raf.current = requestAnimationFrame(() => {
      const r = ref.current.getBoundingClientRect();
      const x = e.clientX - r.left - 36;
      const w = r.width - 36;
      const idx = Math.round((Math.max(0, Math.min(x, w)) / w) * (DATA.length - 1));
      setActive(idx);
      raf.current = null;
    });
  };

  const xPct = (active / (DATA.length - 1)) * 100;
  const yMain = HEIGHT - DATA[active].value * SCALE_Y;
  const yAvg = HEIGHT - getAvg(DATA, active) * SCALE_Y;

  return (
    <div className={`${glassCard} p-5 relative overflow-hidden`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">
          Network Traffic & Anomaly Trend
        </h3>
        <div className="px-3 py-1 rounded-full bg-white/10 text-xs text-white/70">
          Weekly ⌄
        </div>
      </div>

      <div
        ref={ref}
        onMouseMove={onMove}
        className="relative h-[220px]"
      >
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-white/40">
          {[30, 25, 20, 15, 10, 5, 0].map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>

        <div className="absolute inset-y-0 left-9 right-0 flex flex-col justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="border-t border-white/5" />
          ))}
        </div>

        <svg
          className="absolute left-9 right-0 top-0 bottom-0"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="
              M0 165 L100 160 L200 162 L300 158 L400 155 L500 150
              L600 138 L700 122 L800 100 L900 78 L1000 115
              L1100 70 L1200 60 L1200 220 L0 220 Z
            "
            fill="url(#areaGrad)"
          />

          <path
            d="
              M0 165 L100 160 L200 162 L300 158 L400 155 L500 150
              L600 138 L700 122 L800 100 L900 78 L1000 115
              L1100 70 L1200 60
            "
            fill="none"
            stroke="#60a5fa"
            strokeWidth="3"
          />

          <path
            d="
              M0 150 L100 148 L200 150 L300 147 L400 145 L500 142
              L600 130 L700 115 L800 95 L900 75 L1000 100
              L1100 60 L1200 50
            "
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        <div
          className="absolute top-0 bottom-0 border-l border-dashed border-white/20 transition-transform duration-150"
          style={{ transform: `translateX(calc(36px + ${xPct}%))` }}
        />

        <div
          className="absolute transition-transform duration-150"
          style={{ transform: `translate(calc(36px + ${xPct}%), ${yMain}px)` }}
        >
          <div className="w-3 h-3 rounded-full bg-[#020617] border-2 border-blue-400" />
        </div>

        <div
          className="absolute transition-transform duration-150"
          style={{ transform: `translate(calc(36px + ${xPct}%), ${yAvg}px)` }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#020617] border-2 border-cyan-400" />
        </div>

        <div
          className="absolute transition-transform duration-150 bg-[#0b1220] px-4 py-2 rounded-2xl border border-white/10"
          style={{ transform: `translate(calc(36px + ${xPct}% - 50%), 26%)` }}
        >
          <p className="text-sm font-semibold">
            Threat: {DATA[active].value.toFixed(2)}
          </p>
          <p className="text-xs text-cyan-400">
            Avg: {getAvg(DATA, active).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-3 ml-9 flex justify-between text-xs text-white/40 relative">
        {DATA.map((d, i) => (
          <div key={d.month} className="relative">
            {i === active && (
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-cyan-400">
                AVG
              </span>
            )}
            <span className={i === active ? "text-white" : ""}>
              {d.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}



