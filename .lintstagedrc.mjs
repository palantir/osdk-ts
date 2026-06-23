// @ts-check

import micromatch from "micromatch";

const CSPELL_CMD = "cspell --quiet --no-must-find-files";

/*
 * Packages migrated to the oxc toolchain (oxlint + oxfmt) instead of
 * ESLint + dprint. Add a package here as it is migrated; everything else
 * continues to use the dprint + eslint path below.
 */
const OXC_PACKAGES = [
  "shared.net.errors",
  "shared.client.impl",
  "shared.net.fetch",
  "shared.net",
  "language-models",
  "react-sdk-docs",
  "typescript-sdk-docs",
  "widget.client-react",
  "widget.api",
  "widget.client",
  "cbac-components",
];
const OXC_PACKAGE_GLOB = `packages/{${
  OXC_PACKAGES.join(",")
}}/**/*.{js,jsx,ts,tsx,mjs,cjs}`;
const OXC_PACKAGE_EXCLUDES = OXC_PACKAGES.map((p) => `**/packages/${p}/**`);

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
    CSPELL_CMD,
  ],
  "*.md": [CSPELL_CMD],
  [OXC_PACKAGE_GLOB]: (files) => {
    if (files.length === 0) return [];
    // oxlint --fix first (its fixes can affect whitespace), then oxfmt last so
    // the final result is always formatted. Mirrors the package fix-lint script.
    return [
      `oxlint -c oxlint.config.ts --fix ${files.join(" ")}`,
      `oxfmt -c oxfmt.config.ts ${files.join(" ")}`,
      `${CSPELL_CMD} ${files.join(" ")}`,
    ];
  },
  "packages/**/*.{js,jsx,ts,tsx,mjs,cjs}": (
    files,
  ) => {
    const match = micromatch.not(
      files,
      [
        "**/templates/**/*",
        "**/generatedNoCheck/**/*",
        "**/generatedNoCheck2/**/*",
        "**/examples/**/*",
        ...OXC_PACKAGE_EXCLUDES,
      ],
    );
    if (match.length === 0) return [];
    return [
      `dprint fmt ${match.join(" ")}`,
      `eslint --fix  ${match.join(" ")}`,
      `${CSPELL_CMD} ${match.join(" ")}`,
    ];
  },
  "(.lintstagedrc.mjs|.monorepolint.config.mjs)": [
    "dprint fmt",
    CSPELL_CMD,
  ],
  "*": (files) => {
    const mrlFiles = micromatch(files, [
      "package.json",
      // "**/package.json",
      "tsconfig.json",
      "**/tsconfig.json",
    ], {});

    const mrlCommands = mrlFiles.length > 0
      ? [
        "monorepolint check --verbose",
        `dprint fmt ${mrlFiles.join(" ")} --allow-no-files`,
      ]
      : [];

    return [...mrlCommands];
  },
};
