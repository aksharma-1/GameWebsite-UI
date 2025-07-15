import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative bg-amber-50 flex items-center justify-around text-xs p-3">
        <div>
          <img src="Images\Logo.png" width={120} />
        </div>

        <div className="flex items-center justify-around gap-6 font-medium">
          <ul className="md:flex items-center justify-around gap-4 text-gray-800 hidden">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">VIDEOS</li>
            <li className="cursor-pointer">GAMES</li>
            <li className="cursor-pointer">FORUMS</li>
            <li className="cursor-pointer">PAGES</li>
            <li className="cursor-pointer">CONTACT</li>
          </ul>
          <div className="flex items-center justify-center gap-2">
            <button className="cursor-pointer text-purple-500 p-2">
              LOGIN
            </button>
            <button className="cursor-pointer bg-purple-500 text-white px-5 p-2 rounded-xl">
              REGISTER
            </button>
            <button className="md:hidden cursor-pointer p-2 rounded-xl focus:outline-1 focus:outline-purple-300">
              <i
                className="bx bx-menu text-xl text-gray-600"
                onClick={() => setMenuOpen(!isMenuOpen)}
              ></i>
            </button>
          </div>
        </div>

        <div
          className={`absolute xl:hidden bg-amber-50 top-15 left-0 w-full flex flex-col items-center transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">HOME</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">VIDEOS</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">GAMES</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">FORUMS</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">PAGES</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">CONTACT</li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
