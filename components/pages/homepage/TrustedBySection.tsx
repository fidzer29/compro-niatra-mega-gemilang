"use client";

import LogoLoop from "@/components/react-bits/logo-loop/LogoLoop";

function TrustedBySection() {
  const companies = [
    { src: "/images/dummy-company-logos/logoipsum-1.png", alt: "Company 1", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-2.png", alt: "Company 2", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-3.png", alt: "Company 3", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-4.png", alt: "Company 4", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-5.png", alt: "Company 5", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-6.png", alt: "Company 6", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-7.png", alt: "Company 7", href: "" },
    { src: "/images/dummy-company-logos/logoipsum-8.png", alt: "Company 8", href: "" },
  ];
  return (
    <div className="flex flex-col items-center gap-10 px-10 max-md:p-6 md:h-31 md:flex-row">
      <div className="text-accent w-full flex-none text-base text-wrap md:w-40.5">
        Dipercaya oleh Berbagai Perusahaan
      </div>
      <div className="flex grow items-center overflow-hidden px-6 max-md:max-w-dvw">
        <LogoLoop
          logos={companies}
          speed={100}
          direction="left"
          logoHeight={30}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default TrustedBySection;
