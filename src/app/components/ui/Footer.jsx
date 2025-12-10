export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + Text */}
          <div>
            <h1 className="text-xl font-semibold tracking-wide">GENAI_IDS</h1>
            <p className="text-sm text-white mt-4 leading-relaxed opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aut debitis necessitatibus nihil aliquam dolorem repellat ea est nobis placeat. Dicta explicabo nobis voluptas eveniet ea incidunt in iusto nesciunt.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Why GENAI_IDS?</li>
              <li>Customer Stories</li>
              <li>Blog</li>
              <li>Guides</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>About us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:pl-10">
          <p className="text-sm text-orange-400 font-semibold">DEMO</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
            Request a Demo
          </h2>

          {/* Email Input */}
          {/* <div className="mt-6 flex items-center bg-white rounded-full overflow-hidden w-full md:w-3/4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-3 flex-1 text-black text-sm outline-none"
            />
            <button className="bg-orange-500 px-5 py-3 text-white font-bold hover:bg-orange-600">
              →
            </button>
          </div> */}

          {/* Illustration Placeholder */}
          {/* <div className="mt-10">
            <div className="w-40 h-40 bg-gray-600 rounded-lg opacity-40"></div>
          </div> */}
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-sm text-white flex flex-col md:flex-row justify-between opacity-80">
        <p>© 2025 Major Project.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <button>Support</button>
          <button>Privacy Policy</button>
          <button>Terms of Use</button>
          <button>Cookie Policy</button>
        </div>
      </div>
    </footer>
  );
}
