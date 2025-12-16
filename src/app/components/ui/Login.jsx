"use client";

import Image from "next/image";
import loginImg from "../../assets/loginleft.jpg";

export default function Login() {
  return (
    <div className="w-full h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2 h-screen relative">
        <Image
          src={loginImg}
          alt="Login"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* RIGHT LOGIN */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 bg-black text-white">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-3xl font-semibold mb-6">Login</h1>

          <form className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="
                  mt-1 w-full px-4 py-2
                  bg-transparent
                  border border-white/30
                  text-white
                  placeholder-white/50
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                "
              />
            </div>

            <div>
              <label className="text-sm font-medium text-white">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="
                  mt-1 w-full px-4 py-2
                  bg-transparent
                  border border-white/30
                  text-white
                  placeholder-white/50
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                "
              />
            </div>

            <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Login
            </button>
          </form>

          <p className="mt-6 text-white/70 text-sm">
            Need an account?{" "}
            <a href="/register" className="font-semibold underline text-white">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
