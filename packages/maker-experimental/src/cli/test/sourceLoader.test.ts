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

import { execFile } from "node:child_process";
import { access, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

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
  // Authoring resolves the installed Maker package just as it does in a CLI invocation.
  inputDir = await mkdtemp(
    join(fileURLToPath(new URL("./", import.meta.url)), ".tmp-source-"),
  );
  workDir = await mkdtemp(join(tmpdir(), "maker-source-cli-"));
  input = join(inputDir, "ontology.mjs");
  output = join(workDir, "block-generator-result.json");
  await writeFile(input, definition);
});

afterEach(async () => {
  await Promise.all([
    rm(inputDir, { recursive: true, force: true }),
    rm(workDir, { recursive: true, force: true }),
  ]);
});

function run(
  ...flags: string[]
): Promise<{ exitCode: string | number; text: string }> {
  return new Promise((resolve) => {
    execFile(
      process.execPath,
      [
        fileURLToPath(
          new URL("../../../bin/maker-experimental.mjs", import.meta.url),
        ),
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
      ],
      (error, stdout, stderr) => {
        resolve({ exitCode: error?.code ?? 0, text: stdout + stderr });
      },
    );
  });
}

it("keeps ordinary validation errors when the source loader is disabled", async () => {
  const result = await run();
  expect(result.exitCode).toBe(1);
  expect(result.text).toContain("[invalid_api_name]");
  expect(result.text).not.toContain(`${input}:3:`);
  await expect(access(output)).rejects.toMatchObject({ code: "ENOENT" });
});

describe.skipIf(Number(process.versions.node.split(".")[0]) < 24)(
  "experimental source loader CLI",
  () => {
    it("reports the authored location without writing invalid block data", async () => {
      const result = await run("--experimental-source-loader");
      expect(result.exitCode).toBe(1);
      expect(result.text).toContain(`${input}:3:`);
      expect(result.text).toContain("[invalid_api_name]");
      expect(result.text).toContain('apiName: "invalid-name"');
      expect(result.text).toContain("^");
      expect(result.text).not.toContain(
        "Unexpected error while processing the body",
      );
      await expect(access(output)).rejects.toMatchObject({ code: "ENOENT" });
    });

    it("generates block data from valid TypeScript authoring", async () => {
      input = join(inputDir, "ontology.ts");
      await writeFile(
        input,
        definition.replace('"invalid-name"', '"Document"'),
      );
      const result = await run("--experimental-source-loader");
      expect(result.exitCode).toBe(0);
      await expect(access(output)).resolves.toBeUndefined();
    });
  },
);
