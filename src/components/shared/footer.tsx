import { APP_NAME } from "@/constants/app";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-zinc-500">
        <p>
          © {year} {APP_NAME}. Todos los derechos reservados.
        </p>
        <p>Next.js 15 · Vercel Ready</p>
      </div>
    </footer>
  );
}
