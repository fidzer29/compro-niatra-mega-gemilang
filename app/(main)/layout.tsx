import { Header, MobileHeader } from "@/components/header";
import FooterWithCTA from "@/components/footer/FooterWithCTA";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <Header />
      </div>
      <main>{children}</main>
      <FooterWithCTA />
    </div>
  );
}
