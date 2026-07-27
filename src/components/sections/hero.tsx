import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";
import { heroImage } from "@/content/portfolio";

export function Hero() {
  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Reveal className="hero-index">
          <p className="eyebrow">Selected Works / 2026</p>
          <div className="identity-rule">
            <span>Freelance, hobbyist photographer</span>
          </div>
        </Reveal>
        <Reveal className="hero-statement" delay={100}>
          <h1 id="hero-title">
            Capture
            <br />
            persona
            <br />
            <em>not just profile.</em>
          </h1>
          <p className="hero-intro">
            A Singapore-based photographer documenting people, performances,
            organizations, and the details between them.
          </p>
        </Reveal>
      </div>
      <Reveal className="hero-visual" delay={180}>
        <ParallaxImage image={heroImage} priority />
        <div className="registration-dots" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="plate-overlay">
          <strong>Plate No. 01</strong>
          <span>Image placeholder</span>
        </div>
      </Reveal>
    </section>
  );
}
