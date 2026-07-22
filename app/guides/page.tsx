import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Brewing Guides — BrewDeskGrid",
  description:
    "Ratio, grind, temperature, maintenance, and storage guides for better coffee and tea at home.",
};

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
        Grind + steep guides
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        Learn the fundamentals
      </h1>
      <p className="mt-4 max-w-2xl font-body text-base text-text-secondary">
        Six short guides covering the handful of variables that actually
        decide whether a cup tastes right — ratio, grind, temperature,
        maintenance, and storage.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="ticket-card block"
            style={{ ["--ticket-accent" as string]: "#C97A3D" }}
          >
            <div className="p-2 pb-0">
              <div className="cover-image-wrap cover-image-wrap--card relative">
                <Image
                  src={guide.imageUrl}
                  alt={guide.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="cover-image"
                />
              </div>
            </div>
            <div className="p-6 pt-4">
              <p className="font-label text-xs uppercase tracking-[0.12em] text-coffee-dark">
                {guide.label}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {guide.title}
              </h3>
              <p className="mt-3 font-body text-xs text-muted">{guide.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
