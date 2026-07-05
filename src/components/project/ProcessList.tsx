import type { ProcessStep } from "@/types/project";

interface ProcessListProps {
  steps: ProcessStep[];
}

export function ProcessList({ steps }: ProcessListProps) {
  return (
    <ul className="text-text list-disc space-y-2 pl-6 text-base">
      {steps.map((step) => (
        <li key={step.label}>
          <span className="font-bold">{step.label}</span>: {step.description}
        </li>
      ))}
    </ul>
  );
}
