import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import ProductCard from "@/components/ProductCard";
import DashedDivider from "@/components/ui/DashedDivider";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `Best ${category.name} 2026 — BrewDeskGrid`,
    description: category.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-label text-sm uppercase tracking-[0.14em] text-coffee">
        {category.label}
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        Best {category.name} for 2026
      </h1>
      <p className="mt-4 max-w-2xl font-body text-base text-text-secondary">
        {category.blurb} Here's how the current lineup compares, ranked by
        how well each one fits real brewing habits rather than spec sheets
        alone.
      </p>

      <div className="mt-8">
        <AffiliateDisclosure />
      </div>

      <div className="mt-10">
        <ComparisonTable products={products} />
      </div>

      <DashedDivider className="my-12" />

      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <DashedDivider className="my-12" />

      <AffiliateDisclosure />
    </div>
  );
}
