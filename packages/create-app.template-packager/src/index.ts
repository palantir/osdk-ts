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

export async function cli(): Promise<void> {
  const extsToString = new Set([".html", ".cjs", ".hbs", ".gitignore", ".tsx"]);

  const templatesDir = await findUp("templates", { type: "directory" });
  if (!templatesDir) throw new Error("template dir is missing");

  const sourcePackageJsonPath = await findUp("package.json");
  if (!sourcePackageJsonPath) throw new Error("package.json is missing");

  const sourcePackageJson = JSON.parse(
    await fs.readFile(sourcePackageJsonPath, "utf-8"),
  );

  let result =
    "export const files: Map<string, {type: 'base64', body: string} | {type: 'raw', body: string}> = new Map([\n";

  const processFiles = async function(dir: string, baseDir: string) {
    for (const filename of await fs.readdir(dir)) {
      const file = dir + "/" + filename;

      const stat = await fs.stat(file);
      if (stat.isDirectory()) {
        await processFiles(file, baseDir);
        continue;
      }

      let destPath = path.relative(baseDir, file);

      if (path.basename(destPath) === "_gitignore") {
        destPath = path.join(path.dirname(destPath), ".gitignore");
      }

      const body = await fs.readFile(file);
      let output: string;

      if (destPath === "package.json.hbs") {
        const packageJson = JSON.parse(body.toString("utf-8"));

        for (
          const d of ["dependencies", "devDependencies", "peerDependencies"]
        ) {
          if (sourcePackageJson[d]) {
            if (!packageJson[d]) {
              packageJson[d] = {};
            }
            Object.assign(packageJson[d], sourcePackageJson[d]);
            delete packageJson[d]["@osdk/create-app.template-packager"];
            for (const key of Object.keys(packageJson[d])) {
              if (key.startsWith("@osdk/monorepo.")) {
                delete packageJson[d][key];
              }
            }
          }
        }

        output = safeRaw(JSON.stringify(packageJson, undefined, 2));
      } else if (
        extsToString.has(path.extname(destPath))
        || path.basename(destPath) === ".gitignore"
      ) {
        output = safeRaw(body.toString("utf-8"));
      } else {
        output = serialize({
          type: "base64",
          body: body.toString("base64"),
        }, { space: 2 });
      }

      result += `["${destPath}", ${output}],\n`;
    }
  };
  await processFiles(templatesDir, templatesDir);
  result += `]);`;

  await fs.mkdir("src/generatedNoCheck", { recursive: true });

  await fs.writeFile("src/generatedNoCheck/index.ts", result, {
    encoding: "utf-8",
  });
}

function safeRaw(q: string): string {
  return `{ type: "raw",  body: \`${
    q
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$/g, "\\$")
  }\`}`;
}
