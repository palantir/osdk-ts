/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  LinkTypeSideV2,
  ObjectPropertyType,
  ObjectTypeV2,
} from "@osdk/gateway/types";

export function wireObjectTypeV2ToObjectInterfaceStringV1(
  input: ObjectTypeV2,
  linkTypes: LinkTypeSideV2[] = [],
) {
  const uniqueLinkTargets = new Set<string>(
    linkTypes.map(a => a.objectTypeApiName).filter(a => a !== input.apiName),
  );
  return `import type { OntologyObject, LocalDate, Timestamp, GeoShape, GeoPoint, Attachment, TimeSeries, MultiLink, SingleLink } from "@osdk/legacy-client";
${
    Array.from(uniqueLinkTargets).map(linkTarget =>
      `import type { ${linkTarget} } from "./${linkTarget}";`
    ).join("\n")
  }

/**
 * ${input.description}
 */
export interface ${input.apiName} extends OntologyObject {
  readonly __apiName: "${input.apiName}";
  readonly __primaryKey: ${
    wirePropertyTypeV2ToTypeScriptType(
      input.properties[input.primaryKey].dataType,
    )
  };
${
    Object.entries(input.properties).map((
      [propertyName, propertyDefinition],
    ) =>
      `${
        getDescriptionIfPresent(propertyDefinition.description)
      }readonly ${propertyName}: ${
        wirePropertyTypeV2ToTypeScriptType(propertyDefinition.dataType)
      } | undefined`
    ).join(";\n")
  }
${
    linkTypes.map(linkType =>
      `readonly ${linkType.apiName}: ${
        linkType.cardinality === "MANY" ? "MultiLink" : "SingleLink"
      }<${linkType.objectTypeApiName}>`
    ).join(";\n")
  }
}
  `;
}

function wirePropertyTypeV2ToTypeScriptType(
  property: ObjectPropertyType,
): string {
  switch (property.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "array":
      return wirePropertyTypeV2ToTypeScriptType(property.subType) + "[]";
    case "integer":
      return "number";
    case "attachment":
      return "Attachment";
    case "byte":
      return "number";
    case "date":
      return "LocalDate";
    case "decimal":
      return "number";
    case "double":
      return "number";
    case "float":
      return "number";
    case "geopoint":
      return "GeoPoint";
    case "geoshape":
      return "GeoShape";
    case "long":
      return "number";
    case "short":
      return "number";
    case "timestamp":
      return "Timestamp";
    case "timeseries":
      return property.itemType.type === "string"
        ? `TimeSeries<string>`
        : `TimeSeries<number>`;
    default:
      const _: never = property;
      throw new Error(`Unknown property type ${property}`);
  }
}

function getDescriptionIfPresent(description?: string) {
  if (description) {
    return `/**
 * ${description}
 */\n`;
  }
  return "";
}
