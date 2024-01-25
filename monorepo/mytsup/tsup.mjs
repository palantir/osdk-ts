import fs from "node:fs";
import path from "node:path";

/**
 * @param {import('tsup').Options} options
 * @param {{cjsExtension?: ".cjs" | ".js"}} ourOptions
 * @returns {Promise<import('tsup').Options[]>}
 */
export default async (options, ourOptions) => {
  const babel = (await import("esbuild-plugin-babel")).default;

  const cjsDir = "build/cjs";
  const esmDir = "build/esm";
  const typesDir = "build/types";

  const sharedOptions = {
    clean: true,
    silent: true,
    sourcemap: true,
    splitting: true,
    minify: false, // !options.watch,
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

  const sourceSharedOptions = {
    entry: [
      "src/index.ts",
      "src/index.mts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],
    outExtension: ({ format }) => {
      return {
        js: format === "cjs" ? (ourOptions?.cjsExtension ?? ".cjs") : ".mjs",
      };
    },
  };

  const typeSharedOptions = {
    entry: {
      index: `${typesDir}/index.d.ts`,
    },
    dts: {
      only: true,
    },
  };

  // pick up any public api files and add those as entry points
  if (fs.existsSync(`${typesDir}/public`)) {
    const publicFiles = fs.readdirSync(`${typesDir}/public`);
    for (const file of publicFiles) {
      typeSharedOptions.entry[`public/${file.slice(0, -5)}`] =
        `${typesDir}/public/${file}`;
    }
  }

  return [
    // build cjs output
    {
      ...sharedOptions,
      ...sourceSharedOptions,
      format: ["cjs"],
      outDir: cjsDir,
      onSuccess: () => {
        // we need to mark the .js files as commonjs because our root package.json says that we're a module
        // we avoid using .cjs extensions here just in case someone's bundler depends on that extension
        // ESM still works because it uses the explicit .mjs extensions
        fs.writeFileSync(
          path.join(cjsDir, "package.json"),
          "{\"type\": \"commonjs\"}",
        );
        console.log("cjs source 👍");
      },
    },
    // build esm output
    {
      ...sharedOptions,
      ...sourceSharedOptions,
      format: ["esm"],
      outDir: esmDir,
      onSuccess: () => {
        console.log("esm source 👍");
      },
    },

    // build cjs types
    {
      ...sharedOptions,
      ...typeSharedOptions,
      format: ["cjs"],
      outDir: cjsDir,
    },

    // build esm types
    {
      ...sharedOptions,
      ...typeSharedOptions,
      format: ["esm"],
      outDir: esmDir,
    },
  ];
};
