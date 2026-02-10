"use client";

import { AnimatedWordsProps } from "./types";
import { motion } from "framer-motion";

export function AnimatedWords({ text, delay = 0 }: AnimatedWordsProps) {
  const words = text.split(" ");

  return (
    <div className="h-max overflow-hidden">
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: delay,
            },
          },
        }}
        className="inline-block"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              variants={{
                hidden: { y: "100%" },
                show: {
                  y: "0%",
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1], // modern easing
                  },
                },
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </div>
  );
}
