// @ts-check
import { findUp } from "find-up";
import { readFile } from "fs/promises";
import * as path from "node:path";

/**
 * @param {import('tsup').Options} options
 * @param {{cjsExtension?: ".cjs" | ".js", esmOnly?: boolean }} ourOptions
 * @returns {Promise<import('tsup').Options | import('tsup').Options[]>}
 */
export default async (options, ourOptions) => {
  const babel = (await import("esbuild-plugin-babel")).default;

  const packageJson = await readFile("package.json", "utf-8").then(f =>
    JSON.parse(f)
  );

  /** @type {import("tsup").Options} */
  const baseConfig = {
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],
    format: ourOptions?.esmOnly ? ["esm"] : ["cjs", "esm"],
    outExtension: ({ format }) => {
      return {
        js: format === "cjs" ? (ourOptions?.cjsExtension ?? ".cjs") : ".mjs",
      };
    },
    env: {
      PACKAGE_VERSION: packageJson.version,
      PACKAGE_API_VERSION: await readPackageVersion("packages/api"),
      PACKAGE_CLIENT_VERSION: await readPackageVersion("packages/client"),
      PACKAGE_CLI_VERSION: await readPackageVersion("packages/cli"),
      PACKAGE_LEGACY_CLIENT_VERSION: await readPackageVersion(
        "packages/legacy-client",
      ),
      TARGET: "node",
    },
    outDir: "build/js",
    clean: true,
    silent: true,
    sourcemap: true,
    splitting: true,
    minify: false, // !options.watch,
    onSuccess: async () => {
      console.log("👍");
    },
    treeshake: true,
    target: "es2022",
    esbuildPlugins: [
      /** @type {any} */ (babel({
        config: {
          presets: ["@babel/preset-typescript"],
          plugins: ["babel-plugin-dev-expression"],
        },
      })),
    ],
  };

  /** @type {import("tsup").Options} */
  const browserConfig = {
    ...baseConfig,
    format: ["esm"],
    outExtension: (ctx) => ({ js: ".browser.mjs" }),
    env: {
      ...baseConfig.env,
      TARGET: "browser",
    },
  };

  return [baseConfig, browserConfig];
};

async function readPackageVersion(k) {
  const workspaceFile = await findUp("pnpm-workspace.yaml");
  if (!workspaceFile) throw "couldnt find workspace file";
  const workspaceRoot = path.dirname(workspaceFile);
  return await readFile(path.join(workspaceRoot, k, "package.json"), "utf-8")
    .then(f => JSON.parse(f).version);
}
