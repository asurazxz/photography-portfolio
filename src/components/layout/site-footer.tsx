import { portfolioContent } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>Denzel Marani</strong>
        <p>
          Photography & visual documentation
          <br />© 2026
        </p>
      </div>
      <div className="footer-meta">
        <p>Freelance, hobbyist photographer</p>
        <p>Operating out of Singapore</p>
      </div>
      <nav className="footer-links" aria-label="Contact">
        {portfolioContent.contacts.map((contact) => (
          <a
            href={contact.href}
            key={contact.id}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noreferrer" : undefined}
          >
            {contact.value}
          </a>
        ))}
      </nav>
    </footer>
  );
}
