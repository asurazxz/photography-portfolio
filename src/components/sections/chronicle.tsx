import { ChronicleGrid } from "@/components/sections/chronicle-grid";
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
      <ChronicleGrid items={portfolioContent.chronicle} />
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
