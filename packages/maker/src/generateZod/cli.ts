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

import fs from "node:fs/promises";
import path from "node:path";

import type { ApiSpec } from "@osdk/docs-spec-platform";

import { generateZodSchemas } from "./generateZod.js";

const [inputFile, versionArg] = process.argv.slice(2);
if (!inputFile)
  throw new Error("Usage: generate-zod <declarative-ir.json> [version]");
const apiGatewayVersion = (
  versionArg ??
  (await fs.readFile(path.join(path.dirname(inputFile), "version.txt"), "utf8"))
).trim();
if (!apiGatewayVersion) {
  throw new Error("API Gateway version is required");
}
const ir: ApiSpec = JSON.parse(await fs.readFile(inputFile, "utf8"));
const files = generateZodSchemas(ir, { apiGatewayVersion });
const output = new URL("../generated/", import.meta.url);
await fs.rm(output, { recursive: true, force: true });
await fs.mkdir(output, { recursive: true });
await Promise.all(
  [...files].map(([filename, source]) =>
    fs.writeFile(new URL(filename, output), source),
  ),
);
