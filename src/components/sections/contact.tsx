import { ParallaxImage } from "@/components/ui/parallax-image";
import { Reveal } from "@/components/ui/reveal";
import { contactImage, portfolioContent } from "@/content/portfolio";

export function Contact() {
  return (
    <section className="contact section-space" id="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <Reveal className="contact-copy">
          <p className="eyebrow">Inquiry / Singapore</p>
          <h2 id="contact-title">
            Ready to
            <br />
            document
            <br />
            <em>what matters?</em>
          </h2>
          <p className="contact-intro">
            Available for event coverage, portrait sessions, and creative
            collaborations in Singapore.
          </p>
          <div className="contact-links">
            {portfolioContent.contacts.map((contact, index) => (
              <a
                href={contact.href}
                key={contact.id}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
              >
                <span>Channel / 0{index + 1}</span>
                <strong>{contact.label}</strong>
                <em>{contact.value}</em>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal className="contact-image" delay={120}>
          <ParallaxImage image={contactImage} />
          <div className="contact-image-caption">
            <span>Portfolio image</span>
            <span>Placeholder / 2026</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
