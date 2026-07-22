import Image from "next/image";
import { categories } from "@/data/categories";
import { getTopProductByCategory } from "@/data/products";
import UnderlineLink from "@/components/ui/UnderlineLink";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BestPicksPreview() {
  const picks = categories
    .map((category) => ({
      category,
      product: getTopProductByCategory(category.slug),
    }))
    .filter((p) => p.product);

  return (
    <section id="best-picks" className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
        Best picks
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
        What we&apos;d buy first
      </h2>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {picks.map(({ category, product }, i) => (
          <ScrollReveal key={category.slug} delayMs={i * 60} className="h-full">
            <div
              className="ticket-card flex h-full flex-col p-6"
              style={{ ["--ticket-accent" as string]: "#C97A3D" }}
            >
              <div className="flex items-center justify-center">
                <Image
                  src={product!.imageUrl}
                  alt={product!.name}
                  width={140}
                  height={140}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 font-label text-xs uppercase tracking-[0.12em] text-coffee-dark">
                {category.label}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {product!.name}
              </h3>
              <p className="mt-2 flex-1 font-body text-[13px] italic leading-relaxed text-text-secondary">
                &ldquo;{product!.editorsVerdict}&rdquo;
              </p>
              <div className="mt-4">
                <UnderlineLink href={product!.affiliateUrl} external>
                  View on Amazon
                </UnderlineLink>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
