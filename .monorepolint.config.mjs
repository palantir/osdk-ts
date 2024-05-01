/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

import {
  alphabeticalDependencies,
  alphabeticalScripts,
  fileContents,
  packageEntry,
  packageOrder,
  packageScript,
  requireDependency,
  standardTsconfig,
} from "@monorepolint/rules";
import * as child_process from "node:child_process";

const DELETE_SCRIPT_ENTRTY = { options: [undefined], fixValue: undefined };
const nonStandardPackages = [
  "mytsup",
  "tsconfig",
  "@osdk/examples.todoapp",
  "@osdk/tests.*",
  "@osdk/foundry-sdk-generator",
  "@osdk/examples.*",
];

const legacyPackages = [
  "@osdk/api",
  "@osdk/gateway",
  "@osdk/legacy-client",
  "@osdk/shared.net",
];

const esmOnlyPackages = [
  "@osdk/foundry",
  "@osdk/foundry-generator",
  "@osdk/client",
  "@osdk/cli.*",
  "@osdk/cli",
  "@osdk/create-app",
  "@osdk/tool.release",
  "@osdk/version-updater",
  // "@osdk/examples.*", but they have their own config cause they are nonstandard
];

const cache = new Map();

/**
 * @param {string} contents
 */
const formatedGeneratorHelper = (contents, ext) => async (context) => {
  if (cache.has(contents)) {
    return cache.get(contents);
  }
  const result = child_process.spawnSync(
    `pnpm exec dprint fmt --stdin foo.${ext}`,
    {
      input: contents,
      encoding: "utf8",
      shell: true,
    },
  );

  if (result.error) {
    throw result.error;
  }

  cache.set(contents, result.stdout);

  return result.stdout;
};

/**
 * @param {string} baseTsconfigPath
 * @param {{
 *   customTsconfigExcludes?: string[]
 *   skipTsconfigReferences?: boolean
 * }} opts
 * @returns {Parameters<import("@monorepolint/rules")["standardTsconfig"]>[0]["options"]}
 */
function getTsconfigOptions(baseTsconfigPath, opts) {
  return {
    file: "tsconfig.json",

    excludedReferences: ["**/*"],
    template: {
      extends: baseTsconfigPath,

      compilerOptions: {
        rootDir: "src",
        outDir: "build/types",
      },
      include: ["./src/**/*"],
      ...(opts.customTsconfigExcludes
        ? { exclude: opts.customTsconfigExcludes ?? [] }
        : {}),
    },
  };
}

/**
 * @param {Omit<import("@monorepolint/config").RuleEntry<>,"options" | "id">} shared
 * @param {{
 *  legacy: boolean,
 *  esmOnly?: boolean,
 *  packageDepth: number,
 *  type: "library" | "example",
 *  customTsconfigExcludes?: string[],
 *  tsVersion?: "^5.4.5"|"^4.9.5",
 *  skipTsconfigReferences?: boolean
 * }} options
 */
function standardPackageRules(shared, options) {
  if (options.esmOnly && options.legacy) {
    throw "It doesnt makes sense to be legacy and esmOnly";
  }

  return [
    standardTsconfig({
      ...shared,

      options: getTsconfigOptions(
        `${
          "../".repeat(options.packageDepth)
        }monorepo/tsconfig/tsconfig.base.json`,
        options,
      ),
    }),
    ...(options.tsVersion
      ? [
        requireDependency({
          ...shared,
          options: {
            devDependencies: { typescript: options.tsVersion },
          },
        }),
      ]
      : []),
    packageScript({
      ...shared,
      options: {
        scripts: {
          "dev:transpile": DELETE_SCRIPT_ENTRTY,
          clean: "rm -rf lib dist types build tsconfig.tsbuildinfo",
          lint: "eslint . && dprint check  --config $(find-up dprint.json)",
          "fix-lint":
            "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
          prettier: DELETE_SCRIPT_ENTRTY,
          transpile: "tsup",
          typecheck: "tsc-absolute",
        },
      },
    }),
    packageEntry({
      ...shared,
      options: {
        entries: {
          exports: {
            ".": {
              types: "./build/types/index.d.ts",
              browser: "./build/js/index.browser.mjs",
              import: "./build/js/index.mjs",
              ...(options.esmOnly ? {} : {
                require: `./build/js/index.${options.legacy ? "" : "c"}js`,
              }),
            },
            "./*": {
              types: "./build/types/public/*.d.ts",
              browser: "./build/js/public/*.browser.mjs",
              import: "./build/js/public/*.mjs",
              ...(options.esmOnly ? {} : {
                require: `./build/js/public/*.${options.legacy ? "" : "c"}js`,
              }),
            },
          },
          publishConfig: {
            "access": "public",
          },
          files: [
            "build/types",
            "build/js",
            "CHANGELOG.md",
            "package.json",
            "templates",

            // fallback entries for "submodule imports" in legacy projects
            "*.d.ts",
          ],

          ...(options.esmOnly ? {} : {
            main: `./build/js/index.${options.legacy ? "" : "c"}js`,
          }),

          module: "./build/js/index.mjs",
          types: "./build/types/index.d.ts",
        },
        ...(options.esmOnly ? { type: "module" } : {}),
      },
    }),
    fileContents({
      ...shared,
      options: {
        file: "tsup.config.js",
        generator: formatedGeneratorHelper(
          `
          /*
           * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *     http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          import { defineConfig } from "tsup";

          export default defineConfig(async (options) =>
            (await import("mytsup")).default(options, {
              ${options.legacy ? "cjsExtension: '.js'" : ""}
              ${options.esmOnly ? "esmnOnly: true," : ""}
          })
          );     
          `,
          "js",
        ),
      },
    }),
  ];
}

/**
 * @type {import("@monorepolint/config").Config}
 */
export default {
  rules: [
    ...standardPackageRules({
      excludePackages: [
        ...nonStandardPackages,
        ...legacyPackages,
        ...esmOnlyPackages,
      ],
    }, {
      legacy: false,
      packageDepth: 2,
      type: "library",
      tsVersion: "^5.4.5",
    }),

    ...standardPackageRules({
      includePackages: [...esmOnlyPackages],
    }, {
      legacy: false,
      esmOnly: true,
      packageDepth: 2,
      type: "library",
      tsVersion: "^5.4.5",
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/foundry-sdk-generator"],
    }, {
      legacy: false,
      packageDepth: 2,
      type: "library",
      tsVersion: "^5.4.5",
      customTsconfigExcludes: [
        "./src/__e2e_tests__/**/**.test.ts",
        "./src/generatedNoCheck/**/*",
      ],
    }),

    ...standardPackageRules({
      excludePackages: [...nonStandardPackages],
      includePackages: legacyPackages,
    }, {
      legacy: true,
      packageDepth: 2,
      type: "library",
      tsVersion: "^5.4.5",
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/examples.basic.**"],
      excludePackages: ["@osdk/examples.one.dot.one"],
    }, {
      esmOnly: true,
      legacy: false,
      packageDepth: 3,
      type: "example",
    }),

    // most packages can use the newest typescript, but we enforce that @osdk/example.one.dot.one uses TS4.9
    // so that we get build-time checking to make sure we don't regress v1.1 clients using an older Typescript.
    ...standardPackageRules({
      includePackages: ["@osdk/examples.one.dot.one"],
    }, {
      legacy: false,
      packageDepth: 2,
      type: "example",
      tsVersion: "^4.9.5",
      skipTsconfigReferences: true,
    }),

    packageEntry({
      options: {
        entries: {
          license: "Apache-2.0",
          repository: {
            "type": "git",
            "url": "https://github.com/palantir/osdk-ts.git",
          },
        },
        entriesExist: ["version"],
      },
    }),

    packageEntry({
      options: {
        entries: {
          private: true,
        },
      },
      includePackages: ["@osdk/example.*", "@osdk/tests.*"],
    }),

    fileContents({
      includePackages: ["@osdk/internal.*"],
      options: {
        file: "README.md",
        template: `
# WARNING

This is an internal only package.

We may regularly break changes in this package for our own internal uses. If you use anything from this
package you do so at your own risk.

(Also, this is a generated file. Do not change directly.)
`,
      },
    }),

    alphabeticalDependencies({ includeWorkspaceRoot: true }),
    alphabeticalScripts({ includeWorkspaceRoot: true }),

    packageOrder({
      options: {
        order: [
          "name",
          "private",
          "version",
          "description",
          "access",
          "author",
          "license",
          "repository",
          "exports",
          "file",
          "scripts",
          "dependencies",
          "devDependencies",
          "publishConfig",
          "imports",
          "keywords",
          "bin",
          "files",
          // since these are just for fallback support we can drop to bottom
          "main",
          "module",
          "types",
        ],
      },
    }),
  ],
};
