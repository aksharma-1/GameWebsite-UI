import React from "react";

function Banner() {
  return (
    <div id="banner" className="flex items-center flex-col justify-center gap-1">
      <div className="w-2xl">
        <h3 id="banner-heading" className=" text-amber-300 text-4xl font-bold p-6 text-center">
          Unleash Your Inner Champion Dive into the Ultimate Gaming Experience!
        </h3>
      </div>
      <div className="flex gap-4 text-xs">
        <button className="cursor-pointer text-white p-2 outline-1 px-5 outline-offset-1 outline-white rounded-xl">
          KNOW MORE
        </button>
        <button className="cursor-pointer text-white bg-amber-300 px-6 p-2 rounded-xl font-bold">
          GET NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
