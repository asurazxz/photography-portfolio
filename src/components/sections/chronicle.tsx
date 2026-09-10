import { ArchiveCard } from "@/components/sections/archive-card";
import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/content/portfolio";

export function Chronicle() {
  return (
    <section className="archive page-shell section-space" id="work" aria-labelledby="work-title">
      <Reveal className="section-intro">
        <h2 className="sr-only" id="work-title">
          Selected work chronicle
        </h2>
        <span className="archive-display-title" aria-hidden="true">
          Chronicle
        </span>
        <div>
          <p className="eyebrow">Curated portfolio</p>
          <p>Spotlight of my favourite works.</p>
        </div>
      </Reveal>
      <div className="archive-grid">
        {portfolioContent.chronicle.map((item, index) => (
          <Reveal
            className={`archive-slot archive-slot-${index + 1}`}
            delay={index * 80}
            key={item.id}
          >
            <ArchiveCard item={item} index={index} />
          </Reveal>
        ))}
      </div>
      <Reveal className="archive-cta">
        <p>
          The complete index holds every current series and can be filtered by
          discipline.
        </p>
        <a className="button button-outline" href="#all-works">
          View complete index
        </a>
      </Reveal>
    </section>
  );
}
