import React from "react";
import Pagination from "./Pagination";
import ProductCard from "./Cards/ProductCard";

function GameAccessories() {
  const categories = [
    "mouse",
    "keyboard",
    "gaming headset",
    "gaming controls",
    "monitor",
    "chair",
    "speakers",
    "webcam",
    "joystick",
    "glasses",
    "vr headset",
    "router",
    " microphone",
    "cable management",
    "surge protector",
  ];
  const products = [
    "white & orange headphone",
    "green & black headphone",
    "Ferrari special edition head... ",
    "pink & blue headphone",
    "pure gaming headphone",
    "comfy headphone",
    "sony headphone",
    "pure black headphone",
  ];

  return (
    <div className="pt-10">
      <h3 className="font-bold text-center text-gray-900 mb-1">
        GAMES CATEGORIES
      </h3>
      <p className="text-sm text-center font-medium text-gray-600">
        GameQuest - Discover, Play, and Conquer the Best Games of the Decade!
      </p>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-5 px-10 md:px-30 lg:px-40">
        {categories.slice(0, 8).map((item, index) => (
          <>
            <button
              key={index + 9}
              className={`cursor-pointer border-1 font-medium border-solid border-amber-200 p-1 px-1 rounded uppercase w-full ${
                item == "gaming headset" ? "bg-amber-400 text-white" : ""
              }`}
              style={{
                fontSize: "10px",
              }}
            >
              {item}
            </button>
          </>
        ))}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mt-2 px-10 md:px-30 lg:px-40">
        {categories.slice(8).map((item, index) => (
          <>
            <button
              className="cursor-pointer border-1 font-medium border-solid border-amber-200 p-1 px-2 rounded uppercase w-full"
              style={{
                fontSize: "10px",
              }}
            >
              {item}
            </button>
          </>
        ))}
      </div>

      {/* -search input- */}
      <div className="search_box flex items-center justify-center gap-3 my-6 px-10">
        <div className="border-1 rounded-lg p-1 px-2 flex items-center w-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            class="rounded-md text-xs p-1 w-full focus:border-0"
            placeholder="SEARCH FOR ACCESSORIES"
          ></input>
        </div>
        <div>
          <button className="cursor-pointer bg-purple-500 text-white text-xs px-5 p-2 rounded-lg">
            SEARCH
          </button>
        </div>
      </div>

      {/* -Game cards---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 md:px-20 lg:px-40">
        {products.map((item, index) => (
          <ProductCard key={index * 31} title={item} image={index + 1} />
        ))}
      </div>

      {/* -----pagination---- */}
      <Pagination />
    </div>
  );
}

export default GameAccessories;
