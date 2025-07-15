import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative bg-amber-50 flex items-center justify-around text-xs p-3">
        <a href="/">
          <img src="Images\Logo.png" width={120} className="cursor-pointer" />
        </a>

        <div className="flex items-center justify-around gap-6 font-medium">
          <ul className="md:flex items-center justify-around gap-4 text-gray-800 hidden">
            <li className="cursor-pointer hover:pb-2 duration-200">HOME</li>
            <li className="cursor-pointer hover:pb-2 duration-200">VIDEOS</li>
            <li className="cursor-pointer hover:pb-2 duration-200">GAMES</li>
            <li className="cursor-pointer hover:pb-2 duration-200">FORUMS</li>
            <li className="cursor-pointer hover:pb-2 duration-200">PAGES</li>
            <li className="cursor-pointer hover:pb-2 duration-200">CONTACT</li>
          </ul>
          <div className="flex items-center justify-center gap-2">
            <button
              role="link"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-purple-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer text-purple-500 py-2 mx-2"
            >
              LOGIN
            </button>

            <button className="group relative overflow-hidden transition text-xs font-medium outline-1 outline-offset-1 outline-white cursor-pointer bg-purple-500 text-white px-5 p-2 rounded-xl">
              REGISTER
              <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
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
          className={`absolute z-20 md:hidden h-64 bg-amber-50 pt-3 top-15 left-0 w-full flex flex-col gap-6 items-center transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
          style={{
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <li className="flex justify-center items-center gap-1 list-none text-center transition-all cursor-pointer hover:gap-2 duration-200">
            <i className="bx bx-home text-lg"></i>
            HOME
          </li>
          <li className="flex justify-center items-center gap-1 list-none text-center transition-all cursor-pointer hover:gap-2 duration-200">
            <i className="bx bx-video text-lg"></i>
            VIDEOS
          </li>
          <li className="flex justify-center items-center gap-1 list-none text-center transition-all cursor-pointer hover:gap-2 duration-200">
            <i className="bx bx-joystick text-lg"></i>
            GAMES
          </li>
          <li className="flex justify-center items-center gap-1 list-none text-center transition-all cursor-pointer hover:gap-2 duration-200">
            <i className="bx bx-community text-lg"></i>
            FORUMS
          </li>
          <li className="flex justify-center items-center gap-1 list-none text-center transition-all cursor-pointer hover:gap-2 duration-200">
            <i className="bx bx-newspaper text-lg"></i>
            PAGES
          </li>
          <li className="flex justify-center items-center gap-1 list-none text-center transition-all cursor-pointer hover:gap-2 duration-200">
            <i className="bx bx-phone text-lg"></i>
            CONTACT
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
