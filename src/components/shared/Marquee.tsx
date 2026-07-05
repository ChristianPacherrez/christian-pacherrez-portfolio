import { Fragment } from "react";

import { Dot } from "@/components/ui/Dot";

const phrases = [
  "{ UX/UI Design }",
  "{ Product Design }",
  "{ Diseño Web }",
  "{ Desarrollo Web }",
  "{ IA Estratégica }",
];

/** Decorative, infinitely-looping brand strip. Content is duplicated once so the
 *  translateX(-50%) animation loops seamlessly. */
export function Marquee() {
  const items = [...phrases, ...phrases];

  return (
    <div aria-hidden className="bg-primary overflow-hidden py-3">
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((phrase, index) => (
          <Fragment key={index}>
            <span className="font-display text-text text-3xl whitespace-nowrap">{phrase}</span>
            <Dot color="text" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
