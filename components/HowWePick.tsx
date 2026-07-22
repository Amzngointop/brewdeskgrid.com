import DashedDivider from "@/components/ui/DashedDivider";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function HowWePick() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <DashedDivider className="mb-16" />
      <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
        Methodology
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
        How we pick
      </h2>
      <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
        We focus on gear that solves a specific brewing problem — grind
        consistency, pour control, heat retention, milk texture — rather than
        chasing the longest feature list. Every product on this site is
        organized by category and ranked by how well it fits the way people
        actually brew coffee and tea at home, not by price or star count.
      </p>
      <p className="mt-4 font-body text-sm leading-relaxed text-text-secondary">
        Our guides draw on established brewing fundamentals — ratio, grind
        size, water temperature — rather than trends, and we link out to
        recognized coffee and tea organizations where it's useful to go
        deeper.
      </p>
      <div className="mt-8">
        <AffiliateDisclosure />
      </div>
    </section>
  );
}
