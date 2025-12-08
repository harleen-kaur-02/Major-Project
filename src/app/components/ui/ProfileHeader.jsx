"use client";

import Image from "next/image";
import mayankimg from "../../assets/mayank.png";
import vanshik from "../../assets/vanshik.png";
import harleen from "../../assets/harleen.png";

export default function ProfileHeader() {
  return (
    <div className="w-full flex flex-col items-center mt-24 mb-24">
      <div className="w-full flex items-center justify-center gap-6">
        <div className="flex-1 max-w-[400px] border-t-2 border-gray-700"></div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <Image
                src={vanshik}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p className="mt-2 font-medium text-gray-700">Vanshika Dixit</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={mayankimg}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p className="mt-2 font-medium text-gray-700">Mayank Singh</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={harleen}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <p className="mt-2 font-medium text-gray-700">Harleen Kaur</p>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[400px] border-t-2 border-gray-700"></div>
      </div>
      <p className="text-gray-500 mt-4 text-center max-w-2xl">
        Welcome! We’re excited to present our major project — a Gen-AI–based
        Intrusion Detection System built to redefine intelligent threat
        detection.
      </p>
      <button className="mt-6 px-8 py-3 bg-[#0a0a23] text-white rounded-full hover:bg-black transition">
        Team Members
      </button>
    </div>
  );
}
