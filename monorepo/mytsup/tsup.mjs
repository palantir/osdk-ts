/**
 * @param {import('tsup').Options} options
 */
export default async (options) => {
  const babel = (await import("esbuild-plugin-babel")).default;

  return {
    entry: ["src/index.ts", "src/public/*.ts"],
    format: ["cjs", "esm"],
    clean: true,
    sourcemap: true,
    splitting: true,
    minify: !options.watch,
    treeshake: true,
    target: "es2022",
    onSuccess: `tsc-absolute ${options.watch ? "--declarationMap" : ""}`,
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
