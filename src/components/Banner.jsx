import React, { useState } from "react";

function Banner() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div
      id="banner"
      className="flex items-center flex-col justify-center gap-1"
    >
      <div className="sm:w-xl">
        <h3
          id="banner-heading"
          className=" text-amber-300 sm:text-2xl md:text-3xl font-bold p-6 text-center"
        >
          Unleash Your Inner Champion Dive into the Ultimate Gaming Experience!
        </h3>
      </div>
      <div className="flex gap-4 text-xs">
        <button
          className={`relative overflow-hidden transition-all duration-300 hover:bg-amber-300 hover:ring-1 hover:ring-amber-100 hover:ring-offset-2 cursor-pointer text-white p-2 outline-1 px-5 outline-offset-1 outline-white rounded-xl ${activeButton == 1 && 'bg-amber-300'}`}
          onClick={() => setActiveButton(1)}
        >
          KNOW MORE
        </button>
        <button
          className={`relative overflow-hidden transition-all duration-300 hover:bg-amber-300 hover:ring-1 hover:ring-amber-100 hover:ring-offset-2 cursor-pointer text-white p-2 outline-1 px-5 outline-offset-1 outline-white rounded-xl ${activeButton == 2 && 'bg-amber-300'}`}
          onClick={() => setActiveButton(2)}
        >
          GET NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
