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

import { beforeEach, describe, expect, it } from "vitest";

import { type DatasetDefinition, defineDataset } from "../index.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";

describe("defineDataset", () => {
  it("registers dataset columns without creating ontology entities", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      defineDataset({
        name: "events",
        columns: {
          event_id: { type: "string" },
          count: { type: "integer" },
          tags: { type: "string", array: true },
        },
      });
    });

    expect(result.datasets).toMatchObject([
      {
        name: "events",
        columns: [
          { name: "event_id", type: { type: "string" } },
          { name: "count", type: { type: "integer" } },
          {
            name: "tags",
            type: { type: "array", array: { subtype: { type: "string" } } },
          },
        ],
      },
    ]);
    expect(result.ontologyIr.ontology.objectTypes).toEqual({});
    expect(result.ontologyIr.ontology.linkTypes).toEqual({});
  });

  it("resets datasets between generation runs", async () => {
    const first = await defineOntologyV2("", () => {
      defineDataset({ name: "events", columns: { id: { type: "string" } } });
    });
    const second = await defineOntologyV2("", () => {});

    expect(first.datasets).toHaveLength(1);
    expect(second.datasets).toEqual([]);
  });

  describe("dataset modes", () => {
    beforeEach(async () => {
      await defineOntologyV2("", () => {});
    });

    it.each([
      ["omitted modes", {}],
      ["explicit input type", { inputType: "batch" }],
      ["explicit schema type", { schemaType: "tabular" }],
      ["explicit modes", { inputType: "batch", schemaType: "tabular" }],
    ] as const)("defaults and preserves %s", async (_name, modes) => {
      const result = await defineOntologyV2("", () => {
        const dataset = defineDataset({
          name: "events",
          ...modes,
          columns: { id: { type: "string" } },
        });
        expect(dataset).toMatchObject({
          inputType: "batch",
          schemaType: "tabular",
        });
      });
      expect(result.datasets).toMatchObject([
        { name: "events", inputType: "batch", schemaType: "tabular" },
      ]);
    });

    it("does not mutate the supplied definition when applying defaults", () => {
      const definition: DatasetDefinition = {
        name: "events",
        columns: { id: { type: "string" } },
      };
      defineDataset(definition);
      expect(definition).toEqual({
        name: "events",
        columns: { id: { type: "string" } },
      });
    });

    it.each([[null], ["stream"], ["unknown"], [true], [{}]])(
      "rejects unsupported inputType %j",
      (inputType) => {
        expect(() =>
          defineDataset({
            name: "events",
            inputType,
            columns: { id: { type: "string" } },
          } as unknown as DatasetDefinition),
        ).toThrow(/events.*inputType.*batch/u);
      },
    );

    it.each([[null], ["files"], ["unknown"], [true], [[]]])(
      "rejects invalid schemaType %j",
      (schemaType) => {
        expect(() =>
          defineDataset({
            name: "events",
            schemaType,
            columns: { id: { type: "string" } },
          } as unknown as DatasetDefinition),
        ).toThrow(/events.*schemaType/u);
      },
    );

    it("forbids columns with schemaType none", () => {
      expect(() =>
        defineDataset(
          // @ts-expect-error Schemaless definitions cannot contain columns.
          { name: "files", schemaType: "none", columns: {} },
        ),
      ).toThrow(/files.*columns.*none/u);
    });

    it("represents a schemaless definition without columns", () => {
      expect(defineDataset({ name: "files", schemaType: "none" })).toEqual({
        name: "files",
        inputType: "batch",
        schemaType: "none",
      });
    });

    it("rejects schemaless generation until it is supported", async () => {
      await expect(
        defineOntologyV2("", () => {
          defineDataset({ name: "files", schemaType: "none" });
        }),
      ).rejects.toThrow(/files.*schemaType.*none.*not supported/u);
    });
  });

  it("rejects duplicate dataset names", async () => {
    await defineOntologyV2("", () => {
      defineDataset({ name: "events", columns: { id: { type: "string" } } });
      expect(() =>
        defineDataset({ name: "events", columns: { count: { type: "long" } } }),
      ).toThrow(/already defined/u);
    });
  });

  it("rejects blank dataset and column names", async () => {
    await defineOntologyV2("", () => {
      expect(() =>
        defineDataset({ name: " ", columns: { id: { type: "string" } } }),
      ).toThrow(/name/u);
      expect(() =>
        defineDataset({ name: "events", columns: { " ": { type: "string" } } }),
      ).toThrow(/column/u);
    });
  });

  it("rejects unsupported struct fields before registering the dataset", async () => {
    const result = await defineOntologyV2("", () => {
      expect(() =>
        defineDataset({
          name: "events",
          columns: {
            metadata: {
              type: {
                type: "struct",
                // @ts-expect-error Attachments are not dataset column types.
                structDefinition: { file: "attachment" },
              },
            },
          },
        }),
      ).toThrow(/metadata.file.*attachment/u);
    });
    expect(result.datasets).toEqual([]);
  });

  describe("schema validation", () => {
    beforeEach(async () => {
      await defineOntologyV2("", () => {});
    });

    it.each([
      "bad name",
      "bad,name",
      "bad;name",
      "bad{name",
      "bad}name",
      "bad(name",
      "bad)name",
      "bad\tname",
      "bad\nname",
      "bad=name",
    ])("rejects invalid column name %j", (name) => {
      expect(() =>
        defineDataset({
          name: "events",
          columns: { [name]: { type: "string" } },
        }),
      ).toThrow(/events.*column name/u);
    });

    it.each(["", " ", "bad name", "bad=name"])(
      "rejects invalid struct field name %j",
      (name) => {
        expect(() =>
          defineDataset({
            name: "events",
            columns: {
              metadata: {
                type: {
                  type: "struct",
                  structDefinition: { [name]: "string" },
                },
              },
            },
          }),
        ).toThrow(/events.*metadata.*column name/u);
      },
    );

    it("rejects column names that differ only in case", () => {
      expect(() =>
        defineDataset({
          name: "events",
          columns: { id: { type: "string" }, ID: { type: "integer" } },
        }),
      ).toThrow(/events.*id.*ID/u);
    });

    it("rejects struct field names that differ only in case", () => {
      expect(() =>
        defineDataset({
          name: "events",
          columns: {
            metadata: {
              type: {
                type: "struct",
                structDefinition: { id: "string", ID: "integer" },
              },
            },
          },
        }),
      ).toThrow(/events.*metadata.*id.*ID/u);
    });

    it.each([
      ["null definition", null, /Dataset definition/u],
      ["array definition", [], /Dataset definition/u],
      ["missing name", { columns: {} }, /Dataset name/u],
      ["numeric name", { name: 1, columns: {} }, /Dataset name/u],
      ["missing columns", { name: "events" }, /events.*columns.*record/u],
      [
        "null columns",
        { name: "events", columns: null },
        /events.*columns.*record/u,
      ],
      [
        "array columns",
        { name: "events", columns: [] },
        /events.*columns.*record/u,
      ],
      [
        "columns given as a Map",
        { name: "events", columns: new Map() },
        /events.*columns.*record/u,
      ],
      [
        "null column",
        { name: "events", columns: { amount: null } },
        /events.*amount.*column definition/u,
      ],
      [
        "bare column",
        { name: "events", columns: { amount: "string" } },
        /events.*amount.*column definition/u,
      ],
      [
        "missing type",
        { name: "events", columns: { amount: {} } },
        /events.*amount.*type/u,
      ],
      [
        "null type",
        { name: "events", columns: { amount: { type: null } } },
        /events.*amount.*type/u,
      ],
      [
        "array type",
        { name: "events", columns: { amount: { type: [] } } },
        /events.*amount.*type/u,
      ],
      [
        "invalid type object",
        { name: "events", columns: { amount: { type: { type: "integer" } } } },
        /events.*amount.*type/u,
      ],
      [
        "missing struct definition",
        { name: "events", columns: { metadata: { type: { type: "struct" } } } },
        /events.*metadata.*structDefinition.*record/u,
      ],
      [
        "null struct definition",
        {
          name: "events",
          columns: {
            metadata: { type: { type: "struct", structDefinition: null } },
          },
        },
        /events.*metadata.*structDefinition.*record/u,
      ],
      [
        "array struct definition",
        {
          name: "events",
          columns: {
            metadata: { type: { type: "struct", structDefinition: [] } },
          },
        },
        /events.*metadata.*structDefinition.*record/u,
      ],
      [
        "null struct field",
        {
          name: "events",
          columns: {
            metadata: {
              type: { type: "struct", structDefinition: { amount: null } },
            },
          },
        },
        /events.*metadata.amount.*type/u,
      ],
    ] as const)(
      "rejects %s with a useful error",
      (_name, definition, error) => {
        expect(() =>
          defineDataset(definition as unknown as DatasetDefinition),
        ).toThrow(error);
      },
    );

    it.each([[null], ["true"], ["false"], [0], [1], [[]], [{}]])(
      "rejects array flags with invalid types %j",
      (array) => {
        expect(() =>
          defineDataset({
            name: "events",
            columns: { amount: { type: "string", array } },
          } as unknown as DatasetDefinition),
        ).toThrow(/events.*amount.array.*boolean/u);
      },
    );

    it.each([
      ["precision", 0, 0],
      ["precision", 39, 0],
      ["precision", 1.5, 0],
      ["precision", Number.NaN, 0],
      ["precision", Number.POSITIVE_INFINITY, 0],
      ["precision", "10", 0],
      ["precision", null, 0],
      ["scale", 10, -1],
      ["scale", 10, 11],
      ["scale", 10, 1.5],
      ["scale", 10, Number.NaN],
      ["scale", 10, Number.POSITIVE_INFINITY],
      ["scale", 10, "2"],
      ["scale", 10, null],
    ] as const)(
      "rejects invalid decimal %s (%j, %j)",
      (field, precision, scale) => {
        expect(() =>
          defineDataset({
            name: "events",
            columns: {
              amount: { type: { type: "decimal", precision, scale } },
            },
          } as unknown as DatasetDefinition),
        ).toThrow(new RegExp(`events.*amount.${field}`, "u"));
      },
    );

    it("validates decimals inside arrays and structs", () => {
      expect(() =>
        defineDataset({
          name: "events",
          columns: {
            amounts: {
              type: { type: "decimal", precision: 3, scale: 4 },
              array: true,
            },
          },
        }),
      ).toThrow(/events.*amounts.scale/u);
      expect(() =>
        defineDataset({
          name: "events",
          columns: {
            metadata: {
              type: {
                type: "struct",
                structDefinition: { amount: { type: "decimal", precision: 0 } },
              },
              array: true,
            },
          },
        }),
      ).toThrow(/events.*metadata.amount.precision/u);
    });

    it("allows empty schemas, empty structs, and legal column names", async () => {
      const result = await defineOntologyV2("", () => {
        defineDataset({ name: "Empty", columns: {} });
        defineDataset({
          name: "Legal",
          columns: {
            "1_id": { type: "string", array: false },
            "a.b": { type: "string" },
            "a-b": { type: "string" },
            metadata: { type: { type: "struct", structDefinition: {} } },
          },
        });
      });
      expect(result.datasets.map((dataset) => dataset.name)).toEqual([
        "Empty",
        "Legal",
      ]);
      expect(result.datasets[0].columns).toEqual([]);
      expect(result.datasets[1].columns[3].type).toMatchObject({
        type: "struct",
        struct: { structFields: [] },
      });
    });

    it("does not register invalid schemas or reserve their dataset names", async () => {
      const result = await defineOntologyV2("", () => {
        expect(() =>
          defineDataset({
            name: "events",
            columns: { amount: { type: { type: "decimal", precision: 0 } } },
          }),
        ).toThrow(/precision/u);
        defineDataset({ name: "events", columns: { id: { type: "string" } } });
      });
      expect(result.datasets).toHaveLength(1);
      expect(result.datasets[0].columns[0].name).toBe("id");
    });
  });
});
