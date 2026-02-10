"use client";

import Image from "next/image";
import { services } from "./data.json";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
} as const;

const layerVariants1 = ({ delay }: { delay: number }): Variants => ({
  hidden: {
    x: "-120%",
    opacity: 1,
  },
  show: {
    x: "0%",
    transition: {
      x: {
        delay: 0.6 + delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.6 + delay + 0.9 + 0.2,
      duration: 0.3,
      ease: "easeOut",
    },
  },
});

const layerVariants2 = ({ delay }: { delay: number }): Variants => ({
  hidden: {
    x: "-120%",
    opacity: 1,
  },
  show: {
    x: "0%",
    transition: {
      x: {
        delay: 0.8 + delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.8 + delay + 0.9 + 0.2,
      duration: 0.3,
      ease: "easeOut",
    },
  },
});

const contentVariants = ({ delay }: { delay: number }) =>
  ({
    hidden: {
      x: "-120%",
    },
    show: {
      x: "0%",
      transition: {
        delay: 1 + delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }) as const;

export default function ServicesSection() {
  return (
    <section id="layanan" className="p-6 md:px-10 md:py-20">
      <div className="rounded-[40px] bg-black p-5 md:p-12">
        <motion.div
          className="grid grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="col-span-full flex flex-col items-center gap-2 md:col-span-4 md:items-start">
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="mb-6 text-xl font-semibold text-white max-md:text-center md:text-4xl"
            >
              Layanan Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="mb-10 leading-relaxed text-gray-300 max-md:text-center max-md:text-sm"
            >
              Solusi layanan outsourcing profesional <br /> untuk mendukung operasional <br />{" "}
              bisnis Anda secara efisien dan terpercaya.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-primary w-max cursor-pointer rounded-md bg-white px-6 py-3 text-sm font-medium transition hover:bg-gray-200"
            >
              Lihat Selengkapnya
            </motion.div>
          </div>
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  image,
  imageMobile,
  className,
  ratio,
  index,
}: {
  title: string;
  image: string;
  imageMobile: string;
  className: string;
  ratio: string;
  index: number;
}) {
  return (
    // MASK
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl bg-transparent ${className}`}
    >
      <div className={`relative w-full ${ratio}`}>
        {/* FIRST LAYER */}
        <motion.div
          variants={layerVariants1({ delay: index / 10 })}
          className="absolute inset-0 top-0 left-0 z-10"
        >
          <div className="group relative aspect-[413.33502197265625/340] overflow-hidden rounded-2xl bg-blue-300" />
        </motion.div>

        {/* SECOND LAYER */}
        <motion.div
          variants={layerVariants2({ delay: index / 10 })}
          className="absolute inset-0 top-0 left-0 z-20"
        >
          <div className="group relative aspect-[413.33502197265625/340] overflow-hidden rounded-2xl bg-blue-600" />
        </motion.div>
        {/* SLIDING CONTENT */}
        <motion.div variants={contentVariants({ delay: index / 10 })} className="relative z-30">
          <div className="group overflow-hidden rounded-2xl">
            <div className={`relative ${ratio}`}>
              <Image
                src={image}
                alt={title}
                fill
                className="hidden rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 md:block"
              />
              <Image
                src={imageMobile}
                alt={title}
                fill
                className="block rounded-2xl object-cover shadow-[0px_0px_24px_11px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105 md:hidden"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
            <div className="absolute right-3 bottom-3 left-3 rounded-lg bg-white/70 p-4 text-base font-medium backdrop-blur-md">
              {title}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
