"use client";

import Image from "next/image";
import { useState } from "react";

import { ProjectLightbox } from "@/components/project/ProjectLightbox";
import { ProjectVideo } from "@/components/project/ProjectVideo";
import type { GalleryImage } from "@/types/project";

interface ProjectGalleryProps {
  video?: string;
  images: GalleryImage[];
}

export function ProjectGallery({ video, images }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {video ? (
        <div className="bg-surface rounded-[4px] p-12">
          <ProjectVideo
            src={video}
            className="aspect-[1686/1052] w-full rounded-lg object-cover shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06),0px_-6px_12px_0px_rgba(0,0,0,0.03),0px_14px_28px_0px_rgba(0,0,0,0.08)]"
          />
        </div>
      ) : null}

      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => setOpenIndex(index)}
          aria-label={`Ver imagen ampliada: ${image.alt}`}
          className="focus-visible:ring-text focus-visible:ring-offset-background block w-full cursor-zoom-in focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 800px, 100vw"
            className="h-auto w-full"
          />
        </button>
      ))}

      <ProjectLightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} />
    </div>
  );
}
