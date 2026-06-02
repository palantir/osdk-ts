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

import { findUp } from "find-up";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import serialize from "serialize-javascript";

type Entry = { type: "base64"; body: string } | { type: "raw"; body: string };

export async function cli(
  argv: string[] = process.argv.slice(2),
): Promise<void> {
  const extsToString = new Set([".html", ".cjs", ".hbs", ".gitignore", ".tsx"]);

  const sharedPackages = parseSharedFlags(argv);

  const templatesDir = await findUp("templates", { type: "directory" });
  if (!templatesDir) throw new Error("template dir is missing");

  const sourcePackageJsonPath = await findUp("package.json");
  if (!sourcePackageJsonPath) throw new Error("package.json is missing");

  const sourcePackageJson = JSON.parse(
    await fs.readFile(sourcePackageJsonPath, "utf-8"),
  );

  const entries = new Map<string, Entry>();

  for (const pkgName of sharedPackages) {
    const sharedDir = await resolveSharedTemplatesDir(
      pkgName,
      sourcePackageJsonPath,
    );
    await collectFiles(sharedDir, sharedDir, entries, sourcePackageJson);
  }
  await collectFiles(templatesDir, templatesDir, entries, sourcePackageJson);

  let result =
    "export const files: Map<string, {type: 'base64', body: string} | {type: 'raw', body: string}> = new Map([\n";
  for (const [destPath, entry] of entries) {
    const output = entry.type === "raw"
      ? safeRaw(entry.body)
      : serialize(entry, { space: 2 });
    result += `["${destPath}", ${output}],\n`;
  }
  result += `]);`;

  await fs.mkdir("src/generatedNoCheck", { recursive: true });

  await fs.writeFile("src/generatedNoCheck/index.ts", result, {
    encoding: "utf-8",
  });

  async function collectFiles(
    dir: string,
    baseDir: string,
    sink: Map<string, Entry>,
    sourcePkg: Record<string, unknown>,
  ): Promise<void> {
    for (const filename of await fs.readdir(dir)) {
      const file = dir + "/" + filename;
      const stat = await fs.stat(file);
      if (stat.isDirectory()) {
        await collectFiles(file, baseDir, sink, sourcePkg);
        continue;
      }

      let destPath = path.relative(baseDir, file);
      if (path.basename(destPath) === "_gitignore") {
        destPath = path.join(path.dirname(destPath), ".gitignore");
      }

      const body = await fs.readFile(file);

      if (
        destPath === "package.json.hbs"
        || destPath === "package.json.osdk.hbs"
        || destPath === "package.json.psdk.hbs"
      ) {
        const packageJson = JSON.parse(body.toString("utf-8"));
        for (
          const d of ["dependencies", "devDependencies", "peerDependencies"]
        ) {
          const sourceDeps = sourcePkg[d] as
            | Record<string, string>
            | undefined;
          if (sourceDeps) {
            if (!packageJson[d]) {
              packageJson[d] = {};
            }
            Object.assign(packageJson[d], sourceDeps);
            delete packageJson[d]["@osdk/create-app.template-packager"];
            for (const [key, value] of Object.entries(packageJson[d])) {
              if (
                key.startsWith("@osdk/monorepo.")
                || (typeof value === "string" && value.startsWith("workspace:"))
              ) {
                delete packageJson[d][key];
              }
            }
          }
        }
        sink.set(destPath, {
          type: "raw",
          body: JSON.stringify(packageJson, undefined, 2),
        });
      } else if (
        extsToString.has(path.extname(destPath))
        || path.basename(destPath) === ".gitignore"
      ) {
        sink.set(destPath, { type: "raw", body: body.toString("utf-8") });
      } else {
        sink.set(destPath, { type: "base64", body: body.toString("base64") });
      }
    }
  }
}

function parseSharedFlags(argv: string[]): string[] {
  const shared: string[] = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--shared") {
      const next = argv[i + 1];
      if (next == null) throw new Error("--shared requires a package name");
      shared.push(next);
      i++;
    } else if (argv[i].startsWith("--shared=")) {
      shared.push(argv[i].slice("--shared=".length));
    }
  }
  return shared;
}

async function resolveSharedTemplatesDir(
  pkgName: string,
  sourcePackageJsonPath: string,
): Promise<string> {
  let dir = path.dirname(sourcePackageJsonPath);
  while (true) {
    const candidate = path.join(dir, "node_modules", pkgName, "package.json");
    try {
      await fs.access(candidate);
      return path.join(path.dirname(candidate), "templates");
    } catch {
      // keep walking up
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      throw new Error(
        `Could not resolve shared template package "${pkgName}" from ${sourcePackageJsonPath}`,
      );
    }
    dir = parent;
  }
}

function safeRaw(q: string): string {
  return `{ type: "raw",  body: \`${
    q
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$/g, "\\$")
  }\`}`;
}
