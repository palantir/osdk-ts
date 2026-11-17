/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectMetadata } from "@osdk/api";
import type {
  LoadObjectSetRequestV2,
  ObjectSet,
  PropertyIdentifier,
  PropertyLoadLevel,
} from "@osdk/foundry.ontologies";

export type ObjectLoadRequest = Pick<
  LoadObjectSetRequestV2,
  "objectSet" | "select" | "selectV2" | "defaultLoadLevel"
>;

export function getFullyLoadedProperties(
  request: ObjectLoadRequest | undefined,
  objectDef: ObjectMetadata,
  interfaceApiName: string | undefined,
  interfaceToObjectMapping: Readonly<Record<string, string>> = {},
  suppliedProperties: readonly string[] = [],
): ReadonlySet<string> {
  const implementations =
    interfaceApiName == null
      ? undefined
      : objectDef.interfaceImplementations?.[interfaceApiName];
  const selections: readonly PropertyIdentifier[] =
    request == null
      ? (interfaceApiName == null
          ? suppliedProperties
          : Object.keys(interfaceToObjectMapping).filter(
              (apiName) =>
                suppliedProperties.includes(apiName) ||
                suppliedProperties.includes(interfaceToObjectMapping[apiName]),
            )
        ).map((apiName) => ({ type: "property", apiName }))
      : request.selectV2.length > 0
        ? request.selectV2
        : request.select.map((apiName) => ({ type: "property", apiName }));
  const defaultIsFull = isFullLoadLevel(request?.defaultLoadLevel);
  const allProperties = request != null && selections.length === 0;
  const fullyLoaded = new Set<string>(
    allProperties &&
      defaultIsFull &&
      (interfaceApiName == null ||
        loadsAllBaseProperties(request.objectSet, interfaceApiName))
      ? Object.keys(objectDef.properties)
      : [],
  );
  const properties = allProperties
    ? (interfaceApiName == null
        ? Object.keys(objectDef.properties)
        : Object.keys(interfaceToObjectMapping)
      ).map((apiName): PropertyIdentifier => ({ type: "property", apiName }))
    : selections;
  const incomplete = new Set<string>();
  for (const selection of properties) {
    let property = selection;
    let full = defaultIsFull;
    if (property.type === "propertyWithLoadLevel") {
      full = isFullLoadLevel(property.loadLevel);
      property = property.propertyIdentifier;
    }
    let apiName: string;
    switch (property.type) {
      case "property":
        apiName = property.apiName;
        break;
      case "structField":
        apiName = property.propertyApiName;
        full = false;
        break;
      case "primaryKeyProperty":
        if (interfaceApiName != null) continue;
        apiName = objectDef.primaryKeyApiName;
        break;
      case "titleProperty":
        if (interfaceApiName != null) continue;
        apiName = objectDef.titleProperty;
        break;
      default:
        continue;
    }
    const implementation = implementations?.[apiName];
    if (interfaceApiName == null) {
      if (apiName in objectDef.properties) {
        (full ? fullyLoaded : incomplete).add(apiName);
      }
    } else if (
      implementation == null ||
      implementation.type === "localProperty"
    ) {
      const backingProperty =
        implementation?.propertyApiName ?? interfaceToObjectMapping[apiName];
      if (backingProperty != null) {
        (full ? fullyLoaded : incomplete).add(backingProperty);
      }
    } else if (!full) {
      for (const backingProperty of backingProperties(implementation)) {
        incomplete.add(backingProperty);
      }
    }
  }
  for (const property of incomplete) fullyLoaded.delete(property);
  return fullyLoaded;
}

function isFullLoadLevel(level: PropertyLoadLevel | undefined): boolean {
  return level == null || level.type === "noLoadLevel";
}

function backingProperties(
  implementation: ObjectMetadata.InterfacePropertyImplementation,
): string[] {
  switch (implementation.type) {
    case "localProperty":
    case "structField":
      return [implementation.propertyApiName];
    case "struct":
      return Object.values(implementation.mapping).map(
        (field) => field.propertyApiName,
      );
    case "reduced":
      return backingProperties(implementation.implementation);
  }
}

function loadsAllBaseProperties(
  objectSet: ObjectSet,
  interfaceApiName: string,
): boolean {
  switch (objectSet.type) {
    case "interfaceBase":
      return (
        objectSet.interfaceType === interfaceApiName &&
        objectSet.includeAllBaseObjectProperties === true
      );
    case "asBaseObjectTypes":
      return true;
    case "filter":
    case "withProperties":
    case "nearestNeighbors":
      return loadsAllBaseProperties(objectSet.objectSet, interfaceApiName);
    case "intersect":
      return objectSet.objectSets.some((set) =>
        loadsAllBaseProperties(set, interfaceApiName),
      );
    case "union":
      return (
        objectSet.objectSets.length > 0 &&
        objectSet.objectSets.every((set) =>
          loadsAllBaseProperties(set, interfaceApiName),
        )
      );
    default:
      return false;
  }
}
