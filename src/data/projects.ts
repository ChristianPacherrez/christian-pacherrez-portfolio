import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "idiomas-pucp",
    title: "Idiomas PUCP",
    description:
      "Sitio web para el Centro de Idiomas de la PUCP, enfocado en la promoción de cursos de inglés y la experiencia de matrícula online.",
    coverImage: "/images/projects/pucp/cover.png",
    year: "Febrero - 2026",
    client: "Idiomas PUCP",
    duration: "3 meses",
    role: "UX/UI Designer",
    website: "https://idiomas.pucp.edu.pe/",
    figma: "https://www.figma.com/design/oCvGNRvzZvvNDg6AwI1f7I/Idiomas-PUCP?node-id=275-3114",
    featured: true,
    tags: ["UX/UI", "UI Design", "Product Designer"],
    sections: {
      challenge:
        "Mi objetivo fue rediseñar por completo el sitio web de Idiomas PUCP, mejorando la experiencia de navegación y logrando que la interfaz reflejara la identidad y personalidad de la marca. La propuesta anterior presentaba oportunidades de mejora tanto en usabilidad como en consistencia visual.",
      solution:
        "Diseñé una nueva propuesta centrada en las necesidades de los usuarios, tomando como base los hallazgos obtenidos durante la investigación. El rediseño buscó ofrecer una navegación más clara, una interfaz moderna y una experiencia alineada con la identidad de Idiomas PUCP.",
      process: [
        {
          label: "Análisis",
          description: "Evalué el sitio actual para identificar oportunidades de mejora.",
        },
        {
          label: "Investigación",
          description:
            "Realicé un benchmark y recopilé referencias e insights para definir una dirección de diseño.",
        },
        {
          label: "Diseño",
          description:
            "Desarrollé la propuesta en Figma, desde la estructura hasta los prototipos de alta fidelidad.",
        },
        {
          label: "Desarrollo",
          description:
            "Implementé el proyecto utilizando WordPress, cuidando que el resultado final respetara el diseño aprobado.",
        },
      ],
      result:
        "El proyecto culminó con un sitio web completamente renovado, más claro, consistente y alineado con la identidad de Idiomas PUCP, ofreciendo una experiencia más intuitiva para sus usuarios.",
    },
    video: "/images/projects/pucp/landing-pucp-video.webm",
    gallery: [
      {
        src: "/images/projects/pucp/proyecto-pucp-galeria-1.png",
        alt: "Página de inicio del sitio de Idiomas PUCP",
        width: 1200,
        height: 724,
      },
      {
        src: "/images/projects/pucp/proyecto-pucp-galeria-2.png",
        alt: "Sección de cursos y sedes de Idiomas PUCP",
        width: 1200,
        height: 708,
      },
      {
        src: "/images/projects/pucp/proyecto-pucp-galeria-3.png",
        alt: "Formulario de consulta de horarios de Idiomas PUCP",
        width: 1200,
        height: 735,
      },
      {
        src: "/images/projects/pucp/proyecto-pucp-galeria-4.png",
        alt: "Landing de matrícula de Idiomas PUCP en vista móvil",
        width: 1200,
        height: 667,
      },
      {
        src: "/images/projects/pucp/proyecto-pucp-galeria-5.png",
        alt: "Detalle de curso de inglés en vista móvil",
        width: 1200,
        height: 768,
      },
      {
        src: "/images/projects/pucp/proyecto-pucp-galeria-6.png",
        alt: "Vista móvil de la sección de inglés para jóvenes y adultos con el chat de ayuda abierto",
        width: 800,
        height: 516,
      },
    ],
  },
  {
    id: "2",
    slug: "calidda-cardif",
    title: "Calidda + BNP Paribas Cardif",
    description:
      "Diseño del portal de seguros de Cálidda junto a BNP Paribas Cardif, enfocado en ofrecer una experiencia clara y sencilla para la activación, consulta y gestión de seguros.",
    coverImage: "/images/projects/calidda-cardif/proyecto-calidda-cover.png",
    year: "Febrero - 2025",
    client: "Cálidda + BNP Paribas Cardif",
    duration: "1 mes",
    role: "Product Designer",
    figma: "https://www.figma.com/design/3e6U5w3zGDLQRfxRK7fkzZ/Calidda-1.0?node-id=0-1",
    featured: true,
    tags: ["Product Design", "UX/UI", "Plataforma Web"],
    sections: {
      challenge:
        "Mi objetivo fue diseñar el portal de seguros de Cálidda junto a BNP Paribas Cardif, creando una experiencia clara y sencilla que facilitara la activación, gestión y consulta de los seguros por parte de los usuarios.",
      solution:
        "Diseñé una experiencia integral que incluyó el flujo de activación de seguros, inicio de sesión, recuperación de contraseña y la plataforma para usuarios autenticados, priorizando una navegación intuitiva y alineada con la identidad de ambas marcas.",
      process:
        "Comencé analizando los requerimientos del negocio y los diferentes flujos de usuario. Luego diseñé las interfaces y prototipos en Figma, validando la experiencia para garantizar un acceso simple a los beneficios y funcionalidades del portal.",
      result:
        "El resultado fue un portal moderno y fácil de usar, pensado para que los usuarios pudieran acceder, gestionar y consultar la información de sus seguros de manera clara, rápida y con una experiencia consistente.",
    },
    video: "/images/projects/calidda-cardif/proyecto-calidda-video.mp4",
    gallery: [
      {
        src: "/images/projects/calidda-cardif/proyecto-calidda-galeria-1.png",
        alt: "Plataforma autenticada de Cálidda + BNP Paribas Cardif mostrando la tarjeta de beneficios protegida",
        width: 1600,
        height: 948,
      },
      {
        src: "/images/projects/calidda-cardif/proyecto-calidda-galeria-2.png",
        alt: "Landing pública de beneficios con el detalle del beneficio Holos y el llamado a activar la cuenta",
        width: 1600,
        height: 928,
      },
      {
        src: "/images/projects/calidda-cardif/proyecto-calidda-galeria-3.png",
        alt: "Flujo de activación de cuenta y agendamiento de una asesoría dentro de la plataforma",
        width: 1600,
        height: 872,
      },
      {
        src: "/images/projects/calidda-cardif/proyecto-calidda-galeria-4.png",
        alt: "Vista móvil de la sección de beneficios pensados para el usuario",
        width: 1600,
        height: 1032,
      },
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null,
  };
}
