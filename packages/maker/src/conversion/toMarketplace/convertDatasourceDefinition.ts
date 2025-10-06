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
  OntologyIrObjectTypeDatasourceDefinition,
  PropertyTypeMappingInfo,
  RetentionPolicy,
} from "@osdk/client.unstable";
import type { ObjectPropertyType } from "../../api/object/ObjectPropertyType.js";
import type { ObjectType } from "../../api/object/ObjectType.js";

export function convertDatasourceDefinition(
  objectType: ObjectType,
  properties: ObjectPropertyType[],
): OntologyIrObjectTypeDatasourceDefinition {
  switch (objectType.datasource?.type) {
    case "stream":
      const window = objectType.datasource.retentionPeriod;
      const retentionPolicy: RetentionPolicy = window
        ? { type: "time", time: { window } }
        : { type: "none", none: {} };
      const propertyMapping = Object.fromEntries(
        properties.map((
          prop,
        ) => [prop.apiName, prop.apiName]),
      );
      return {
        type: "streamV2",
        streamV2: {
          streamLocator: objectType.apiName,
          propertyMapping,
          retentionPolicy,
          propertySecurityGroups: undefined,
        },
      };
    case "restrictedView":
      return {
        type: "restrictedViewV2",
        restrictedViewV2: {
          restrictedViewRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
    case "dataset":
    default:
      return {
        type: "datasetV2",
        datasetV2: {
          datasetRid: objectType.apiName,
          propertyMapping: buildPropertyMapping(properties),
        },
      };
  }
}

function buildPropertyMapping(
  properties: ObjectPropertyType[],
): Record<string, PropertyTypeMappingInfo> {
  return Object.fromEntries(
    properties.map((prop) => {
      // editOnly
      if (prop.editOnly) {
        return [prop.apiName, { type: "editOnly", editOnly: {} }];
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
        return [prop.apiName, structMapping];
      }
      // default: column mapping
      return [prop.apiName, { type: "column", column: prop.apiName }];
    }),
  );
}
