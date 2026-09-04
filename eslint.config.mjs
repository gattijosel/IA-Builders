import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  nextPlugin.flatConfig.coreWebVitals,
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": "warn",
    },
  },
);

export default eslintConfig;
