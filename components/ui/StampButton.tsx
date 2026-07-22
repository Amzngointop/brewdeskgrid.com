import Link from "next/link";
import type { ReactNode } from "react";

interface StampButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function StampButton({
  href,
  children,
  variant = "primary",
  className = "",
}: StampButtonProps) {
  const base =
    "stamp-button inline-flex items-center justify-center rounded-full border-[1.5px] border-ink px-6 py-3 font-body text-sm font-medium tracking-wide";
  const styles =
    variant === "primary"
      ? "bg-coffee text-white"
      : "bg-transparent text-ink";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
