import Image from "next/image";
import type { Product } from "@/data/products";
import RankBadge from "@/components/ui/RankBadge";
import UnderlineLink from "@/components/ui/UnderlineLink";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="ticket-card p-6" style={{ ["--ticket-accent" as string]: "#C97A3D" }}>
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="flex shrink-0 items-center justify-center sm:w-40">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={160}
            height={160}
            className="h-auto w-32 object-contain sm:w-40"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            {product.rank === 1 && <RankBadge categorySlug={product.category} />}
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink">
            {product.name}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
            {product.summary}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-label text-xs uppercase tracking-wide text-muted">
                Pros
              </p>
              <ul className="mt-2 space-y-1">
                {product.pros.map((pro) => (
                  <li key={pro} className="font-body text-[13px] text-text-secondary">
                    + {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-label text-xs uppercase tracking-wide text-muted">
                Cons
              </p>
              <ul className="mt-2 space-y-1">
                {product.cons.map((con) => (
                  <li key={con} className="font-body text-[13px] text-text-secondary">
                    – {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-4 font-body text-[13px] italic text-muted">
            Best for: {product.bestFor}
          </p>

          <div className="mt-4">
            <UnderlineLink href={product.affiliateUrl} external>
              View on Amazon
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  );
}
