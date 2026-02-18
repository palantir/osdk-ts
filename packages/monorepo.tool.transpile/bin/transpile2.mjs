#!/usr/bin/env node
// @ts-check
import { findUp } from "find-up";
import {
  copyFile,
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

await yargs(hideBin(process.argv))
  .command("*", "default command", (argv) => {
    return argv
      .option("f", {
        alias: /** @type {const} */ ("format"),
        choices: /** @type {const} */ (["esm", "cjs"]),
      })
      .option("m", {
        alias: /** @type {const} */ ("mechanism"),
        choices: /** @type {const} */ (["bundle", "normal", "pure", "types"]),
        default: /** @type {const} */ ("normal"),
      })
      .option("t", {
        alias: /** @type {const} */ ("target"),
        choices: /** @type {const} */ (["browser", "node"]),
      });
  }, async (args) => {
    try {
      if (args.mechanism === "normal" && args.format === "esm") {
        await transpileWithBabel(args.format, args.target);
      } else if (args.mechanism === "bundle") {
        await transpileWithTsup(args.format, args.target);
      } else if (args.mechanism === "types" && args.format === "esm") {
        await transformTypes();
      } else {
        throw new Error(
          `Unsupported configuration ${args.mechanism} ${args.format} ${args.target}`,
        );
      }

      console.log("👍");
    } catch (e) {
      console.log("exception", e);
      throw e;
    }
  })
  .parseAsync();

async function transformTypes() {
  const { isolatedDeclaration } = await import("oxc-transform");

  const inDir = path.resolve("src");
  const outDir = path.resolve("build/types");

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const extMap = {
    ".tsx": ".ts",
  };
  const fileEndingsToCompile = [".ts", ".mts", ...Object.keys(extMap)];

  for (
    const f of await readdir(inDir, {
      recursive: true,
      withFileTypes: true,
      encoding: "utf-8",
    })
  ) {
    const fullFilePath = path.join(f.parentPath, f.name);
    const relative = path.relative(
      path.resolve(inDir),
      fullFilePath,
    );
    const destPathWrongExt = path.join(
      outDir,
      relative,
    );
    if (f.isDirectory()) continue;
    if (!fileEndingsToCompile.some(e => f.name.endsWith(e))) {
      continue;
    }

    const result = isolatedDeclaration(
      fullFilePath,
      await readFile(fullFilePath, "utf-8"),
      {
        sourcemap: true,
        stripInternal: true,
      },
    );

    if (result.errors && result.errors.length > 0) {
      for (const e of result.errors) {
        console.error(fullFilePath);
        console.error(e.severity, e.message, e.helpMessage, e.labels);
      }
      process.exit(1);
    }

    const destPathRightExt = path.join(
      path.dirname(destPathWrongExt),
      path.basename(destPathWrongExt, path.extname(destPathWrongExt))
        + `.d${
          extMap[path.extname(destPathWrongExt)]
            ?? path.extname(destPathWrongExt)
        }`,
    );

    await mkdir(path.dirname(destPathRightExt), { recursive: true });
    await writeFile(destPathRightExt, result.code, "utf-8");
    if (result.map) {
      result.map.sources = result.map.sources.map(s =>
        path.relative(path.dirname(destPathRightExt), s)
      );
      result.map.sourcesContent = undefined;
      result.map.file = path.basename(destPathRightExt);
      await writeFile(
        destPathRightExt + ".map",
        JSON.stringify(result.map),
        "utf-8",
      );
    }
  }
}

/**
 * @param {"esm" | "cjs"} format
 * @param {"browser" | "node"} target
 */
async function transpileWithTsup(format, target) {
  invariant(format === "esm" || format === "cjs", "format must be esm or cjs");
  invariant(
    target === "browser" || target === "node",
    "format must be browser or node",
  );
  invariant(target === "browser" ? format === "esm" : true);

  const outDir = `build/${target === "browser" ? "browser" : format}`;

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const [
    { build },
    { default: babel },
    PACKAGE_VERSION,
    PACKAGE_API_VERSION,
    PACKAGE_CLIENT_VERSION,
    PACKAGE_CLI_VERSION,
  ] = await Promise.all([
    import("tsup"),
    import("esbuild-plugin-babel"),
    readFile("package.json", "utf-8").then(f => JSON.parse(f).version),
    readPackageVersion("packages/api"),
    readPackageVersion("packages/client"),
    readPackageVersion("packages/cli"),
  ]);

  await build({
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
    ],

    // don't try to load config files from disk
    config: false,

    // these packages are not CJS compatible so we need to bundle them up when we do tsup with cjs
    noExternal: format === "cjs"
      ? [
        "@osdk/foundry.ontologies",
        "@osdk/foundry.mediasets",
        "@osdk/shared.client",
        "@osdk/shared.client2",
        "oauth4webapi",
        "p-defer",
      ]
      : [],
    format: [format],
    outExtension: ({ format }) => {
      return {
        js: format === "cjs" ? ".cjs" : ".js",
      };
    },
    outDir,
    env: {
      PACKAGE_VERSION,
      PACKAGE_API_VERSION,
      PACKAGE_CLIENT_VERSION,
      PACKAGE_CLI_VERSION,
      TARGET: target,
      MODE: process.env.production ? "production" : "development",
    },
    clean: false, // we do this ourselves so its granular
    silent: true,
    dts: format === "cjs",

    sourcemap: true,
    splitting: true,
    shims: true, // so we can use __dirname in both esm and cjs
    minify: false, // !options.watch,
    keepNames: false,
    treeshake: true,
    target: "es2022",

    esbuildOptions(options) {
      // Bundle CSS into JS instead of emitting separate files
      // Using 'local-css' loader makes esbuild inline CSS modules as JS objects
      options.loader = options.loader || {};
      options.loader[".css"] = "local-css";
    },

    esbuildPlugins: [
      /** @type {any} */ (babel({
        config: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
          plugins: ["babel-plugin-dev-expression"],
        },
      })),
    ],
  });
}

/**
 * @param {"esm" } format
 * @param {"browser" | "node"} target
 */
async function transpileWithBabel(format, target) {
  invariant(format === "esm", "format must be esm");
  invariant(
    target === "browser" || target === "node",
    "format must be browser or node",
  );
  invariant(target === "browser" ? format === "esm" : true);

  const inDir = path.resolve("src");
  const outDir = path.resolve(
    `build/${target === "browser" ? "browser" : format}`,
  );

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const [
    babel,
    PACKAGE_VERSION,
    PACKAGE_API_VERSION,
    PACKAGE_CLIENT_VERSION,
    PACKAGE_CLI_VERSION,
  ] = await Promise.all([
    import("@babel/core"),
    readFile("package.json", "utf-8").then(f => JSON.parse(f).version),
    readPackageVersion("packages/api"),
    readPackageVersion("packages/client"),
    readPackageVersion("packages/cli"),
  ]);

  Object.assign(process.env, {
    PACKAGE_VERSION,
    PACKAGE_API_VERSION,
    PACKAGE_CLIENT_VERSION,
    PACKAGE_CLI_VERSION,
    TARGET: target,
    MODE: process.env.production ? "production" : "development",
  });

  const fileEndingsToCopy = [
    ".d.ts",
    ".d.ts.map",
    ".d.mts",
    ".d.mts.map",
    ".css",
  ];

  const extMap = {
    ".js": ".js",
    ".jsx": ".js",
    ".mjs": ".mjs",
    ".mts": ".mjs",
    ".ts": ".js",
    ".tsx": ".js",
  };
  const fileEndingsToCompile = Object.keys(extMap);

  for (
    const f of await readdir(inDir, {
      recursive: true,
      withFileTypes: true,
      encoding: "utf-8",
    })
  ) {
    const fullFilePath = path.join(f.parentPath, f.name);
    const relative = path.relative(
      path.resolve(inDir),
      fullFilePath,
    );
    const destPathWrongExt = path.join(
      outDir,
      relative,
    );
    if (f.isDirectory()) continue;
    if (fileEndingsToCopy.some(e => f.name.endsWith(e))) {
      await mkdir(path.dirname(destPathWrongExt), { recursive: true });
      await copyFile(fullFilePath, destPathWrongExt);
      continue;
    }
    if (!fileEndingsToCompile.some(e => f.name.endsWith(e))) {
      continue;
    }

    const destPath = path.join(
      path.dirname(destPathWrongExt),
      path.basename(destPathWrongExt, path.extname(destPathWrongExt)) + (
        extMap[path.extname(destPathWrongExt)] ?? path.extname(destPathWrongExt)
      ),
    );

    const result = await babel.transformFileAsync(fullFilePath, {
      sourceMaps: true,

      // don't look for a config file (default would try to find one)
      configFile: false,

      presets: [
        "@babel/preset-typescript",
        "@babel/preset-react",
      ],

      plugins: [
        ["babel-plugin-dev-expression"],
        ["babel-plugin-transform-inline-environment-variables", {
          "include": [
            "PACKAGE_VERSION",
            "PACKAGE_API_VERSION",
            "PACKAGE_CLIENT_VERSION",
            "PACKAGE_CLI_VERSION",
            "TARGET",
            "MODE",
          ],
        }],
        ["minify-dead-code-elimination"],
      ],
    });

    if (result.map) {
      const mapFilePath = destPath + ".map";
      result.map.file = path.basename(destPath);

      // this lets us mark the loggers for the sourceMap
      // to be ignored by browsers so you still see
      // the correct line numbers!
      // See https://developer.chrome.com/docs/devtools/x-google-ignore-list
      // and https://tc39.es/ecma426/#sec-source-map-format
      if (
        result.map.sources.some(s =>
          s === "MinimalLogger.ts" || s === "BrowserLogger.ts"
        )
      ) {
        // @ts-ignore
        (result.map.ignoreList ??= []).push(0);
      }

      await mkdir(path.dirname(mapFilePath), { recursive: true });
      await writeFile(mapFilePath, JSON.stringify(result.map));

      result.code += "\n//# sourceMappingURL=" + path.basename(mapFilePath);
    }
    // console.log("writing to: ", destPath);
    await mkdir(path.dirname(destPath), { recursive: true });
    await writeFile(destPath, result.code);
  }

  // Post-process to inline CSS modules using esbuild
  if (target === "browser") {
    await inlineCssModules(outDir);

    // Remove CSS files after inlining since they're now bundled into JS
    for (
      const f of await readdir(outDir, {
        recursive: true,
        withFileTypes: true,
        encoding: "utf-8",
      })
    ) {
      if (f.isFile() && f.name.endsWith(".css")) {
        await rm(path.join(f.parentPath, f.name));
      }
    }
  }
}

/**
 * Post-process JS files to inline CSS module imports using esbuild
 * @param {string} outDir - The output directory containing transpiled JS files
 */
async function inlineCssModules(outDir) {
  const { build } = await import("esbuild");

  // Find all JS files that import CSS
  const jsFiles = [];
  for (
    const f of await readdir(outDir, {
      recursive: true,
      withFileTypes: true,
      encoding: "utf-8",
    })
  ) {
    if (f.isFile() && f.name.endsWith(".js")) {
      const fullPath = path.join(f.parentPath, f.name);
      const content = await readFile(fullPath, "utf-8");

      // Check if this file imports CSS
      if (
        content.includes(".module.css\"") || content.includes(".module.css'")
      ) {
        jsFiles.push(fullPath);
      }
    }
  }

  // Custom esbuild plugin to inline CSS and inject it into the DOM
  const inlineCssPlugin = {
    name: "inline-css",
    setup(build) {
      build.onLoad({ filter: /\.module\.css$/ }, async (args) => {
        const css = await readFile(args.path, "utf-8");

        // Extract class names from CSS modules (only capture CSS class selectors, not URLs)
        const classNames = {};
        const classNameRegex = /^\s*\.([a-zA-Z_][\w-]*)/gm;
        let match;
        while ((match = classNameRegex.exec(css)) !== null) {
          const className = match[1];
          classNames[className] = className;
        }

        // Generate code that injects CSS into the DOM at runtime and exports class names
        const contents = `
const css = ${JSON.stringify(css)};
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}
export default ${JSON.stringify(classNames)};
`;
        return { contents, loader: "js" };
      });

      // For non-module CSS files, just inject without exporting class names
      build.onLoad({ filter: /\.css$/ }, async (args) => {
        if (args.path.endsWith(".module.css")) return; // Already handled above

        const css = await readFile(args.path, "utf-8");
        const contents = `
const css = ${JSON.stringify(css)};
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
}
`;
        return { contents, loader: "js" };
      });
    },
  };

  // Bundle each file with CSS inlined
  for (const jsFile of jsFiles) {
    try {
      const result = await build({
        entryPoints: [jsFile],
        bundle: true,
        format: "esm",
        write: false,
        outfile: jsFile,
        plugins: [inlineCssPlugin],
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "classnames",
          "@base-ui/*",
          "@blueprintjs/*",
          "@tanstack/*",
        ],
        logLevel: "silent",
        minify: false,
        treeShaking: true,
      });

      if (result.outputFiles && result.outputFiles.length > 0) {
        const outputCode = result.outputFiles[0].text;
        await writeFile(jsFile, outputCode);
      }
    } catch (error) {
      console.error(`Failed to inline CSS for ${jsFile}:`, error);
      // Continue processing other files even if one fails
    }
  }
}

async function readPackageVersion(k) {
  const workspaceFile = await findUp("pnpm-workspace.yaml");
  if (!workspaceFile) throw "couldn't find workspace file";
  const workspaceRoot = path.dirname(workspaceFile);
  return await readFile(path.join(workspaceRoot, k, "package.json"), "utf-8")
    .then(f => JSON.parse(f).version);
}
