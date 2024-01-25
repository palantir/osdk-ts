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
  "eslint-config-sane",
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
 * @param {{customTsconfigExcludes?: string[]}} opts
 * @returns
 */
function getTsconfigOptions(baseTsconfigPath, opts) {
  return {
    file: "tsconfig.json",
    template: {
      extends: baseTsconfigPath,

      compilerOptions: {
        rootDir: "src",
        outDir: "build/types",
        composite: true,
      },
      include: ["./src/**/*", ".eslintrc.cjs"],
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
 *  packageDepth: number,
 *  type: "library" | "example",
 *  customTsconfigExcludes?: string[],
 *  tsVersion?: "^5.2.2"|"^4.9.0",
 *  commonjs?: boolean
 * }} options
 */
function standardPackageRules(shared, options) {
  return [
    standardTsconfig({
      ...shared,
      options: getTsconfigOptions(
        `${
          "../".repeat(options.packageDepth)
        }monorepo/tsconfig/tsconfig.base.json`,
        { customTsconfigExcludes: options.customTsconfigExcludes },
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
          "dev:transpile": "tsup --watch",
          clean: "rm -rf lib dist types build tsconfig.tsbuildinfo",
          lint: "eslint . && dprint check  --config $(find-up dprint.json)",
          "fix-lint":
            "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
          prettier: DELETE_SCRIPT_ENTRTY,
          transpile: "tsup",
          typecheck: "tsc-absolute --build",
          "test:package-types":
            "if [ -d src/public ]; then ls src/public | sed -e 's/\\(.*\\).ts/--include-entrypoints=\\1/' | xargs pnpm attw --pack .; else pnpm attw --pack .; fi",
        },
      },
    }),
    packageEntry({
      ...shared,
      options: {
        entries: {
          exports: {
            ".": {
              import: {
                types: `./build/esm/index.d.${options.commonjs ? "m" : ""}ts`,
                default: "./build/esm/index.mjs",
              },
              require: {
                types: `./build/cjs/index.d.${options.commonjs ? "" : "c"}ts`,
                default: `./build/cjs/index.${options.legacy ? "" : "c"}js`,
              },
            },
            "./*": {
              import: {
                types: `./build/esm/public/*.d.${
                  options.commonjs ? "m" : ""
                }ts`,
                default: "./build/esm/public/*.mjs",
              },
              require: {
                types: `./build/cjs/public/*.d.${
                  options.commonjs ? "" : "c"
                }ts`,
                default: `./build/cjs/public/*.${options.legacy ? "" : "c"}js`,
              },
            },
          },
          publishConfig: {
            "access": "public",
          },
          files: [
            "build/cjs",
            "build/esm",
            "CHANGELOG.md",
            "package.json",

            // fallback entries for "submodule imports" in legacy projects
            "*.d.ts",
          ],

          main: `./build/cjs/index.${options.legacy ? "" : "c"}js`,
          module: "./build/esm/index.mjs",
          types: `./build/cjs/index.d.${options.commonjs ? "" : "c"}ts`,
          type: options.commonjs ? "commonjs" : "module",
        },
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
            (await import("mytsup")).default(options, ${
            options.legacy ? "{cjsExtension: '.js'}" : ""
          })
          );     
          `,
          "js",
        ),
      },
    }),
    fileContents({
      ...shared,
      options: {
        file: ".eslintrc.cjs",
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

          module.exports = {
              extends: ["sane/${options.type}"],
              root: true,
            };
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
      excludePackages: [...nonStandardPackages, ...legacyPackages],
    }, {
      legacy: false,
      packageDepth: 2,
      type: "library",
      tsVersion: "^5.2.2",
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/foundry-sdk-generator"],
    }, {
      legacy: false,
      commonjs: true,
      packageDepth: 2,
      type: "library",
      tsVersion: "^5.2.2",
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
      tsVersion: "^5.2.2",
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/examples.basic.**"],
      excludePackages: ["@osdk/examples.one.dot.one"],
    }, {
      legacy: false,
      packageDepth: 3,
      type: "example",
      commonjs: true,
    }),

    // most packages can use the newest typescript, but we enforce that @osdk/example.one.dot.one uses TS4.9
    // so that we get build-time checking to make sure we don't regress v1.1 clients using an older Typescript.
    ...standardPackageRules({
      includePackages: ["@osdk/examples.one.dot.one"],
    }, {
      legacy: false,
      packageDepth: 2,
      type: "example",
      tsVersion: "^4.9.0",
      commonjs: true,
    }),

    packageEntry({
      options: {
        entries: {
          license: "Apache-2.0",
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
