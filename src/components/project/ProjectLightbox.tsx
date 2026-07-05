"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "@/components/icons/CloseIcon";
import type { GalleryImage } from "@/types/project";

interface ProjectLightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
}

const ANIMATION_MS = 200;

/** Native-API modal: no library, manual focus trap, ESC + backdrop-click to close. */
export function ProjectLightbox({ images, index, onClose }: ProjectLightboxProps) {
  const isOpen = index !== null;
  const image = index !== null ? images[index] : null;
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  function requestClose() {
    setVisible(false);
    window.setTimeout(onClose, ANIMATION_MS);
  }

  useEffect(() => {
    if (!isOpen) return;

    const raf = requestAnimationFrame(() => setVisible(true));
    previouslyFocused.current = document.activeElement;
    dialogRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        requestClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen || !image || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 transition-opacity ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDuration: `${ANIMATION_MS}ms` }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
        tabIndex={-1}
        className={`relative max-h-[85vh] max-w-5xl transition-all ease-out outline-none ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ transitionDuration: `${ANIMATION_MS}ms` }}
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label="Cerrar"
          className="absolute -top-12 right-0 rounded-full p-2 text-white transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
        >
          <CloseIcon className="size-6" />
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element -- intrinsic size is unknown ahead of time; native <img> sizes itself to the loaded file. */}
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
        />
      </div>
    </div>,
    document.body,
  );
}
