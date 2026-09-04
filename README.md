# IA Builders

Proyecto Next.js 15 listo para producción con TypeScript estricto, Tailwind CSS v4, ESLint + Prettier, y despliegue en Vercel.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript (strict)
- **Estilos:** Tailwind CSS v4
- **Iconos:** Lucide React
- **Utilidades:** clsx + tailwind-merge (`cn()`)
- **Validación de env:** Zod

## Estructura

```
src/
├── app/           # Routes, layouts, server actions
├── components/
│   ├── ui/        # Componentes atómicos (Button, Input…)
│   └── shared/    # Layout compartido (Navbar, Footer…)
├── lib/           # Utilidades (utils.ts, env.ts)
├── hooks/         # Custom React hooks
├── types/         # Tipos e interfaces TypeScript
└── constants/     # Constantes globales
```

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (Turbopack)
npm run dev

# Build de producción
npm run build

# Lint + formato
npm run lint
npm run format
npm run typecheck
```

## Variables de entorno

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores. Las variables `NEXT_PUBLIC_*` son accesibles en el cliente; el resto son solo servidor.

## Despliegue en Vercel

1. Sube el repo a GitHub
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new)
3. Vercel detecta Next.js automáticamente
4. Configura las variables de entorno en el dashboard
5. Cada push a `main` despliega automáticamente

## Convenciones

- Componentes en `app/` son **Server Components** por defecto
- Usa `'use client'` solo cuando necesites estado, hooks o eventos DOM
- En Next.js 15, `params`, `searchParams`, `cookies()` y `headers()` son **async** — usa `await`
