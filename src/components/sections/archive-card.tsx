import Image from "next/image";
import type { PortfolioItem } from "@/content/types";

interface ArchiveCardProps {
  item: PortfolioItem;
  index: number;
  onOpen: () => void;
}

export function ArchiveCard({ item, index, onOpen }: ArchiveCardProps) {
  return (
    <article
      className={`archive-card archive-card-${index + 1}`}
      data-accent={item.accent}
    >
      <button
        className="archive-image image-trigger"
        type="button"
        aria-label={`View ${item.title} full size`}
        aria-haspopup="dialog"
        onClick={onOpen}
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes={
            index === 0
              ? "(max-width: 768px) 100vw, 58vw"
              : "(max-width: 768px) 100vw, 42vw"
          }
        />
      </button>
      <div className="archive-copy">
        <div>
          <p className="archive-category">{item.categoryLabel}</p>
          <h3>{item.title}</h3>
          <p className="archive-description">{item.description}</p>
        </div>
        <p className="archive-plate">{item.plate}</p>
      </div>
    </article>
  );
}
