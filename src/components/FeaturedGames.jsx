import React from "react";

function FeaturedGames() {
  return (
    <div className="">
      {/* upper section */}
      <div className="flex items-center justify-around p-3 bg-purple-500 text-white">
        <div>
          <h4 className="font-semibold text-base">FEATURED GAMES</h4>
          <p className="text-xs">Top picks - hottest games of the season</p>
        </div>
        <div>
          <button className="cursor-pointer text-xs p-1 font-medium outline-1 px-3 outline-offset-1 outline-white rounded-lg">
            SEE ALL
          </button>
        </div>
      </div>
      {/* Lower section */}
      <div className="p-8 px-20 bg-neutral-900">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <img src="/public/Images/Games/game1.jpg" className="rounded-2xl"/>
          </li>
          <li>
            <img src="/public/Images/Games/game2.jpg" className="rounded-2xl"/>
          </li>
          <li>
            <img src="/public/Images/Games/game3.jpg" className="rounded-2xl"/>
          </li>
          <li>
            <img src="/public/Images/Games/game4.jpg" className="rounded-2xl"/>
          </li>
          <li>
            <img src="/public/Images/Games/game5.jpg" className="rounded-2xl"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedGames;
