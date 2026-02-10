"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedWords } from "@/components/animations/AnimatedWords";
import Link from "next/link";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;

      const scrollY = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;

      const darkness = Math.min(0.6, 0.2 + scrollY / 1000);
      bgRef.current.style.setProperty("--overlay-opacity", `${darkness}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex h-240 flex-col justify-end overflow-hidden rounded-b-[60px] md:h-dvh">
      {/* Parallax Background Wrapper */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ "--overlay-opacity": 0.2 } as React.CSSProperties}
      >
        {/* Background Image */}
        <div className="absolute inset-0 scale-105 bg-[url('/images/bg-hero.webp')] bg-cover bg-center bg-no-repeat" />

        {/* Gradient Overlay (dynamic opacity) */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-opacity duration-200"
          style={{ opacity: "var(--overlay-opacity)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-end px-6 pb-16 md:px-10">
        <div className="w-full">
          <h1 className="mb-6 hidden w-[50dvw] flex-col text-5xl leading-tight font-bold tracking-tight text-white md:flex">
            <AnimatedWords text="Solusi Outsourcing Profesional" />
            <AnimatedWords text="untuk Mendukung Operasional" delay={0.15} />
            <AnimatedWords text="Bisnis Anda" delay={0.3} />
          </h1>
          <h1 className="mb-6 flex w-full flex-col text-4xl leading-tight font-bold tracking-tight text-white md:hidden">
            <AnimatedWords text="Solusi" />
            <AnimatedWords text="Outsourcing" delay={0.15} />
            <AnimatedWords text="Profesional untuk" delay={0.3} />
            <AnimatedWords text="Mendukung" />
            <AnimatedWords text="Operasional Bisnis" delay={0.15} />
            <AnimatedWords text="Anda" delay={0.3} />
          </h1>

          <div className="border-primary-white flex flex-col items-center justify-between border-t pt-6 md:flex-row">
            <motion.p
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-primary-white w-full text-lg leading-relaxed font-semibold md:w-[45dvw]"
            >
              Kami menyediakan tenaga kerja outsourcing yang terlatih, terpercaya, dan siap
              mendukung efisiensi serta produktivitas perusahaan Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="flex flex-col-reverse flex-wrap gap-4 pt-4 max-md:w-full md:flex-row"
            >
              <Link
                href={"/contact"}
                className="border-primary-white rounded-lg border px-5 py-3 text-lg text-white transition-all hover:bg-white hover:text-black max-md:text-center"
              >
                Konsultasi Kebutuhan Anda
              </Link>
              <Link
                href="https://wa.me/628138310880"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="rounded-lg bg-black px-5 py-3 text-lg text-white transition-all hover:bg-white hover:text-black max-md:text-center"
              >
                Hubungi Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
