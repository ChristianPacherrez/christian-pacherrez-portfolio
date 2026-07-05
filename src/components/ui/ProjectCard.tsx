"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Dot } from "@/components/ui/Dot";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

/** Interpolation speed for the cursor-follow effect: lower = more inertia. */
const LERP_FACTOR = 0.15;
/** Offset (px) from the raw cursor position, so the circle trails it rather than sitting under it. */
const CURSOR_OFFSET = 16;
/** Half the circle's size (size-28 = 112px), used to keep it inside the image bounds. */
const CIRCLE_RADIUS = 56;
/** Distance (px) below which the animation loop is considered settled and can stop. */
const SETTLE_THRESHOLD = 0.3;

function supportsFineHover() {
  return (
    typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

/**
 * The entire card is a single link (no nested interactive elements); the
 * "Ver caso" circle is a decorative hover affordance, not a separate control.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef({ left: 0, top: 0, width: 0, height: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isHoveringRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  function applyTransform() {
    if (!circleRef.current) return;
    const { x, y } = currentPos.current;
    circleRef.current.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0)`;
  }

  function tick() {
    const dx = targetPos.current.x - currentPos.current.x;
    const dy = targetPos.current.y - currentPos.current.y;
    currentPos.current.x += dx * LERP_FACTOR;
    currentPos.current.y += dy * LERP_FACTOR;
    applyTransform();

    const settled = Math.hypot(dx, dy) < SETTLE_THRESHOLD;
    if (!settled || isHoveringRef.current) {
      rafId.current = requestAnimationFrame(tick);
    } else {
      rafId.current = null;
    }
  }

  function ensureAnimating() {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(tick);
    }
  }

  function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
    if (!supportsFineHover() || !containerRef.current) return;

    rectRef.current = containerRef.current.getBoundingClientRect();
    updateTarget(event.clientX, event.clientY);
    isHoveringRef.current = true;
    setIsHovering(true);
    ensureAnimating();
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!isHoveringRef.current) return;
    updateTarget(event.clientX, event.clientY);
  }

  function handleMouseLeave() {
    isHoveringRef.current = false;
    setIsHovering(false);
    targetPos.current = { x: 0, y: 0 };
    ensureAnimating();
  }

  function updateTarget(clientX: number, clientY: number) {
    const { left, top, width, height } = rectRef.current;
    const x = clientX - left + CURSOR_OFFSET;
    const y = clientY - top + CURSOR_OFFSET;

    const clampedX = Math.min(Math.max(x, CIRCLE_RADIUS), width - CIRCLE_RADIUS);
    const clampedY = Math.min(Math.max(y, CIRCLE_RADIUS), height - CIRCLE_RADIUS);

    targetPos.current = { x: clampedX - width / 2, y: clampedY - height / 2 };
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group focus-visible:ring-text focus-visible:ring-offset-background flex flex-col gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-square w-full overflow-hidden rounded-xl"
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 488px, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-1 p-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/85 px-2.5 py-1 text-xs text-black uppercase backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          ref={circleRef}
          aria-hidden
          style={{ opacity: isHovering ? 1 : 0 }}
          className="bg-primary font-display text-text pointer-events-none absolute top-1/2 left-1/2 flex aspect-square size-28 flex-col items-center justify-center rounded-full text-center text-sm leading-tight transition-opacity duration-300 ease-out will-change-transform"
        >
          <span>Ver</span>
          <span>caso</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Dot />
        <p className="font-display text-text flex-1 text-xl font-medium">{project.title}</p>
      </div>
    </Link>
  );
}
