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
});
