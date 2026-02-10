"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-10 my-10 md:mx-10 md:my-20">
      <div className="flex flex-col gap-y-12 md:mb-12 md:flex-row md:justify-between lg:grid-cols-[auto_3fr_1fr]">
        <div>
          <Image
            src={"/images/logopt.png"}
            alt="Niatra Mega Gemilang"
            width={100}
            height={100}
            className="mb-5 object-contain"
          />
          <p className="text-primary mb-1 text-sm font-medium md:text-base">
            Blk. VD 03, Jl. Ecopolis Boulevard Utama No.42, Mekar Bakti, Kec. Panongan, Kabupaten
            Tangerang, Banten 15710 (Depan Gramedia)
          </p>
          <p className="text-accent mb-1 text-sm md:text-base">203585</p>
          <p className="text-accent text-sm md:text-base">pt.niatramegagemilang@gmail.com</p>
        </div>
        <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-20 lg:gap-x-40">
          <div>
            <h4 className="text-primary mb-3 text-lg font-medium md:mb-4">Jam Operasional</h4>
            <div className="text-primary space-y-3 text-sm md:space-y-5 md:text-base">
              <div>
                <p className="text-primary font-medium">Senin - Jumat</p>
                <p>08.00 – 17.00 WIB</p>
              </div>
              <div>
                <p className="text-primary font-medium">Sabtu</p>
                <p>08.00 – 14.00 WIB</p>
              </div>
              <div>
                <p className="text-primary font-medium">Minggu / Hari Libur Nasional</p>
                <p>Tutup (Layanan darurat tetap tersedia sesuai kebutuhan klien)</p>
              </div>
              <div>
                <p className="text-primary font-medium">Layanan Darurat / Event Khusus</p>
                <p>24 Jam, Sesuai permintaan klien</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-primary mb-3 text-lg font-medium md:mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-700 md:space-y-5 md:text-base">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-primary-white mt-10 border-t pt-6 text-sm md:text-base">
        <div className="text-primary">
          © {new Date().getFullYear()} Company . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
