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
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { ApiSpec, Component, DataType } from "@osdk/docs-spec-platform";
import { createJiti } from "jiti";
import { afterEach, describe, expect, it } from "vitest";
import type { z } from "zod/v4";

import {
  StreamsStreamDefinitionSchema as StreamDefinitionSchema,
  type StreamsStreamDefinition as StreamDefinition,
} from "../generated/streams.js";
import { generateZodSchemas } from "./generateZod.js";

const directories: string[] = [];
afterEach(async () => {
  await Promise.all(
    directories
      .splice(0)
      .map((directory) => fs.rm(directory, { recursive: true, force: true })),
  );
});
function component(name: string, type: DataType): Component {
  return {
    locator: { namespaceName: "Test", localName: name },
    type,
    safety: "SAFE",
    documentation: { example: [] },
  };
}
function fixture(components: Component[]): ApiSpec {
  return {
    irVersion: "v2",
    namespaces: [
      {
        name: "Test",
        version: "v2",
        components,
        resources: [],
        errors: [],
      },
    ],
  };
}
const reference = (name: string): Extract<DataType, { type: "reference" }> => ({
  type: "reference",
  reference: { locator: { namespaceName: "Test", localName: name } },
});
const integer: DataType = {
  type: "builtin",
  builtin: { type: "integer", integer: {} },
};

async function loadModules(
  files: ReadonlyMap<string, string>,
  filename = "test.ts",
): Promise<Record<string, z.ZodType>> {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "maker-zod-"));
  directories.push(directory);
  await fs.symlink(
    fileURLToPath(new URL("../../node_modules", import.meta.url)),
    path.join(directory, "node_modules"),
    "dir",
  );
  await Promise.all(
    [...files].map(([name, source]) =>
      fs.writeFile(path.join(directory, name), source),
    ),
  );
  return createJiti(import.meta.url).import<Record<string, z.ZodType>>(
    path.join(directory, filename),
  );
}

function streamDefinition(): StreamDefinition {
  return {
    schema: {
      fields: [
        {
          name: "payload",
          schema: {
            nullable: false,
            dataType: {
              type: "struct",
              subFields: [
                {
                  name: "amounts",
                  schema: {
                    nullable: false,
                    dataType: {
                      type: "array",
                      itemsSchema: {
                        nullable: true,
                        dataType: { type: "decimal", precision: 20, scale: 4 },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      ],
      keyFieldNames: ["payload"],
      changeDataCapture: {
        type: "fullRow",
        deletionFieldName: "deleted",
        orderingFieldName: "version",
      },
    },
    id: "updates",
    partitionsCount: 1,
    streamType: "LOW_LATENCY",
    compressed: false,
  };
}

describe("generated stream definition schema", () => {
  it("accepts published optional settings and apiName without applying defaults", () => {
    const input = { id: "updates", apiName: "updates", schema: { fields: [] } };
    expect(StreamDefinitionSchema.parse(input)).toEqual(input);
    const { apiName: _apiName, ...minimal } = input;
    expect(StreamDefinitionSchema.parse(minimal)).toEqual(minimal);
  });

  it("parses recursive field schemas and preserves the input", () => {
    const definition = streamDefinition();
    expect(StreamDefinitionSchema.parse(definition)).toEqual(definition);
    expect(
      StreamDefinitionSchema.safeParse({
        ...definition,
        schema: { fields: definition.schema.fields },
      }).success,
    ).toBe(true);
  });

  it("rejects deployment fields, missing identity, invalid unions, and nested unknown properties", () => {
    const definition = streamDefinition();
    expect(
      StreamDefinitionSchema.safeParse({ ...definition, branchName: "master" })
        .success,
    ).toBe(false);
    expect(
      StreamDefinitionSchema.safeParse({
        ...definition,
        viewRid: "ri.foundry-streaming.main.view.example",
      }).success,
    ).toBe(false);
    const { id: _id, ...missingId } = definition;
    expect(StreamDefinitionSchema.safeParse(missingId).success).toBe(false);
    expect(
      StreamDefinitionSchema.safeParse({ ...definition, id: 123 }).success,
    ).toBe(false);
    expect(
      StreamDefinitionSchema.safeParse({ ...definition, streamType: "unknown" })
        .success,
    ).toBe(false);
    expect(
      StreamDefinitionSchema.safeParse({ ...definition, partitionsCount: 1.5 })
        .success,
    ).toBe(false);
    expect(
      StreamDefinitionSchema.safeParse({
        ...definition,
        schema: {
          fields: [
            {
              name: "bad",
              schema: { nullable: false, dataType: { type: "unknown" } },
            },
          ],
        },
      }).success,
    ).toBe(false);
    expect(
      StreamDefinitionSchema.safeParse({
        ...definition,
        schema: { ...definition.schema, extra: true },
      }).success,
    ).toBe(false);
  });
});

describe("Zod schema generator", () => {
  it("emits all components, including independent types and recursive objects", async () => {
    const ir = fixture([
      component("Node", {
        type: "object",
        object: {
          properties: {
            children: {
              type: { type: "list", list: { subType: reference("Node") } },
              safety: "SAFE",
              documentation: { example: [] },
            },
          },
        },
      }),
      component("Independent", integer),
    ]);
    const before = JSON.stringify(ir);
    const schemas = await loadModules(generateZodSchemas(ir));
    expect(JSON.stringify(ir)).toBe(before);
    expect(
      schemas.TestNodeSchema.parse({ children: [{ children: [] }] }),
    ).toEqual({ children: [{ children: [] }] });
    expect(schemas.TestNodeSchema.safeParse({ children: [{}] }).success).toBe(
      false,
    );
    expect(schemas.TestIndependentSchema.parse(42)).toBe(42);
  });

  it("supports recursive references across namespace modules", async () => {
    const node = component("Node", {
      type: "object",
      object: {
        properties: {
          peers: {
            type: {
              type: "list",
              list: {
                subType: {
                  type: "reference",
                  reference: {
                    locator: { namespaceName: "Other", localName: "Peer" },
                  },
                },
              },
            },
            safety: "SAFE",
            documentation: { example: [] },
          },
        },
      },
    });
    const peer = component("Peer", {
      type: "object",
      object: {
        properties: {
          parents: {
            type: { type: "list", list: { subType: reference("Node") } },
            safety: "SAFE",
            documentation: { example: [] },
          },
        },
      },
    });
    peer.locator.namespaceName = "Other";
    const ir = fixture([node]);
    ir.namespaces.push({
      ...ir.namespaces[0],
      name: "Other",
      components: [peer],
    });
    const files = generateZodSchemas(ir);
    expect([...files.keys()].sort()).toEqual(["other.ts", "test.ts"]);
    expect(files.get("test.ts")).toContain(
      'import * as other from "./other.js";',
    );
    expect(files.get("other.ts")).toContain(
      'import * as test from "./test.js";',
    );
    const withIndex = generateZodSchemas(ir, { apiGatewayVersion: "1.2.3" });
    expect(withIndex.get("index.ts")).toContain(
      'export const API_GATEWAY_VERSION = "1.2.3";',
    );
    expect(withIndex.get("index.ts")).toContain(
      'export * as other from "./other.js";',
    );
    expect(withIndex.get("index.ts")).toContain(
      'export * as test from "./test.js";',
    );
    const schemas = await loadModules(files);
    const value = { peers: [{ parents: [{ peers: [] }] }] };
    expect(schemas.TestNodeSchema.parse(value)).toEqual(value);
    expect(
      schemas.TestNodeSchema.safeParse({ peers: [{ parents: [{}] }] }).success,
    ).toBe(false);
  });

  it("emits discriminated unions with optional enum references and strict variants", async () => {
    const schemas = await loadModules(
      generateZodSchemas(
        fixture([
          component("Status", {
            type: "enum",
            enum: { values: ["ready", "done"] },
          }),
          component("Update", {
            type: "object",
            object: {
              properties: {
                status: {
                  type: {
                    type: "optional",
                    optional: { subType: reference("Status") },
                  },
                  safety: "SAFE",
                  documentation: { example: [] },
                },
              },
            },
          }),
          component("Event", {
            type: "union",
            union: {
              discriminator: "kind",
              subTypes: { update: { type: reference("Update") } },
            },
          }),
        ]),
      ),
    );
    expect(schemas.TestEventSchema.parse({ kind: "update" })).toEqual({
      kind: "update",
    });
    const event = { kind: "update", status: "ready" };
    expect(schemas.TestEventSchema.parse(event)).toEqual(event);
    for (const invalid of [
      { kind: "unknown" },
      { kind: "update", status: "unknown" },
      { kind: "update", extra: true },
    ]) {
      expect(schemas.TestEventSchema.safeParse(invalid).success).toBe(false);
    }
  });

  it("validates integer map keys without coercing or losing values", async () => {
    const schemas = await loadModules(
      generateZodSchemas(
        fixture([
          component("Key", integer),
          component("Counts", {
            type: "map",
            map: { keyType: reference("Key"), valueType: integer },
          }),
        ]),
      ),
    );
    const value = { "-2147483648": 1, "0": 2, "2147483647": 3 };
    expect(schemas.TestCountsSchema.parse(value)).toEqual(value);
    for (const key of ["01", "-0", "2147483648", "1.5", "text"]) {
      expect(schemas.TestCountsSchema.safeParse({ [key]: 1 }).success).toBe(
        false,
      );
    }
  });

  it("rejects missing or mismatched namespaces and duplicate components", () => {
    const ir = fixture([component("Value", integer)]);
    ir.namespaces[0].name = "";
    expect(() => generateZodSchemas(ir)).toThrow("Namespace name is required");
    ir.namespaces[0].name = "Other";
    expect(() => generateZodSchemas(ir)).toThrow(
      "does not belong to namespace Other",
    );
    ir.namespaces[0].name = "Test";
    ir.namespaces[0].components.push(component("Value", integer));
    expect(() => generateZodSchemas(ir)).toThrow(
      "Duplicate component: Test.Value",
    );
  });

  it("reports unsupported types and name collisions", () => {
    expect(() =>
      generateZodSchemas(
        fixture([
          component("Binary", {
            type: "binary",
            binary: { mediaType: "application/octet-stream" },
          }),
        ]),
      ),
    ).toThrow("Unsupported type: binary");
    const ir = fixture([component("Root", integer)]);
    ir.namespaces.push({
      ...ir.namespaces[0],
      name: "Tes",
      components: [
        {
          ...component("tRoot", integer),
          locator: { namespaceName: "Tes", localName: "tRoot" },
        },
      ],
    });
    expect(() => generateZodSchemas(ir)).toThrow("colliding");
  });
});
