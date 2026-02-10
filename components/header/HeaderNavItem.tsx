"use client";

import Link from "next/link";
import { NavItemProps } from "@/types/header";
import clsx from "clsx";

function HeaderNavItem({
  label,
  url,
  className,
  onClose,
}: NavItemProps & { onClose?: (v: boolean) => void }) {
  const defaultStyle =
    "text-nowrap px-4 py-2 transition-all md:duration-500 duration-100 ease-in-out ";
  return (
    <Link
      href={url}
      className={clsx(defaultStyle, className && className)}
      onClick={() => onClose?.(false)}
    >
      {label}
    </Link>
  );
}

export default HeaderNavItem;
