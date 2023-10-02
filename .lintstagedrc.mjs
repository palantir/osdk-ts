// @ts-check

import micromatch from "micromatch";

/*
 * Overview:
 *  - Fixes lint rules and formatting for code
 *  - Fixes formatting for md, json, yml, yaml, excluding a few things
 */

/**
 * @type {import("lint-staged").Config}
 */
export default {
  "{monorepo,packages,examples}/**/*.{js,jsx,ts,tsx,mjs,cjs}": [
    "dprint fmt",
    "eslint --fix",
  ],
  "(.lintstagedrc.mjs|.monorepolint.config.mjs)": ["dprint fmt"],
  "*": (files) => {
    const mrlFiles = micromatch(files, [
      "package.json",
      "**/package.json",
      "tsconfig.json",
      "**/tsconfig.json",
    ], {});

    const mrlCommands = mrlFiles.length > 0
      ? ["monorepolint check"]
      : [];

    return [...mrlCommands, `dprint fmt ${mrlFiles.join(" ")}`];
  },
};
