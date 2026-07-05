import { buttonVariants } from "@heroui/react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container className="flex flex-col items-start gap-6">
        <h1 className="font-display text-text text-4xl font-semibold sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="text-text/70 max-w-md text-lg">
          El enlace que seguiste no existe o fue movido.
        </p>
        <Link href="/" className={buttonVariants({ variant: "primary", size: "lg" })}>
          Volver al inicio
        </Link>
      </Container>
    </main>
  );
}
