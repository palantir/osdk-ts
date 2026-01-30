// @ts-check

import storybook from "eslint-plugin-storybook";

export default [
  {
    ignores: ["build/**", "storybook-static/**"],
  },
  ...storybook.configs["flat/recommended"],
];