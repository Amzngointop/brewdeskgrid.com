"use client";

import { useState } from "react";
import Link from "next/link";
import { getCategoryBySlug } from "@/data/categories";

type TimeAnswer = "30s" | "3-5min" | "no-limit";
type CupsAnswer = "just-me" | "2-4" | "crowd";

const RECOMMENDATIONS: Record<TimeAnswer, Record<CupsAnswer, [string, string]>> = {
  "30s": {
    "just-me": ["espresso-makers", "travel-coffee-mugs"],
    "2-4": ["espresso-makers", "milk-frothers"],
    crowd: ["espresso-makers", "electric-kettles"],
  },
  "3-5min": {
    "just-me": ["french-presses", "travel-coffee-mugs"],
    "2-4": ["french-presses", "electric-kettles"],
    crowd: ["french-presses", "electric-kettles"],
  },
  "no-limit": {
    "just-me": ["coffee-grinders", "milk-frothers"],
    "2-4": ["coffee-grinders", "french-presses"],
    crowd: ["coffee-grinders", "electric-kettles"],
  },
};

const TIME_OPTIONS: { id: TimeAnswer; label: string }[] = [
  { id: "30s", label: "30 seconds" },
  { id: "3-5min", label: "3–5 minutes" },
  { id: "no-limit", label: "No limit" },
];

const CUPS_OPTIONS: { id: CupsAnswer; label: string }[] = [
  { id: "just-me", label: "Just me (1)" },
  { id: "2-4", label: "2–4" },
  { id: "crowd", label: "A crowd (5+)" },
];

export default function SetupQuiz() {
  const [time, setTime] = useState<TimeAnswer | null>(null);
  const [cupsAnswer, setCupsAnswer] = useState<CupsAnswer | null>(null);

  const recommendation =
    time && cupsAnswer ? RECOMMENDATIONS[time][cupsAnswer] : null;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
        Not sure where to start?
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
        Find your setup
      </h2>

      <div className="mt-8 space-y-8">
        <div>
          <p className="font-body text-sm font-medium text-ink">
            How much time do you want to spend per cup?
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TIME_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTime(opt.id)}
                className={`rounded-full border-[1.5px] px-4 py-2 font-body text-sm transition-colors ${
                  time === opt.id
                    ? "border-ink bg-ink text-white"
                    : "border-divider bg-transparent text-text-secondary hover:border-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-medium text-ink">
            How many cups do you usually make?
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CUPS_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setCupsAnswer(opt.id)}
                className={`rounded-full border-[1.5px] px-4 py-2 font-body text-sm transition-colors ${
                  cupsAnswer === opt.id
                    ? "border-ink bg-ink text-white"
                    : "border-divider bg-transparent text-text-secondary hover:border-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {recommendation && (
        <div className="mt-10 rounded-ticket border border-divider bg-card p-6">
          <p className="font-label text-xs uppercase tracking-wide text-muted">
            Your recommended setup
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            {recommendation.map((slug) => {
              const category = getCategoryBySlug(slug);
              if (!category) return null;
              return (
                <Link
                  key={slug}
                  href={`/best/${slug}`}
                  className="inline-block pb-0.5 font-body text-sm font-medium text-coffee"
                  style={{ borderBottom: "1.5px solid #C97A3D" }}
                >
                  {category.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
