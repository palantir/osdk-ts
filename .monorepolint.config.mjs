// @ts-check
import {
  alphabeticalDependencies,
  alphabeticalScripts,
  fileContents,
  packageEntry,
  packageOrder,
  packageScript,
  requireDependency,
} from "@monorepolint/rules";
import * as child_process from "node:child_process";

const nonStandardPackages = ["eslint-config-sane", "mytsup", "tsconfig"];

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

function generateFormattedJson(o) {
  return formatedGeneratorHelper(JSON.stringify(o), "json");
}

/**
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
          lint: "eslint . && dprint check  --config $(find-up dprint.json)",
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
            (await import("mytsup")).default(options)
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
          `module.exports = {
              extends: ["sane/library"],
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
          "access",
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
