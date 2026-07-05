"use client";

import { PROJECT_NAV_ITEMS, PROJECT_SECTION_IDS } from "@/constants/project-nav";
import { useScrollSpy } from "@/hooks/useScrollSpy";

/**
 * Small-screen equivalent of ProjectSidebar: rendered ahead of the case-study
 * content (not after it, like the desktop aside) so it's usable while
 * scrolling through a long page, not just once the user reaches the bottom.
 */
export function ProjectMobileNav() {
  const activeId = useScrollSpy(PROJECT_SECTION_IDS);

  return (
    <nav
      aria-label="Navegación del proyecto"
      className="sticky top-20 z-40 flex items-center gap-2 overflow-x-auto rounded-full border border-black/[0.08] bg-white/85 px-3 py-2 backdrop-blur-md lg:hidden"
    >
      {PROJECT_NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={activeId === item.id ? "true" : undefined}
          className={`shrink-0 rounded-full px-3 py-1.5 text-sm whitespace-nowrap transition-colors ${
            activeId === item.id ? "bg-text text-background" : "text-text"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
