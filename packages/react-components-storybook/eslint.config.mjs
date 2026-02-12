// @ts-check

import storybook from "eslint-plugin-storybook";
import baseConfig from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  {
    ignores: ["build/**", "storybook-static/**", "public/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"],
    rules: {
      "header/header": "off",
    },
  },
  ...storybook.configs["flat/recommended"],
];
