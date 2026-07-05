"use client";

import { ShareButtons } from "@/components/project/ShareButtons";
import { PROJECT_NAV_ITEMS, PROJECT_SECTION_IDS } from "@/constants/project-nav";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface ProjectSidebarProps {
  projectTitle: string;
}

/** Desktop-only sticky column. See ProjectMobileNav for the small-screen equivalent. */
export function ProjectSidebar({ projectTitle }: ProjectSidebarProps) {
  const activeId = useScrollSpy(PROJECT_SECTION_IDS);

  return (
    <aside className="sticky top-24 hidden w-44 shrink-0 flex-col gap-4 lg:flex">
      <p className="text-text text-base font-semibold">Navegación</p>
      <nav aria-label="Navegación del proyecto" className="flex flex-col gap-2">
        {PROJECT_NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeId === item.id ? "true" : undefined}
            className={`w-fit text-base transition-colors ${
              activeId === item.id ? "text-text" : "text-text/60 hover:text-text"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="h-px w-full bg-[#e5e8ed]" />

      <ShareButtons title={projectTitle} />
    </aside>
  );
}
