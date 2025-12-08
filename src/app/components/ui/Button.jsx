"use client";

export default function Button() {
  return (
    <button
      className="
        relative inline-flex items-center gap-3
        bg-[#69d7cc] text-black text-lg font-medium
        px-8 py-4 rounded-full border-2 border-black
        transition-all duration-200

        /* Normal Shadow */
        shadow-[6px_8px_0px_#000]

        /* Hover = button presses in */
        hover:translate-y-1 hover:translate-x-1
        hover:shadow-[3px_4px_0px_#000]

        /* Active = fully pressed inside */
        active:translate-y-2 active:translate-x-2
        active:shadow-[0px_0px_0px_#000]
      "
    >
      <span>Schedule a meeting</span>
      <span className="text-2xl -mr-2">→</span>
    </button>
  );
}
