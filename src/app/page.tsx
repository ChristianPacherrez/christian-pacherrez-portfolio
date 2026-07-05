import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
