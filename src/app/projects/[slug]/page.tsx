import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProcessList } from "@/components/project/ProcessList";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectInfo } from "@/components/project/ProjectInfo";
import { ProjectMobileNav } from "@/components/project/ProjectMobileNav";
import { ProjectPagination } from "@/components/project/ProjectPagination";
import { ProjectSection } from "@/components/project/ProjectSection";
import { ProjectSidebar } from "@/components/project/ProjectSidebar";
import { ShareButtons } from "@/components/project/ShareButtons";
import { Container } from "@/components/ui/Container";
import { getAdjacentProjects, getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Christian Pacherrez`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);
  const sections = project.sections;

  return (
    <>
      <Header />
      <main className="flex-1">
        <Container className="flex flex-col gap-12 pt-6 pb-12">
          <ProjectHeader project={project} />
          <ProjectInfo project={project} />
          <ProjectMobileNav />

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex min-w-0 flex-1 flex-col gap-8">
              {sections ? (
                <>
                  <ProjectSection id="el-reto" title="El reto">
                    <p className="text-text text-base">{sections.challenge}</p>
                  </ProjectSection>

                  <div className="h-px bg-[#e5e8ed]" />

                  <ProjectSection id="solucion" title="Solución">
                    <p className="text-text text-base">{sections.solution}</p>
                  </ProjectSection>

                  <div className="h-px bg-[#e5e8ed]" />

                  <ProjectSection id="proceso" title="Mi proceso">
                    {typeof sections.process === "string" ? (
                      <p className="text-text text-base">{sections.process}</p>
                    ) : (
                      <ProcessList steps={sections.process} />
                    )}
                  </ProjectSection>

                  <div className="h-px bg-[#e5e8ed]" />

                  <ProjectSection id="galeria" title="Galeria">
                    <ProjectGallery video={project.video} images={project.gallery ?? []} />
                  </ProjectSection>

                  <ProjectSection id="resultado" title="Resultado">
                    <p className="text-text text-base">{sections.result}</p>
                  </ProjectSection>
                </>
              ) : null}
            </div>

            <ProjectSidebar projectTitle={project.title} />
          </div>

          <div className="lg:hidden">
            <ShareButtons title={project.title} />
          </div>

          <ProjectPagination previous={previous} next={next} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
