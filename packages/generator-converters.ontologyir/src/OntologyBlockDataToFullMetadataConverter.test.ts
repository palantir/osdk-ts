/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeBlockDataV2 } from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";

import { OntologyBlockDataToFullMetadataConverter } from "./OntologyBlockDataToFullMetadataConverter.js";

describe("OntologyBlockDataToFullMetadataConverter", () => {
  // Block-data property references are property rids; the converter resolves
  // them to api names, falling back to the raw rid when unmapped.
  const propRidToApiName: Record<string, string> = {
    "ri.p.pk": "primaryKey",
    "ri.p.name": "name",
  };

  it("maps every datasource variant to its wire equivalent, resolving rids", () => {
    const datasources: ObjectTypeBlockDataV2["datasources"] = [
      {
        rid: "ri.ds.datasetV2",
        datasource: {
          type: "datasetV2",
          datasetV2: {
            branchId: "master",
            datasetRid: "ri.dataset.1",
            propertyMapping: {
              "ri.p.pk": { type: "column", column: "pk_col" },
              "ri.p.name": { type: "column", column: "name_col" },
            },
          },
        },
      },
      {
        rid: "ri.ds.datasetLegacy",
        datasource: {
          type: "dataset",
          dataset: {
            branchId: "master",
            datasetRid: "ri.dataset.2",
            propertyMapping: {
              "ri.p.pk": "pk_col",
              "ri.p.name": "name_col",
            },
          },
        },
      },
      {
        rid: "ri.ds.streamV2",
        datasource: {
          type: "streamV2",
          streamV2: {
            propertyMapping: { "ri.p.pk": "pk_col" },
            retentionPolicy: { type: "none", none: {} },
            streamLocator: {
              branchId: "master",
              streamLocatorRid: "ri.stream.1",
            },
          },
        },
      },
      {
        rid: "ri.ds.timeSeries",
        datasource: {
          type: "timeSeries",
          timeSeries: {
            assumedMarkings: [],
            // "ri.p.unmapped" has no api name and must fall back to the rid.
            properties: ["ri.p.name", "ri.p.unmapped"],
            timeSeriesSyncRid: "ri.tss.1",
          },
        },
      },
      {
        rid: "ri.ds.media",
        datasource: {
          type: "media",
          media: {
            mediaSourceRids: [],
            properties: ["ri.p.pk"],
          },
        },
      },
      {
        rid: "ri.ds.editsOnly",
        datasource: {
          type: "editsOnly",
          editsOnly: {
            properties: ["ri.p.pk"],
            propertySecurityGroups: { groups: [] },
          },
        },
      },
    ];

    const result = OntologyBlockDataToFullMetadataConverter
      .getOsdkObjectTypeDatasourcesFromBlockData(
        datasources,
        propRidToApiName,
      );

    expect(result).toEqual([
      {
        // The wrapper rid is used directly (no synthesis, unlike the IR path).
        rid: "ri.ds.datasetV2",
        definition: {
          type: "dataset",
          datasetRid: "ri.dataset.1",
          branch: "master",
          propertyMapping: {
            primaryKey: { type: "column", column: "pk_col" },
            name: { type: "column", column: "name_col" },
          },
        },
      },
      {
        // Legacy `dataset` carries a plain column-name map -> wrapped as column.
        rid: "ri.ds.datasetLegacy",
        definition: {
          type: "dataset",
          datasetRid: "ri.dataset.2",
          branch: "master",
          propertyMapping: {
            primaryKey: { type: "column", column: "pk_col" },
            name: { type: "column", column: "name_col" },
          },
        },
      },
      {
        // The structured stream locator is flattened to its rid; its branch is
        // carried through to the wire `branch` field.
        rid: "ri.ds.streamV2",
        definition: {
          type: "stream",
          streamRid: "ri.stream.1",
          branch: "master",
          propertyMapping: {
            primaryKey: { type: "column", column: "pk_col" },
          },
        },
      },
      {
        rid: "ri.ds.timeSeries",
        definition: {
          type: "timeSeries",
          timeSeriesSyncRid: "ri.tss.1",
          properties: ["name", "ri.p.unmapped"],
        },
      },
      {
        // No wire `media` variant exists, so it degrades to `unsupported`.
        rid: "ri.ds.media",
        definition: {
          type: "unsupported",
          unsupportedType: "media",
          properties: ["primaryKey"],
        },
      },
      {
        rid: "ri.ds.editsOnly",
        definition: { type: "editsOnly" },
      },
    ]);
  });

  it("drops redacted datasources", () => {
    const datasources: ObjectTypeBlockDataV2["datasources"] = [
      {
        rid: "ri.ds.kept",
        datasource: {
          type: "datasetV2",
          datasetV2: {
            branchId: "master",
            datasetRid: "ri.dataset.kept",
            propertyMapping: {
              "ri.p.pk": { type: "column", column: "pk_col" },
            },
          },
        },
      },
      {
        rid: "ri.ds.redacted",
        redacted: true,
        datasource: {
          type: "datasetV2",
          datasetV2: {
            branchId: "master",
            datasetRid: "ri.dataset.secret",
            propertyMapping: {
              "ri.p.pk": { type: "column", column: "pk_col" },
            },
          },
        },
      },
    ];

    const result = OntologyBlockDataToFullMetadataConverter
      .getOsdkObjectTypeDatasourcesFromBlockData(datasources, propRidToApiName);

    // Only the non-redacted datasource survives; the redacted rid never leaks.
    expect(result.map((ds) => ds.rid)).toEqual(["ri.ds.kept"]);
  });

  it("preserves backed property names for derived datasources", () => {
    const datasources: ObjectTypeBlockDataV2["datasources"] = [
      {
        rid: "ri.ds.derived",
        datasource: {
          type: "derived",
          derived: {
            definition: {
              // `deleted` is the simplest valid derived definition; the
              // linked/aggregated variants read names off `propertyTypeMapping`
              // keys instead (both routed through `derivedPropertyNames`).
              type: "deleted",
              deleted: { propertyTypes: ["ri.p.pk", "ri.p.unmapped"] },
            },
          },
        },
      },
    ];

    const result = OntologyBlockDataToFullMetadataConverter
      .getOsdkObjectTypeDatasourcesFromBlockData(datasources, propRidToApiName);

    expect(result).toEqual([
      {
        rid: "ri.ds.derived",
        definition: {
          type: "unsupported",
          unsupportedType: "derived",
          // Names are resolved to api names, unmapped rids fall back to the rid.
          properties: ["primaryKey", "ri.p.unmapped"],
        },
      },
    ]);
  });
});
