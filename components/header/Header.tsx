"use client";

import HeaderNavbar from "./HeaderNavbar";
import { useEffect, useState } from "react";
import clsx from "clsx";
import navItems from "./navItems.json";
import Image from "next/image";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // parallax offset (dibatasi biar halus)

  return (
    <header className="fixed top-0 z-50 h-(--header-height) w-full bg-transparent px-10">
      {/* Content */}
      <div className="flex h-full items-center justify-between">
        <div
          className={clsx(
            "text-2xl font-bold transition-all duration-300",
            scrolled ? "rounded-2xl bg-slate-100 p-4 text-black" : "text-white"
          )}
        >
          <Image
            src={"/images/logopt.png"}
            alt="Niatra Mega Gemilang"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <HeaderNavbar items={navItems.fixed} className="bg-white/50 backdrop-blur-2xl" />
      </div>
    </header>
  );
}

export default Header;
