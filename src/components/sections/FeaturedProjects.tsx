import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="proyectos" className="flex flex-col gap-12 pb-20">
      <Divider />

      <Container className="flex flex-col gap-11">
        <Reveal className="flex max-w-[384px] flex-col gap-4">
          <h2 className="font-display text-text text-3xl font-medium">Mis proyectos</h2>
          <p className="text-text text-base">
            Aquí podrás conocer algunos de los proyectos que mejor representan mi experiencia y mi
            forma de diseñar productos digitales.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
