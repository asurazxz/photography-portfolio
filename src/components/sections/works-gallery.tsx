"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Lightbox, useLightbox } from "@/components/ui/lightbox";
import type { PortfolioItem, WorkCategory } from "@/content/types";

type WorkFilter = "all" | WorkCategory;

interface WorksGalleryProps {
  works: PortfolioItem[];
}

const PAGE_SIZE = 12;

const filters: ReadonlyArray<{ value: WorkFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "events-publicity", label: "Events & Publicity" },
  { value: "portraiture", label: "Portraiture" },
  { value: "cosplay", label: "Cosplay" },
  { value: "miscellaneous", label: "Miscellaneous" },
];

export function WorksGallery({ works }: WorksGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const focusIndexRef = useRef<number | null>(null);

  const filteredWorks =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.category === activeFilter);
  const shownWorks = filteredWorks.slice(0, visibleCount);
  const remaining = filteredWorks.length - shownWorks.length;
  const {
    containerRef: gridRef,
    open,
    lightboxProps,
  } = useLightbox<HTMLDivElement>(shownWorks);

  useEffect(() => {
    // After "Show more", move keyboard focus to the first newly revealed work.
    const target = focusIndexRef.current;
    if (target === null) {
      return;
    }
    focusIndexRef.current = null;
    gridRef.current
      ?.querySelectorAll<HTMLButtonElement>(".work-image")
      [target]?.focus();
  }, [gridRef, visibleCount]);

  const selectFilter = (value: WorkFilter) => {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
    // Return to the same position the "Complete index" nav link lands on.
    // Smooth vs. instant follows the CSS scroll-behavior (instant under reduced motion).
    gridRef.current?.closest("section")?.scrollIntoView({ block: "start" });
  };

  const showMore = () => {
    focusIndexRef.current = shownWorks.length;
    setVisibleCount((count) => count + PAGE_SIZE);
  };

  return (
    <>
      <div className="work-filters" aria-label="Filter photography works">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeFilter === filter.value ? "is-active" : ""}
            aria-pressed={activeFilter === filter.value}
            onClick={() => selectFilter(filter.value)}
          >
            {filter.label}
            <span>
              {filter.value === "all"
                ? works.length
                : works.filter((work) => work.category === filter.value).length}
            </span>
          </button>
        ))}
      </div>
      <p className="works-result-count" aria-live="polite">
        Showing {shownWorks.length} of {filteredWorks.length}{" "}
        {filteredWorks.length === 1 ? "work" : "works"}
      </p>
      <div className="works-grid" ref={gridRef}>
        {shownWorks.map((work, index) => (
          <article
            className="work-card"
            data-accent={work.accent}
            key={work.id}
          >
            <button
              className="work-image image-trigger"
              type="button"
              aria-label={`View ${work.title} full size`}
              aria-haspopup="dialog"
              onClick={() => open(index)}
            >
              <Image
                src={work.image.src}
                alt={work.image.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </button>
            <div className="work-card-meta">
              <div>
                <p>{work.categoryLabel}</p>
                <h3>{work.title}</h3>
              </div>
              <span>{work.plate}</span>
            </div>
          </article>
        ))}
      </div>
      {remaining > 0 ? (
        <div className="works-more">
          <button className="button button-outline" type="button" onClick={showMore}>
            Show {Math.min(remaining, PAGE_SIZE)} more
          </button>
        </div>
      ) : null}
      <Lightbox {...lightboxProps} />
    </>
  );
}
