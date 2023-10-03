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
    standardTsconfig({
      ...shared,
      options: {
        file: "tsconfig.json",
        template: {
          extends: "tsconfig/base",

          compilerOptions: {
            rootDir: "src",
            outDir: "build/types",
            composite: true,
          },
          include: ["./src/**/*", ".eslintrc.cjs"],
        },
      },
    }),
    packageScript({
      ...shared,
      options: {
        scripts: {
          "dev:transpile": "tsup --watch",
          clean: "rm -rf lib dist types build tsconfig.tsbuildinfo",
          lint: "eslint . && dprint check  --config $(find-up dprint.json)",
          "fix-lint":
            "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
          prettier: "prettier .",
          transpile: "tsup",
          typecheck: "tsc-absolute --build",
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
              import: "./build/js/index.mjs",
              require: "./build/js/index.js",
            },
            "./*": {
              types: "./build/types/public/*.d.ts",
              import: "./build/js/public/*.mjs",
              require: "./build/js/public/*.js",
            },
          },
          publishConfig: {
            "access": "public",
          },
          files: ["build/types", "build/js", "CHANGELOG.md", "package.json"],
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
          "file",
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
