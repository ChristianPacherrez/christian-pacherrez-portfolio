interface DotProps {
  color?: "secondary" | "text";
  className?: string;
}

export function Dot({ color = "secondary", className = "" }: DotProps) {
  const colorClass = color === "secondary" ? "bg-secondary" : "bg-text";

  return (
    <span
      aria-hidden
      className={`inline-block size-3 shrink-0 rounded-full ${colorClass} ${className}`}
    />
  );
}
