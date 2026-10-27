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

import { column, defineObject } from "@osdk/maker";
import { createDatasetReference } from "@osdk/resource";
import invariant from "tiny-invariant";
import { expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";

it("preserves selected dataset columns and struct-field renames", async () => {
  const dataset = createDatasetReference(
    {
      type: "rid",
      rid: "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abc",
    },
    {
      schema: {
        columns: {
          RAW_ID: { type: "string" },
          PROFILE: {
            type: "struct",
            fields: { FULL_NAME: { type: "string" } },
          },
        },
      },
    },
  );
  const result = await defineOntologyV2("com.acme.", () => {
    defineObject({
      apiName: "Employee",
      displayName: "Employee",
      pluralDisplayName: "Employees",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      datasources: [{ type: "dataset", dataset }],
      properties: {
        id: { type: "string", source: column(dataset, "RAW_ID") },
        profile: {
          type: { type: "struct", structDefinition: { fullName: "string" } },
          source: {
            type: "struct",
            column: column(dataset, "PROFILE"),
            fields: { fullName: "FULL_NAME" },
          },
        },
        note: { type: "string", source: "editOnly" },
        otherNote: { type: "string", source: { type: "editOnly" } },
      },
    });
  });
  const object = Object.values(result.ontologyIr.ontology.objectTypes)[0];
  const datasource = object.datasources[0].datasource;
  invariant(datasource.type === "datasetV2");
  const properties = Object.fromEntries(
    Object.values(object.objectType.propertyTypes).map((property) => [
      property.apiName,
      property.rid,
    ]),
  );
  expect(datasource.datasetV2.propertyMapping).toEqual({
    [properties.id]: { type: "column", column: "RAW_ID" },
    [properties.profile]: {
      type: "struct",
      struct: {
        column: "PROFILE",
        mapping: { FULL_NAME: { apiName: "fullName", mappings: {} } },
      },
    },
    [properties.note]: { type: "editOnly", editOnly: {} },
    [properties.otherNote]: { type: "editOnly", editOnly: {} },
  });
  expect([...result.inputPresets.keys()]).toEqual([
    ReadableIdGenerator.getForDataset("com.acme.Employee"),
    ReadableIdGenerator.getForDatasetColumn("com.acme.Employee", "RAW_ID"),
    ReadableIdGenerator.getForDatasetColumn("com.acme.Employee", "PROFILE"),
  ]);
});

it("uses same-name mappings for direct sources without emitting presets", async () => {
  const result = await defineOntologyV2("com.acme.", () => {
    defineObject({
      apiName: "Employee",
      displayName: "Employee",
      pluralDisplayName: "Employees",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      datasources: [{ type: "direct" }],
      properties: {
        id: { type: "string", source: { type: "direct" } },
        profile: {
          type: { type: "struct", structDefinition: { fullName: "string" } },
          source: { type: "direct" },
        },
        note: { type: "string", source: "editOnly" },
        otherNote: { type: "string", source: { type: "editOnly" } },
      },
    });
  });
  const object = Object.values(result.ontologyIr.ontology.objectTypes)[0];
  const datasource = object.datasources[0].datasource;
  invariant(datasource.type === "direct");
  const properties = Object.fromEntries(
    Object.values(object.objectType.propertyTypes).map((property) => [
      property.apiName,
      property.rid,
    ]),
  );
  expect(datasource.direct.propertyMapping).toEqual({
    [properties.id]: { type: "column", column: "id" },
    [properties.profile]: {
      type: "struct",
      struct: {
        column: "profile",
        mapping: { fullName: { apiName: "fullName", mappings: {} } },
      },
    },
    [properties.note]: { type: "editOnly", editOnly: {} },
    [properties.otherNote]: { type: "editOnly", editOnly: {} },
  });
  expect(result.inputPresets.size).toBe(0);
});
