import { WorksGallery } from "@/components/sections/works-gallery";
import { Reveal } from "@/components/ui/reveal";
import { portfolioContent } from "@/content/portfolio";

export function CompleteIndex() {
  return (
    <section
      className="all-works section-space"
      id="all-works"
      aria-labelledby="all-works-title"
    >
      <div className="page-shell">
        <Reveal className="all-works-heading">
          <div>
            <p className="eyebrow">Full portfolio / 2026</p>
            <h2 id="all-works-title">
              Complete <em>index.</em>
            </h2>
          </div>
          <p>
            Browse the current collection by discipline. The placeholders preserve
            each intended crop until final photographs and credits are added.
          </p>
        </Reveal>
        <WorksGallery works={portfolioContent.works} />
      </div>
    </section>
  );
}
