"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { ImageMetadata } from "@/content/types";

interface ParallaxImageProps {
  image: ImageMetadata;
  priority?: boolean;
  className?: string;
}

export function ParallaxImage({
  image,
  priority = false,
  className = "",
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const imageElement = imageRef.current;
    if (
      !wrapper ||
      !imageElement ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frameId = 0;
    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const offset = (rect.top + rect.height / 2 - viewportCenter) * -0.035;
      imageElement.style.transform = `translate3d(0, ${offset}px, 0) scale(1.07)`;
      frameId = 0;
    };
    const onScroll = () => {
      // Coalesce rapid scroll events into a single visual update per frame.
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`parallax-image ${className}`.trim()}>
      <Image
        ref={imageRef}
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 58vw"
      />
    </div>
  );
}
