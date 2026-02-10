"use client";

import ServiceCard from "@/components/pages/service/ServiceCard";
import { ServiceCardProps } from "@/types/service";
import serviceContents from "@/components/pages/service/data.json";
import { clsx } from "clsx";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedWords } from "@/components/animations/AnimatedWords";

export default function ServicePage() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const defaultServiceSectionStyles =
    "flex h-[calc(100dvh-var(--header-height))] w-full flex-col overflow-y-auto p-4 md:p-10 bg-cover bg-center bg-no-repeat";

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const total = serviceContents.length;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <section className="flex h-max flex-col gap-10 px-6.5 py-6 md:px-10 md:py-15">
        <h1 className="text-primary h-max text-3xl font-medium md:w-[55%] md:text-[56px]">
          <AnimatedWords text="Layanan Outsourcing Profesional untuk Mendukung Operasional Bisnis Anda" />
        </h1>
        <hr className="text-primary-white w-full" />
        <div className="grid grid-cols-1 items-center justify-between gap-5 md:grid-cols-2">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button className="group order-2 w-max rounded-lg bg-black p-2 transition-colors hover:bg-white md:order-1">
              <ArrowDown
                onClick={scrollToTarget}
                className="group-hover:text-primary text-white transition-colors"
              />
            </button>
          </motion.div>
          <div className="text-primary order-1 text-[12px] md:order-2 md:text-lg">
            <AnimatedWords
              text="Pengelolaan tenaga kerja pendukung operasional sering kali menjadi tantangan tersendiri
            bagi perusahaan. Mulai dari rekrutmen, pelatihan, hingga pengawasan harian, semua
            membutuhkan waktu dan sumber daya."
            />
          </div>
        </div>
      </section>

      {/* Stacked Cards Section */}
      <div ref={targetRef} style={{ height: `${total * 100}vh` }} className="relative">
        <div className="sticky top-[var(--header-height)] h-[calc(100dvh-var(--header-height))] w-full overflow-hidden">
          {serviceContents.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              index={index}
              total={total}
              scrollYProgress={scrollYProgress}
              defaultStyles={defaultServiceSectionStyles}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const ServiceItem = ({
  service,
  index,
  total,
  scrollYProgress,
  defaultStyles,
}: {
  service: (typeof serviceContents)[number];
  index: number;
  total: number;
  scrollYProgress: import("framer-motion").MotionValue<number>;
  defaultStyles: string;
}) => {
  const rangeStart = (index - 1) / (total - 1);
  const rangeEnd = index / (total - 1);

  const safeStart = index === 0 ? 0 : Math.max(0, rangeStart);
  const safeEnd = index === 0 ? 1 : Math.max(0.001, rangeEnd);

  const opacity = useTransform(scrollYProgress, [safeStart, safeEnd], [1, 1]);

  const y = useTransform(
    scrollYProgress,
    [safeStart, safeEnd],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        zIndex: index,
      }}
      className={clsx(defaultStyles, service.cardStyle, "absolute inset-0 top-0 left-0")}
    >
      <div className="mt-auto flex w-full flex-col gap-5 md:flex-row md:items-end md:justify-between">
        {service.cardItems.map((item, idx) => {
          return <ServiceCard key={idx} {...(item as ServiceCardProps)} />;
        })}
      </div>
    </motion.div>
  );
};
