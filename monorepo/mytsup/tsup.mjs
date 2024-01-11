/**
 * @param {import('tsup').Options} options
 * @param {{cjsExtension?: ".cjs" | ".js"}} ourOptions
 * @returns {import('tsup').Options}
 */
export default async (options, ourOptions) => {
  const babel = (await import("esbuild-plugin-babel")).default;

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
