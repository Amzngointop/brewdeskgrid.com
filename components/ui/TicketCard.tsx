import type { ReactNode, CSSProperties } from "react";

interface TicketCardProps {
  children: ReactNode;
  accent?: string;
  className?: string;
}

export default function TicketCard({
  children,
  accent = "#C97A3D",
  className = "",
}: TicketCardProps) {
  const style = { "--ticket-accent": accent } as CSSProperties;

  return (
    <div className={`ticket-card p-6 ${className}`} style={style}>
      {children}
    </div>
  );
}
