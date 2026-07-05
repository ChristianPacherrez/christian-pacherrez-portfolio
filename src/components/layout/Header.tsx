"use client";

import { buttonVariants } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/icons/Logo";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { siteConfig } from "@/config/site";

interface NavLinksProps {
  className?: string;
}

function NavLinks({ className = "" }: NavLinksProps) {
  return (
    <>
      {siteConfig.nav.map((item) => {
        // Anchor links (in-page or "/#section") should navigate normally;
        // only non-anchor hrefs (e.g. the CV PDF) open in a new tab.
        const isExternal = !item.href.includes("#");

        return (
          <a
            key={item.href}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={`${buttonVariants({ variant: "ghost", size: "sm" })} ${className}`}
          >
            {item.label}
          </a>
        );
      })}
    </>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-8">
      <div className="mx-auto w-full max-w-[1376px]">
        <div className="flex items-center justify-between rounded-full border border-black/[0.08] bg-white/70 px-4 py-3 backdrop-blur-md sm:pr-3 sm:pl-8">
          <Link href="/" aria-label={siteConfig.name} onClick={() => setIsMenuOpen(false)}>
            <Logo className="h-8 w-auto" />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex"
          >
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label="Abrir navegación"
              className={`${buttonVariants({ variant: "ghost", size: "sm", isIconOnly: true })} md:hidden`}
            >
              <MenuIcon isOpen={isMenuOpen} className="size-5" />
            </button>

            <a href="#contacto" className={buttonVariants({ variant: "outline" })}>
              Contactarme
            </a>
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            aria-label="Navegación principal móvil"
            className="mt-2 flex flex-col gap-1 rounded-3xl border border-black/[0.08] bg-white/90 p-2 backdrop-blur-md md:hidden"
          >
            <NavLinks className="w-full justify-start" />
          </nav>
        ) : null}
      </div>
    </header>
  );
}
