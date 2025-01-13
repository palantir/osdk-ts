import * as tsup from "tsup";
import { convertMapVersionToEnvVars } from "./utils/convertMapVersionToEnvVars.mjs";
import { readPackageInfoFromWorkspace } from "./utils/readPackageInfoFromWorkspace.js";

/**
 * @param {import('tsup').Options} options
 * @param {{cjsExtension?: ".cjs" | ".js", esmOnly?: boolean }} ourOptions
 * @returns {Promise<import('tsup').Options | import('tsup').Options[]>}
 */
export default async (
  ourOptions: {
    cjsExtension?: ".cjs" | ".js";
    esmOnly?: boolean;
    mapVersions?: {
      [envName: string]: string; /* package name */
    };
  },
): Promise<tsup.Options | tsup.Options[]> => {
  const esbuildPluginBabel = (await import("esbuild-plugin-babel")).default;

  const { manifest, exportableManifest } = await readPackageInfoFromWorkspace(
    process.cwd(),
  );
  const versionEnvVars = convertMapVersionToEnvVars(
    ourOptions?.mapVersions,
    exportableManifest,
  );

  const baseConfig: tsup.Options = {
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],
    outExtension: ({ format }) => {
      return {
        js: ".js",
      };
    },
    env: {
      PACKAGE_VERSION: manifest.version!,
      ...versionEnvVars,
      TARGET: "node",
      MODE: process.env.production ? "production" : "development",
    },
    clean: false, // we do this ourselves so its granular
    silent: true,
    sourcemap: true,
    splitting: true,
    shims: false,
    minify: false, // !options.watch,
    onSuccess: async () => {
      console.log("👍");
    },
    keepNames: false,
    treeshake: true,
    target: "es2022",

    esbuildPlugins: [
      esbuildPluginBabel({
        config: {
          presets: ["@babel/preset-typescript"],
          plugins: ["babel-plugin-dev-expression"],
        },
      }) as any,
    ],
  };

  const esmConfig: tsup.Options = {
    ...baseConfig,
    format: ["esm"],
    outDir: "build/esm",
  };

  const cjsConfig: tsup.Options = {
    ...esmConfig,
    format: ["cjs"],
    outExtension: () => {
      return {
        js: ".cjs",
      };
    },
    outDir: "build/cjs",
  };

  const browserConfig: tsup.Options = {
    ...baseConfig,
    format: ["esm"],
    outDir: "build/browser",
    env: {
      ...baseConfig.env,
      TARGET: "browser",
    },
  };

  const ret = [esmConfig, browserConfig];
  if (!ourOptions.esmOnly) ret.push(cjsConfig);
  return ret;
};
