/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// cspell:words dataurl
const { readFileSync, readdirSync } = require("fs");
const { join } = require("path");

/**
 * Curated list of user-facing leaf packages to track bundle size.
 * Expand this array to include more packages as needed.
 */
const TRACKED_PACKAGES = [
  "api",
  "client",
  "oauth",
  "react",
  "react-components",
  "widget.client-react",
];

/** esbuild plugin to handle Vite-specific ?url imports */
const viteUrlImportPlugin = {
  name: "externalize-url-imports",
  setup(build) {
    build.onResolve({ filter: /\?url$/ }, (args) => ({
      path: args.path,
      external: true,
    }));
  },
};

module.exports = TRACKED_PACKAGES.flatMap((pkg) => {
  const pkgDir = join(__dirname, "packages", pkg);
  const pkgJson = JSON.parse(
    readFileSync(join(pkgDir, "package.json"), "utf8"),
  );

  // Exclude non-@osdk/* peer deps (react, react-dom, classnames, etc.)
  // Keep @osdk/* peers bundled to measure real dependency cost
  const peerDeps = Object.keys(pkgJson.peerDependencies || {});
  const ignore = peerDeps.filter((dep) => !dep.startsWith("@osdk/"));

  function makeEntry(name, esmPath) {
    return {
      name,
      path: join("packages", pkg, esmPath),
      import: "*",
      ...(ignore.length > 0 && { ignore }),
      modifyEsbuildConfig(config) {
        config.plugins = [...(config.plugins || []), viteUrlImportPlugin];
        config.loader = {
          ...config.loader,
          ".svg": "dataurl",
          ".gif": "dataurl",
          ".png": "dataurl",
          ".jpg": "dataurl",
          ".woff": "dataurl",
          ".woff2": "dataurl",
          ".ttf": "dataurl",
          ".eot": "dataurl",
        };
        return config;
      },
    };
  }

  const entries = [];

  // Collect explicit (non-wildcard) export paths to avoid duplicates
  const explicitExports = new Set(
    Object.keys(pkgJson.exports).filter((p) => !p.includes("*")),
  );

  for (const [exportPath, exportConfig] of Object.entries(pkgJson.exports)) {
    // Skip non-JS exports (e.g. ./styles.css)
    if (!exportConfig?.import?.default) continue;

    // Resolve wildcard exports by scanning the filesystem
    if (exportPath.includes("*")) {
      const pattern = exportConfig.import.default; // e.g. "./build/esm/public/*.js"
      const globDir = join(pkgDir, pattern.replace(/\/\*\.js$/, ""));
      let files;
      try {
        files = readdirSync(globDir, { recursive: true });
      } catch {
        continue; // directory doesn't exist yet (pre-build)
      }
      for (const file of files) {
        const fileName = String(file);
        if (!fileName.endsWith(".js")) continue;
        const stem = fileName.replace(/\.js$/, "");
        const resolvedExportPath = exportPath.replace("*", stem);

        // Skip paths that have explicit exports (avoid duplicates)
        if (explicitExports.has(resolvedExportPath)) continue;

        if (
          resolvedExportPath.includes("internal") ||
          resolvedExportPath.includes("unstable")
        ) {
          continue;
        }

        const resolvedEsmPath = pattern.replace("*", stem);
        const name = `${pkgJson.name}/${resolvedExportPath.slice(2)}`;
        entries.push(makeEntry(name, resolvedEsmPath));
      }
      continue;
    }

    // Skip internal/unstable entry points — only track public surface
    if (exportPath.includes("internal") || exportPath.includes("unstable")) {
      continue;
    }

    const esmPath = exportConfig.import.default;
    const name =
      exportPath === "."
        ? pkgJson.name
        : `${pkgJson.name}/${exportPath.slice(2)}`;
    entries.push(makeEntry(name, esmPath));
  }

  return entries;
});
