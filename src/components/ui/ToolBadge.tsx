import { Chip } from "@heroui/react";

interface ToolBadgeProps {
  label: string;
}

export function ToolBadge({ label }: ToolBadgeProps) {
  return (
    <Chip color="default" className="h-8 border border-[#f5f5f5] px-3 py-1.5 text-sm">
      {label}
    </Chip>
  );
}
