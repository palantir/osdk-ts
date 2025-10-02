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
  OntologyIrObjectTypeBlockDataV2,
  OntologyIrObjectTypeDatasource,
  OntologyIrObjectTypeDatasourceDefinition,
  OntologyIrPropertyType,
} from "@osdk/client.unstable";
import {
  addNamespaceIfNone,
  buildDatasource,
  convertObjectStatus,
} from "../../api/defineOntology.js";
import type { ObjectPropertyType } from "../../api/object/ObjectPropertyType.js";
import type { ObjectType } from "../../api/object/ObjectType.js";
import { isExotic } from "../../api/properties/PropertyTypeType.js";
import { convertDatasourceDefinition } from "./convertDatasourceDefinition.js";
import { convertObjectPropertyType } from "./convertObjectPropertyType.js";

export function convertObject(
  objectType: ObjectType,
): OntologyIrObjectTypeBlockDataV2 {
  const propertyDatasources: OntologyIrObjectTypeDatasource[] =
    (objectType.properties ?? [])
      .flatMap(prop => extractPropertyDatasource(prop, objectType.apiName));

  const classificationGroupMarkingNames = extractMarkingGroups(
    objectType.properties ?? [],
    "CBAC",
  );

  const mandatoryMarkingNames = extractMarkingGroups(
    objectType.properties ?? [],
    "MANDATORY",
  );

  const classificationInputGroup = classificationGroupMarkingNames.length > 0
    ? classificationGroupMarkingNames.reduce((l, r) => l + "/" + r)
    : undefined;

  const mandatoryInputGroup = mandatoryMarkingNames.length > 0
    ? mandatoryMarkingNames.reduce((l, r) => l + "/" + r)
    : undefined;

  const objectDatasource = buildDatasource(
    objectType.apiName,
    convertDatasourceDefinition(
      objectType,
      objectType.properties ?? [],
    ),
    classificationInputGroup,
    mandatoryInputGroup,
  );

  const implementations = objectType.implementsInterfaces ?? [];

  return {
    objectType: {
      displayMetadata: {
        description: objectType.description,
        displayName: objectType.displayName,
        groupDisplayName: undefined,
        icon: {
          type: "blueprint",
          blueprint: objectType.icon ?? { locator: "cube", color: "#2D72D2" },
        },
        pluralDisplayName: objectType.pluralDisplayName,
        visibility: objectType.visibility ?? "NORMAL",
      },
      primaryKeys: [objectType.primaryKeyPropertyApiName],
      propertyTypes: Object.fromEntries(
        objectType.properties?.map<[string, OntologyIrPropertyType]>(
          val => [val.apiName, convertObjectPropertyType(val)],
        ) ?? [],
      ),
      titlePropertyTypeRid: objectType.titlePropertyApiName,
      apiName: objectType.apiName,
      status: convertObjectStatus(objectType.status),
      redacted: false,
      implementsInterfaces2: implementations.map(impl => ({
        interfaceTypeApiName: impl.implements.apiName,
        linksV2: {},
        propertiesV2: {},
        properties: Object.fromEntries(
          impl.propertyMapping.map(
            mapping => [addNamespaceIfNone(mapping.interfaceProperty), {
              propertyTypeRid: mapping.mapsTo,
            }],
          ),
        ),
      })),
      allImplementsInterfaces: {},
    },
    datasources: [...propertyDatasources, objectDatasource],
    entityMetadata: { arePatchesEnabled: objectType.editsEnabled ?? false },
  };
}

/**
 * Extracts marking group names of a specific type from object properties
 */
export function extractMarkingGroups(
  properties: ObjectPropertyType[],
  markingType: "CBAC" | "MANDATORY",
): string[] {
  return properties
    .map(prop => {
      if (
        typeof prop.type === "object"
        && prop.type.type === "marking"
        && prop.type.markingType === markingType
      ) {
        return prop.type.markingInputGroupName;
      }
      return undefined;
    })
    .filter((val): val is string => val !== undefined);
}
export function extractPropertyDatasource(
  property: ObjectPropertyType,
  objectTypeApiName: string,
): OntologyIrObjectTypeDatasource[] {
  if (!isExotic(property.type)) {
    return [];
  }
  const identifier = objectTypeApiName + "." + property.apiName;
  switch (property.type as string) {
    case "geotimeSeries":
      const geotimeDefinition: OntologyIrObjectTypeDatasourceDefinition = {
        type: "geotimeSeries",
        geotimeSeries: {
          geotimeSeriesIntegrationRid: identifier,
          properties: [property.apiName],
        },
      };
      return [buildDatasource(property.apiName, geotimeDefinition)];
    case "mediaReference":
      const mediaSetDefinition: OntologyIrObjectTypeDatasourceDefinition = {
        type: "mediaSetView",
        mediaSetView: {
          assumedMarkings: [],
          mediaSetViewLocator: identifier,
          properties: [property.apiName],
        },
      };
      return [buildDatasource(property.apiName, mediaSetDefinition)];
    default:
      return [];
  }
}
