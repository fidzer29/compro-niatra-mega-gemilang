"use client";

import HeaderNavbar from "./HeaderNavbar";
import { useEffect, useState } from "react";
import clsx from "clsx";
import navItems from "./navItems.json";
import Image from "next/image";

function MobileHeader() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <header
      className={clsx(
        "fixed top-0 z-50 h-(--header-height) w-full px-10 transition-all duration-300",
        scrolled ? "bg-white" : "bg-transparent"
      )}
    >
      {/* Content */}
      <div className="flex h-full items-center justify-between">
        <div className={clsx("text-lg font-bold text-black transition-all duration-300")}>
          <Image
            src={"/images/logopt.png"}
            alt="Niatra Mega Gemilang"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <Image
          src={"/images/icons/menu.svg"}
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />
        <HeaderNavbar
          open={isOpen}
          items={navItems.fixed}
          className="bg-white/50 backdrop-blur-2xl"
          onClose={setIsOpen}
        />
      </div>
    </header>
  );
}

export default MobileHeader;
