/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FadeContent from "@/components/react-bits/FadeContent";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedWords } from "@/components/animations/AnimatedWords";

const sections = [
  {
    number: "01",
    title: "Sejarah Perusahaan",
    content: [
      "PT Niatra Mega Gemilang adalah perusahaan penyedia layanan outsourcing terintegrasi yang berkomitmen menghadirkan pengelolaan tenaga kerja secara strategis, profesional, dan berkelanjutan, selaras dengan seluruh ketentuan dan regulasi ketenagakerjaan nasional.",
      "Didukung oleh tim manajemen dan profesional dengan rekam jejak kuat di bidang human capital management dan operasional, PT Niatra Mega Gemilang senantiasa mengedepankan keunggulan kualitas, kepatuhan, serta keandalan layanan, sebagai fondasi dalam membangun hubungan kerja yang solid dan berjangka panjang dengan para mitra bisnis.",
      "Berangkat dari dinamika dunia usaha di Indonesia yang terus berkembang, PT Niatra Mega Gemilang hadir sebagai inovasi solusi atas beragam kebutuhan pengelolaan tenaga kerja perusahaan. Kompleksitas regulasi, tuntutan efisiensi, serta kebutuhan akan sumber daya manusia yang andal menjadi landasan lahirnya PT Niatra Mega Gemilang sebagai mitra strategis bagi dunia usaha.",
      "Dengan pendekatan yang adaptif dan terstruktur, PT Niatra Mega Gemilang dirancang untuk menjawab tantangan perusahaan modern melalui layanan outsourcing yang profesional, patuh regulasi, dan berorientasi pada keberlanjutan bisnis.",
    ],
  },
  {
    number: "02",
    title: "Visi Perusahaan",
    content: [
      "Menjadi mitra outsourcing yang terpercaya dan konsisten dalam memberikan nilai tambah bagi klien.",
    ],
  },
  {
    number: "03",
    title: "Misi Perusahaan",
    content: [
      "Menyediakan layanan outsourcing yang patuh terhadap regulasi dan standar industri",
      "Mengelola tenaga kerja secara profesional dan sistematis",
      "Menjaga kualitas layanan melalui monitoring dan evaluasi berkelanjutan",
      "Membangun hubungan kerja jangka panjang dengan klien",
    ],
    type: "list",
  },
];

const companyValues = [
  {
    number: "01",
    title: "Profesionalisme",
    desc: "Menjalankan setiap layanan dengan standar kerja yang jelas dan bertanggung jawab.",
  },
  {
    number: "02",
    title: "Integritas",
    desc: "Menjunjung tinggi kejujuran, disiplin, dan etika kerja dalam setiap proses.",
  },
  {
    number: "03",
    title: "Komitmen",
    desc: "Fokus pada kualitas layanan dan kepuasan klien dalam jangka panjang.",
  },
  {
    number: "04",
    title: "Kepercayaan",
    desc: "Membangun hubungan kerja sama yang transparan dan dapat diandalkan.",
  },
];

function AboutPage() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="px-5 pt-6 pb-20 md:px-10 lg:px-16">
      {/* HEADER */}
      <div className="mb-6 flex flex-col items-start justify-between gap-y-3 md:mb-10 md:flex-row md:items-center md:gap-x-10">
        {/* Title */}
        <div className="text-primary text-2xl leading-relaxed font-bold md:pb-2 md:text-5xl">
          <AnimatedWords text="PT Niatra Mega Gemilang" delay={0.15} />
        </div>

        {/* Subtitle */}
        <div className="text-primary flex flex-col items-start justify-start text-sm leading-relaxed md:text-base">
          {/* DESKTOP TEXT */}
          <motion.p
            className="hidden md:block"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Perusahaan outsourcing yang bergerak di bidang penyediaan tenaga
            <br />
            kerja pendukung operasional perusahaan dengan standar
            <br />
            profesionalisme tinggi.
          </motion.p>

          {/* MOBILE TEXT */}
          <motion.p
            className="block md:hidden"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Perusahaan outsourcing yang bergerak di bidang
            <br />
            penyediaan tenaga kerja pendukung operasional
            <br />
            perusahaan dengan standar profesionalisme tinggi.
          </motion.p>
        </div>
      </div>

      {/* IMAGE */}
      <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>
        <div className="relative mb-10 aspect-345/440 w-full overflow-hidden rounded-[20px] md:aspect-1360/440">
          <Image
            src="/images/discuss.webp"
            alt="PT Niatra Mega Gemilang"
            fill
            className="object-cover"
          />
        </div>
      </FadeContent>

      {/* ACCORDION */}
      <div className="divide-y divide-gray-200 md:mt-20">
        {sections.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={item.number} className="mb-11.5">
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-1.5 md:gap-6">
                  <span className="text-[20px] font-medium text-[#838383] md:text-[32px]">
                    {item.number}
                  </span>
                  <div className="text-primary text-[20px] font-semibold uppercase md:text-[32px]">
                    {item.title}
                  </div>
                </div>

                {/* ICON */}
                <span className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  {isOpen ? (
                    <>
                      <Minus size={24} className="block md:hidden" />
                      <Minus size={40} className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <Plus size={24} className="block md:hidden" />
                      <Plus size={40} className="hidden md:block" />
                    </>
                  )}
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`mb-15 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "mt-6 max-h-250 opacity-100" : "max-h-0 opacity-0"} `}
              >
                <div className="space-y-4">
                  {isOpen &&
                    item.content.map((text: string, i: any) => {
                      if (item.type === "list") {
                        return (
                          <div key={i} className="flex items-start gap-3">
                            {/* Bullet bulat hitam */}
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />

                            <p className="text-primary text-sm leading-relaxed font-normal tracking-[-0.16px] md:text-[20px]">
                              {text}
                            </p>
                          </div>
                        );
                      }

                      return (
                        <p
                          key={i}
                          className="text-primary text-sm leading-relaxed font-normal tracking-[-0.16px] sm:text-base md:text-[20px]"
                        >
                          {text}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* NILAI PERUSAHAAN */}
      <div className="mt-20 flex h-full w-full flex-col items-end gap-20 md:flex-row">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col justify-between gap-8 md:gap-0">
          <div className="text-primary text-[20px] font-bold md:text-[32px]">
            <AnimatedWords text="Nilai Perusahaan" delay={0.15} />
          </div>

          <div className="grid grid-cols-2 gap-5">
            {companyValues.map((item, i) => (
              <div
                key={i}
                className="group border-tertiary rounded-2xl border p-5 shadow-sm transition-all duration-500 ease-out hover:bg-black hover:shadow-xl"
              >
                <span className="text-primary mb-10 block text-base font-semibold transition-colors duration-300 ease-out group-hover:text-white md:text-xl">
                  {item.number}
                </span>

                <h3 className="text-primary mb-5 text-base font-semibold transition-colors duration-300 ease-out group-hover:text-white md:text-xl">
                  {item.title}
                </h3>

                <p className="text-primary text-sm leading-relaxed font-normal transition-colors duration-300 ease-out group-hover:text-white md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="relative aspect-345/448 h-full w-full overflow-hidden rounded-2xl md:aspect-660/514 md:rounded-3xl">
          <Image
            src="/images/about-cleaning.webp"
            alt="Nilai Perusahaan"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
