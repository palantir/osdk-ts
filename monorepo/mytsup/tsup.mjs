/**
 * @param {import('tsup').Options} options
 */
export default async (options) => {
  const babel = (await import("esbuild-plugin-babel")).default;

  return {
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],
    format: ["cjs", "esm"],
    outDir: "build/js",
    clean: true,
    silent: true,
    sourcemap: true,
    splitting: true,
    minify: !options.watch,
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
