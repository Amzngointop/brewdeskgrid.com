import Image from "next/image";
import StampButton from "@/components/ui/StampButton";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
            Grind + steep guides
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Better coffee and tea, brewed right at home.
          </h1>
          <p className="mt-4 max-w-md font-body text-base text-text-secondary">
            Ratio, grind, and temperature guides paired with honest gear picks
            for grinders, presses, kettles, and everything else on your
            counter.
          </p>
          <div className="hero-cta-group mt-8">
            <StampButton href="#best-picks" variant="primary">
              Best picks of the month
            </StampButton>
            <StampButton href="#calculator" variant="secondary">
              Try the brew calculator
            </StampButton>
          </div>
        </div>

        <div className="hero-image-wrap relative">
          <Image
            src="https://images.unsplash.com/photo-1522675397120-8cb88c83ac16?auto=format&fit=crop&w=1600&h=1000&q=80"
            alt="Pour-over coffee maker brewing on a countertop"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
