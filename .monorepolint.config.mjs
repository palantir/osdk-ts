// @ts-check
import {
  packageEntry,
  packageScript,
  alphabeticalDependencies,
  alphabeticalScripts,
  fileContents,
  requireDependency,
  packageOrder,
} from "@monorepolint/rules";
import { format, resolveConfig } from "prettier";

const nonStandardPackages = ["eslint-config-sane", "mytsup", "tsconfig"];

/**
 * @param {string} contents
 * @param {Parameters<import("prettier").format>[1]["parser"]} parser
 */
const formatedGeneratorHelper =
  (contents, parser) =>
  /**
   *
   * @param {import("@monorepolint/config").Context} context
   * @returns
   */
  async (context) => {
    return format(contents, {
      ...(await resolveConfig(context.packageDir)),
      parser,
    });
  };

function generateFormattedJson(o) {
  return formatedGeneratorHelper(JSON.stringify(o), "json");
}

/**
 *
 * @param {Omit<import("@monorepolint/config").RuleEntry<>,"options" | "id">} shared
 */
function standardPackageRules(shared) {
  return [
    fileContents({
      ...shared,
      options: {
        file: "tsconfig.json",
        generator: generateFormattedJson({
          extends: "tsconfig/base",

          compilerOptions: {
            rootDir: "src",
            outDir: "lib",
          },
          include: ["./src/**/*", ".eslintrc.cjs"],
        }),
      },
    }),
    packageScript({
      ...shared,
      options: {
        scripts: {
          clean: "rm -rf lib dist tsconfig.tsbuildinfo",
          typecheck: "tsc-absolute",
          lint: "eslint .",
          prettier: "prettier .",
          build: "tsup",
          dev: "tsup --watch",
        },
      },
    }),
    packageEntry({
      ...shared,
      options: {
        entries: {
          exports: {
            ".": {
              types: "./src/index.ts",
              import: "./dist/index.mjs",
              require: "./dist/index.js",
            },
            "./*": {
              types: "./src/public/*.ts",
              import: "./dist/public/*.mjs",
              require: "./dist/public/*.js",
            },
          },
          publishConfig: {
            ".": {
              types: "./lib/index.d.ts",
              import: "./dist/index.mjs",
              require: "./dist/index.js",
            },
            "./*": {
              types: "./lib/public/*.d.ts",
              import: "./dist/public/*.mjs",
              require: "./dist/public/*.js",
            },
          },
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
              (await import("mytsup")).default(options),
            );          
          `,
          "babel",
        ),
      },
    }),
    fileContents({
      ...shared,
      options: {
        file: ".eslintrc.cjs",
        generator: formatedGeneratorHelper(
          `module.exports = {
                extends: ["sane/library"],
                root: true,
              };
            `,
          "babel",
        ),
      },
    }),
    requireDependency({
      ...shared,
      options: {
        devDependencies: {
          mytsup: "workspace:*",
          "eslint-config-sane": "workspace:*",
          tsconfig: "workspace:*",
        },
      },
    }),
  ];
}

/**
 * @type {import("@monorepolint/config").Config}
 */
export default {
  rules: [
    ...standardPackageRules({ excludePackages: nonStandardPackages }),

    packageEntry({
      options: {
        entries: {
          license: "Apache-2.0",
        },
      },
    }),

    packageEntry({
      options: {
        entries: {
          private: true,
        },
      },
      includePackages: ["@osdk/example.*"],
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
          "author",
          "license",
          "exports",
          "scripts",
          "dependencies",
          "devDependencies",
          "publishConfig",
          "imports",
          "keywords",
        ],
      },
    }),
  ],
};
