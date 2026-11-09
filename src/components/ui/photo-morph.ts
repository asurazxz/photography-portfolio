/**
 * Shared-element "morph" for the lightbox, built on the View Transitions API.
 * Exactly one rendered element may carry PHOTO_MORPH_NAME at a time: the
 * thumbnail before opening, the lightbox photo while open.
 */
export const PHOTO_MORPH_NAME = "lightbox-photo";

const DECODE_TIMEOUT_MS = 400;

function canMorph() {
  return (
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Wait (briefly) for the open lightbox photo so the morph lands on pixels. */
async function waitForLightboxPhoto() {
  const photo = document.querySelector<HTMLImageElement>(
    ".lightbox[open] .lightbox-image img",
  );
  if (!photo) {
    return;
  }
  await Promise.race([
    photo.decode().catch(() => undefined),
    new Promise((resolve) => setTimeout(resolve, DECODE_TIMEOUT_MS)),
  ]);
}

export function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight;
}

interface MorphOptions {
  /** Element that should morph into the new state (named before the update). */
  from?: HTMLElement | null;
  /** Runs after the transition, e.g. to clear a temporary name. */
  cleanup?: () => void;
}

/**
 * Runs `update` (which must apply its DOM changes synchronously, e.g. via
 * flushSync) inside a view transition, or directly when unsupported or when
 * the visitor prefers reduced motion.
 */
export function runPhotoMorph(update: () => void, options: MorphOptions = {}) {
  const { from, cleanup } = options;
  if (!canMorph()) {
    update();
    cleanup?.();
    return;
  }

  if (from) {
    from.style.viewTransitionName = PHOTO_MORPH_NAME;
  }
  const transition = document.startViewTransition(async () => {
    if (from) {
      from.style.viewTransitionName = "";
    }
    update();
    await waitForLightboxPhoto();
  });
  transition.finished.finally(() => cleanup?.());
}
