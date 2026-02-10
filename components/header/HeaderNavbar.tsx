"use client";

import { NavbarProps } from "@/types/header";
import HeaderNavItem from "./HeaderNavItem";
import Link from "next/link";
import clsx from "clsx";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { LenisContext } from "../providers/LenisProvider";

const contentVariants = {
  hidden: {
    x: "120%",
  },
  show: {
    x: "0%",
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

function HeaderNavbar({
  items,
  className,
  open,
  onClose,
}: NavbarProps & { className?: string; open?: boolean; onClose?: (v: boolean) => void }) {
  const lenis = useContext(LenisContext);
  return (
    <>
      {/* MOBILE VIEW */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              variants={contentVariants}
              className="absolute inset-0 z-30 flex h-dvh w-full items-center justify-center bg-white"
            >
              <div className="relative flex h-full w-full items-center justify-center">
                <X
                  size={32}
                  className="absolute top-9 right-9 cursor-pointer text-black"
                  onClick={() => onClose?.(false)}
                />

                <nav className="flex w-full flex-col items-center justify-center gap-4">
                  {items.map((item, index) => (
                    <HeaderNavItem
                      key={index}
                      label={item.label}
                      url={item.url}
                      className="text-2xl"
                      onClose={onClose}
                    />
                  ))}

                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 120 }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href="/contact"
                        className="hover:bg-primary block rounded-lg bg-black px-6 pt-4 pb-3 text-xl text-white transition-colors"
                        onClick={() => {
                          onClose?.(false);
                          lenis?.scrollTo(0, {
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                          });
                        }}
                      >
                        Konsultasi Gratis
                      </Link>
                    </motion.div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP VIEW */}
      <div
        className={clsx(
          "hidden items-center rounded-xl px-3 py-2 transition-colors duration-500 md:flex",
          className
        )}
      >
        <nav className="flex w-full items-center justify-center gap-x-1 px-2">
          {items.map((item, index) => (
            <HeaderNavItem
              key={index}
              label={item.label}
              url={item.url}
              className={item.className}
            />
          ))}
        </nav>
        <Link
          href={"contact"}
          className="group rounded-lg bg-black px-4 py-2 transition-colors hover:bg-white"
          onClick={() => {
            lenis?.scrollTo(0, {
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }}
        >
          <span className="group-hover:text-primary text-nowrap text-white">Konsultasi Gratis</span>
        </Link>
      </div>
    </>
  );
}

export default HeaderNavbar;
