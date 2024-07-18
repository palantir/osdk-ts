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
  "packages/monorepo.*/**/*.{js,jsx,ts,tsx,mjs,cjs}": [
    "dprint fmt",
  ],
  "packages/**/*.{js,jsx,ts,tsx,mjs,cjs}": (
    files,
  ) => {
    const match = micromatch.not(
      files,
      [
        "**/templates/**/*",
        "**/generatedNoCheck/**/*",
        "**/generatedNoCheck2/**/*",
      ],
    );
    if (match.length === 0) return [];
    return [
      `dprint fmt ${match.join(" ")}`,
      `eslint --fix  ${match.join(" ")}`,
    ];
  },
  "(.lintstagedrc.mjs|.monorepolint.config.mjs)": ["dprint fmt"],
  "*": (files) => {
    const mrlFiles = micromatch(files, [
      "package.json",
      // "**/package.json",
      "tsconfig.json",
      "**/tsconfig.json",
    ], {});

    const mrlCommands = mrlFiles.length > 0
      ? ["monorepolint check --verbose", `dprint fmt ${mrlFiles.join(" ")}`]
      : [];

    return [...mrlCommands];
  },
};
