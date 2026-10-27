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

/*
 * Checks generated models against Zod using shared valid and invalid JSON fixtures.
 * Currently generates Python models and runs the Pydantic test runner to compare
 * validation results, verify lossless JSON round trips, and exercise JSON Schema export.
 * Generated models and fixtures live in a temporary directory that is removed afterward.
 */

import { execFileSync } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { z } from "zod/v4";

import { dictionary, int64Schema } from "../build/esm/index.js";
import { generateModels } from "../build/esm/public/generation.js";

// SCHEMAS
const treeSchema = z.lazy(() =>
  z.discriminatedUnion("type", [
    z.strictObject({ type: z.literal("leaf"), value: z.string() }),
    z.strictObject({
      type: z.literal("branch"),
      children: z.array(treeSchema),
      // Zod inspects tuple item optionality eagerly, so defer construction until the tree exists.
      operands: z
        .lazy(() => z.tuple([treeSchema, treeSchema]).readonly())
        .optional(),
    }),
  ]),
);

const exampleSchema = z.strictObject({
  tree: treeSchema,
  title: z.string().min(1).optional(),
  count: z.int32().min(0),
  revision: int64Schema,
  revisionHistory: z.array(int64Schema).optional(),
  direction: z.enum(["ASC", "DESC"]),
  labels: dictionary(z.string()),
  values: z.array(z.number()).min(2),
  version: z.literal("1"),
  class: z.string(),
  class_: z.string(),
  schema: z.string().optional(),
  enabled: z.boolean(),
  pattern: z.string().regex(/^a.b$/u),
  Tree: treeSchema.optional(),
});

// FIXTURES
const valid = {
  tree: { type: "branch", children: [{ type: "leaf", value: "x" }] },
  count: 1,
  revision: "9223372036854775807",
  direction: "ASC",
  labels: { name: "value" },
  values: [1, 2],
  version: "1",
  class: "original JSON name",
  class_: "collision",
  enabled: true,
  pattern: "a💡b",
};
const samples = [
  valid,
  {
    ...valid,
    title: "present",
    schema: "schema alias",
    revisionHistory: [
      "0",
      "9007199254740993",
      "-9223372036854775808",
      "9223372036854775807",
    ],
    Tree: { type: "leaf", value: "annotation name collision" },
  },
  { ...valid, title: null },
  { ...valid, count: true },
  { ...valid, count: "1" },
  { ...valid, count: 1.5 },
  { ...valid, count: 2147483648 },
  { ...valid, revision: "9223372036854775808" },
  { ...valid, revision: "-9223372036854775808" },
  { ...valid, revision: "01" },
  ...[
    "0",
    "1",
    "-1",
    "9007199254740993",
    "9223372036854775806",
    "-9223372036854775807",
    "-9223372036854775809",
    "-0",
    "+1",
    "1.0",
    "1e3",
    "1\n",
    " 1",
    "1 ",
    "0x1",
    "0b1",
    "1_000",
    "١",
    "",
    "100000000000000000000",
    1,
    true,
    null,
  ].map((revision) => ({ ...valid, revision })),
  { ...valid, revisionHistory: ["1", "01"] },
  { ...valid, values: [1] },
  { ...valid, values: [1, "2"] },
  { ...valid, version: true },
  { ...valid, version: 1 },
  { ...valid, version: "2" },
  { ...valid, enabled: 1 },
  { ...valid, labels: { "": "ASC" } },
  { ...valid, labels: { ["__proto__"]: "ASC", constructor: "DESC" } },
  { ...valid, extra: "unknown" },
  { ...valid, tree: { type: "branch", children: [{ type: "unknown" }] } },
  {
    ...valid,
    tree: {
      type: "branch",
      children: [],
      operands: [
        { type: "leaf", value: "left" },
        { type: "leaf", value: "right" },
      ],
    },
  },
  {
    ...valid,
    tree: {
      type: "branch",
      children: [],
      operands: [{ type: "leaf", value: "left" }],
    },
  },
  { ...valid, pattern: "a\rb" },
  { ...valid, pattern: "a\nb" },
  { ...valid, pattern: "a\u2028b" },
];

const fixtures = samples.map((value) => ({
  json: JSON.stringify(value),
  valid: exampleSchema.safeParse(value).success,
}));
fixtures.push({
  json: JSON.stringify(valid).replace('"count":1', '"count":1.0'),
  valid: true,
});

// PYTHON
const temporary = await mkdtemp(join(tmpdir(), "modeling-python-"));
try {
  await writeFile(
    join(temporary, "models.py"),
    generateModels({
      Tree: treeSchema,
      Int64: int64Schema,
      Example: exampleSchema,
    }).pydantic,
  );
  await writeFile(join(temporary, "fixtures.json"), JSON.stringify(fixtures));

  execFileSync(
    process.env.MODELING_PYTHON ?? "python3",
    [
      fileURLToPath(new URL("../tests/compatibility.py", import.meta.url)),
      temporary,
    ],
    { stdio: "inherit" },
  );
} finally {
  await rm(temporary, { recursive: true, force: true });
}
