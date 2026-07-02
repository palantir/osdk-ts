// @ts-check

import micromatch from "micromatch";

const CSPELL_CMD = "cspell --quiet --no-must-find-files";

/*
 * Packages migrated to the oxc toolchain (oxlint + oxfmt) instead of
 * ESLint + dprint. Add a package here as it is migrated; everything else
 * continues to use the dprint + eslint path below. These lint against the
 * shared root oxlint.config.ts.
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
  "react",
  "react-devtools",
  // oxc increment 12 (low-risk tail) — packages whose source surfaces no
  // error-level rules, so they lint against the root config.
  "client.test.ontology",
  "e2e.sandbox.oauth",
  "e2e.generated.1.1.x",
  "create-app.template.expo.v2",
  "create-app.template.react",
  "create-app.template.react.beta",
  "create-app.template.tutorial-todo-aip-app",
  "create-app.template.tutorial-todo-aip-app.beta",
  "create-app.template.tutorial-todo-app",
  "create-app.template.tutorial-todo-app.beta",
  "create-app.template.typescript-library.beta",
  "create-app.template.vue",
  "create-app.template.vue.v2",
  "create-widget.template.minimal-react.v2",
  "create-widget.template.react.v2",
];
const OXC_PACKAGE_GLOB = `packages/{${
  OXC_PACKAGES.join(",")
}}/**/*.{js,jsx,ts,tsx,mjs,cjs}`;

/*
 * oxc packages that carry their own nested oxlint config (which `extends` the
 * root config and adds package-specific overrides). They lint with `-c` pointed
 * at that nested config instead of the root one. Map of package dir -> config.
 */
const OXC_NESTED_CONFIG_PACKAGES = {
  "react-components-storybook":
    "packages/react-components-storybook/oxlint.config.ts",
  "react-components": "packages/react-components/oxlint.config.ts",
  "client.unstable": "packages/client.unstable/oxlint.config.ts",
  "client.unstable.tpsa": "packages/client.unstable.tpsa/oxlint.config.ts",
  "client": "packages/client/oxlint.config.ts",
  "maker": "packages/maker/oxlint.config.ts",
  "maker-experimental": "packages/maker-experimental/oxlint.config.ts",
  "maker-import": "packages/maker-import/oxlint.config.ts",
  "api": "packages/api/oxlint.config.ts",
  "functions": "packages/functions/oxlint.config.ts",
  "unit-testing": "packages/unit-testing/oxlint.config.ts",
  "aip-core": "packages/aip-core/oxlint.config.ts",
  "foundry-config-json": "packages/foundry-config-json/oxlint.config.ts",
  "seed-compiler": "packages/seed-compiler/oxlint.config.ts",
  "seed-helpers": "packages/seed-helpers/oxlint.config.ts",
  "oauth": "packages/oauth/oxlint.config.ts",
  "faux": "packages/faux/oxlint.config.ts",
  "osdk-docs-context": "packages/osdk-docs-context/oxlint.config.ts",
  // oxc increment 12 (low-risk tail) — packages whose source surfaces
  // error-level rules the prior ESLint config did not enforce; each nested config
  // extends the root and turns them off.
  "cli": "packages/cli/oxlint.config.ts",
  "cli.common": "packages/cli.common/oxlint.config.ts",
  "cli.cmd.typescript": "packages/cli.cmd.typescript/oxlint.config.ts",
  "create-app": "packages/create-app/oxlint.config.ts",
  "create-widget": "packages/create-widget/oxlint.config.ts",
  "create-app.template-packager":
    "packages/create-app.template-packager/oxlint.config.ts",
  "tool.release": "packages/tool.release/oxlint.config.ts",
  "tool.generate-with-mock-ontology":
    "packages/tool.generate-with-mock-ontology/oxlint.config.ts",
  "version-updater": "packages/version-updater/oxlint.config.ts",
  "vite-plugin-oac": "packages/vite-plugin-oac/oxlint.config.ts",
  "vite-plugin-superrepo": "packages/vite-plugin-superrepo/oxlint.config.ts",
  "vite-plugin-status-reporter":
    "packages/vite-plugin-status-reporter/oxlint.config.ts",
  "widget.vite-plugin": "packages/widget.vite-plugin/oxlint.config.ts",
  "ontology-explorer-app": "packages/ontology-explorer-app/oxlint.config.ts",
  "ontology-explorer-server":
    "packages/ontology-explorer-server/oxlint.config.ts",
  "shared.test": "packages/shared.test/oxlint.config.ts",
  "shared.test.intellisense":
    "packages/shared.test.intellisense/oxlint.config.ts",
  "e2e.test.foundry-sdk-generator":
    "packages/e2e.test.foundry-sdk-generator/oxlint.config.ts",
  "e2e.generated.api-namespace.dep":
    "packages/e2e.generated.api-namespace.dep/oxlint.config.ts",
  "e2e.generated.api-namespace.local":
    "packages/e2e.generated.api-namespace.local/oxlint.config.ts",
  "e2e.generated.catchall": "packages/e2e.generated.catchall/oxlint.config.ts",
  "e2e.sandbox.catchall": "packages/e2e.sandbox.catchall/oxlint.config.ts",
  "e2e.sandbox.oauth.public.react-router":
    "packages/e2e.sandbox.oauth.public.react-router/oxlint.config.ts",
  "e2e.sandbox.officeassignment":
    "packages/e2e.sandbox.officeassignment/oxlint.config.ts",
  "e2e.sandbox.officenetwork":
    "packages/e2e.sandbox.officenetwork/oxlint.config.ts",
  "e2e.sandbox.peopleapp": "packages/e2e.sandbox.peopleapp/oxlint.config.ts",
  "e2e.sandbox.todoapp": "packages/e2e.sandbox.todoapp/oxlint.config.ts",
  "e2e.sandbox.todowidget": "packages/e2e.sandbox.todowidget/oxlint.config.ts",
};

// All oxc packages (root-config + nested-config) are excluded from the ESLint +
// dprint path below.
const OXC_PACKAGE_EXCLUDES = [
  ...OXC_PACKAGES,
  ...Object.keys(OXC_NESTED_CONFIG_PACKAGES),
].map((p) => `**/packages/${p}/**`);

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
  // Same as the OXC_PACKAGE_GLOB handler above, but `-c` points at each
  // package's nested oxlint config (which extends the root). Mirrors those
  // packages' fix-lint scripts.
  ...Object.fromEntries(
    Object.entries(OXC_NESTED_CONFIG_PACKAGES).map(([pkg, config]) => [
      `packages/${pkg}/**/*.{js,jsx,ts,tsx,mjs,cjs}`,
      (files) => {
        if (files.length === 0) return [];
        return [
          `oxlint -c ${config} --fix ${files.join(" ")}`,
          `oxfmt -c oxfmt.config.ts ${files.join(" ")}`,
          `${CSPELL_CMD} ${files.join(" ")}`,
        ];
      },
    ]),
  ),
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
