import { findUp } from "find-up";
import { readFile } from "fs/promises";
import * as path from "node:path";

/**
 * @param {import('tsup').Options} options
 * @param {{cjsExtension?: ".cjs" | ".js"}} ourOptions
 * @returns {import('tsup').Options}
 */
export default async (options, ourOptions) => {
  const babel = (await import("esbuild-plugin-babel")).default;

  const packageJson = await readFile("package.json").then(f => JSON.parse(f));

  return {
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],
    format: ["cjs", "esm"],
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
    },
    outDir: "build/js",
    clean: true,
    silent: true,
    sourcemap: true,
    splitting: true,
    minify: false, // !options.watch,
    onSuccess: () => {
      console.log("👍");
    },
    treeshake: true,
    target: "es2022",
    esbuildPlugins: [
      babel({
        config: {
          presets: ["@babel/preset-typescript"],
          plugins: ["babel-plugin-dev-expression"],
        },
      }),
    ],
  };
};

async function readPackageVersion(k) {
  const workspaceRoot = path.dirname(await findUp("pnpm-workspace.yaml"));
  return await readFile(path.join(workspaceRoot, k, "package.json")).then(f =>
    JSON.parse(f).version
  );
}
