import React from "react";
import { motion } from "framer-motion";

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
          <button className="group relative overflow-hidden transition cursor-pointer bg-purple-500 text-white rounded-lg text-xs p-1 font-medium outline-1 px-3 outline-offset-1 outline-white">
            SEE ALL
            <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
          </button>
        </div>
      </div>
      {/* Lower section */}
      <div className="p-8 md:px-20 bg-neutral-900">
        <ul className="flex justify-center items-center gap-3">
          <li className="sm:rounded-md md:rounded-2xl">
            <motion.img
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              src="/Images/Games/game1.jpg"
              className="sm:rounded-md md:rounded-2xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
            />
          </li>
          <li className="sm:rounded-md md:rounded-2xl">
            <motion.img
              viewport={{ once: true,amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              src="/Images/Games/game2.jpg"
              className="sm:rounded-md md:rounded-2xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
            />
          </li>
          <li className="sm:rounded-md md:rounded-2xl">
            <motion.img
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              src="/Images/Games/game3.jpg"
              className="sm:rounded-md md:rounded-2xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
            />
          </li>
          <li className="sm:rounded-md md:rounded-2xl">
            <motion.img
              src="/Images/Games/game4.jpg"
              className="sm:rounded-md md:rounded-2xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            />
          </li>
          <li className="sm:rounded-md md:rounded-2xl">
            <motion.img
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              src="/Images/Games/game5.jpg"
              className="sm:rounded-md md:rounded-2xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturedGames;
