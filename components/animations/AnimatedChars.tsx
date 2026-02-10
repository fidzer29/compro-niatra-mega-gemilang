"use client";

import { motion } from "framer-motion";
import { AnimatedCharsProps } from "./types";
export default function AnimatedChars({ text, delay = 0, className }: AnimatedCharsProps) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.035,
        delayChildren: delay,
      },
    },
  } as const;

  const charVariant = {
    hidden: {
      y: "100%",
    },
    show: {
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const;

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
      aria-label={text}
    >
      {letters.map((char, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          <motion.span variants={charVariant} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
