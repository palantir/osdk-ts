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
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import {
  collectModels,
  generateModelDocuments,
  generatePydantic,
  generateTypeScript,
  type ModelDocuments,
} from "@osdk/internal.modeling/generation";
import { expect, it } from "vitest";

import * as schemas from "./schemas.js";

it("publishes every named model in a JSON Schema bundle usable by both language generators", () => {
  const bundle: { $schema: string; $defs: ModelDocuments } = JSON.parse(
    readFileSync(new URL("../resource.schema.json", import.meta.url), "utf-8"),
  );

  // Check to ensure the generated JSON schemas match the Zod define schemas
  // Helps catch drift between them
  expect(bundle).toEqual({
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $defs: generateModelDocuments(collectModels([schemas])),
  });

  // Probably unnecessary, but just confirm that the exported Schema can be used to generate
  // both TS and Pydantic code. generate-models.mjs already exercises the TS generation logic.
  expect(() => generateTypeScript(bundle.$defs)).not.toThrow();
  expect(() => generatePydantic(bundle.$defs)).not.toThrow();
});

it("keeps the JSON Schema bundle and TypeScript declarations in sync", () => {
  // This checks for drift as well. Really just a sanity check, since we kinda already check this above
  // This checks both JSON schemas and the types files
  execFileSync(
    process.execPath,
    [
      fileURLToPath(new URL("../scripts/generate-models.mjs", import.meta.url)),
      "--check",
    ],
    { stdio: "pipe" },
  );
});
