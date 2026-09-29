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

import { defineLink } from "../defineLink.js";
import { defineObject } from "../defineObject.js";
import {
  dumpOntologyFullMetadata,
  initializeOntologyState,
} from "../defineOntology.js";
import type { ObjectTypeDatasourceDefinition_dataset } from "../object/ObjectTypeDatasourceDefinition.js";
import type { ObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";

function defineEvent(overrides: Partial<ObjectTypeDefinition> = {}) {
  return defineObject({
    apiName: "Event",
    displayName: "Event",
    pluralDisplayName: "Events",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: {
      id: { type: "string" },
      description: { type: "string" },
      metadata: {
        type: { type: "struct", structDefinition: { source: "string" } },
      },
      notes: { type: "string", editOnly: true },
    },
    ...overrides,
  });
}

describe("dataset datasource definitions", () => {
  beforeEach(() => initializeOntologyState("test."));

  it.each([false, true])("maps columns with security groups: %s", (secured) => {
    const dataset = { name: "Events" };
    const object = defineEvent({
      datasources: [
        {
          type: "dataset",
          dataset,
          propertyMapping: { id: "event_id", metadata: "event_metadata" },
          ...(secured ? { objectSecurityPolicy: { name: "Events" } } : {}),
        },
      ],
    });

    expect(
      (object.datasources?.[0] as ObjectTypeDatasourceDefinition_dataset)
        .dataset,
    ).toBe(dataset);
    const datasource =
      dumpOntologyFullMetadata().ontology.objectTypes["test.Event"]
        .datasources[0].datasource;
    expect(datasource.type).toBe(secured ? "datasetV3" : "datasetV2");
    const mapping =
      datasource.type === "datasetV3"
        ? datasource.datasetV3.propertyMapping
        : datasource.type === "datasetV2"
          ? datasource.datasetV2.propertyMapping
          : undefined;
    expect(mapping).toEqual({
      id: { type: "column", column: "event_id" },
      description: { type: "column", column: "description" },
      metadata: {
        type: "struct",
        struct: {
          column: "event_metadata",
          mapping: { source: { apiName: "source", mappings: {} } },
        },
      },
      notes: { type: "editOnly", editOnly: {} },
    });
  });

  it("rejects an explicit dataset together with automatic backing data", () => {
    expect(() =>
      defineEvent({
        includeEmptyBackingDatasource: true,
        datasources: [{ type: "dataset", dataset: { name: "Events" } }],
      }),
    ).toThrow(/Event.*includeEmptyBackingDatasource/u);
  });

  it("requires a dataset reference for column overrides", () => {
    expect(() =>
      defineEvent({
        datasources: [{ type: "dataset", propertyMapping: { id: "event_id" } }],
      }),
    ).toThrow(/propertyMapping.*dataset/u);
  });

  it("rejects an explicit dataset alongside a direct datasource", () => {
    expect(() =>
      defineEvent({
        datasources: [
          { type: "dataset", dataset: { name: "Events" } },
          { type: "direct" },
        ],
      }),
    ).toThrow(/more than one base datasource/u);
  });

  it("rejects mapping a derived property to a dataset column", () => {
    const parent = defineLink({
      apiName: "event-to-parent",
      manyForeignKeyProperty: "id",
      one: { object: "test.Event", metadata: { apiName: "parent" } },
      toMany: { object: "test.Event", metadata: { apiName: "children" } },
    });
    expect(() =>
      defineEvent({
        datasources: [
          {
            type: "dataset",
            dataset: { name: "Events" },
            propertyMapping: { description: "description" },
          },
          {
            type: "derived",
            linkDefinition: [{ linkType: parent }],
            propertyMapping: { description: "description" },
          },
        ],
      }),
    ).toThrow(/Event.*description.*derived/u);
  });

  it.each(["missing", "notes"])(
    "rejects mapping property %s without a backing column",
    (property) => {
      expect(() =>
        defineEvent({
          datasources: [
            {
              type: "dataset",
              dataset: { name: "Events" },
              propertyMapping: { [property]: "event_id" },
            },
          ],
        }),
      ).toThrow(new RegExp(`Event.*${property}`, "u"));
    },
  );

  it.each([null, [], new Map()])(
    "rejects invalid mapping records: %j",
    (propertyMapping) => {
      expect(() =>
        defineEvent({
          datasources: [
            {
              type: "dataset",
              dataset: { name: "Events" },
              propertyMapping: propertyMapping as unknown as Record<
                string,
                string
              >,
            },
          ],
        }),
      ).toThrow(/propertyMapping.*record/u);
    },
  );

  it.each(["", 123, null])(
    "rejects invalid mapped column names: %j",
    (columnName) => {
      expect(() =>
        defineEvent({
          datasources: [
            {
              type: "dataset",
              dataset: { name: "Events" },
              propertyMapping: { id: columnName as string },
            },
          ],
        }),
      ).toThrow(/Event.*id.*column/u);
    },
  );

  it.each([null, {}, { name: "" }, { name: 123 }])(
    "rejects invalid dataset references: %j",
    (dataset) => {
      expect(() =>
        defineEvent({
          datasources: [
            {
              type: "dataset",
              dataset: dataset as { name: string },
            },
          ],
        }),
      ).toThrow(/Event.*dataset.*name/u);
    },
  );
});
