// @ts-check

import micromatch from "micromatch";

const CSPELL_CMD = "cspell --quiet --no-must-find-files";

/*
 * Overview:
 *  - Fixes lint rules and formatting for code
 *  - Fixes formatting for md, json, yml, yaml, excluding a few things
 */

/**
 * @type {import("lint-staged").Config}
 */
export default {
  "packages/monorepo.*/**/*.{js,jsx,ts,tsx,mjs,cjs}": [CSPELL_CMD],
  "*.md": [CSPELL_CMD],
  "packages/**/*.{js,jsx,ts,tsx,mjs,cjs}": (files) => {
    const match = micromatch.not(files, [
      "**/templates/**/*",
      "**/generatedNoCheck/**/*",
      "**/generatedNoCheck2/**/*",
      "**/examples/**/*",
    ]);
    if (match.length === 0) return [];
    return [`${CSPELL_CMD} ${match.join(" ")}`];
  },
  "(.lintstagedrc.mjs|.monorepolint.config.mjs)": [CSPELL_CMD],
  "*": (files) => {
    const mrlFiles = micromatch(
      files,
      [
        "package.json",
        // "**/package.json",
        "tsconfig.json",
        "**/tsconfig.json",
      ],
      {},
    );

    const mrlCommands =
      mrlFiles.length > 0 ? ["monorepolint check --verbose"] : [];

    return [...mrlCommands];
  },
};
