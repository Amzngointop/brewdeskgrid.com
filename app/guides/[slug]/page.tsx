import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { guides, getGuideBySlug, getOtherGuides } from "@/data/guides";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import GuideContent from "@/components/GuideContent";
import DashedDivider from "@/components/ui/DashedDivider";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — BrewDeskGrid`,
    description: guide.teaser,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const isTea = guide.slug === "gongfu-vs-western-tea";
  const otherGuides = getOtherGuides(guide.slug);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
        <article>
          <p
            className="font-label text-sm uppercase tracking-[0.14em]"
            style={{ color: isTea ? "#4F6B4A" : "#C97A3D" }}
          >
            {guide.label}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
            {guide.title}
          </h1>
          <p className="mt-2 font-body text-sm text-muted">{guide.readTime}</p>

          <div className="cover-image-wrap cover-image-wrap--article relative mt-6">
            <Image
              src={guide.imageUrl}
              alt={guide.title}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="cover-image"
            />
          </div>

          <div className="mt-6">
            <AffiliateDisclosure />
          </div>

          <DashedDivider className="my-8" />

          <GuideContent content={guide.content} />

          <DashedDivider className="my-8" />

          <AffiliateDisclosure />
        </article>

        <aside>
          <p className="font-label text-xs uppercase tracking-wide text-muted">
            More guides
          </p>
          <ul className="mt-4 space-y-4">
            {otherGuides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="group block">
                  <p className="font-display text-base font-semibold text-ink group-hover:text-coffee">
                    {g.title}
                  </p>
                  <p className="mt-1 font-body text-xs text-muted">{g.readTime}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
