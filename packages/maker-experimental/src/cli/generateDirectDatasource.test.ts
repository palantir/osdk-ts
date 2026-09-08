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

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import type { ObjectTypeBlockDataV2 } from "@osdk/client.unstable";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { ReadableIdGenerator } from "../util/generateRid.js";
import { generateDirectDatasourceBlockResult } from "./generateDirectDatasource.js";
import { toBlockShapeId } from "./marketplaceSerialization/CodeBlockSpec.js";

const ID_PROPERTY_RID = "ri.ontology-metadata.temp.property-type.Direct.id";
const COUNT_PROPERTY_RID =
  "ri.ontology-metadata.temp.property-type.Direct.count";

function createDirectObjectType(): ObjectTypeBlockDataV2 {
  return {
    objectType: {
      apiName: "Direct",
      displayMetadata: {
        displayName: "Direct",
        pluralDisplayName: "Directs",
        visibility: "NORMAL",
        icon: {
          type: "blueprint",
          blueprint: { locator: "cube", color: "#2D72D2" },
        },
      },
      primaryKeys: [ID_PROPERTY_RID],
      propertyTypes: {
        [ID_PROPERTY_RID]: {
          apiName: "id",
          displayMetadata: { displayName: "Identifier", visibility: "NORMAL" },
          id: "id",
          indexedForSearch: true,
          rid: ID_PROPERTY_RID,
          status: { type: "active", active: {} },
          type: {
            type: "string",
            string: { isLongText: false, supportsExactMatching: true },
          },
          typeClasses: [],
        },
        [COUNT_PROPERTY_RID]: {
          apiName: "count",
          displayMetadata: { displayName: "Count", visibility: "NORMAL" },
          id: "count",
          indexedForSearch: false,
          rid: COUNT_PROPERTY_RID,
          status: { type: "active", active: {} },
          type: { type: "integer", integer: {} },
          typeClasses: [],
        },
      },
      titlePropertyTypeRid: ID_PROPERTY_RID,
      rid: "ri.ontology-metadata.temp.object-type.Direct",
      id: "direct",
      status: { type: "active", active: {} },
      redacted: false,
      implementsInterfaces: [],
      implementsInterfaces2: [],
      allImplementsInterfaces: {},
      traits: { workflowObjectTypeTraits: {} },
      typeGroups: [],
    },
    datasources: [
      {
        rid: "ri.ontology.main.datasource.Direct",
        datasource: {
          type: "direct",
          direct: {
            directSourceRid: "ri.ontology-metadata.temp.dataset.Direct",
            propertyMapping: {
              [ID_PROPERTY_RID]: { type: "column", column: "object_id" },
              [COUNT_PROPERTY_RID]: { type: "column", column: "count" },
            },
            propertySecurityGroups: { groups: [] },
          },
        },
      },
    ],
    entityMetadata: undefined,
    writebackDatasets: [],
  } as ObjectTypeBlockDataV2;
}

describe("generateDirectDatasourceBlockResult", () => {
  let buildDir: string;

  beforeEach(async () => {
    buildDir = await fs.promises.mkdtemp(
      path.join(os.tmpdir(), "direct-datasource-test-"),
    );
  });

  afterEach(async () => {
    await fs.promises.rm(buildDir, { recursive: true, force: true });
  });

  it("writes the direct datasource block and produced output shapes", async () => {
    const result = await generateDirectDatasourceBlockResult(
      createDirectObjectType(),
      buildDir,
    );
    expect(result).toBeDefined();
    if (result === undefined) return;

    const consumedDatasource = ReadableIdGenerator.getForDataset("Direct");
    const producedDatasource =
      ReadableIdGenerator.getProducedReadableId(consumedDatasource);
    const producedIdColumn = ReadableIdGenerator.getProducedReadableId(
      ReadableIdGenerator.getForDatasetColumn("Direct", "object_id"),
    );
    const producedCountColumn = ReadableIdGenerator.getProducedReadableId(
      ReadableIdGenerator.getForDatasetColumn("Direct", "count"),
    );

    expect(result.block_type).toBe("DIRECT_DATASOURCE");
    expect(result.block_identifier).toBe(
      "direct-datasource-ri.ontology-metadata.temp.object-type.Direct",
    );
    expect(result.outputs[producedDatasource]).toMatchObject({
      type: "tabularDatasource",
      tabularDatasource: {
        about: { fallbackTitle: producedDatasource },
        type: "DATASET",
        schema: [
          toBlockShapeId(producedIdColumn),
          toBlockShapeId(producedCountColumn),
        ],
      },
    });
    expect(result.outputs[producedIdColumn]).toMatchObject({
      type: "datasourceColumn",
      datasourceColumn: {
        about: { fallbackTitle: "Identifier" },
        datasource: toBlockShapeId(producedDatasource),
      },
    });

    expect(
      JSON.parse(
        await fs.promises.readFile(
          path.join(result.block_data_directory, "block-data.json"),
          "utf8",
        ),
      ),
    ).toEqual({
      [producedIdColumn]: "object_id",
      [producedCountColumn]: "count",
    });
    expect(
      JSON.parse(
        await fs.promises.readFile(
          path.join(result.block_data_directory, "VERSION"),
          "utf8",
        ),
      ),
    ).toBe("1.0");

    expect(result.add_on_override).toMatchObject({
      idToBlockShapeId: {
        [producedDatasource]: toBlockShapeId(producedDatasource),
        [producedIdColumn]: toBlockShapeId(producedIdColumn),
        [producedCountColumn]: toBlockShapeId(producedCountColumn),
        "direct-source-internal-shape-id": toBlockShapeId(producedDatasource),
      },
      idToInputGroupId: {},
      outputToLocationInput: {},
    });
  });
});
