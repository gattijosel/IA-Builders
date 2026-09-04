import { z } from "zod";

/**
 * Server-side environment variables schema.
 * Validated at build/runtime on the server only.
 */
const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  // DATABASE_URL: z.string().url().optional(),
  // API_SECRET_KEY: z.string().min(1).optional(),
});

/**
 * Client-side (public) environment variables schema.
 * Only NEXT_PUBLIC_* vars are exposed to the browser.
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  // NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
});

function validateEnv<T extends z.ZodTypeAny>(
  schema: T,
  env: Record<string, string | undefined>,
): z.infer<T> {
  const parsed = schema.safeParse(env);

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}

export const serverEnv = validateEnv(serverEnvSchema, {
  NODE_ENV: process.env.NODE_ENV,
  // DATABASE_URL: process.env.DATABASE_URL,
  // API_SECRET_KEY: process.env.API_SECRET_KEY,
});

export const clientEnv = validateEnv(clientEnvSchema, {
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  // NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
});

export type ServerEnv = typeof serverEnv;
export type ClientEnv = typeof clientEnv;
