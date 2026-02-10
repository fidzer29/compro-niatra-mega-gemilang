"use client";

import Image from "next/image";
import Footer from "./Footer";

export default function FooterWithCTA() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/images/Footer.webp"
          alt="Niatra Mega Gemilang"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
          className="hidden object-cover md:block"
        />

        <Image
          src="/images/FrameFooter.webp"
          alt="Niatra Mega Gemilang"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
          className="object-cover md:hidden"
        />
        <div className="absolute inset-0 mb-20 flex flex-col justify-end p-6 md:static md:block md:justify-center md:p-0">
          <div className="md:absolute md:bottom-20 md:left-10">
            <div className="flex flex-col gap-4 md:gap-5">
              <h2 className="text-3xl font-semibold text-white md:text-start md:text-6xl md:leading-16.5">
                Siap Membantu Kebutuhan <br /> Outsourcing Anda
              </h2>
              <p className="text-sm text-white md:text-start md:text-xl">
                Konsultasikan kebutuhan tenaga kerja <br className="md:hidden" /> perusahaan Anda
                bersama tim kami.
              </p>
              <a href="https://wa.me/628138310880" target="_blank">
                <button className="mt-2 w-max rounded-lg bg-[#000000] px-6 py-3 text-sm text-white transition hover:bg-white hover:text-[#000000] md:mt-10 md:px-6 md:py-4 md:text-base">
                  Hubungi Kami Sekarang
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
