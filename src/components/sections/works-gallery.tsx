"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioItem, WorkCategory } from "@/content/types";

type WorkFilter = "all" | WorkCategory;

interface WorksGalleryProps {
  works: PortfolioItem[];
}

const filters: ReadonlyArray<{ value: WorkFilter; label: string }> = [
  { value: "all", label: "Complete index" },
  { value: "events-publicity", label: "Events & Publicity" },
  { value: "portraiture", label: "Portraiture" },
  { value: "cosplay", label: "Cosplay" },
  { value: "miscellaneous", label: "Miscellaneous" },
];

export function WorksGallery({ works }: WorksGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("all");
  const visibleWorks =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.category === activeFilter);

  return (
    <>
      <div className="work-filters" aria-label="Filter photography works">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeFilter === filter.value ? "is-active" : ""}
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
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
        Showing {visibleWorks.length} {visibleWorks.length === 1 ? "work" : "works"}
      </p>
      <div className="works-grid">
        {visibleWorks.map((work) => (
          <article
            className="work-card"
            data-accent={work.accent}
            key={work.id}
          >
            <div className="work-image">
              <Image
                src={work.image.src}
                alt={work.image.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
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
    </>
  );
}
