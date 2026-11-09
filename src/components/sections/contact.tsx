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
            <span>what matters?</span>
          </h2>
          <p className="contact-intro">
            Available for event coverage, portrait sessions, and creative
            collaborations in Singapore.
          </p>
          <div className="contact-links">
            {portfolioContent.contacts.map((contact) => (
              <a
                href={contact.href}
                key={contact.id}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
              >
                <strong>{contact.label}</strong>
                <span className="contact-value">{contact.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal className="contact-image" delay={120}>
          <ParallaxImage image={contactImage} />
        </Reveal>
      </div>
    </section>
  );
}
