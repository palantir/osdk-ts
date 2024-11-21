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
  createRuleFactory,
  fileContents,
  packageEntry,
  packageOrder,
  packageScript,
  requireDependency,
  standardTsconfig,
} from "@monorepolint/rules";
import * as child_process from "node:child_process";
import path from "node:path";

const LATEST_TYPESCRIPT_DEP = "~5.5.4";

const DELETE_SCRIPT_ENTRY = { options: [undefined], fixValue: undefined };

const nonStandardPackages = [
  "@osdk/e2e.generated.1.1.x",
  "@osdk/e2e.sandbox.todoapp",
  "@osdk/e2e.sandbox.todowidget", // uses react
  "@osdk/e2e.sandbox.oauth.public.react-router",
  "@osdk/examples.*",
  "@osdk/foundry-sdk-generator",
  "@osdk/e2e.test.foundry-sdk-generator",
  "@osdk/monorepo.*", // internal monorepo packages
  "@osdk/tests.*",
  "@osdk/widget-client-react.unstable", // uses react
  // removed the following from the repo to avoid it being edited
  // "@osdk/shared.client2", // hand written package that only exposes a symbol
];

// Packages that should have the `check-api` task installed
const checkApiPackages = [
  "@osdk/client",
  "@osdk/api",
];

// Packages that should be private
const privatePackages = [
  "@osdk/cli.*",
  "@osdk/client.test.ontology",
  "@osdk/create-app.template-packager",
  "@osdk/create-app.template.*",
  "@osdk/create-widget.template.*",
  "@osdk/e2e.*",
  "@osdk/example-generator",
  "@osdk/examples.*",
  "@osdk/monorepo.*",
  "@osdk/platform-sdk-generator",
  "@osdk/shared.test",
  "@osdk/tests.verify-fallback-package-v2",
  "@osdk/tool.*",
  "@osdk/version-updater",
];

const consumerCliPackages = [
  "@osdk/cli",
  "@osdk/create-app",
  "@osdk/foundry-sdk-generator",
];

/**
 * We don't want to allow `workspace:^` in our dependencies because our current release branch
 * strategy only allows for patch changes in the release branch and minors elsewhere.
 *
 * If we were to allow `workspace:^`, then the follow scenario causes issues:
 *   - Suppose we have a Foo and a Bar package and Bar depends on Foo.
 *   - at T0 we cut a release/1.1.x branch and ship Foo@1.1.0, Bar@1.1.0
 *   - at T1 we cut a release 1.2.x branch and ship Foo@1.2.0
 *
 * If we have `workspace:^` in our deps, a user that already has `Bar@1.1.0` in their package.json
 * could update their dependencies without updating Bar (say via pnpm update) and Bar's dependency
 * on Foo @ `^1.1.0` would be satisfied by the shipped `Foo@1.2.0`.
 *
 * Using `workspace:~` prevents this as `~` can only resolve patch changes.
 */
const disallowWorkspaceCaret = createRuleFactory({
  name: "disallowWorkspaceCaret",
  check: async (context) => {
    const packageJson = context.getPackageJson();
    const packageJsonPath = context.getPackageJsonPath();

    for (const d of ["dependencies", "devDependencies", "peerDependencies"]) {
      const deps = packageJson[d] ?? {};

      for (const [dep, version] of Object.entries(deps)) {
        if (dep === "@osdk/shared.client2") {
          const expected = "^1.0.0";
          if (version !== expected) {
            const message = `${dep} may only have '${expected}'`;
            context.addError({
              message,
              longMessage: message,
              file: context.getPackageJsonPath(),
              fixer: () => {
                // always refetch in fixer since another fixer may have already changed the file
                let packageJson = context.getPackageJson();
                if (packageJson[d]) {
                  packageJson[d] = Object.assign(
                    {},
                    packageJson[d],
                    { [dep]: expected },
                  );

                  context.host.writeJson(
                    context.getPackageJsonPath(),
                    packageJson,
                  );
                }
              },
            });
          }
        } else if (version === "workspace:^") {
          if (dep === "@osdk/shared.client2") continue;
          const message = `'workspace:^' not allowed (${d}['${dep}']).`;
          context.addError({
            message,
            longMessage: `${message} Did you mean 'workspace:~'?`,
            file: context.getPackageJsonPath(),
            fixer: () => {
              // always refetch in fixer since another fixer may have already changed the file
              let packageJson = context.getPackageJson();
              if (packageJson[d]?.[dep] === "workspace:^") {
                packageJson[d] = Object.assign(
                  {},
                  packageJson[d],
                  { [dep]: "workspace:~" },
                );

                context.host.writeJson(
                  context.getPackageJsonPath(),
                  packageJson,
                );
              }
            },
          });
        }
      }
    }
  },
  validateOptions: () => {}, // no options right now
});

// We hit that fun fun bug where foundry-sdk-generator ended up getting packaged with a newer version
// of typescript which broke code formatting. This rule is to make sure we don't experience that again.
// (note devDeps are only happening at buildtime so they should be fine)
const fixedDepsOnly = createRuleFactory({
  name: "disallowWorkspaceCaret",
  check: async (context) => {
    const packageJson = context.getPackageJson();

    for (const d of ["dependencies", "peerDependencies"]) {
      const deps = packageJson[d] ?? {};

      for (const [dep, version] of Object.entries(deps)) {
        if (version === "workspace:*") continue;
        if (version[0] >= "0" && version[0] <= "9") continue;
        if (dep === "typescript" && version[0] === "~") continue;

        const message =
          `May only have fixed dependencies (found ${d}['${dep}'] == '${version}').`;
        context.addError({
          message,
          longMessage: message,
          file: context.getPackageJsonPath(),
        });
      }
    }
  },
  validateOptions: () => {}, // no options right now
});

/**
 * @type {import("@monorepolint/rules").RuleFactoryFn<{entries: string[]}>}
 */
const noPackageEntry = createRuleFactory({
  name: "noPackageEntry",
  check: async (context, options) => {
    const packageJson = context.getPackageJson();
    for (const entry of options.entries) {
      if (packageJson[entry]) {
        context.addError({
          message: `${entry} field is not allowed`,
          longMessage: `${entry} field is not allowed`,
          file: context.getPackageJsonPath(),
        });
      }
    }
  },
  validateOptions: (options) => {
    return typeof options === "object" && "entries" in options
      && Array.isArray(options.entries);
  },
});

const allLocalDepsMustNotBePrivate = createRuleFactory({
  name: "allLocalDepsMustNotBePrivate",
  check: async (context) => {
    const packageJson = context.getPackageJson();
    const deps = packageJson.dependencies ?? {};

    const nameToDir = await context.getWorkspaceContext().getPackageNameToDir();

    for (const [dep, version] of Object.entries(deps)) {
      if (nameToDir.has(dep)) {
        const packageDir = nameToDir.get(dep);
        /** @type any */
        const theirPackageJson = context.host.readJson(
          path.join(packageDir, "package.json"),
        );

        if (theirPackageJson.private) {
          const message =
            `${dep} is private and cannot be used as a regular dependency for this package`;
          context.addError({
            message,
            longMessage: message,
            file: context.getPackageJsonPath(),
          });
        }
      }
    }
  },
  validateOptions: () => {}, // no options right now
});

const cache = new Map();

/**
 * @param {string} contents
 */
const formattedGeneratorHelper = (contents, ext) => async (context) => {
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
 *   outDir: string
 *   commonjs?: boolean
 *   singlePackageName?: string
 * }} opts
 * @returns {Parameters<import("@monorepolint/rules")["standardTsconfig"]>[0]["options"]}
 */
function getTsconfigOptions(baseTsconfigPath, opts) {
  return {
    file: opts.commonjs ? "tsconfig.cjs.json" : "tsconfig.json",

    excludedReferences: ["**/*"],
    template: {
      extends: baseTsconfigPath,

      compilerOptions: {
        ...(opts.commonjs
          ? { module: "CommonJS", moduleResolution: "Node", target: "ES6" }
          : {}),
        rootDir: "src",
        outDir: opts.outDir,
        ...(
          opts.singlePackageName
            ? {
              paths: {
                [opts.singlePackageName]: ["./src"],
              },
            }
            : {}
        ),
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
 *  esmOnly?: boolean,
 *  customTsconfigExcludes?: string[],
 *  tsVersion?: typeof LATEST_TYPESCRIPT_DEP | "^4.9.5",
 *  skipTsconfigReferences?: boolean,
 *  aliasConsola?: boolean
 * }} options
 * @returns {import("@monorepolint/config").RuleModule[]}
 */
function standardPackageRules(shared, options) {
  return [
    disallowWorkspaceCaret({ ...shared }),

    standardTsconfig({
      ...shared,

      options: getTsconfigOptions(
        `@osdk/monorepo.tsconfig/base.json`,
        {
          customTsconfigExcludes: options.customTsconfigExcludes,
          skipTsconfigReferences: options.skipTsconfigReferences,
          outDir: "build/esm",
        },
      ),
    }),
    ...(
      options.esmOnly ? [] : [
        standardTsconfig({
          ...shared,

          options: getTsconfigOptions(
            "./tsconfig.json",
            {
              customTsconfigExcludes: options.customTsconfigExcludes,
              skipTsconfigReferences: options.skipTsconfigReferences,
              outDir: "build/cjs",
              commonjs: true,
            },
          ),
        }),
      ]
    ),
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
    requireDependency({
      ...shared,
      options: {
        devDependencies: {
          "@osdk/monorepo.tsconfig": "workspace:~",
          "@osdk/monorepo.tsup": "workspace:~",
          "@osdk/monorepo.api-extractor": "workspace:~",
        },
      },
    }),
    packageScript({
      ...shared,
      options: {
        scripts: {
          clean: "rm -rf lib dist types build tsconfig.tsbuildinfo",
          "check-spelling": "cspell --quiet .",
          "check-attw": `monorepo.tool.attw ${
            options.esmOnly ? "esm" : "both"
          }`,
          lint: "eslint . && dprint check  --config $(find-up dprint.json)",
          "fix-lint":
            "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
          transpile: {
            options: [
              "monorepo.tool.transpile",
              "monorepo.tool.transpile tsup",
            ],
            fixValue: "monorepo.tool.transpile",
          },
          transpileWatch: DELETE_SCRIPT_ENTRY,
          typecheck: options.esmOnly
            ? DELETE_SCRIPT_ENTRY
            : `monorepo.tool.typecheck ${options.esmOnly ? "esm" : "both"}`,
        },
      },
    }),
    packageEntry({
      ...shared,
      options: {
        entries: {
          exports: {
            ".": {
              ...(options.esmOnly ? {} : {
                "require": "./build/cjs/index.cjs",
              }),
              "browser": "./build/browser/index.js",
              "import": "./build/esm/index.js",
              "default": "./build/browser/index.js",
            },

            "./*": {
              ...(options.esmOnly ? {} : {
                require: "./build/cjs/public/*.cjs",
              }),
              browser: "./build/browser/public/*.js",
              import: "./build/esm/public/*.js",
              default: "./build/browser/public/*.js",
            },
          },
          publishConfig: {
            "access": "public",
          },
          files: [
            "build/cjs",
            "build/esm",
            "build/browser",
            "CHANGELOG.md",
            "package.json",
            "templates",

            // fallback entries for "submodule imports" in legacy projects
            "*.d.ts",
          ],

          ...(options.esmOnly ? {} : {
            main: `./build/cjs/index.cjs`,
          }),

          module: "./build/esm/index.js",
          types: `./build/${options.esmOnly ? "esm" : "cjs"}/index.d.${
            options.esmOnly ? "" : "c"
          }ts`,
          type: "module",
        },
      },
    }),
    fileContents({
      ...shared,
      options: {
        file: "vitest.config.mts",
        generator: formattedGeneratorHelper(
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
          ${
            options.aliasConsola
              ? `
          import { dirname, join } from "path";
          import { fileURLToPath } from "url";`
              : ""
          }
          import { configDefaults, defineConfig } from "vitest/config";

          export default defineConfig({
            test: {
            ${
            options.aliasConsola
              ? `
              alias: {
                "consola": join(
                  dirname(fileURLToPath(import.meta.url)),
                  "./src/__e2e_tests__/consola.ts",
                ),
              },`
              : ""
          }
              pool: "forks",
              exclude: [...configDefaults.exclude, "**/build/**/*"],
            },
          });
     
          `,
          "js",
        ),
      },
    }),
    fileContents({
      ...shared,
      options: {
        file: "tsup.config.js",
        generator: formattedGeneratorHelper(
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
            (await import("@osdk/monorepo.tsup")).default(options, {
              ${options.esmOnly ? "esmOnly: true," : ""}
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
    packageEntry({
      includePackages: ["@osdk/create-app.template.*"],
      options: {
        entries: {
          private: true,
        },
      },
    }),
    fileContents({
      includePackages: ["@osdk/create-app.template.*"],
      options: {
        file: "README.md",
        generator: (context) => {
          return `# ${context.getPackageJson().name}

This package contains templates for \`@osdk/create-app\`.

The dependencies will come from this package's \`package.json\` (excluding \`@osdk/create-app.template-packager\`) and the rest of template is filled out from the \`templates\` directory.

NOTE: DO NOT EDIT THIS README BY HAND. It is generated by monorepolint.
`;
        },
      },
    }),
    fileContents({
      includePackages: ["@osdk/create-widget.template.*"],
      options: {
        file: "README.md",
        generator: (context) => {
          return `# ${context.getPackageJson().name}

This package contains templates for \`@osdk/create-widget\`.

The dependencies will come from this package's \`package.json\` (excluding \`@osdk/create-app.template-packager\`) and the rest of template is filled out from the \`templates\` directory.

NOTE: DO NOT EDIT THIS README BY HAND. It is generated by monorepolint.
`;
        },
      },
    }),
    fileContents({
      includePackages: [
        "@osdk/create-app.template.*",
        "@osdk/create-widget.template.*",
      ],
      options: {
        file: "turbo.json",
        template: `{
  // WARNING: GENERATED FILE. DO NOT EDIT DIRECTLY. See .monorepolint.config.mjs
  "extends": ["//"],
  "tasks": {
    "codegen": {
      "inputs": ["templates/**/*"],
      "outputs": ["src/generatedNoCheck/**/*"],
      "dependsOn": ["@osdk/create-app.template-packager#transpile"]
    }
  }
}
`,
      },
    }),

    ...standardPackageRules({
      excludePackages: [
        ...nonStandardPackages,
      ],
    }, {
      esmOnly: true,
      tsVersion: LATEST_TYPESCRIPT_DEP,
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/foundry-sdk-generator"],
    }, {
      esmOnly: true,
      tsVersion: LATEST_TYPESCRIPT_DEP,
      aliasConsola: true,
      customTsconfigExcludes: [
        "./src/generatedNoCheck/**/*",
      ],
    }),
    fixedDepsOnly({
      includePackages: ["@osdk/foundry-sdk-generator"],
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/e2e.test.foundry-sdk-generator"],
    }, {
      esmOnly: true,
      tsVersion: LATEST_TYPESCRIPT_DEP,
      customTsconfigExcludes: [
        "./src/generatedNoCheck/**/*",
      ],
    }),

    ...rulesForPackagesWithChecKApiTask(),

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

    requireDependency({
      includePackages: [
        "@osdk/foundry.*",
        "@osdk/internal.foundry.*",
        "@osdk/foundry",
        "@osdk/internal.foundry",
      ],
      options: {
        dependencies: {
          "@osdk/shared.client2": "^1.0.0",
          "@osdk/shared.net.platformapi": "~1.0.0",
        },
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
        template: `# WARNING

This is an internal only package.

We may regularly break changes in this package for our own internal uses. If you use anything from this
package you do so at your own risk.

(Also, this is a generated file. Do not change directly.)
`,
      },
    }),

    packageEntry({
      includePackages: privatePackages,
      options: {
        entries: {
          private: true,
        },
      },
    }),

    noPackageEntry({
      excludePackages: privatePackages,
      options: {
        entries: ["private"],
      },
    }),

    packageScript({
      includePackages: consumerCliPackages,
      options: {
        scripts: {
          transpile: "monorepo.tool.transpile tsup",
        },
      },
    }),

    allLocalDepsMustNotBePrivate({
      includePackages: consumerCliPackages,
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
          "peerDependencies",
          "peerDependenciesMeta",
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

/**
 * Rules for packages that do api checks / docs generation
 * @returns {import("@monorepolint/config").RuleModule<any>[]}
 */
function rulesForPackagesWithChecKApiTask() {
  return [
    packageScript({
      includePackages: checkApiPackages,
      options: {
        scripts: {
          "check-api": "api-extractor run --verbose --local",
        },
      },
    }),
    requireDependency({
      includePackages: checkApiPackages,
      options: {
        devDependencies: {
          "@osdk/monorepo.api-extractor": "workspace:~",
          "@microsoft/api-documenter": "^7.25.3",
          "@microsoft/api-extractor": "^7.47.0",
        },
      },
    }),
    fileContents({
      includePackages: checkApiPackages,
      options: {
        file: "api-extractor.json",
        template: `{
  "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
  "extends": "@osdk/monorepo.api-extractor/base.json",
  "mainEntryPointFilePath": "<projectFolder>/build/esm/index.d.ts"
}
`,
      },
    }),
  ];
}
