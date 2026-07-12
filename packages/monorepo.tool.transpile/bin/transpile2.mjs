#!/usr/bin/env node
// @ts-check
import remapping from "@ampproject/remapping";
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
import { applyDevExpression, devExpressionPlugin } from "./devExpression.mjs";

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
        await transpileWithOxc(args.format, args.target);
      } else if (args.mechanism === "bundle") {
        await transpileWithTsdown(args.format, args.target);
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

function isTestFile(relativePath) {
  const segments = relativePath.split(path.sep);
  return segments.some(s =>
    s.includes(".test.") || s.includes(".test") || s === "testUtils"
    || s.startsWith("testUtils.")
  );
}

async function transformTypes() {
  const { isolatedDeclarationSync } = await import("oxc-transform");

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
    if (isTestFile(relative)) continue;
    if (!fileEndingsToCompile.some(e => f.name.endsWith(e))) {
      continue;
    }

    const result = isolatedDeclarationSync(
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
async function transpileWithTsdown(format, target) {
  invariant(format === "esm" || format === "cjs", "format must be esm or cjs");
  invariant(
    target === "browser" || target === "node",
    "format must be browser or node",
  );
  invariant(target === "browser" ? format === "esm" : true);

  const outDir = `build/${target === "browser" ? "browser" : format}`;

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const pkgJson = JSON.parse(await readFile("package.json", "utf-8"));

  const [
    { build },
    PACKAGE_VERSION,
    PACKAGE_API_VERSION,
    PACKAGE_CLIENT_VERSION,
    PACKAGE_CLI_VERSION,
  ] = await Promise.all([
    import("tsdown"),
    Promise.resolve(pkgJson.version),
    readPackageVersion("packages/api"),
    readPackageVersion("packages/client"),
    readPackageVersion("packages/cli"),
  ]);

  const noExternalList = [
    "@osdk/cli.cmd.typescript",
    "@osdk/cli.common",
    "@osdk/foundry.ontologies",
    "@osdk/foundry.mediasets",
    "@osdk/foundry.functions",
    "@osdk/shared.client",
    "@osdk/shared.client2",
    "oauth4webapi",
    "p-defer",
    // create-app templates (private, must be bundled)
    "@osdk/create-app.template.expo.v2",
    "@osdk/create-app.template.react",
    "@osdk/create-app.template.react.beta",
    "@osdk/create-app.template.tutorial-todo-aip-app",
    "@osdk/create-app.template.tutorial-todo-aip-app.beta",
    "@osdk/create-app.template.tutorial-todo-app",
    "@osdk/create-app.template.tutorial-todo-app.beta",
    "@osdk/create-app.template.typescript-library.beta",
    "@osdk/create-app.template.vue",
    "@osdk/create-app.template.vue.v2",
    // create-widget templates (private, must be bundled)
    "@osdk/create-widget.template.minimal-react.v2",
    "@osdk/create-widget.template.react.v2",
  ];

  const devDepNames = Object.keys(pkgJson.devDependencies ?? {});
  const externalDevDeps = devDepNames.filter(d => !noExternalList.includes(d));

  // The noExternalList packages are ESM-only / not CJS-compatible, so the CJS
  // bundle must inline them — otherwise it emits `require()` of an ESM module
  // (e.g. @osdk/foundry.ontologies) which throws ERR_REQUIRE_ESM on Node < 22.
  // Other deps (workspace @osdk packages ship their own CJS build; third-party
  // deps like fetch-retry are CJS) are fine left external. Match each entry as
  // its package root OR any subpath (e.g. ".../Action") — tsdown's plain-string
  // noExternal match, unlike tsup's, does not cover subpaths.
  const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const noExternalPatterns = noExternalList.map(
    n => new RegExp("^" + escapeRe(n) + "(/|$)"),
  );

  await build({
    entry: [
      "src/index.ts",
      "src/public/*.ts",
      "src/public/*.mts",
      "src/public/**/*.ts",
      "src/public/**/*.mts",
    ],

    // Strip `invariant()` messages in production (replaces babel-plugin-dev-expression,
    // which the old tsup path ran). rolldown composes the plugin's sourcemap.
    plugins: [devExpressionPlugin()],

    // don't try to load config files from disk
    config: false,

    // these packages are not CJS compatible so we need to bundle them up for cjs
    noExternal: format === "cjs" ? noExternalPatterns : [],

    // prevent devDependencies from being inlined into the bundle
    external: externalDevDeps,
    format: [format],

    // browser bundles target the browser platform; everything else is node.
    // (rolldown forces cjs to `node` regardless.)
    platform: target === "browser" ? "browser" : "node",

    outExtensions: () => {
      return {
        js: format === "cjs" ? ".cjs" : ".js",
      };
    },
    outDir,

    // Compile-time constants, inlined via define (`process.env.X`/
    // `import.meta.env.X`). Note NODE_ENV is intentionally NOT listed: it stays
    // a runtime check so the consuming bundle decides prod vs. dev. TS/JSX are
    // handled natively by rolldown/oxc, so no babel step is needed here.
    env: {
      PACKAGE_VERSION,
      PACKAGE_API_VERSION,
      PACKAGE_CLIENT_VERSION,
      PACKAGE_CLI_VERSION,
      TARGET: target,
      MODE: process.env.production ? "production" : "development",
    },
    clean: false, // we do this ourselves so its granular
    logLevel: "silent",
    dts: format === "cjs",

    sourcemap: true,
    shims: true, // so we can use __dirname in both esm and cjs
    // dead-code elimination only (no renaming/whitespace compression) so the
    // constant-folded `MODE` branches are stripped, matching the babel path.
    minify: "dce-only",
    treeshake: true,
    target: "es2022",
  });
}

/**
 * @param {"esm" } format
 * @param {"browser" | "node"} target
 */
async function transpileWithOxc(format, target) {
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
    { transformSync },
    PACKAGE_VERSION,
    PACKAGE_API_VERSION,
    PACKAGE_CLIENT_VERSION,
    PACKAGE_CLI_VERSION,
  ] = await Promise.all([
    import("oxc-transform"),
    readFile("package.json", "utf-8").then(f => JSON.parse(f).version),
    readPackageVersion("packages/api"),
    readPackageVersion("packages/client"),
    readPackageVersion("packages/cli"),
  ]);

  // Compile-time constants, inlined via define (`process.env.X`/
  // `import.meta.env.X`). oxc constant-folds the resulting literal conditions
  // (e.g. the `MODE !== "production"` guards). NODE_ENV is intentionally NOT
  // listed: it stays a runtime check so the consuming bundle decides prod vs.
  // dev. TS/JSX are handled natively by oxc, so no babel step is needed.
  const define = Object.fromEntries(
    Object.entries({
      PACKAGE_VERSION,
      PACKAGE_API_VERSION,
      PACKAGE_CLIENT_VERSION,
      PACKAGE_CLI_VERSION,
      TARGET: target,
      MODE: process.env.production ? "production" : "development",
    }).flatMap(([k, v]) => [
      [`process.env.${k}`, JSON.stringify(v)],
      [`import.meta.env.${k}`, JSON.stringify(v)],
    ]),
  );

  const fileEndingsToCopy = [
    ".d.ts",
    ".d.ts.map",
    ".d.mts",
    ".d.mts.map",
    ".css",
  ];

  // source extension -> output extension
  const extMap = {
    ".js": ".js",
    ".jsx": ".js",
    ".mjs": ".mjs",
    ".mts": ".mjs",
    ".ts": ".js",
    ".tsx": ".js",
  };
  // source extension -> oxc `lang`
  const langMap = {
    ".js": "js",
    ".jsx": "jsx",
    ".mjs": "js",
    ".mts": "ts",
    ".ts": "ts",
    ".tsx": "tsx",
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
    if (isTestFile(relative)) continue;
    if (fileEndingsToCopy.some(e => f.name.endsWith(e))) {
      await mkdir(path.dirname(destPathWrongExt), { recursive: true });
      await copyFile(fullFilePath, destPathWrongExt);
      continue;
    }
    const srcExt = path.extname(destPathWrongExt);
    if (!fileEndingsToCompile.includes(srcExt)) {
      continue;
    }

    const destPath = path.join(
      path.dirname(destPathWrongExt),
      path.basename(destPathWrongExt, srcExt) + (extMap[srcExt] ?? srcExt),
    );

    const source = await readFile(fullFilePath, "utf-8");

    // Strip `invariant()` messages in production (replaces babel-plugin-dev-expression,
    // which the old babel path ran). Runs on the source before oxc; `null` when the
    // file has no invariant() calls, leaving the source untouched.
    const preStripped = applyDevExpression(source, fullFilePath);

    const result = transformSync(
      fullFilePath,
      preStripped ? preStripped.code : source,
      {
        lang: langMap[srcExt],
        sourcemap: true,
        define,
        jsx: { runtime: "automatic" },
      },
    );

    if (result.errors && result.errors.length > 0) {
      for (const e of result.errors) {
        console.error(fullFilePath);
        console.error(e);
      }
      process.exit(1);
    }

    let code = result.code;
    if (result.map) {
      // If we ran the invariant transform, compose its map (rewritten <- source)
      // under oxc's map (output <- rewritten) so positions resolve to the original
      // source. Rename oxc's intermediate source first so remapping treats the
      // dev-expression map as the leaf (and doesn't recurse forever).
      if (preStripped) {
        const intermediate = "\0devExpressionInput";
        result.map.sources = [intermediate];
        result.map = remapping(
          result.map,
          (s) => (s === intermediate ? preStripped.map : null),
          { excludeContent: false },
        );
        result.map.sourcesContent = [source];
      }

      const mapFilePath = destPath + ".map";
      result.map.file = path.basename(destPath);
      // Use the bare file name for `sources` (matching the previous babel
      // output); the embedded `sourcesContent` is what debuggers resolve
      // against.
      result.map.sources = result.map.sources.map(s => path.basename(s));

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
        (result.map.ignoreList ??= []).push(0);
      }

      await mkdir(path.dirname(mapFilePath), { recursive: true });
      await writeFile(mapFilePath, JSON.stringify(result.map));

      code += "\n//# sourceMappingURL=" + path.basename(mapFilePath);
    }
    await mkdir(path.dirname(destPath), { recursive: true });
    await writeFile(destPath, code);
  }
}

async function readPackageVersion(k) {
  const workspaceFile = await findUp("pnpm-workspace.yaml");
  if (!workspaceFile) throw "couldn't find workspace file";
  const workspaceRoot = path.dirname(workspaceFile);
  return await readFile(path.join(workspaceRoot, k, "package.json"), "utf-8")
    .then(f => JSON.parse(f).version);
}
