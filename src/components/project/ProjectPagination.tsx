import { buttonVariants } from "@heroui/react";
import Link from "next/link";

import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import type { Project } from "@/types/project";

interface ProjectPaginationProps {
  previous: Project | null;
  next: Project | null;
}

export function ProjectPagination({ previous, next }: ProjectPaginationProps) {
  if (!previous && !next) return null;

  return (
    <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-6">
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className={buttonVariants({
            variant: "secondary",
            // The "secondary" variant's text color reads from --accent-soft-foreground,
            // which is brand-mint-tinted; Figma calls for a neutral gray here instead.
            className: "gap-2 [--button-fg:#18181b]",
          })}
        >
          <ChevronLeftIcon className="size-4" />
          Anterior
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className={buttonVariants({
            variant: "secondary",
            className: "gap-2 [--button-fg:#18181b]",
          })}
        >
          Siguiente
          <ChevronRightIcon className="size-4" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
