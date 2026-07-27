"use client";

import { useEffect, useState } from "react";
import { siteNavigation } from "@/config/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent the page behind the full-screen menu from moving on touch devices.
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
        <span className="menu-mark" aria-hidden="true">
          {isOpen ? "×" : "+"}
        </span>
      </button>
      <div
        className={`mobile-navigation ${isOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isOpen}
      >
        <p className="eyebrow">Index / 2026</p>
        <nav aria-label="Mobile navigation">
          {siteNavigation.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mobile-menu-location">Singapore / SIN</p>
      </div>
    </div>
  );
}
