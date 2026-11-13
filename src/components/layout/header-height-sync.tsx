"use client";

import { useEffect } from "react";

/**
 * Publishes the fixed header's rendered height as `--header-height` so sticky
 * elements and anchor scroll offsets sit exactly below it at every breakpoint.
 */
export function HeaderHeightSync() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) {
      return;
    }

    const root = document.documentElement;
    const publish = () =>
      root.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return null;
}
