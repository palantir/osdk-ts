// @ts-check
import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ignores: [
    "src/generatedNoCheck/",
    "src/generatedNoCheck2/",
  ],
}, {
  files: ["eslint.config.mjs", "src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  settings: {
    react: {
      version: "detect",
    },
  },
  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
  },
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    /** @type import("eslint").Linter.Config  */ (reactPlugin.configs.flat
      ?.recommended),
  ],
  plugins: {
    "react-refresh": reactRefresh,
    "react-hooks":
      /** @type import("eslint").ESLint.Plugin */ (reactHooksPlugin),
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
});
