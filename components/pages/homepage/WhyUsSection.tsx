"use client";

import { motion } from "framer-motion";
import { features } from "./data.json";
import { AnimatedWords } from "@/components/animations/AnimatedWords";

const containerVariants = {
  hidden: {
    y: 80,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

export default function WhyUsSection() {
  return (
    <section className="p-6 md:px-10 md:py-20">
      {/* Title */}
      <h2 className="text-primary mb-5 text-xl font-bold md:mb-10 md:text-[32px]">
        <AnimatedWords text="Mengapa Memilih Kami" delay={0.5} />
      </h2>

      {/* List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="divide-y divide-[#D9D9D9] border-t border-[#D9D9D9]"
      >
        {features.map((feature, index) => (
          <div key={index} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-22.5">
            {/* Number */}
            <div className="text-primary text-xl font-semibold md:col-span-1">{feature.number}</div>

            {/* Title */}
            <div className="md:col-span-3">
              <h3 className="text-primary text-xl font-semibold tracking-wide uppercase">
                {feature.title}
              </h3>
            </div>

            {/* Content */}
            <div className="text-primary text-base leading-relaxed font-normal md:col-span-8">
              {feature.isList ? (
                <ul className="list-outside list-disc space-y-2 pl-7">
                  {feature.items?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{feature.description}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
