import Link from "next/link";
import { categories } from "@/data/categories";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
        Shop by category
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
        Six categories, no clutter.
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <ScrollReveal key={category.slug} delayMs={i * 60}>
            <Link href={`/best/${category.slug}`} className="group block">
              <div className="ticket-card p-6" style={{ ["--ticket-accent" as string]: "#C97A3D" }}>
                <p className="font-label text-xs uppercase tracking-[0.12em] text-coffee-dark">
                  {category.label}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {category.name}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-text-secondary">
                  {category.blurb}
                </p>
                <div
                  className="mt-4 inline-block pb-0.5 font-body text-sm font-medium text-coffee"
                  style={{ borderBottom: "1.5px solid #C97A3D" }}
                >
                  See the picks <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
