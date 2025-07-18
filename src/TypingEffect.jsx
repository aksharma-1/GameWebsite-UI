"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
    id="banner-heading"
      ref={ref}
      className=" text-amber-300 sm:text-2xl md:text-3xl font-bold p-6 text-center text-xl tracking-tighter"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
