import FooterWithCTA from "@/components/footer/FooterWithCTA";
import React from "react";
import { Header, MobileHeader } from "@/components/header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <Header />
      </div>
      <main className="mt-(--header-height)">{children}</main>
      <FooterWithCTA />
    </div>
  );
}
