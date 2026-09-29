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

import type {
  ObjectTypeDefinition,
  ObjectTypeDatasourceDefinition_dataset,
} from "@osdk/maker";
import { defineObject } from "@osdk/maker";
import { describe, expect, it } from "vitest";

import {
  type DatasetColumnDefinition,
  defineDataset,
  importDataset,
} from "../index.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";
import type { ImportedDatasetDefinition } from "./importDataset.js";

const UPSTREAM_KEY = "9ca68d24-d83f-4fd4-8b01-820f72c9d500";

function defineEvent(
  dataset: { name: string },
  overrides: Partial<ObjectTypeDefinition> = {},
) {
  return defineObject({
    apiName: "Event",
    displayName: "Event",
    pluralDisplayName: "Events",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: {
      id: { type: "string" },
      notes: { type: "string", editOnly: true },
    },
    datasources: [
      { type: "dataset", dataset, propertyMapping: { id: "event_id" } },
    ],
    ...overrides,
  });
}

describe("imported datasets", () => {
  it("recommends upstream dataset outputs without generating another dataset", async () => {
    const dataset = {
      name: "Events",
      packageName: "com.upstream",
      randomnessKey: UPSTREAM_KEY,
      columns: {
        event_id: { type: "string" as const },
        unused: { type: "integer" as const },
      },
    };
    const result = await defineOntologyV2("com.consumer.", () => {
      defineEvent(dataset);
    });

    expect(result.datasets).toEqual([]);
    expect(result.shapes.inputMappings).toEqual([]);
    expect(result.datasetExternalRecommendations).toEqual([
      {
        upstreamPackageName: "com.upstream",
        upstreamVersionCompatibility: { from: "0.0.0", until: "x.x.x" },
        upstreamRandomnessKey: UPSTREAM_KEY,
        mappings: [
          {
            targetInputReadableId: "dataset-datasource-com.consumer.Event",
            upstreamOutputReadableId: expect.stringMatching(
              /^dataset-datasource-output-standalone\./u,
            ),
          },
          {
            targetInputReadableId:
              "dataset-datasource-column-com.consumer.Event-event_id",
            upstreamOutputReadableId: expect.stringMatching(
              /^dataset-datasource-column-output-standalone\..*-event_id$/u,
            ),
          },
        ],
      },
    ]);
  });

  it("keeps imported datasets separate from local datasets with the same name", async () => {
    const result = await defineOntologyV2("com.consumer.", () => {
      defineDataset({
        name: "Events",
        columns: { event_id: { type: "integer" } },
      });
      defineEvent({
        name: "Events",
        packageName: "com.upstream",
        columns: { event_id: { type: "string" } },
      } as ImportedDatasetDefinition);
    });
    expect(result.datasets).toHaveLength(1);
    expect(result.shapes.inputMappings).toEqual([]);
    expect(result.datasetExternalRecommendations).toHaveLength(1);
  });

  it("groups shared inputs by their upstream package and randomness key", async () => {
    const result = await defineOntologyV2("com.consumer.", () => {
      const common = importDataset({
        packageName: "com.first",
        name: "Events",
        columns: { event_id: { type: "string" } },
      });
      defineEvent(common);
      defineEvent(common, { apiName: "Summary" });
      defineEvent(
        importDataset({
          packageName: "com.second",
          name: "Events",
          columns: { event_id: { type: "string" } },
        }),
        { apiName: "Other" },
      );
      defineEvent(
        importDataset({
          packageName: "com.first",
          name: "Salted",
          randomnessKey: UPSTREAM_KEY,
          columns: { event_id: { type: "string" } },
        }),
        { apiName: "Salted" },
      );
    });
    expect(result.datasetExternalRecommendations).toHaveLength(3);
    expect(
      result.datasetExternalRecommendations.map((recommendation) => [
        recommendation.upstreamPackageName,
        recommendation.upstreamRandomnessKey,
        recommendation.mappings.map((mapping) => mapping.targetInputReadableId),
      ]),
    ).toEqual([
      [
        "com.first",
        undefined,
        [
          "dataset-datasource-com.consumer.Event",
          "dataset-datasource-column-com.consumer.Event-event_id",
          "dataset-datasource-com.consumer.Summary",
          "dataset-datasource-column-com.consumer.Summary-event_id",
        ],
      ],
      [
        "com.second",
        undefined,
        [
          "dataset-datasource-com.consumer.Other",
          "dataset-datasource-column-com.consumer.Other-event_id",
        ],
      ],
      [
        "com.first",
        UPSTREAM_KEY,
        [
          "dataset-datasource-com.consumer.Salted",
          "dataset-datasource-column-com.consumer.Salted-event_id",
        ],
      ],
    ]);
  });

  it("supports reusing imported references between compilation runs", async () => {
    const dataset = importDataset({
      packageName: "com.upstream",
      name: "Events",
      columns: { event_id: { type: "string" } },
    });
    for (const namespace of ["com.first.", "com.second."]) {
      const result = await defineOntologyV2(namespace, () => {
        defineEvent(dataset);
      });
      expect(result.datasetExternalRecommendations).toHaveLength(1);
      expect(result.datasets).toEqual([]);
    }
    const unused = await defineOntologyV2("com.third.", () => {});
    expect(unused.datasetExternalRecommendations).toEqual([]);
  });

  it.each<{ columns: Record<string, DatasetColumnDefinition>; error: RegExp }>([
    { columns: {}, error: /event_id.*does not exist/u },
    {
      columns: { event_id: { type: "integer" as const } },
      error: /event_id.*incompatible type/u,
    },
  ])("validates imported columns: $columns", async ({ columns, error }) => {
    await expect(
      defineOntologyV2("com.consumer.", () => {
        const dataset = importDataset({
          packageName: "com.upstream",
          name: "Events",
          columns,
        });
        defineEvent(dataset);
      }),
    ).rejects.toThrow(error);
  });

  it.each([undefined, null, "", "com.upstream.", "Has Spaces", 123])(
    "rejects an invalid upstream package: %j",
    (packageName) => {
      expect(() =>
        importDataset({
          packageName,
          name: "Events",
          columns: {},
        } as unknown as ImportedDatasetDefinition),
      ).toThrow(/packageName/u);
    },
  );

  it.each([null, "", "invalid", 123])(
    "rejects an invalid upstream randomness key: %j",
    (randomnessKey) => {
      expect(() =>
        importDataset({
          packageName: "com.upstream",
          name: "Events",
          columns: {},
          randomnessKey,
        } as unknown as ImportedDatasetDefinition),
      ).toThrow(/randomnessKey/u);
    },
  );

  it("validates imported schemas with the same rules as local datasets", () => {
    expect(() =>
      importDataset({
        packageName: "com.upstream",
        name: "Events",
        columns: { ID: { type: "string" }, id: { type: "string" } },
      }),
    ).toThrow(/unique ignoring case/u);
  });

  describe("source consistency", () => {
    const conflicts: Array<{
      name: string;
      first: DatasetColumnDefinition;
      second: DatasetColumnDefinition;
    }> = [
      {
        name: "scalar",
        first: { type: "string" },
        second: { type: "integer" },
      },
      {
        name: "array element",
        first: { type: "string", array: true },
        second: { type: "integer", array: true },
      },
      {
        name: "decimal precision",
        first: { type: "decimal" },
        second: { type: { type: "decimal", precision: 12, scale: 0 } },
      },
      {
        name: "struct field",
        first: {
          type: { type: "struct", structDefinition: { source: "string" } },
        },
        second: {
          type: { type: "struct", structDefinition: { source: "integer" } },
        },
      },
    ];

    it.each(conflicts)(
      "rejects conflicting $name declarations for one source column",
      async ({ first, second }) => {
        await expect(
          defineOntologyV2("com.consumer.", () => {
            for (const [index, value] of [first, second].entries()) {
              const dataset = importDataset({
                name: "Events",
                packageName: "com.upstream",
                columns: { event_id: { type: "string" }, value },
              });
              defineEvent(dataset, { apiName: `Event${index}` });
            }
          }),
        ).rejects.toThrow(/Events.*com.upstream.*conflicting.*value/u);
      },
    );

    it("rejects conflicting column casing across partial source schemas", async () => {
      await expect(
        defineOntologyV2("com.consumer.", () => {
          for (const [index, name] of ["value", "Value"].entries()) {
            defineEvent(
              importDataset({
                name: "Events",
                packageName: "com.upstream",
                columns: {
                  event_id: { type: "string" },
                  [name]: { type: "string" },
                },
              }),
              { apiName: `Event${index}` },
            );
          }
        }),
      ).rejects.toThrow(/Events.*com.upstream.*conflicting.*Value/u);
    });

    it("allows partial schemas that agree on physical column types", async () => {
      const result = await defineOntologyV2("com.consumer.", () => {
        defineEvent(
          importDataset({
            name: "Events",
            packageName: "com.upstream",
            columns: {
              event_id: { type: "string" },
              value: {
                type: {
                  type: "struct",
                  structDefinition: { amount: "decimal", source: "string" },
                },
                array: true,
              },
            },
          }),
        );
        defineEvent(
          importDataset({
            name: "Events",
            packageName: "com.upstream",
            columns: {
              event_id: { type: "string" },
              value: {
                type: {
                  type: "struct",
                  structDefinition: {
                    source: { type: "string", enableAsciiFolding: true },
                    amount: { type: "decimal", precision: 38, scale: 0 },
                  },
                },
                array: true,
              },
              extra: { type: "boolean" },
            },
          }),
          { apiName: "Summary" },
        );
      });
      expect(result.datasetExternalRecommendations).toHaveLength(1);
      expect(result.datasetExternalRecommendations[0].mappings).toHaveLength(4);
    });

    it.each([
      { packageName: "com.other", randomnessKey: undefined },
      { packageName: "com.upstream", randomnessKey: UPSTREAM_KEY },
    ])("keeps different source identities independent: %j", async (source) => {
      const result = await defineOntologyV2("com.consumer.", () => {
        defineEvent(
          importDataset({
            name: "Events",
            packageName: "com.upstream",
            columns: {
              event_id: { type: "string" },
              value: { type: "string" },
            },
          }),
        );
        defineEvent(
          importDataset({
            name: "Events",
            ...source,
            columns: {
              event_id: { type: "string" },
              value: { type: "integer" },
            },
          }),
          { apiName: "Summary" },
        );
      });
      expect(result.datasetExternalRecommendations).toHaveLength(2);
    });
  });

  it.each([
    { namespace: "com.consumer.", randomnessKey: undefined },
    { namespace: "com.consumer", randomnessKey: undefined },
    { namespace: "com.consumer.", randomnessKey: UPSTREAM_KEY },
  ])(
    "rejects importing from the current product: %j",
    async ({ namespace, randomnessKey }) => {
      await expect(
        defineOntologyV2(
          namespace,
          () => {
            defineEvent(
              importDataset({
                name: "Events",
                packageName: "com.consumer",
                randomnessKey,
                columns: { event_id: { type: "string" } },
              }),
            );
          },
          undefined,
          undefined,
          undefined,
          randomnessKey,
        ),
      ).rejects.toThrow(/Events.*own product.*com.consumer/u);
    },
  );

  it("allows the same namespace with a different upstream randomness key", async () => {
    const result = await defineOntologyV2("com.consumer.", () => {
      defineEvent(
        importDataset({
          name: "Events",
          packageName: "com.consumer",
          randomnessKey: UPSTREAM_KEY,
          columns: { event_id: { type: "string" } },
        }),
      );
    });
    expect(result.datasetExternalRecommendations[0].upstreamRandomnessKey).toBe(
      UPSTREAM_KEY,
    );
  });

  it("rejects adding an imported dataset after enabling automatic backing data", async () => {
    await expect(
      defineOntologyV2("com.consumer.", () => {
        const datasource: ObjectTypeDatasourceDefinition_dataset = {
          type: "dataset",
        };
        defineObject({
          apiName: "Event",
          displayName: "Event",
          pluralDisplayName: "Events",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
          datasources: [datasource],
          includeEmptyBackingDatasource: true,
        });
        datasource.dataset = importDataset({
          name: "Events",
          packageName: "com.upstream",
          columns: { id: { type: "string" } },
        });
      }),
    ).rejects.toThrow(/Event.*includeEmptyBackingDatasource/u);
  });

  it("rejects adding a competing base datasource after definition", async () => {
    await expect(
      defineOntologyV2("com.consumer.", () => {
        const event = defineEvent(
          importDataset({
            name: "Events",
            packageName: "com.upstream",
            columns: { event_id: { type: "string" } },
          }),
        );
        event.datasources!.push({ type: "direct" });
      }),
    ).rejects.toThrow(/more than one base datasource/u);
  });
});
