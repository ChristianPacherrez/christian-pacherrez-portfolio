import type { ReactNode } from "react";

interface ProjectSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function ProjectSection({ id, title, children }: ProjectSectionProps) {
  return (
    // scroll-mt clears the sticky header (and, below lg, the sticky mobile section nav
    // rendered above the content) so the heading isn't hidden after an anchor jump.
    <section id={id} className="flex scroll-mt-36 flex-col gap-4 lg:scroll-mt-24">
      <h2 className="font-display text-text text-2xl leading-[32px] font-medium">{title}</h2>
      {children}
    </section>
  );
}
