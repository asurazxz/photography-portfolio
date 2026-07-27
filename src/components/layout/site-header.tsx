import { MobileMenu } from "@/components/layout/mobile-menu";
import { siteNavigation } from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Denzel Marani, back to top">
        Denzel Marani
      </a>
      <nav className="desktop-navigation" aria-label="Primary navigation">
        {siteNavigation.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <MobileMenu />
    </header>
  );
}
