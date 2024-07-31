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

const LATEST_TYPESCRIPT_DEP = "^5.5.4";

const DELETE_SCRIPT_ENTRY = { options: [undefined], fixValue: undefined };

//
// BEGIN MUTUALLY EXCLUSIVE GROUPS
//

// Packages in this section MUST only belong to one (or none) of these
// three groups:
// - nonStandardPackages
// - legacyPackages
// - esmOnlyPackages
//
// Packages in none of these groups are treated as esm + cjs
// but not legacy

const nonStandardPackages = [
  "@osdk/e2e.generated.1.1.x",
  "@osdk/e2e.sandbox.todoapp",
  "@osdk/examples.*",
  "@osdk/foundry-sdk-generator",
  "@osdk/e2e.test.foundry-sdk-generator",
  "@osdk/monorepo.*", // internal monorepo packages
  "@osdk/shared.client", // hand written package that only exposes a symbol
  "@osdk/tests.*",
];

// Any package that is in the dependency chain of `legacy-client` needs to be in this list so
// that we are sure to generate them in a backwards compatible way. This can be changed
// at next major.
const legacyPackages = [
  "@osdk/api",
  "@osdk/gateway",
  "@osdk/legacy-client",
  "@osdk/shared.net",
  "@osdk/shared.net.errors",
  "@osdk/shared.net.fetch",
];

const esmOnlyPackages = [
  "@osdk/cli.*",
  "@osdk/cli",
  "@osdk/client.*",
  "@osdk/client",
  "@osdk/create-app.*",
  "@osdk/create-app",
  "@osdk/e2e.generated.catchall",
  "@osdk/e2e.sandbox.catchall",
  "@osdk/example-generator",
  "@osdk/foundry.*",
  "@osdk/foundry",
  "@osdk/gateway-generator",
  "@osdk/internal.foundry.*",
  "@osdk/internal.foundry",
  "@osdk/maker",
  "@osdk/oauth",
  "@osdk/platform-sdk-generator",
  "@osdk/shared.net.platformapi",
  "@osdk/tool.release",
  "@osdk/version-updater",
  // "@osdk/examples.*", but they have their own config cause they are nonstandard
];

//
// END MUTUALLY EXCLUSIVE GROUPS
//

// Packages that should have the `check-api` task installed
const checkApiPackages = [
  "@osdk/client",
  "@osdk/client.api",
];

// Packages that should be private
const privatePackages = [
  "@osdk/client.test.ontology",
  "@osdk/e2e.*",
  "@osdk/monorepo.*",
  "@osdk/tool.*",
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
        if (version === "workspace:^") {
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
 *  legacy: boolean,
 *  esmOnly?: boolean,
 *  customTsconfigExcludes?: string[],
 *  tsVersion?: typeof LATEST_TYPESCRIPT_DEP | "^4.9.5",
 *  skipTsconfigReferences?: boolean
 *  singlePackageName?: string
 * }} options
 * @returns {import("@monorepolint/config").RuleModule[]}
 */
function standardPackageRules(shared, options) {
  if (options.esmOnly && options.legacy) {
    throw "It doesn't makes sense to be legacy and esmOnly";
  }

  if (options.singlePackageName && !options.legacy) {
    throw "singlePackageName only makes sense for legacy packages";
  }

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
          singlePackageName: options.singlePackageName,
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
              singlePackageName: options.singlePackageName,
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
          transpile: "monorepo.tool.transpile",
          typecheck: `monorepo.tool.typecheck ${
            options.esmOnly ? "esm" : "both"
          }`,
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
            },

            "./*": {
              ...(options.esmOnly ? {} : {
                require: "./build/cjs/public/*.cjs",
              }),
              browser: "./build/browser/public/*.js",
              import: "./build/esm/public/*.js",
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
              ${options.legacy ? "cjsExtension: '.js'" : ""}
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
      includePackages: ["@osdk/create-app.template.*"],
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

    // Fall through case for none of the mutual exclusive groups
    ...standardPackageRules({
      excludePackages: [
        ...nonStandardPackages,
        ...legacyPackages,
        ...esmOnlyPackages,
      ],
    }, {
      legacy: false,
      tsVersion: LATEST_TYPESCRIPT_DEP,
    }),

    ...standardPackageRules({
      includePackages: [...esmOnlyPackages],
    }, {
      legacy: false,
      esmOnly: true,
      tsVersion: LATEST_TYPESCRIPT_DEP,
    }),

    // internal packages depend on the cjs nature of this package! Do not make esmOnly without
    // fixing the internal packages first (and bumping major).
    ...standardPackageRules({
      includePackages: ["@osdk/foundry-sdk-generator"],
    }, {
      legacy: false,
      tsVersion: LATEST_TYPESCRIPT_DEP,
      customTsconfigExcludes: [
        "./src/generatedNoCheck/**/*",
      ],
    }),
    ...standardPackageRules({
      includePackages: ["@osdk/e2e.test.foundry-sdk-generator"],
    }, {
      legacy: false,
      esmOnly: true,
      tsVersion: LATEST_TYPESCRIPT_DEP,
      customTsconfigExcludes: [
        "./src/generatedNoCheck/**/*",
      ],
    }),

    ...(
      legacyPackages.flatMap((pkg) =>
        standardPackageRules({
          includePackages: [pkg],
        }, {
          legacy: true,
          tsVersion: LATEST_TYPESCRIPT_DEP,
          singlePackageName: pkg,
        })
      )
    ),

    // most packages can use the newest typescript, but we enforce that @osdk/example.one.dot.one uses TS4.9
    // so that we get build-time checking to make sure we don't regress v1.1 clients using an older Typescript.
    ...standardPackageRules({
      includePackages: ["@osdk/e2e.generated.1.1.x"],
    }, {
      legacy: false,
      tsVersion: "^4.9.5",
      skipTsconfigReferences: true,
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
          "@osdk/shared.client": "workspace:~",
          "@osdk/shared.net.platformapi": "workspace:~",
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
