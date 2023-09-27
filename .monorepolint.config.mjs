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
          license: "UNLICENSED",
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
