import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Dot } from "@/components/ui/Dot";
import { ToolBadge } from "@/components/ui/ToolBadge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="habilidades" className="flex flex-col gap-12 pb-20">
      <Divider />

      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <h2 className="font-display text-text text-3xl font-medium">
            Mis herramientas de uso diario
          </h2>
          <p className="text-text text-base">
            Estas son algunas de las herramientas y tecnologías que utilizo para diseñar, colaborar
            y construir productos digitales.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={index * 80}
              className="bg-surface flex flex-col gap-4 rounded-3xl p-4"
            >
              <div className="flex items-center gap-3">
                <Dot />
                <h3 className="font-display text-text text-base font-medium">{category.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <ToolBadge key={skill} label={skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
