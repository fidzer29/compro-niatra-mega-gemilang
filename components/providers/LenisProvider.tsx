"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useRef } from "react";

type LenisContextValue = {
  scrollTo: Lenis["scrollTo"];
};

export const LenisContext = createContext<LenisContextValue | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // scroll to top tiap route berubah
  useEffect(() => {
    lenisRef.current?.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }, [pathname]);

  return (
    <LenisContext.Provider
      value={{
        scrollTo: (...args) => lenisRef.current?.scrollTo(...args),
      }}
    >
      {children}
    </LenisContext.Provider>
  );
}
