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

import { access, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { MakerValidationError, SourceValidationError } from "@osdk/maker";
import { consola } from "consola";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import main from "../main.js";

const definition = `import { defineObject } from "@osdk/maker";
defineObject({
  apiName: "invalid-name", displayName: "Document", pluralDisplayName: "Documents",
  primaryKeyPropertyApiName: "id", titlePropertyApiName: "id",
  properties: { id: { type: "string" } },
});`;

let inputDir: string;
let workDir: string;
let input: string;
let output: string;

beforeEach(async () => {
  vi.spyOn(consola, "log").mockImplementation(() => {});
  vi.spyOn(consola, "info").mockImplementation(() => {});
  vi.spyOn(consola, "success").mockImplementation(() => {});
  vi.spyOn(consola, "warn").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
  // Ordinary imports need to resolve the installed Maker package.
  inputDir = await mkdtemp(
    join(fileURLToPath(new URL("./", import.meta.url)), ".tmp-source-"),
  );
  workDir = await mkdtemp(join(tmpdir(), "maker-source-cli-"));
  input = join(inputDir, "ontology.ts");
  output = join(workDir, "block-generator-result.json");
  await writeFile(input, definition);
});

afterEach(async () => {
  vi.restoreAllMocks();
  await Promise.all([
    rm(inputDir, { recursive: true, force: true }),
    rm(workDir, { recursive: true, force: true }),
  ]);
});

function run(...flags: string[]): Promise<void> {
  return main([
    "node",
    "maker-experimental",
    "--input",
    input,
    "--output",
    output,
    "--apiNamespace",
    "com.acme",
    "--buildDir",
    join(workDir, "build"),
    "--codegenDir",
    join(workDir, "generated"),
    "--valueTypesOutput",
    join(workDir, "value-types.json"),
    ...flags,
  ]);
}

it("keeps ordinary validation errors when the source loader is disabled", async () => {
  const error: unknown = await run().catch((caught: unknown) => caught);
  expect(error).toBeInstanceOf(MakerValidationError);
  expect(error).not.toBeInstanceOf(SourceValidationError);
  await expect(access(output)).rejects.toMatchObject({ code: "ENOENT" });
});

describe.skipIf(Number(process.versions.node.split(".")[0]) < 24)(
  "experimental source loader",
  () => {
    it("reports the authored location without writing invalid block data", async () => {
      const error: unknown = await run("--experimental-source-loader").catch(
        (caught: unknown) => caught,
      );
      expect(error).toBeInstanceOf(SourceValidationError);
      if (!(error instanceof SourceValidationError)) throw error;
      expect(error.cause).toBeInstanceOf(MakerValidationError);
      expect(error.diagnostics[0]).toMatchObject({
        code: "invalid_api_name",
        path: ["apiName"],
        source: { fileName: input, start: { line: 3 }, precision: "exact" },
      });
      expect(error.message).toContain('apiName: "invalid-name"');
      expect(console.error).not.toHaveBeenCalled();
      await expect(access(output)).rejects.toMatchObject({ code: "ENOENT" });
    });

    it("generates block data from valid TypeScript authoring", async () => {
      await writeFile(
        input,
        definition.replace('"invalid-name"', '"Document"'),
      );
      await run("--experimental-source-loader");
      await expect(access(output)).resolves.toBeUndefined();
    });
  },
);
