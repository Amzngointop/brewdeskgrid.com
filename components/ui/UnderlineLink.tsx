import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

interface UnderlineLinkProps {
  href: string;
  children: string;
  color?: string;
  external?: boolean;
  className?: string;
}

export default function UnderlineLink({
  href,
  children,
  color = "#C97A3D",
  external = false,
  className = "",
}: UnderlineLinkProps) {
  const extraProps: AnchorHTMLAttributes<HTMLAnchorElement> = external
    ? { target: "_blank", rel: "nofollow sponsored noopener" }
    : {};

  return (
    <Link
      href={href}
      className={`font-body text-sm font-medium inline-block pb-0.5 ${className}`}
      style={{ borderBottom: `1.5px solid ${color}`, color }}
      {...extraProps}
    >
      {children} <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
