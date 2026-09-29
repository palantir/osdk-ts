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

import type { ObjectTypeDefinition } from "@osdk/maker";
import { defineLink, defineObject } from "@osdk/maker";
import { describe, expect, it } from "vitest";

import type { DatasetColumnDefinition } from "./defineDataset.js";
import { defineDataset } from "./defineDataset.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";

function defineEvent(overrides: Partial<ObjectTypeDefinition> = {}) {
  return defineObject({
    apiName: "Event",
    displayName: "Event",
    pluralDisplayName: "Events",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: { id: { type: "string" } },
    ...overrides,
  });
}

describe("defined dataset datasources", () => {
  it("binds matching columns and skips edit-only properties", async () => {
    const result = await defineOntologyV2("test.", () => {
      const dataset = defineDataset({
        name: "Events",
        columns: { id: { type: "string" }, unused: { type: "integer" } },
      });
      defineEvent({
        datasources: [{ type: "dataset", dataset }],
        properties: {
          id: { type: "string" },
          notes: { type: "string", editOnly: true },
        },
      });
    });

    expect(result.shapes.inputMappings).toEqual([
      {
        input: "dataset-datasource-test.Event",
        output: expect.stringMatching(
          /^dataset-datasource-output-standalone\./u,
        ),
      },
      {
        input: "dataset-datasource-column-test.Event-id",
        output: expect.stringMatching(
          /^dataset-datasource-column-output-standalone\..*-id$/u,
        ),
      },
    ]);
    expect([...result.shapes.inputShapes.keys()]).not.toContain(
      "dataset-datasource-column-test.Event-notes",
    );
  });

  it("binds a column only once when multiple properties use it", async () => {
    const result = await defineOntologyV2("test.", () => {
      const dataset = defineDataset({
        name: "Events",
        columns: { event_id: { type: "string" } },
      });
      defineEvent({
        datasources: [
          {
            type: "dataset",
            dataset,
            propertyMapping: { id: "event_id", externalId: "event_id" },
          },
        ],
        properties: { id: { type: "string" }, externalId: { type: "string" } },
      });
    });

    expect(result.shapes.inputMappings.map(({ input }) => input)).toEqual([
      "dataset-datasource-test.Event",
      "dataset-datasource-column-test.Event-event_id",
    ]);
  });

  it("rejects a reference to an undefined dataset", async () => {
    await expect(
      defineOntologyV2("test.", () => {
        defineEvent({
          datasources: [{ type: "dataset", dataset: { name: "Missing" } }],
        });
      }),
    ).rejects.toThrow(/Missing.*test.Event.*not defined/u);
  });

  it.each([
    { column: "id", propertyMapping: undefined },
    { column: "event_id", propertyMapping: { id: "event_id" } },
  ])(
    "rejects a missing column: $column",
    async ({ column, propertyMapping }) => {
      await expect(
        defineOntologyV2("test.", () => {
          const dataset = defineDataset({ name: "Events", columns: {} });
          defineEvent({
            datasources: [{ type: "dataset", dataset, propertyMapping }],
          });
        }),
      ).rejects.toThrow(
        new RegExp(`test.Event.*id.*Events.*${column}.*not exist`, "u"),
      );
    },
  );

  const incompatibleTypes: Array<{
    name: string;
    column: DatasetColumnDefinition;
    property: NonNullable<ObjectTypeDefinition["properties"]>[string];
  }> = [
    {
      name: "scalar",
      column: { type: "string" },
      property: { type: "integer" },
    },
    {
      name: "numeric width",
      column: { type: "integer" },
      property: { type: "long" },
    },
    {
      name: "array",
      column: { type: "string", array: true },
      property: { type: "string" },
    },
    {
      name: "array element",
      column: { type: "string", array: true },
      property: { type: "integer", array: true },
    },
    {
      name: "decimal precision",
      column: { type: { type: "decimal", precision: 12, scale: 2 } },
      property: { type: { type: "decimal", precision: 10, scale: 2 } },
    },
    {
      name: "decimal scale",
      column: { type: { type: "decimal", precision: 12, scale: 2 } },
      property: { type: { type: "decimal", precision: 12, scale: 3 } },
    },
    {
      name: "struct field",
      column: {
        type: { type: "struct", structDefinition: { source: "string" } },
      },
      property: {
        type: { type: "struct", structDefinition: { source: "integer" } },
      },
    },
    {
      name: "struct field name",
      column: {
        type: { type: "struct", structDefinition: { source: "string" } },
      },
      property: {
        type: { type: "struct", structDefinition: { location: "string" } },
      },
    },
  ];

  it.each(incompatibleTypes)(
    "rejects incompatible $name types",
    async ({ column, property }) => {
      await expect(
        defineOntologyV2("test.", () => {
          const dataset = defineDataset({
            name: "Events",
            columns: { id: { type: "string" }, value: column },
          });
          defineEvent({
            datasources: [{ type: "dataset", dataset }],
            properties: { id: { type: "string" }, value: property },
          });
        }),
      ).rejects.toThrow(/test.Event.*value.*Events.*value.*incompatible type/u);
    },
  );

  it("compares physical types independently of struct order and property options", async () => {
    const result = await defineOntologyV2("test.", () => {
      const dataset = defineDataset({
        name: "Events",
        columns: {
          id: { type: "string" },
          location: { type: "string" },
          details: {
            type: {
              type: "struct",
              structDefinition: { amount: "decimal", source: "string" },
            },
            array: true,
          },
        },
      });
      defineEvent({
        datasources: [{ type: "dataset", dataset }],
        properties: {
          id: { type: "string" },
          location: { type: "geopoint" },
          details: {
            type: {
              type: "struct",
              structDefinition: {
                source: "string",
                amount: { type: "decimal", precision: 38, scale: 0 },
              },
            },
            array: true,
          },
        },
      });
    });
    expect(result.shapes.inputMappings).toHaveLength(4);
  });

  it("does not require columns for derived properties", async () => {
    const result = await defineOntologyV2("test.", () => {
      const dataset = defineDataset({
        name: "Events",
        columns: { id: { type: "string" } },
      });
      const parent = defineLink({
        apiName: "event-to-parent",
        manyForeignKeyProperty: "id",
        one: { object: "test.Event", metadata: { apiName: "parent" } },
        toMany: { object: "test.Event", metadata: { apiName: "children" } },
      });
      defineEvent({
        datasources: [
          { type: "dataset", dataset },
          {
            type: "derived",
            linkDefinition: [{ linkType: parent }],
            propertyMapping: { description: "description" },
          },
        ],
        properties: { id: { type: "string" }, description: { type: "string" } },
      });
    });
    expect(
      result.shapes.inputMappings
        .filter(({ input }) => input.startsWith("dataset-"))
        .map(({ input }) => input),
    ).toEqual([
      "dataset-datasource-test.Event",
      "dataset-datasource-column-test.Event-id",
    ]);
  });

  it("validates mappings changed after the object is defined", async () => {
    await expect(
      defineOntologyV2("test.", () => {
        const dataset = defineDataset({
          name: "Events",
          columns: { id: { type: "string" } },
        });
        const propertyMapping: Record<string, string> = {};
        defineEvent({
          datasources: [{ type: "dataset", dataset, propertyMapping }],
        });
        propertyMapping.missing = "id";
      }),
    ).rejects.toThrow(/test.Event.*undefined property "missing"/u);
  });
});
