"use client";

import React from "react";
import { FileText, Users, Monitor, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedWords } from "@/components/animations/AnimatedWords";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    x: -120,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

export default function ProcessSection() {
  const processes = [
    {
      icon: <MessageCircle size={20} />,
      title: "Konsultasi Kebutuhan",
      description:
        "Diskusi mendalam dengan klien untuk memahami kebutuhan tenaga kerja dan layanan. Dan menghasilkan solusi yang tepat dan efisien sesuai target operasional klien.",
    },
    {
      icon: <FileText size={20} />,
      title: "Penawaran & Kontrak",
      description:
        "Penyusunan penawaran transparan mencakup struktur tenaga kerja, durasi layanan, dan biaya. Setelah disepakati maka kontrak resmi untuk kepastian hukum dan komitmen kedua pihak.",
    },
    {
      icon: <Users size={20} />,
      title: "Rekrutmen & Penempatan",
      description:
        "Seleksi ketat dan pelatihan khusus untuk memastikan tenaga kerja profesional dan siap pakai. Tenaga kerja ditempatkan sesuai profil, lokasi, dan jadwal operasional klien.",
    },
    {
      icon: <Monitor size={20} />,
      title: "Monitoring & Evaluasi",
      description:
        "Pengawasan rutin dan evaluasi berkelanjutan untuk memastikan kualitas layanan tetap tinggi. Laporan berkala dan koordinasi proaktif menjaga transparansi dan kepuasan klien.",
    },
  ];

  return (
    <section className="p-6 md:px-10 md:py-20">
      <h2 className="text-primary mb-10 text-xl font-bold md:text-[32px]">
        <AnimatedWords text="Proses Kerja Kami" delay={0.5} />
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {processes.map((item, index) => (
          // MASK
          <div key={index} className="overflow-hidden">
            <motion.div
              variants={cardVariants}
              className="group border-tertiary rounded-2xl border bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:bg-black hover:shadow-xl"
            >
              {/* Icon */}
              <div className="group-hover:bg-primary mb-20 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8E8E8] transition-all duration-500 group-hover:-translate-y-1">
                <span className="text-primary transition-colors duration-500 group-hover:text-white">
                  {item.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-primary mb-4 text-base font-semibold group-hover:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-primary text-sm leading-relaxed group-hover:text-white">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
