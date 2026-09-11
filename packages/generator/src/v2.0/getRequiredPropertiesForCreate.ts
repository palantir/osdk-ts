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
  ObjectTypeFullMetadata,
  PropertyApiName,
  PropertyV2,
} from "@osdk/foundry.ontologies";

type PropertyV2WithDataConstraints = PropertyV2 & {
  dataConstraints?: {
    nullability?: "NULLABLE" | "NOT_NULLABLE";
  };
};

type ObjectTypeMetadataWithDataConstraints =
  & ObjectTypeFullMetadata["objectType"]
  & {
    properties: Record<PropertyApiName, PropertyV2WithDataConstraints>;
  };

export function getRequiredPropertiesForCreate(
  objectType: ObjectTypeMetadataWithDataConstraints,
): ReadonlyArray<string> {
  const required = new Set<string>([objectType.primaryKey]);
  const editableDatasourceProperties = objectType.datasources
    .map((datasource) => {
      switch (datasource.definition.type) {
        case "dataset":
        case "direct":
        case "restrictedView":
        case "stream":
        case "table": {
          const editOnlyProperties = Object.entries(
            datasource.definition.propertyMapping,
          ).flatMap(([propertyApiName, mapping]) =>
            mapping.type === "editOnly" ? [propertyApiName] : []
          );
          return editOnlyProperties.length > 0 ? editOnlyProperties : undefined;
        }
        case "editsOnly":
          return Object.keys(objectType.properties);
        default:
          return undefined;
      }
    })
    .filter((properties): properties is string[] => properties != null);

  if (editableDatasourceProperties.length === 1) {
    for (const propertyApiName of editableDatasourceProperties[0]) {
      if (
        objectType.properties[propertyApiName]?.dataConstraints?.nullability
          === "NOT_NULLABLE"
      ) {
        required.add(propertyApiName);
      }
    }
  }

  return [...required].sort();
}
