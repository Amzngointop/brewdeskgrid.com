const BADGE_LABELS: Record<string, string> = {
  "coffee-grinders": "Best Overall Grinder",
  "french-presses": "Best Overall French Press",
  "electric-kettles": "Best Overall Kettle",
  "espresso-makers": "Best Overall Espresso Maker",
  "milk-frothers": "Best Overall Frother",
  "travel-coffee-mugs": "Best Overall Travel Mug",
};

export default function RankBadge({ categorySlug }: { categorySlug: string }) {
  const label = BADGE_LABELS[categorySlug] ?? "Best Overall";
  return (
    <span className="inline-block rounded-full bg-coffee px-3 py-1 font-body text-[11px] font-medium uppercase tracking-wider text-white">
      {label}
    </span>
  );
}
