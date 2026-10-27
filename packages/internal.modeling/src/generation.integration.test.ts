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
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { Ajv2020 } from "ajv/dist/2020.js";
import { expect, it } from "vitest";
import { z } from "zod/v4";

import { dictionary } from "./dictionary.js";
import {
  generateModelDocuments,
  generateModels,
  generatePydantic,
  generateTypeScript,
} from "./generation.js";
import { int64Schema } from "./int64.js";

interface Tree {
  readonly type: "leaf" | "branch";
  readonly children?: Tree[];
}
const treeSchema: z.ZodType<Tree> = z.lazy(() =>
  z.discriminatedUnion("type", [
    z.strictObject({ type: z.literal("leaf") }).readonly(),
    z
      .strictObject({
        type: z.literal("branch"),
        children: z.array(treeSchema),
      })
      .readonly(),
  ]),
);
const models = {
  Tree: treeSchema,
  Int64: int64Schema,
  Example: z.strictObject({
    tree: treeSchema,
    title: z.string().min(1).optional(),
    count: z.int32().min(0),
    revision: int64Schema,
    labels: dictionary(z.enum(["ASC", "DESC"])),
    values: z.array(z.number()).min(2).readonly(),
    pair: z.strictObject({ value: z.string() }).readonly(),
    tuple: z.tuple([z.string(), z.int32()]).readonly(),
  }),
};

it("snapshots generated TypeScript and Python models", async () => {
  const generated = generateModels({
    ...models,
    FieldAliases: z.strictObject({
      class: z.string(),
      class_: z.string(),
      schema: z.string().optional(),
      Tree: treeSchema.optional(),
    }),
  });
  await expect(generated.typescript).toMatchFileSnapshot(
    "./__snapshots__/models.ts.snap",
  );
  await expect(generated.pydantic).toMatchFileSnapshot(
    "./__snapshots__/models.py.snap",
  );
});

it("generates named recursive models and typechecks actual standalone declarations", async () => {
  const documents = generateModelDocuments(models);
  const generated = generateModels(models);
  expect(generated.documents).toEqual(documents);
  expect(generated.typescript).toBe(generateTypeScript(documents));
  expect(generated.pydantic).toBe(generatePydantic(documents));

  const reordered = generateModels(
    Object.fromEntries(Object.entries(models).reverse()),
  );
  expect(generated).toEqual(reordered);

  const directory = await mkdtemp(join(tmpdir(), "modeling-types-"));
  try {
    await writeFile(join(directory, "models.ts"), generated.typescript);
    await writeFile(
      join(directory, "probe.ts"),
      `
import type { Example, Tree } from "./models.js";
const leaf: Tree = { type: "leaf" };
const branch: Tree = { type: "branch", children: [leaf] };
const example: Example = { tree: branch, count: 1, revision: "9223372036854775807", labels: {}, values: [1, 2], pair: { value: "hello" }, tuple: ["x", 1] };
// @ts-expect-error Fixed tuple arity is preserved.
example.tuple = ["x", 1, 2];
// @ts-expect-error Readonly tuples cannot be mutated.
example.tuple[0] = "other";
// @ts-expect-error Readonly nodes preserve their shallow boundary.
leaf.type = "branch";
// @ts-expect-error Readonly arrays cannot be mutated.
example.values.push(3);
// @ts-expect-error Readonly objects cannot be mutated.
example.pair.value = "other";
// @ts-expect-error Optional is not nullable.
example.title = null;
// @ts-expect-error Wire int64 is a string, not a JS number.
example.revision = 12;
`,
    );
    execFileSync(process.execPath, [
      createRequire(import.meta.url).resolve("typescript/lib/tsc.js"),
      "--noEmit",
      "--strict",
      "--skipLibCheck",
      "--target",
      "ES2022",
      "--module",
      "NodeNext",
      join(directory, "probe.ts"),
    ]);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

it("preserves JSON validation, including optional fields, array bounds, and int32 bounds", () => {
  const { documents } = generateModels(models);

  const ajv = new Ajv2020({ strict: true });
  ajv.addFormat("int64", {
    type: "string",
    validate: (value) => int64Schema.safeParse(value).success,
  });
  for (const document of Object.values(documents)) {
    ajv.addSchema(document);
  }

  const validate = ajv.getSchema("https://osdk.invalid/models/Example.json");
  expect(validate).toBeDefined();

  const valid = {
    tree: { type: "branch", children: [{ type: "leaf" }] },
    count: 1,
    revision: "9223372036854775807",
    labels: { direction: "ASC" },
    values: [1, 2],
    pair: { value: "x" },
    tuple: ["x", 1],
  };

  for (const value of [
    valid,
    { ...valid, title: "hello" },
    { ...valid, title: null },
    { ...valid, values: [1] },
    { ...valid, tuple: ["x"] },
    { ...valid, tuple: ["x", 1, 2] },
    { ...valid, count: 2147483648 },
    { ...valid, extra: true },
    { ...valid, revision: "9223372036854775808" },
  ]) {
    expect(validate?.(value)).toBe(models.Example.safeParse(value).success);
  }
});

it.each([generateTypeScript, generatePydantic])(
  "rejects unsupported document validation before generating language bindings",
  (generate) => {
    expect(() =>
      generate({ Model: { type: "string", format: "email" } }),
    ).toThrow("Unsupported JSON Schema format");
  },
);
