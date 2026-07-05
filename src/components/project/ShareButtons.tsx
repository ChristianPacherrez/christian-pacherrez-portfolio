"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { CopyIcon } from "@/components/icons/CopyIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { XIcon } from "@/components/icons/XIcon";

interface ShareButtonsProps {
  title: string;
}

/** The URL never changes without a full navigation, so no real subscription is needed. */
function subscribe() {
  return () => {};
}

function getUrlSnapshot() {
  return window.location.href;
}

/** Deterministic value used for SSR and the first client render, avoiding a hydration mismatch. */
function getServerUrlSnapshot() {
  return "";
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const url = useSyncExternalStore(subscribe, getUrlSnapshot, getServerUrlSnapshot);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard access can be denied (permissions, insecure context, etc.);
      // fail silently rather than surface an unhandled rejection.
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Compartir en LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: LinkedInIcon,
    },
    {
      label: "Compartir en X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: XIcon,
    },
    {
      label: "Compartir por WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      Icon: WhatsAppIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-[#1e293b]">Compartir en:</p>
      <div className="flex items-center gap-4">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#1e293b] transition-opacity hover:opacity-70"
          >
            <Icon className="size-5" />
          </a>
        ))}

        <div className="relative">
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copiar enlace"
            className="text-[#1e293b] transition-opacity hover:opacity-70"
          >
            <CopyIcon className="size-5" />
          </button>

          <span
            role="status"
            aria-live="polite"
            className={`bg-text text-background pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded px-2 py-1 text-xs whitespace-nowrap transition-opacity duration-200 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            {copied ? "¡Enlace copiado!" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
