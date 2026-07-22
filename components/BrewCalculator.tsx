"use client";

import { useState, useMemo } from "react";

interface Method {
  id: string;
  label: string;
  ratio: number;
  temp: string;
  time: string;
  grindIndex: number;
  grindLabel: string;
}

const METHODS: Method[] = [
  {
    id: "pour-over",
    label: "Pour-over",
    ratio: 16,
    temp: "200°F",
    time: "3–4 min",
    grindIndex: 4,
    grindLabel: "Medium-fine",
  },
  {
    id: "french-press",
    label: "French press",
    ratio: 15,
    temp: "200°F",
    time: "4 min",
    grindIndex: 2,
    grindLabel: "Coarse",
  },
  {
    id: "espresso",
    label: "Espresso (moka pot)",
    ratio: 10,
    temp: "200°F (stovetop boil)",
    time: "4–5 min",
    grindIndex: 5,
    grindLabel: "Fine",
  },
  {
    id: "drip",
    label: "Drip machine",
    ratio: 17,
    temp: "195–205°F",
    time: "5–6 min",
    grindIndex: 3,
    grindLabel: "Medium",
  },
];

const ML_PER_CUP = 240;
const GRIND_DOTS = 5;

export default function BrewCalculator() {
  const [methodId, setMethodId] = useState(METHODS[0].id);
  const [cups, setCups] = useState(4);

  const method = useMemo(
    () => METHODS.find((m) => m.id === methodId) ?? METHODS[0],
    [methodId]
  );

  const waterMl = cups * ML_PER_CUP;
  const coffeeGrams = Math.round((waterMl / method.ratio) * 10) / 10;
  const strengthPct = Math.round(((17 - method.ratio) / (17 - 10)) * 100);

  return (
    <section id="calculator" className="bg-card py-16">
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
          Dial it in
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
          Brew Ratio &amp; Grind Finder
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {METHODS.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMethodId(m.id)}
              className={`rounded-full border-[1.5px] px-4 py-2 font-body text-sm transition-colors ${
                m.id === methodId
                  ? "border-ink bg-ink text-white"
                  : "border-divider bg-transparent text-text-secondary hover:border-ink"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <label htmlFor="cups" className="font-body text-sm text-text-secondary">
            Cups: <span className="font-medium text-ink">{cups}</span>
          </label>
          <input
            id="cups"
            type="range"
            min={1}
            max={12}
            step={1}
            value={cups}
            onChange={(e) => setCups(Number(e.target.value))}
            className="mt-2 w-full accent-coffee"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-ticket border border-divider bg-white p-6 sm:grid-cols-2">
          <div>
            <p className="font-label text-xs uppercase tracking-wide text-muted">
              Coffee : Water
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink">
              {coffeeGrams}g : {waterMl}ml
            </p>
          </div>
          <div>
            <p className="font-label text-xs uppercase tracking-wide text-muted">
              Water Temperature
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink">
              {method.temp}
            </p>
          </div>
          <div>
            <p className="font-label text-xs uppercase tracking-wide text-muted">
              Brew Time
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink">
              {method.time}
            </p>
          </div>
          <div>
            <p className="font-label text-xs uppercase tracking-wide text-muted">
              Grind — {method.grindLabel}
            </p>
            <div className="mt-3 flex items-center gap-2">
              {Array.from({ length: GRIND_DOTS }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i < method.grindIndex ? "bg-coffee" : "bg-divider"
                  }`}
                />
              ))}
            </div>
            <div className="mt-1 flex justify-between font-body text-[10px] text-muted">
              <span>Coarse</span>
              <span>Fine</span>
            </div>
          </div>

          <div className="sm:col-span-2">
            <p className="font-label text-xs uppercase tracking-wide text-muted">
              Brew Strength Preview
            </p>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-divider">
              <div
                className="strength-fill h-full rounded-full bg-coffee"
                style={{ width: `${strengthPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
