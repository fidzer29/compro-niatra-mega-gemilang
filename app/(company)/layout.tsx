import Footer from "@/components/footer/Footer";
import { Header, MobileHeader } from "@/components/header";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex md:hidden">
        <MobileHeader />
      </div>
      <div className="hidden md:flex">
        <Header />
      </div>
      <main className="pt-(--header-height)">{children}</main>
      <Footer />
    </>
  );
}
