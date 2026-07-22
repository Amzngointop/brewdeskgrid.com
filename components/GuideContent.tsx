import type { ReactNode } from "react";
import Link from "next/link";

const INLINE_RE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_RE.lastIndex = 0;
  while ((match = INLINE_RE.exec(text))) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, linkLabel, href, boldText] = match;
    if (boldText !== undefined) {
      parts.push(
        <strong key={key++} className="font-medium text-ink">
          {boldText}
        </strong>
      );
    } else {
      const isExternal = href.startsWith("http");
      parts.push(
        isExternal ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-coffee decoration-1 underline-offset-2 hover:text-coffee"
          >
            {linkLabel}
          </a>
        ) : (
          <Link
            key={key++}
            href={href}
            className="underline decoration-coffee decoration-1 underline-offset-2 hover:text-coffee"
          >
            {linkLabel}
          </Link>
        )
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export default function GuideContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="font-display text-2xl font-semibold text-ink pt-4">
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }

        const lines = block.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5">
              {lines.map((line, j) => (
                <li key={j} className="font-body text-[15px] leading-relaxed text-text-secondary">
                  {renderInline(line.replace(/^-\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="font-body text-[15px] leading-relaxed text-text-secondary">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
