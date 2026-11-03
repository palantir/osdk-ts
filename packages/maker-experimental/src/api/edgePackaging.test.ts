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
  ObjectTypeDatasource,
  ObjectTypeDatasourceDefinition,
  PropertySecurityGroups,
  PropertyTypeMappingInfo,
} from "@osdk/client.unstable";
import { defineObject } from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { convertDatasourceForEdge } from "../conversion/toMarketplace/convertDatasourceDefinition.js";
import {
  defineOntologyV2,
  type OntologyPackagingOptions,
} from "./defineOntologyV2.js";
import { defineImportObject } from "./importObjectType.js";

const DATASOURCE_RID = "ri.ontology.main.datasource.source";
const BACKING_RID = "ri.foundry.main.dataset.backing";
const PROPERTY_MAPPING: Record<string, PropertyTypeMappingInfo> = {
  id: { type: "column", column: "identifier" },
};
const groups: PropertySecurityGroups = {
  groups: [
    {
      rid: "ri.ontology.main.property-security-group.original",
      properties: ["id"],
      type: { type: "primaryKey", primaryKey: {} },
      security: {
        type: "mandatoryOnly",
        mandatoryOnly: {
          policy: { markings: ["applied"], assumedMarkings: ["assumed"] },
        },
      },
    },
  ],
};

function defineTestObject() {
  return defineObject({
    apiName: "Device",
    displayName: "Device",
    pluralDisplayName: "Devices",
    titlePropertyApiName: "id",
    primaryKeyPropertyApiName: "id",
    properties: { id: { type: "string" }, name: { type: "string" } },
  });
}

function buildOntology(
  options: OntologyPackagingOptions = {},
  body: () => void = defineTestObject,
) {
  return defineOntologyV2(
    "com.example.",
    body,
    undefined,
    undefined,
    undefined,
    "61fc46ba-c39c-48d8-9d4a-0c25b3817a99",
    undefined,
    undefined,
    options,
  );
}

describe("edge datasource conversion", () => {
  it.each([
    {
      type: "datasetV2",
      datasetV2: {
        datasetRid: BACKING_RID,
        branchId: "master",
        propertyMapping: PROPERTY_MAPPING,
      },
    },
    {
      type: "datasetV3",
      datasetV3: {
        datasetRid: BACKING_RID,
        branchId: "master",
        propertyMapping: PROPERTY_MAPPING,
        propertySecurityGroups: { groups: [] },
      },
    },
    {
      type: "streamV2",
      streamV2: {
        streamLocator: { streamLocatorRid: BACKING_RID, branchId: "master" },
        propertyMapping: { id: "identifier" },
        retentionPolicy: { type: "none", none: {} },
      },
    },
  ] satisfies ObjectTypeDatasourceDefinition[])(
    "maps $type to direct with the same datasource identity and column mappings",
    (definition) => {
      const source = { rid: DATASOURCE_RID, datasource: definition };
      const before = structuredClone(source);
      expect(convertDatasourceForEdge(source, "Device")).toEqual({
        rid: DATASOURCE_RID,
        datasource: {
          type: "direct",
          direct: {
            directSourceRid: BACKING_RID,
            propertyMapping: PROPERTY_MAPPING,
            propertySecurityGroups: {
              groups: [
                {
                  rid: "ri.ontology.main.property-security-group.source",
                  properties: ["id"],
                  type: { type: "primaryKey", primaryKey: {} },
                  security: {
                    type: "mandatoryOnly",
                    mandatoryOnly: {
                      policy: { markings: [], assumedMarkings: [] },
                    },
                  },
                },
              ],
            },
          },
        },
      });
      expect(source).toEqual(before);
    },
  );

  it("preserves PSGs, edit-only mappings, and outer security", () => {
    const mapping: Record<string, PropertyTypeMappingInfo> = {
      ...PROPERTY_MAPPING,
      note: { type: "editOnly", editOnly: {} },
    };
    const source: ObjectTypeDatasource = {
      rid: DATASOURCE_RID,
      dataSecurity: { markingConstraint: { markingIds: ["marking"] } },
      datasource: {
        type: "datasetV3",
        datasetV3: {
          datasetRid: BACKING_RID,
          branchId: "master",
          propertyMapping: mapping,
          propertySecurityGroups: groups,
        },
      },
    };
    expect(convertDatasourceForEdge(source, "Device")).toMatchObject({
      rid: source.rid,
      dataSecurity: source.dataSecurity,
      datasource: {
        type: "direct",
        direct: { propertyMapping: mapping, propertySecurityGroups: groups },
      },
    });
  });

  it("preserves a native direct datasource", () => {
    const source: ObjectTypeDatasource = {
      rid: DATASOURCE_RID,
      datasource: {
        type: "direct",
        direct: {
          directSourceRid: BACKING_RID,
          propertyMapping: PROPERTY_MAPPING,
          propertySecurityGroups: groups,
        },
      },
    };
    expect(convertDatasourceForEdge(source, "Device")).toEqual(source);
  });
});

describe("edge ontology packaging", () => {
  it("only adds the alternate datasource field, preserving cloud output, shapes and IDs", async () => {
    const cloud = await buildOntology();
    expect(await buildOntology({ targetEnvironment: "CLOUD" })).toEqual(cloud);
    const edge = await buildOntology({ targetEnvironment: "EDGE" });
    const object = Object.values(edge.ontologyIr.ontology.objectTypes)[0];
    const { mappedEdgeOnlyDatasources, ...original } = object;
    expect(original).toEqual(
      Object.values(cloud.ontologyIr.ontology.objectTypes)[0],
    );
    expect(mappedEdgeOnlyDatasources).toHaveLength(1);
    expect(mappedEdgeOnlyDatasources?.[0]).toMatchObject({
      rid: object.datasources[0].rid,
      datasource: { type: "direct" },
    });
    expect(edge.shapes).toEqual(cloud.shapes);
    expect(edge.blockDataAddOn).toEqual(cloud.blockDataAddOn);
    expect(edge.ontologyIr.ontology.knownIdentifiers).toEqual(
      cloud.ontologyIr.ontology.knownIdentifiers,
    );
    expect(await buildOntology({ targetEnvironment: "EDGE" })).toEqual(edge);
    expect(await buildOntology()).toEqual(cloud);
  });

  it("does not edge-package imported objects", async () => {
    const result = await buildOntology({ targetEnvironment: "EDGE" }, () => {
      defineTestObject();
      defineImportObject({
        apiName: "upstream.Imported",
        properties: { id: { type: "string" } },
      });
    });
    const imported = Object.values(
      result.ontologyIr.importedOntology.objectTypes,
    );
    expect(imported).toHaveLength(1);
    expect(imported[0]).not.toHaveProperty("mappedEdgeOnlyDatasources");
  });

  it("keeps external property datasources without duplicating them in the edge array", async () => {
    const result = await buildOntology({ targetEnvironment: "EDGE" }, () => {
      defineObject({
        apiName: "Device",
        displayName: "Device",
        pluralDisplayName: "Devices",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        properties: {
          id: { type: "string" },
          positions: { type: "geotimeSeries" },
        },
      });
    });
    const object = Object.values(result.ontologyIr.ontology.objectTypes)[0];
    expect(object.datasources.map((source) => source.datasource.type)).toEqual([
      "geotimeSeries",
      "datasetV2",
    ]);
    expect(
      object.mappedEdgeOnlyDatasources?.map((source) => source.datasource.type),
    ).toEqual(["direct"]);
  });

  it("rejects restricted views when targeting edge", async () => {
    await expect(
      buildOntology({ targetEnvironment: "EDGE" }, () => {
        defineObject({
          apiName: "Restricted",
          displayName: "Restricted",
          pluralDisplayName: "Restricted",
          primaryKeyPropertyApiName: "id",
          titlePropertyApiName: "id",
          properties: { id: { type: "string" } },
          datasources: [{ type: "restrictedView" }],
        });
      }),
    ).rejects.toThrow(/com.example.Restricted.*restrictedViewV2.*PSG v2/u);
  });
});
