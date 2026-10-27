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

import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { synchronizeModelFiles } from "@osdk/internal.modeling/files";
import {
  collectModels,
  generateModelDocuments,
  generateTypeScript,
} from "@osdk/internal.modeling/generation";
import { createJiti } from "jiti";

const root = fileURLToPath(new URL("../", import.meta.url));
const loader = createJiti(import.meta.url, { fsCache: false });

const schemas = await loader.import(resolve(root, "src/schemas.ts"));
const documents = generateModelDocuments(collectModels([schemas]));

const schemaSource = await readFile(resolve(root, "src/schemas.ts"), "utf-8");
const header = schemaSource.match(/^\/\*[\s\S]*?\*\/\s*/u)?.[0] ?? "";
const require = createRequire(import.meta.url);
const formatter = resolve(
  dirname(require.resolve("oxfmt/package.json")),
  "bin/oxfmt",
);
function format(filename, source) {
  return execFileSync(
    process.execPath,
    [
      formatter,
      "-c",
      resolve(root, "../../oxfmt.config.ts"),
      "--stdin-filepath",
      resolve(root, filename),
    ],
    { input: source, encoding: "utf-8" },
  );
}
const types = format("src/types.ts", header + generateTypeScript(documents));
const files = new Map([
  [resolve(root, "src/types.ts"), types],
  [
    resolve(root, "resource.schema.json"),
    format(
      "resource.schema.json",
      JSON.stringify({
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $defs: documents,
      }),
    ),
  ],
]);

if (process.argv.slice(2).some((argument) => argument !== "--check")) {
  throw new Error("Usage: generate-models [--check]");
}

synchronizeModelFiles(
  files,
  process.argv.includes("--check") ? "check" : "write",
);
