/**
 * Full-height textured backdrop for the case-study template. Rendered once
 * behind Header/main/Footer inside a `relative` wrapper so it spans the
 * entire page (not just the hero) and scales with content length —
 * reused as-is for every future project via the shared template.
 */
export function ProjectBackground() {
  return (
    <div
      aria-hidden="true"
      className="bg-background bg-grain pointer-events-none absolute inset-0 -z-10"
    />
  );
}
