import React from "react";

function Navbar() {
  return (
    <nav className=" bg-amber-50 flex items-center justify-around text-xs p-3">
      <div>
        <img src="Images\Logo.png" width={120} />
      </div>

      <div className="flex items-center justify-around gap-6 font-medium">
        <ul className="flex items-center justify-around gap-4 text-gray-800">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">VIDEOS</li>
          <li className="cursor-pointer">GAMES</li>
          <li className="cursor-pointer">FORUMS</li>
          <li className="cursor-pointer">PAGES</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>
        <div className="flex items-center justify-center gap-2">
          <button className="cursor-pointer text-purple-500 p-2">LOGIN</button>
          <button className="cursor-pointer bg-purple-500 text-white px-5 p-2 rounded-xl">
            REGISTER
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
