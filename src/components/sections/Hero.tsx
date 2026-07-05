import { BraceIcon } from "@/components/icons/BraceIcon";
import { Reveal } from "@/components/shared/Reveal";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="py-12">
      <Container className="flex flex-col gap-8">
        <Reveal className="flex flex-col gap-3">
          <p className="text-sm text-black uppercase">{siteConfig.roles.join(" | ")}</p>
          <h1 className="font-display text-text text-5xl font-medium">
            {firstName} <span className="bg-primary rounded-lg px-1">{lastName}</span>
          </h1>
        </Reveal>

        <Reveal delay={80} className="flex items-center gap-4 sm:gap-8 sm:pl-11">
          <BraceIcon className="h-16 w-5 shrink-0 sm:h-24 sm:w-7" />
          <p className="text-text max-w-[384px] text-base">{siteConfig.tagline}</p>
        </Reveal>
      </Container>
    </section>
  );
}
