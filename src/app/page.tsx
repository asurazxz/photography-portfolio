import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Chronicle } from "@/components/sections/chronicle";
import { CompleteIndex } from "@/components/sections/complete-index";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Chronicle />
        <Profile />
        <Contact />
        <CompleteIndex />
      </main>
      <SiteFooter />
    </>
  );
}
