"use client";

import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { flushSync } from "react-dom";
import {
  PHOTO_MORPH_NAME,
  isInViewport,
  runPhotoMorph,
} from "@/components/ui/photo-morph";
import type { PortfolioItem } from "@/content/types";

const THUMB_SELECTOR = ".image-trigger img";

/**
 * State and wiring for a gallery that opens its photos in the lightbox.
 * Attach `containerRef` to the element holding the gallery's triggers, in
 * the same order as `items`.
 */
export function useLightbox<T extends HTMLElement>(
  items: readonly PortfolioItem[],
) {
  const [index, setIndex] = useState<number | null>(null);
  const containerRef = useRef<T>(null);

  const getThumb = (itemIndex: number) =>
    containerRef.current?.querySelectorAll<HTMLImageElement>(THUMB_SELECTOR)[
      itemIndex
    ] ?? null;

  const open = (itemIndex: number) => {
    runPhotoMorph(() => flushSync(() => setIndex(itemIndex)), {
      from: getThumb(itemIndex),
    });
  };

  return {
    containerRef,
    open,
    lightboxProps: {
      items,
      index,
      onClose: () => setIndex(null),
      onIndexChange: setIndex,
      getThumb,
    },
  };
}

interface LightboxProps {
  items: readonly PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  getThumb?: (index: number) => HTMLElement | null;
}

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
  getThumb,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const requestCloseRef = useRef<() => void>(() => undefined);
  const item = index === null ? undefined : items[index];
  const hasMultiple = items.length > 1;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Layout effect so the dialog opens inside the same synchronous update a
  // view transition captures as its "after" state.
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (item && dialog && !dialog.open) {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
    }
  }, [item]);

  // Every exit path ends in the native `close` event, so state reset and focus
  // restoration live in one listener. React's `onClose` prop does not fire
  // reliably for <dialog>, hence direct listeners. Escape is routed through
  // requestClose so it gets the same morph back to the thumbnail.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    const handleClose = () => {
      onCloseRef.current();
      returnFocusRef.current?.focus({ preventScroll: true });
    };
    const handleCancel = (event: Event) => {
      event.preventDefault();
      requestCloseRef.current();
    };
    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

  const requestClose = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open) {
      return;
    }
    const thumb = index === null ? null : (getThumb?.(index) ?? null);
    const target = thumb && isInViewport(thumb) ? thumb : null;
    runPhotoMorph(
      () => {
        dialog.close();
        if (target) {
          target.style.viewTransitionName = PHOTO_MORPH_NAME;
        }
      },
      {
        cleanup: () => {
          if (target) {
            target.style.viewTransitionName = "";
          }
        },
      },
    );
  };

  useEffect(() => {
    requestCloseRef.current = requestClose;
  });

  const showAt = (nextIndex: number) =>
    runPhotoMorph(() => flushSync(() => onIndexChange(nextIndex)));

  const showPrevious = () => {
    if (index !== null) {
      showAt((index - 1 + items.length) % items.length);
    }
  };

  const showNext = () => {
    if (index !== null) {
      showAt((index + 1) % items.length);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (!hasMultiple) {
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    // Clicks on empty layout space (not the photo, caption, or controls) dismiss the viewer.
    const target = event.target as HTMLElement;
    if (
      target === event.currentTarget ||
      target.classList.contains("lightbox-figure") ||
      target.classList.contains("lightbox-image")
    ) {
      requestClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby={item ? "lightbox-title" : undefined}
      aria-label={item ? undefined : "Image viewer"}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {item && index !== null ? (
        <>
          <div className="lightbox-bar">
            <p>
              {index + 1} / {items.length}
            </p>
            <button
              className="lightbox-close"
              type="button"
              onClick={requestClose}
            >
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <figure className="lightbox-figure">
            <div className="lightbox-image">
              <Image
                key={item.id}
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 960px) 100vw, 75vw"
                loading="eager"
                style={{ viewTransitionName: PHOTO_MORPH_NAME }}
              />
            </div>
            <figcaption className="lightbox-caption" data-accent={item.accent}>
              <p>{item.categoryLabel}</p>
              <h2 id="lightbox-title">{item.title}</h2>
              <span>{item.description}</span>
              {item.image.credit ? <small>{item.image.credit}</small> : null}
            </figcaption>
          </figure>
          {hasMultiple ? (
            <div className="lightbox-nav">
              <button type="button" onClick={showPrevious}>
                <span aria-hidden="true">←</span> Previous
              </button>
              <button type="button" onClick={showNext}>
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </dialog>
  );
}
