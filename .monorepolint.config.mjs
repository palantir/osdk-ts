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

function getTsconfigOptions(baseTsconfigPath) {
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
    },
  };
}

/**
 * @param {Omit<import("@monorepolint/config").RuleEntry<>,"options" | "id">} shared
 */
function standardPackageRules(shared) {
  return [
    standardTsconfig({
      ...shared,
      excludePackages: [...shared.excludePackages, "@osdk/examples.basic.**"],
      options: getTsconfigOptions("../../monorepo/tsconfig/tsconfig.base.json"),
    }),
    standardTsconfig({
      ...shared,
      includePackages: ["@osdk/examples.basic.**"],
      options: getTsconfigOptions(
        "../../../monorepo/tsconfig/tsconfig.base.json",
      ),
    }),
    // most packages can use the newest typescript, but we enforce that @osdk/example.one.dot.one uses TS4.9
    // so that we get build-time checking to make sure we don't regress v1.1 clients using an older Typescript.
    requireDependency({
      ...shared,
      excludePackages: [
        ...shared.excludePackages,
        "@osdk/examples.one.dot.one",
        "@osdk/examples.basic.cli",
      ],
      options: {
        devDependencies: { typescript: "^5.2.2" },
      },
    }),
    requireDependency({
      includePackages: ["@osdk/examples.one.dot.one"],
      options: {
        devDependencies: { typescript: "^4.9.0" },
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
          prettier: DELETE_SCRIPT_ENTRTY,
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
              require: "./build/js/index.cjs",
            },
            "./*": {
              types: "./build/types/public/*.d.ts",
              import: "./build/js/public/*.mjs",
              require: "./build/js/public/*.cjs",
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

            // fallback entries for "submodule imports" in legacy projects
            "*.d.ts",
          ],

          main: "./build/js/index.js",
          module: "./build/js/index.mjs",
          types: "./build/types/index.d.ts",
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
      excludePackages: [...shared.excludePackages, "@osdk/examples.*"],
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
              extends: ["sane/library"],
              root: true,
            };
            `,
          "js",
        ),
      },
    }),
    fileContents({
      ...shared,
      includePackages: ["@osdk/examples.*"],
      excludePackages: [...shared.excludePackages],
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
              extends: ["sane/example"],
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
