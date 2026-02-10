"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedWords } from "@/components/animations/AnimatedWords";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={sectionRef} className="overflow-hidden p-6 md:px-10 md:py-20">
      {/* Title */}
      <h2 className="text-primary mb-10 text-center text-xl font-bold md:text-start md:text-4xl">
        <AnimatedWords text="Tentang Perusahaan Kami" delay={0.5} />
      </h2>

      <div className="grid grid-cols-1 items-start gap-x-10 md:grid-cols-2">
        {/* Image */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-345/440 w-full overflow-hidden rounded-2xl md:aspect-860/400"
        >
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <Image src="/images/about-us.webp" alt="Team meeting" fill className="object-cover" />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          style={{ x: textY }}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="space-y-6 text-gray-700"
        >
          <motion.p
            variants={{
              hidden: { y: 20 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base leading-relaxed md:text-lg"
          >
            PT Niatra Mega Gemilang adalah perusahaan penyedia layanan outsourcing terintegrasi yang
            berkomitmen menghadirkan pengelolaan tenaga kerja secara strategis, profesional, dan
            berkelanjutan, selaras dengan regulasi ketenagakerjaan nasional.
          </motion.p>

          <motion.p
            variants={{
              hidden: { y: 20 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base leading-relaxed md:text-lg"
          >
            Didukung oleh tim manajemen dan profesional dengan rekam jejak kuat di bidang human
            capital management dan operasional, PT Niatra Mega Gemilang senantiasa
            mengedepankan keunggulan kualitas, kepatuhan, serta keandalan layanan, sebagai fondasi
            dalam membangun hubungan kerja yang solid dan berjangka panjang dengan para mitra
            bisnis.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
