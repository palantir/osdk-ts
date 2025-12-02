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

import type {
  ObjectTypeDatasourceDefinition,
  PropertyTypeMappingInfo,
  RetentionPolicy,
} from "@osdk/client.unstable";
import type { ObjectPropertyType } from "../../api/object/ObjectPropertyType.js";
import type { ObjectType } from "../../api/object/ObjectType.js";
import type { OntologyRidGenerator } from "../../util/generateRid.js";

export function convertDatasourceDefinition(
  objectType: ObjectType,
  properties: ObjectPropertyType[],
  ridGenerator: OntologyRidGenerator,
): ObjectTypeDatasourceDefinition {
  const baseDatasource = objectType.datasources?.find(ds =>
    ["dataset", "stream", "restrictedView"].includes(ds.type)
  );
  // TODO: Convert datasource definitions to use RIDs
  switch (baseDatasource?.type) {
    case "stream":
      const window = baseDatasource.retentionPeriod;
      const retentionPolicy: RetentionPolicy = window
        ? { type: "time", time: { window } }
        : { type: "none", none: {} };
      const propertyMapping = Object.fromEntries(
        properties.map((
          prop,
        ) => [
          ridGenerator.generatePropertyRid(
            prop.apiName,
            objectType.apiName,
          ),
          prop.apiName,
        ]),
      );
      return {
        type: "streamV2",
        streamV2: {
          // TODO: Add proper streamLocator with branch and stream RID
          streamLocator: {
            branchId: "main",
            streamLocatorRid: ridGenerator.generateRid(
              `stream.${objectType.apiName}`,
            ),
          },
          propertyMapping,
          retentionPolicy,
          propertySecurityGroups: undefined,
        },
      };
    case "restrictedView":
      return {
        type: "restrictedViewV2",
        restrictedViewV2: {
          restrictedViewRid: ridGenerator.generateRid(
            `restrictedview.${objectType.apiName}`,
          ),
          propertyMapping: buildPropertyMapping(
            properties,
            objectType.apiName,
            ridGenerator,
          ),
        },
      };
    case "dataset":
    default:
      return {
        type: "datasetV2",
        datasetV2: {
          branchId: "main",
          datasetRid: ridGenerator.generateRid(`dataset.${objectType.apiName}`),
          propertyMapping: buildPropertyMapping(
            properties,
            objectType.apiName,
            ridGenerator,
          ),
        },
      };
  }
}

function buildPropertyMapping(
  properties: ObjectPropertyType[],
  objectTypeApiName: string,
  ridGenerator: OntologyRidGenerator,
): Record<string, PropertyTypeMappingInfo> {
  // TODO: Convert property mappings to use RIDs as keys
  return Object.fromEntries(
    properties.map((prop) => {
      const propertyRid = ridGenerator.generatePropertyRid(
        prop.apiName,
        objectTypeApiName,
      );
      // editOnly
      if (prop.editOnly) {
        return [propertyRid, { type: "editOnly", editOnly: {} }];
      }
      // structs
      if (typeof prop.type === "object" && prop.type?.type === "struct") {
        const structMapping = {
          type: "struct",
          struct: {
            column: prop.apiName,
            mapping: Object.fromEntries(
              Object.keys(prop.type.structDefinition).map((fieldName) => [
                fieldName,
                { apiName: fieldName, mappings: {} },
              ]),
            ),
          },
        };
        return [propertyRid, structMapping];
      }
      // default: column mapping
      return [propertyRid, { type: "column", column: prop.apiName }];
    }),
  );
}
