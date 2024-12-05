/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as esbuild from "esbuild";
import * as fs from "node:fs/promises";
import * as path from "node:path";

export async function build(dirPath: string) {
  const dir = await fs.opendir(path.join(dirPath, "src"));

  const entryPoints: string[] = [];

  for await (const dirent of dir) {
    if (
      dirent.isFile() && (
        dirent.name.endsWith(".ts")
        || dirent.name.endsWith(".js")
      )
    ) {
      entryPoints.push(dirent.name);
    }
  }

  const baseOutDir = path.join(
    dirPath,
    "build",
    "benchmark",
    "bundler",
    "esbuild",
  );
  const results: esbuild.BuildResult[] = [];
  for (const entryPoint of entryPoints) {
    const baseName = path.basename(entryPoint, path.extname(entryPoint));
    for (const minify of [true, false]) {
      for (const platform of ["node", "browser"]) {
        const result = await esbuild.build({
          entryPoints: [`src/${entryPoint}`],
          bundle: true,
          minify,

          external: ["isomorphic-ws", "fetch-retry"],
          format: "esm",
          ...(platform === "node"
            ? { platform: "node", target: "node18" }
            : {
              platform: "browser",
              // this `conditions` entry SHOULD NOT exist if we have all of our configs right
              conditions: ["import"],
            }),
          outfile: path.join(
            baseOutDir,
            `${baseName}.${platform}${minify ? ".min" : ""}.js`,
          ),
        });
        results.push(result);
      }
    }
  }

  const r = await collectStats(baseOutDir, {}, baseOutDir);
  await fs.writeFile(
    path.join(baseOutDir, "stats.json"),
    JSON.stringify(r, null, 2),
  );
}

async function collectStats(
  dirPath: string,
  results: Record<string, number>,
  relPath: string,
) {
  const dir = await fs.opendir(dirPath);

  for await (const filePath of dir) {
    if (filePath.isFile() && filePath.name.endsWith(".js")) {
      const stats = await fs.stat(path.join(dirPath, filePath.name));
      results[path.relative(relPath, path.join(dirPath, filePath.name))] =
        stats.size;
    } else if (filePath.isDirectory()) {
      await collectStats(
        path.join(dirPath, filePath.name),
        results,
        relPath,
      );
    }
  }

  return results;
}
