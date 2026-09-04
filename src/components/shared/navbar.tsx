import Link from "next/link";

import { APP_NAME, NAV_LINKS } from "@/constants/app";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {APP_NAME}
        </Link>

        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                target={
                  "external" in link && link.external ? "_blank" : undefined
                }
                rel={
                  "external" in link && link.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className={cn(
                  "text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900",
                  "dark:text-zinc-400 dark:hover:text-zinc-50",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
