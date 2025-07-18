import React, { useState } from "react";
import { TypingEffect } from "../TypingEffect";
import { motion } from "framer-motion";

function Banner() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div
      id="banner"
      className="flex items-center flex-col justify-center gap-1"
    >
      <div className="sm:w-xl">
        <TypingEffect text="Unleash Your Inner Champion Dive into the Ultimate Gaming Experience!" />
      </div>
      <div className="flex gap-4 text-xs">
        <motion.button
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, translateX: -70 }}
          transition={{ duration: 0.8 }}
          className={`relative overflow-hidden transition-all duration-300 hover:bg-amber-300 hover:ring-1 hover:ring-amber-100 hover:ring-offset-2 cursor-pointer text-white p-2 outline-1 px-5 outline-offset-1 outline-white rounded-xl ${
            activeButton == 1 && "bg-amber-300"
          }`}
          onClick={() => setActiveButton(1)}
        >
          KNOW MORE
        </motion.button>
        <motion.button
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, translateX: 70 }}
          transition={{ duration: 0.8 }}
          className={`relative overflow-hidden transition-all duration-300 hover:bg-amber-300 hover:ring-1 hover:ring-amber-100 hover:ring-offset-2 cursor-pointer text-white p-2 outline-1 px-5 outline-offset-1 outline-white rounded-xl ${
            activeButton == 2 && "bg-amber-300"
          }`}
          onClick={() => setActiveButton(2)}
        >
          GET NOW
        </motion.button>
      </div>
    </div>
  );
}

export default Banner;
