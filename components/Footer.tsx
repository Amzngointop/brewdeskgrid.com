import Link from "next/link";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-semibold text-ink">
              BrewDeskGrid
            </div>
            <p className="mt-2 max-w-xs font-body text-sm text-text-secondary">
              Grind and steep guides for better coffee and tea at home.
            </p>
            <p className="mt-4 font-body text-xs text-muted">
              Questions?{" "}
              <a href="mailto:info@brewdeskgrid.com" className="underline" style={{ textDecorationColor: "#4F6B4A" }}>
                info@brewdeskgrid.com
              </a>
            </p>
          </div>

          <div>
            <div className="font-label text-sm uppercase tracking-wide" style={{ color: "#4F6B4A" }}>
              Shop by category
            </div>
            <ul className="mt-3 space-y-2 font-body text-sm text-text-secondary">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/best/${c.slug}`} className="hover:text-ink">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-label text-sm uppercase tracking-wide" style={{ color: "#4F6B4A" }}>
              Guides
            </div>
            <ul className="mt-3 space-y-2 font-body text-sm text-text-secondary">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="hover:text-ink">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-dashed border-divider pt-6 font-body text-xs text-muted">
          <p>
            BrewDeskGrid.com is a participant in the Amazon Services LLC
            Associates Program, an affiliate advertising program designed to
            provide a means for sites to earn advertising fees by advertising
            and linking to Amazon.com. As an Amazon Associate we earn from
            qualifying purchases.
          </p>
          <p className="mt-3">&copy; 2026 BrewDeskGrid.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
