"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { categories } from "@/data/categories";

export default function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-semibold text-ink">
          BrewDeskGrid
        </Link>

        <nav className="hidden items-center gap-6 font-body text-sm text-text-secondary md:flex">
          <div ref={shopRef} className="relative">
            <button
              type="button"
              onClick={() => setShopOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={shopOpen}
              aria-label="Categories"
              className="flex items-center gap-1.5 hover:text-ink"
            >
              <Menu size={18} />
              Categories
            </button>

            {shopOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-ticket border border-divider bg-white p-2 shadow-lg">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/best/${c.slug}`}
                    onClick={() => setShopOpen(false)}
                    className="block rounded px-3 py-2 font-body text-sm text-text-secondary hover:bg-card hover:text-ink"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/guides" className="hover:text-ink">
            Guides
          </Link>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="hover:text-ink"
          >
            Reach us
          </button>
        </nav>
      </div>

      {contactOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 px-6"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="dashed-box relative w-full max-w-sm rounded-ticket bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted hover:text-ink"
            >
              <X size={18} />
            </button>
            <p className="font-label text-xs uppercase tracking-wide text-coffee">
              Reach us
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              Say hello
            </h2>
            <a
              href="mailto:support@brewdeskgrid.com"
              className="mt-4 inline-block pb-0.5 font-body text-sm font-medium text-coffee"
              style={{ borderBottom: "1.5px solid #C97A3D" }}
            >
              support@brewdeskgrid.com
            </a>
            <p className="mt-4 font-body text-sm text-text-secondary">
              We read every message, usually reply within 2 business days.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
