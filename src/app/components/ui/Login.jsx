"use client";

import Image from "next/image";
import loginImg from "../../assets/loginleft.jpg";

export default function Login() {
  return (
    <div className="w-full h-screen flex">
      <div className="hidden md:block md:w-1/2 h-screen relative">
        <Image
          src={loginImg}
          alt="Login"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-3xl font-semibold mb-6">Login</h1>

          <form className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition">
              Login
            </button>
          </form>

          <p className="mt-6 text-gray-600 text-sm">
            Need an account?{" "}
            <a href="/register" className="font-semibold underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
