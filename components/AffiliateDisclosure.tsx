export default function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`font-body text-xs text-muted ${className}`}>
      Disclosure: BrewDeskGrid.com is a participant in the Amazon Services LLC
      Associates Program. We earn from qualifying purchases made through
      links on this page, at no extra cost to you.
    </p>
  );
}
