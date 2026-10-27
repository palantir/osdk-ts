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
import {
  mkdtemp,
  mkdir,
  readFile,
  readdir,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { createRequire } from "node:module";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it } from "vitest";

import { generateResourcePackage } from "./generateResourcePackage.js";

const directories: string[] = [];
afterEach(async () => {
  await Promise.all(
    directories
      .splice(0)
      .map((output) => rm(output, { recursive: true, force: true })),
  );
});

async function directory(): Promise<string> {
  const result = await mkdtemp(path.join(os.tmpdir(), "resource-generator-"));
  directories.push(result);
  return result;
}

const input = {
  resources: {
    employees: {
      type: "dataset",
      locator: { type: "apiName", namespace: "com.acme", apiName: "employees" },
      schema: { columns: { employee_id: { type: "string" } } },
    },
    employeeView: {
      type: "restrictedView",
      locator: { type: "apiName", apiName: "employeeView" },
      schema: { columns: { employee_id: { type: "string" } } },
    },
    documents: {
      type: "mediaSet",
      locator: { type: "apiName", apiName: "documents" },
    },
    updateTags: {
      type: "function",
      locator: { type: "apiName", apiName: "updateTags" },
    },
    events: {
      type: "stream",
      locator: { type: "apiName", apiName: "events" },
    },
  },
} as const;

function options(outputDirectory: string) {
  return {
    packageName: "@example/resources",
    packageVersion: "1.0.0",
    resourceVersion: "^1.0.0",
    outputDirectory,
  };
}

describe("generateResourcePackage", () => {
  it("snapshots the generated package", async () => {
    const output = await directory();
    await generateResourcePackage(input, options(output));
    for (const filename of [
      "src/index.ts",
      "resources.json",
      "tsconfig.json",
      "package.json",
    ]) {
      await expect(
        await readFile(path.join(output, filename), "utf-8"),
      ).toMatchFileSnapshot(
        `./__snapshots__/resource-package/${filename}.snap`,
      );
    }
  });

  it("builds generated references and preserves literal column types", async () => {
    const output = await directory();
    await generateResourcePackage(input, options(output));
    await mkdir(path.join(output, "node_modules/@osdk"), { recursive: true });
    await symlink(
      fileURLToPath(new URL("../../resource", import.meta.url)),
      path.join(output, "node_modules/@osdk/resource"),
    );

    await writeFile(
      path.join(output, "consumer.ts"),
      `
import { employees } from "@example/resources";
const kind: "string" = employees.schema.columns.employee_id.type;
// @ts-expect-error A known schema excludes unknown columns.
employees.schema.columns.missing;
`,
    );
    execFileSync(process.execPath, [
      createRequire(import.meta.url).resolve("typescript/lib/tsc.js"),
      "-p",
      path.join(output, "tsconfig.json"),
    ]);

    // Import the built package by name in plain Node so Vitest's module resolution
    // and TypeScript transforms cannot mask broken package exports or build output.
    // Serialization must preserve every reference and expose no unexpected exports.
    const result = JSON.parse(
      execFileSync(
        process.execPath,
        [
          "--input-type=module",
          "-e",
          `import * as refs from "@example/resources"; console.log(JSON.stringify(refs));`,
        ],
        { cwd: output, encoding: "utf-8" },
      ),
    ) as unknown;
    expect(result).toEqual(input.resources);

    // Typecheck a consumer through the public package declarations, not source imports.
    // The literal assignment catches widened types
    // The @ts-expect-error fails if unknown columns become accessible, so both valid and invalid
    // usage are checked
    execFileSync(process.execPath, [
      createRequire(import.meta.url).resolve("typescript/lib/tsc.js"),
      "--noEmit",
      "--strict",
      "--skipLibCheck",
      "--module",
      "NodeNext",
      "--target",
      "ES2022",
      path.join(output, "consumer.ts"),
    ]);
  });

  it("orders exports deterministically and avoids import-name collisions", async () => {
    const output = await directory();
    await generateResourcePackage(
      {
        resources: {
          $resource: input.resources.updateTags,
          ...input.resources,
        },
      },
      options(output),
    );
    const first = await readFile(path.join(output, "src/index.ts"), "utf-8");
    await generateResourcePackage(
      {
        resources: Object.fromEntries(
          Object.entries({
            $resource: input.resources.updateTags,
            ...input.resources,
          }).reverse(),
        ),
      },
      options(output),
    );
    expect(await readFile(path.join(output, "src/index.ts"), "utf-8")).toBe(
      first,
    );
    expect(first).toContain("import * as $resource$");
  });

  it("preserves prototype-related export names", async () => {
    const output = await directory();
    const resources = {
      ["__proto__"]: input.resources.employees,
      constructor: input.resources.updateTags,
    };
    await generateResourcePackage({ resources }, options(output));
    expect(
      JSON.parse(await readFile(path.join(output, "resources.json"), "utf-8")),
    ).toEqual({ resources });
    const source = await readFile(path.join(output, "src/index.ts"), "utf-8");
    expect(source).toContain("export const __proto__ =");
    expect(source).toContain("export const constructor =");
  });

  it.each([
    "default",
    "await",
    "class",
    "a-b",
    "x; throw Error()",
    "arguments",
  ])("rejects invalid export %s before writing", async (name) => {
    const output = await directory();
    await expect(
      generateResourcePackage(
        { resources: { [name]: input.resources.updateTags } },
        options(output),
      ),
    ).rejects.toThrow("Invalid TypeScript export name");
    await expect(readFile(path.join(output, "package.json"))).rejects.toThrow();
  });

  it.each([
    {},
    {
      resources: {
        invalid: {
          type: "dataset",
          locator: { type: "rid", rid: "not-a-dataset" },
        },
      },
    },
    {
      resources: {
        invalid: {
          type: "unsupported",
          locator: { type: "apiName", apiName: "unknown" },
        },
      },
    },
  ])("rejects invalid input %j before writing", async (invalidInput) => {
    const output = await directory();
    await expect(
      generateResourcePackage(invalidInput, options(output)),
    ).rejects.toThrow();
    expect(await readdir(output)).toEqual([]);
  });
});
