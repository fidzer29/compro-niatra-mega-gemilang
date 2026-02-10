"use client";

import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/628138310880"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <Image src="/images/whatsapplogo.webp" alt="Whatsapp" fill className="object-cover" />
    </Link>
  );
}
