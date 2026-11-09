import { ParallaxImage } from "@/components/ui/parallax-image";
import { heroImage } from "@/content/portfolio";

// The hero is visible on first paint (no scroll reveal); only its photo
// "develops" via a CSS load animation.
export function Hero() {
  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-index">
          <p className="eyebrow">Selected Works / 2026</p>
          <div className="identity-rule">
            <span>Freelance, hobbyist photographer</span>
          </div>
        </div>
        <div className="hero-statement">
          <h1 id="hero-title">
            Moments
            <br />
            in life,
            <br />
            <span>through my eyes.</span>
          </h1>
          <p className="hero-intro">
            Capturing memories and emotion in every moment.
          </p>
          <div className="hero-actions">
            <a className="button button-solid" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <ParallaxImage image={heroImage} priority />
        <div className="registration-dots" aria-hidden="true">
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
