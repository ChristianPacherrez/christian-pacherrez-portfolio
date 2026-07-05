import type { ReactNode } from "react";

import { BracketsHeartIcon } from "@/components/icons/BracketsHeartIcon";
import { Marquee } from "@/components/shared/Marquee";
import { siteConfig } from "@/config/site";

interface FooterLinkProps {
  href: string;
  external?: boolean;
  children: ReactNode;
}

function FooterLink({ href, external, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="w-fit text-base text-white hover:opacity-70"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer id="contacto">
      <Marquee />

      <div className="bg-text text-white">
        {/* Figma's footer content column is 1216px wide, wider than the site's shared 1008px Container. */}
        <div className="mx-auto flex w-full max-w-[1216px] flex-col gap-12 px-4 py-8 sm:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-[136px]">
            <h2 className="font-display max-w-[592px] text-4xl font-medium text-balance sm:text-5xl sm:leading-[54px]">
              Conversemos sobre tu idea, <span className="underline">escríbenos.</span>
            </h2>

            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between lg:w-[488px]">
              <div className="flex flex-col gap-2 lg:w-[246px]">
                <FooterLink href="tel:+51924644925">+51 924 644 925</FooterLink>
                <FooterLink href={`mailto:${siteConfig.email}`}>{siteConfig.email}</FooterLink>
              </div>

              <ul className="flex flex-col gap-2">
                <li>
                  <FooterLink href={siteConfig.social.linkedin} external>
                    Linkedin
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href={siteConfig.whatsapp} external>
                    WhatsApp
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8 border-t border-[#3e3e43] pt-8">
            <p className="text-sm text-[#e8e8e8]">
              © {new Date().getFullYear()} {siteConfig.name}.
            </p>

            <div className="flex items-center gap-1">
              <BracketsHeartIcon className="size-6" />
              <span className="text-sm text-white">Desarrollado con creatividad y pasión</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
