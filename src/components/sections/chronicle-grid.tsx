"use client";

import { ArchiveCard } from "@/components/sections/archive-card";
import { Lightbox, useLightbox } from "@/components/ui/lightbox";
import { Reveal } from "@/components/ui/reveal";
import type { PortfolioItem } from "@/content/types";

interface ChronicleGridProps {
  items: PortfolioItem[];
}

export function ChronicleGrid({ items }: ChronicleGridProps) {
  const { containerRef, open, lightboxProps } =
    useLightbox<HTMLDivElement>(items);

  return (
    <>
      <div className="archive-grid" ref={containerRef}>
        {items.map((item, index) => (
          <Reveal
            className={`archive-slot archive-slot-${index + 1}`}
            delay={index * 80}
            key={item.id}
          >
            <ArchiveCard item={item} index={index} onOpen={() => open(index)} />
          </Reveal>
        ))}
      </div>
      <Lightbox {...lightboxProps} />
    </>
  );
}
