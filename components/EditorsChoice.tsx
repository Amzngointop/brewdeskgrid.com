import Image from "next/image";
import { getProductById } from "@/data/products";

const EDITORS_CHOICE_ID = "breville-barista-express";

export default function EditorsChoice() {
  const product = getProductById(EDITORS_CHOICE_ID);
  if (!product) return null;

  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee-dark">
          Editor&apos;s Choice
        </p>

        <div className="dashed-box mt-4 rounded-ticket bg-white p-6 md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[220px_1fr]">
            <div className="flex items-center justify-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={220}
                height={220}
                className="h-auto w-40 object-contain md:w-full"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {product.name}
              </h2>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-text-secondary">
                {product.editorsChoiceVerdict}
              </p>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="stamp-button mt-6 inline-flex items-center justify-center rounded-full border-[1.5px] border-ink bg-coffee px-6 py-3 font-body text-sm font-medium tracking-wide text-white"
              >
                Check price on Amazon <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
