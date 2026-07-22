import type { Product } from "@/data/products";
import UnderlineLink from "@/components/ui/UnderlineLink";

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-ticket border border-divider">
      <table className="w-full min-w-[640px] border-collapse font-body text-sm">
        <thead>
          <tr className="border-b border-divider bg-card text-left">
            <th className="px-4 py-3 font-label text-xs uppercase tracking-wide text-muted">
              Product
            </th>
            <th className="px-4 py-3 font-label text-xs uppercase tracking-wide text-muted">
              Best For
            </th>
            <th className="px-4 py-3 font-label text-xs uppercase tracking-wide text-muted">
              Key Feature
            </th>
            <th className="px-4 py-3 font-label text-xs uppercase tracking-wide text-muted">
              Top Con
            </th>
            <th className="px-4 py-3 font-label text-xs uppercase tracking-wide text-muted">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-dashed border-divider last:border-b-0">
              <td className="px-4 py-3 font-medium text-ink">{product.name}</td>
              <td className="px-4 py-3 text-text-secondary">{product.bestFor}</td>
              <td className="px-4 py-3 text-text-secondary">{product.pros[0]}</td>
              <td className="px-4 py-3 text-text-secondary">{product.cons[0]}</td>
              <td className="px-4 py-3">
                <UnderlineLink href={product.affiliateUrl} external>
                  View
                </UnderlineLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
