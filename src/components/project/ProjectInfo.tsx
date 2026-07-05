import type { Project } from "@/types/project";

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  const fields = [
    { label: "Cliente", value: project.client },
    { label: "Duración", value: project.duration },
    { label: "Rol", value: project.role },
    { label: "Año", value: project.year },
  ].filter((field) => Boolean(field.value));

  return (
    <dl className="flex flex-wrap gap-8 border-t border-b border-[#e2e8f0] py-6">
      {fields.map((field) => (
        <div key={field.label} className="flex flex-1 flex-col gap-1">
          <dt className="text-text text-base font-semibold">{field.label}</dt>
          <dd className="text-text text-base">{field.value}</dd>
        </div>
      ))}
    </dl>
  );
}
