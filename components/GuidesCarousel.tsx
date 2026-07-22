"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { guides } from "@/data/guides";

export default function GuidesCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const node = rowRef.current;
    if (!node) return;
    const cardWidth = node.firstElementChild
      ? (node.firstElementChild as HTMLElement).offsetWidth + 24
      : 320;
    node.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
            Read up
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
            Brewing guides
          </h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous guide"
            onClick={() => scroll(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next guide"
            onClick={() => scroll(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={rowRef}
        className="snap-row mt-8 flex gap-6 overflow-x-auto pb-4"
      >
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="ticket-card block w-[280px] shrink-0 p-6"
            style={{ ["--ticket-accent" as string]: "#C97A3D" }}
          >
            <p className="font-label text-xs uppercase tracking-[0.12em] text-coffee-dark">
              {guide.label}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">
              {guide.title}
            </h3>
            <p className="mt-2 font-body text-[13px] leading-relaxed text-text-secondary">
              {guide.teaser}
            </p>
            <p className="mt-4 font-body text-xs text-muted">{guide.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
