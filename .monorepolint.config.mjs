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
import fs from "node:fs/promises";
import path from "node:path";

const LATEST_TYPESCRIPT_DEP = "~5.5.4";

const DELETE_SCRIPT_ENTRY = { options: [undefined], fixValue: undefined };

const nonStandardPackages = [
  "@osdk/e2e.generated.1.1.x",
  "@osdk/e2e.sandbox.todoapp",
  "@osdk/e2e.sandbox.oauth.public.react-router",
  "@osdk/examples.*",
  "@osdk/foundry-sdk-generator",
  "@osdk/e2e.test.foundry-sdk-generator",
  "@osdk/monorepo.*", // internal monorepo packages
  "@osdk/tests.*",
  "@osdk/widget.vite-plugin.unstable", // has a vite-bundled app + react
  "@osdk/benchmarks.*",
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
  "@osdk/foundry-config-json",
  "@osdk/monorepo.*",
  "@osdk/platform-sdk-generator",
  "@osdk/shared.test",
  "@osdk/tests.verify-fallback-package-v2",
  "@osdk/tests.verify-cjs-node16",
  "@osdk/tool.*",
  "@osdk/version-updater",
  "@osdk/benchmarks.*",
];

const consumerCliPackages = [
  "@osdk/cli",
  "@osdk/create-app",
  "@osdk/create-widget",
  "@osdk/foundry-sdk-generator",
];

const forceBundle = [
  "@client.unstable",
  "@client.unstable.tpsa",
];

const skipCjsAndBrowser = [
  "@osdk/e2e.sandbox.todowidget",
  "@osdk/e2e.sandbox.catchall",
  "@osdk/tool.*",
  "@osdk/create-app.template-packager",
  "@osdk/create-app.template.*",
  "@osdk/create-widget.template.*",
  "@osdk/cli.*",
  "@osdk/version-updater",
  "@osdk/example-generator",
  "@osdk/shared.test",
];

const testWithHappyDomPackages = [
  "@osdk/react",
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

/**
 * @param {string} dirPath
 */
async function dirExists(dirPath) {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
}

/**
 * @type {import("@monorepolint/rules").RuleFactoryFn< {
 *   browser?: boolean,
 *   cjs?: boolean
 * }>}
 */
const ourExportsConvention = createRuleFactory({
  name: "ourExportsConvention",

  check: async (context, options) => {
    context.getPackageJson();
    context.packageDir;

    // FIXME: use context.host once mrl learns to read dirs
    const publicPath = path.join(context.packageDir, "src", "public");

    const expectedExports = {
      exports: {
        ".": {
          "browser": options.browser
            ? "./build/browser/index.js"
            : undefined,
          "import": {
            // we generate the types for this in a separate task
            // than transpile so they end up in different places
            types: "./build/types/index.d.ts",
            default: "./build/esm/index.js",
          },

          // for cjs, we generate the types next to the transpiled code
          // so we don't need to separate anything out. TSC infers properly
          "require": options.cjs
            ? "./build/cjs/index.cjs"
            : undefined,
          "default": `./build/${options.browser ? "browser" : "esm"}/index.js`,
        },
      },
    };

    function makeExport(fileName) {
      return {
        ...(options.browser
          ? { "browser": `./build/browser/public/${fileName}.js` }
          : {}),

        "import": {
          types: `./build/types/public/${fileName}.d.ts`,
          default: `./build/esm/public/${fileName}.js`,
        },
        ...(options.cjs
          ? { "require": `./build/cjs/public/${fileName}.cjs` }
          : {}),

        "default": `./build/${
          options.browser ? "browser" : "esm"
        }/public/${fileName}.js`,
      };
    }

    if (await dirExists(publicPath)) {
      for (
        const q of await fs.readdir(publicPath, {
          withFileTypes: true,
          encoding: "utf8",
        })
      ) {
        if (!q.isFile()) continue;
        if (!q.name.endsWith(".ts")) continue;

        const b = path.basename(q.name, ".ts");
        expectedExports.exports["./" + b] = makeExport(b);
      }
    }

    // include the fallback for the * for now, as it will make development easier
    // must come last or it will override the others
    expectedExports.exports["./*"] = makeExport("*");

    await packageEntry({
      options: {
        entries: {
          exports: expectedExports.exports,
        },
      },
    }).check(context);
  },
  validateOptions: () => {},
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
 *   react?: boolean
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
        ...(opts.react ? { jsx: "react" } : {}),
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
 *  customTsconfigExcludes?: string[],
 *  tsVersion?: typeof LATEST_TYPESCRIPT_DEP | "^4.9.5",
 *  vitestEnvironment?: "happy-dom",
 *  skipTsconfigReferences?: boolean,
 *  aliasConsola?: boolean,
 *  output: Record<"esm" | "cjs" | "browser", "bundle" | "normal" | undefined>
 *  skipTypes?: boolean,
 *  extraFiles?: string[],
 *  skipAttw?: boolean;
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
          react: options.vitestEnvironment === "happy-dom",
        },
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
    requireDependency({
      ...shared,
      options: {
        devDependencies: {
          "@osdk/monorepo.tsconfig": "workspace:~",
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
          "check-attw": options.skipAttw
            ? DELETE_SCRIPT_ENTRY
            : `attw${options.output.cjs ? "" : " --profile esm-only"} --pack .`,
          lint: "eslint . && dprint check  --config $(find-up dprint.json)",
          "fix-lint":
            "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
          transpile: DELETE_SCRIPT_ENTRY,
          transpileEsm: options.output.esm
            ? `monorepo.tool.transpile -f esm -m ${options.output.esm} -t node`
            : DELETE_SCRIPT_ENTRY,
          transpileBrowser: options.output.browser
            ? `monorepo.tool.transpile -f esm -m ${options.output.esm} -t browser`
            : DELETE_SCRIPT_ENTRY,
          transpileCjs: options.output.cjs === "bundle"
            ? "monorepo.tool.transpile -f cjs -m bundle -t node"
            : DELETE_SCRIPT_ENTRY,
          transpileWatch: DELETE_SCRIPT_ENTRY,
          transpileTypes: options.skipTypes
            ? DELETE_SCRIPT_ENTRY
            : "monorepo.tool.transpile -f esm -m types -t node",
          typecheck: "tsc --noEmit --emitDeclarationOnly false",
        },
      },
    }),
    ourExportsConvention({
      ...shared,
      options: {
        cjs: !!options.output.cjs,
        browser: !!options.output.browser,
      },
    }),
    packageEntry({
      ...shared,
      options: {
        entries: {
          publishConfig: {
            "access": "public",
          },
          files: [
            ...(options.extraFiles ?? []),
            ...(options.output.cjs ? ["build/cjs"] : []),
            ...(options.output.esm ? ["build/esm"] : []),
            ...(options.output.browser ? ["build/browser"] : []),
            ...(options.skipTypes ? [] : ["build/types"]),
            "CHANGELOG.md",
            "package.json",
            "templates",

            // fallback entries for "submodule imports" in legacy projects
            "*.d.ts",
          ],

          ...(options.output.esm ? { module: `./build/esm/index.js` } : {}),
          ...(options.output.cjs
            ? {
              main: "./build/cjs/index.cjs",

              // if you are using modern tooling for ESM then your tsc isn't relying
              // on this field (its getting types from exports or should be)
              // so we only need to include it if we are supporting cjs for this package
              types: "./build/cjs/index.d.cts",
            }
            : {}),

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
              exclude: [...configDefaults.exclude, "**/build/**/*"],${
            options.vitestEnvironment
              ? `\n            environment: "${options.vitestEnvironment}",`
              : ""
          }
              fakeTimers: {
                toFake: ["setTimeout", "clearTimeout", "Date"],
              },
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
        template: undefined, // delete it
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
      "dependsOn": ["@osdk/create-app.template-packager#transpileEsm"]
    }
  }
}
`,
      },
    }),

    ...standardPackageRules({
      excludePackages: [
        ...nonStandardPackages,
        ...testWithHappyDomPackages,
        ...consumerCliPackages,
        ...forceBundle,
        ...skipCjsAndBrowser,
      ],
    }, {
      tsVersion: LATEST_TYPESCRIPT_DEP,
      output: {
        browser: "normal",
        cjs: "bundle",
        esm: "normal",
      },
    }),

    ...standardPackageRules({
      includePackages: [
        ...testWithHappyDomPackages,
      ],
    }, {
      vitestEnvironment: "happy-dom",
      tsVersion: LATEST_TYPESCRIPT_DEP,
      output: {
        browser: "normal",
        cjs: "bundle",
        esm: "normal",
      },
    }),

    ...standardPackageRules({
      includePackages: [
        ...forceBundle,
      ],
    }, {
      tsVersion: LATEST_TYPESCRIPT_DEP,
      output: {
        browser: "bundle",
        cjs: "bundle",
        esm: "bundle",
      },
    }),

    ...standardPackageRules({
      includePackages: [
        ...consumerCliPackages,
      ],
      excludePackages: ["@osdk/foundry-sdk-generator"],
    }, {
      tsVersion: LATEST_TYPESCRIPT_DEP,
      output: {
        browser: undefined,
        cjs: undefined,
        esm: "bundle",
      },
    }),

    ...standardPackageRules({
      includePackages: [
        ...skipCjsAndBrowser,
      ],
    }, {
      tsVersion: LATEST_TYPESCRIPT_DEP,
      output: {
        browser: undefined,
        cjs: undefined,
        esm: "normal",
      },
      skipAttw: true,
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/widget.vite-plugin.unstable"],
    }, {
      tsVersion: LATEST_TYPESCRIPT_DEP,
      output: {
        browser: undefined,
        cjs: undefined,
        esm: "normal",
      },
      skipTypes: true,
      extraFiles: ["build/client"],
    }),

    ...standardPackageRules({
      includePackages: ["@osdk/foundry-sdk-generator"],
    }, {
      tsVersion: LATEST_TYPESCRIPT_DEP,
      aliasConsola: true,
      output: {
        browser: undefined,
        cjs: undefined,
        esm: "bundle",
      },
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
      output: {
        browser: "normal",
        cjs: "bundle",
        esm: "normal",
      },
      skipTypes: true,
      tsVersion: LATEST_TYPESCRIPT_DEP,
      customTsconfigExcludes: [
        "./src/generatedNoCheck/**/*",
      ],
      skipAttw: true,
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
          "@microsoft/api-documenter": "^7.26.5",
          "@microsoft/api-extractor": "^7.49.1",
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
  "mainEntryPointFilePath": "<projectFolder>/build/types/index.d.ts"
}
`,
      },
    }),
  ];
}
