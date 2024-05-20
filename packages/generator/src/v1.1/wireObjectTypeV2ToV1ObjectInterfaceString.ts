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
  ObjectPropertyType,
  ObjectTypeFullMetadata,
} from "@osdk/gateway/types";
import { isReservedKeyword } from "../util/reservedKeywords.js";

export function wireObjectTypeV2ToObjectInterfaceStringV1(
  objectTypeWithLinks: ObjectTypeFullMetadata,
  importExt = "",
) {
  const uniqueLinkTargets = new Set<string>(
    objectTypeWithLinks.linkTypes.map(a => a.objectTypeApiName).filter(a =>
      a !== objectTypeWithLinks.objectType.apiName
    ),
  );
  return `import type { OntologyObject, LocalDate, Timestamp, GeoShape, GeoPoint, Attachment, TimeSeries, MultiLink, SingleLink } from "@osdk/legacy-client";
${
    Array.from(uniqueLinkTargets).map(linkTarget =>
      `import type { ${linkTarget} } from "./${linkTarget}${importExt}";`
    ).join("\n")
  }

  ${getDescriptionIfPresent(objectTypeWithLinks.objectType.description)}
  export interface ${objectTypeWithLinks.objectType.apiName} extends OntologyObject {
  /** \@deprecated please migrate to \$apiName instead */
  readonly __apiName: "${objectTypeWithLinks.objectType.apiName}" & {${
    objectTypeWithLinks.linkTypes.map(linkType => {
      return `/** \@deprecated please migrate to pivotTo(${linkType.apiName}) instead */ searchAround${
        linkType.apiName.charAt(0).toUpperCase() + linkType.apiName.slice(1)
      }?: never`;
    })
  }};
  /** \@deprecated please migrate to \$primaryKey instead */
  readonly __primaryKey: ${
    wirePropertyTypeV2ToTypeScriptType(
      objectTypeWithLinks.objectType
        .properties[objectTypeWithLinks.objectType.primaryKey].dataType,
    )
  };
  readonly \$apiName: "${objectTypeWithLinks.objectType.apiName}";
  readonly \$primaryKey: ${
    wirePropertyTypeV2ToTypeScriptType(
      objectTypeWithLinks.objectType
        .properties[objectTypeWithLinks.objectType.primaryKey].dataType,
    )
  };
${
    Object.entries(objectTypeWithLinks.objectType.properties).sort((a, b) =>
      a[0].localeCompare(b[0])
    ).flatMap((
      [propertyName, propertyDefinition],
    ) => {
      const propertyType = wirePropertyTypeV2ToTypeScriptType(
        propertyDefinition.dataType,
      );
      const entries = [
        `${
          getDescriptionIfPresent(propertyDefinition.description, true)
        }readonly ${propertyName}: ${propertyType} | undefined`,
      ];

      if (isReservedKeyword(propertyName)) {
        entries.push(
          `/** @deprecated please migrate to '${propertyName}' instead */
          readonly ${propertyName}_: ${propertyType} | undefined`,
        );
      }

      return entries;
    }).join(";\n")
  }
${
    objectTypeWithLinks.linkTypes.flatMap(linkType => {
      const entries = [
        `readonly ${linkType.apiName}: ${
          linkType.cardinality === "MANY" ? "MultiLink" : "SingleLink"
        }<${linkType.objectTypeApiName}>`,
      ];
      return entries;
    }).join(";\n")
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
      return "string";
    case "double":
      return "number";
    case "float":
      return "number";
    case "geopoint":
      return "GeoPoint";
    case "geoshape":
      return "GeoShape";
    case "long":
      return "string";
    case "short":
      return "number";
    case "timestamp":
      return "Timestamp";
    case "timeseries":
      return property.itemType.type === "string"
        ? `TimeSeries<string>`
        : `TimeSeries<number>`;
    case "marking":
      return "string";
    default:
      const _: never = property;
      throw new Error(`Unknown property type ${property}`);
  }
}

export function getDescriptionIfPresent(
  description?: string,
  includeNewline?: boolean,
) {
  if (description) {
    return `/**
 * ${description}
 */${includeNewline ? "\n" : ""}`;
  }
  return "";
}
