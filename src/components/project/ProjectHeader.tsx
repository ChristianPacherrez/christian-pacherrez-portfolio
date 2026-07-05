import { buttonVariants } from "@heroui/react";
import Link from "next/link";

import { ArrowLeftIcon } from "@/components/icons/ArrowLeftIcon";
import { FigmaIcon } from "@/components/icons/FigmaIcon";
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import type { Project } from "@/types/project";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex flex-col items-start gap-3">
        <Link
          href="/#proyectos"
          className={buttonVariants({ variant: "ghost", className: "gap-2" })}
        >
          <ArrowLeftIcon className="size-4" />
          Volver a proyectos
        </Link>

        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-wrap items-start gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-text rounded-lg bg-white px-3 py-1 text-base font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-text text-5xl leading-[56px] font-medium">
            {project.title}
          </h1>
        </div>
      </div>

      <p className="text-text max-w-3xl text-base">{project.description}</p>

      {project.website || project.figma ? (
        <div className="flex flex-wrap items-start gap-3">
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                // The "secondary" variant's text color reads from --accent-soft-foreground,
                // which is brand-mint-tinted; Figma calls for a neutral gray here instead.
                className: "gap-2 [--button-fg:#18181b]",
              })}
            >
              <GlobeIcon className="size-4" />
              Visitar sitio
            </a>
          ) : null}

          {project.figma ? (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", className: "gap-2" })}
            >
              Ver proyecto en Figma
              <FigmaIcon className="size-4" />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
