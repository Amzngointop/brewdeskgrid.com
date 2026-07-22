export default function DashedDivider({ className = "" }: { className?: string }) {
  return <hr className={`dashed-divider ${className}`} />;
}
