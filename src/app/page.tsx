import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/app";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-24 text-center">
      <div className="space-y-4">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Next.js 15 · TypeScript · Tailwind CSS v4
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Bienvenido a {APP_NAME}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Proyecto inicializado con App Router, Server Components por defecto y
          estructura escalable lista para producción en Vercel.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          Documentación
          <ArrowRight className="size-4" />
        </Button>
        <Button
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer"
          variant="outline"
        >
          Desplegar en Vercel
        </Button>
      </div>
    </section>
  );
}
