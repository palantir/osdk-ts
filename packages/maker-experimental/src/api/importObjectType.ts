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
  OntologyIrObjectType,
  OntologyIrPropertyType,
} from "@osdk/client.unstable";
import type {
  ObjectPropertyType,
  ObjectType,
  PropertyTypeType,
} from "@osdk/maker";
import {
  convertToDisplayName,
  convertToPluralDisplayName,
  convertType,
  importOntologyEntity,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import type { ImportObjectDefinition } from "./types.js";

/*
 * Takes in the minimal object definition to create an input shape.
 * First converts it to fake block data to call importOntologyEntity,
 * then converts it to an OntologyIrImportedObjectType that is safe to use elsewhere.
 */
export function defineImportObject(
  objectDef: ImportObjectDefinition,
): OntologyIrObjectType {
  const properties: Array<ObjectPropertyType> = Object.entries(
    objectDef.properties ?? {},
  ).map(([apiName, type]) => ({
    apiName: apiName,
    displayName: convertToDisplayName(apiName),
    type: type.type,
  }));
  const finalObject: ObjectType = {
    apiName: objectDef.apiName,
    properties: properties,
    __type: OntologyEntityTypeEnum.OBJECT_TYPE,

    // the rest don't matter for now
    displayName: objectDef.displayName
      ?? convertToDisplayName(objectDef.apiName),
    pluralDisplayName: convertToPluralDisplayName(objectDef.apiName),
    primaryKeyPropertyApiName: properties[0]?.apiName,
    titlePropertyApiName: properties[0]?.apiName,
  };
  importOntologyEntity(finalObject);

  const importPropertyTypes: Array<OntologyIrPropertyType> = Object
    .entries(objectDef.properties).map(([apiName, importedPt]) => ({
      ...importedPt,
      apiName: apiName,
      displayMetadata: {
        displayName: importedPt.displayName ?? convertToDisplayName(apiName),
        visibility: "NORMAL",
      },
      indexedForSearch: true,
      status: { type: "active", active: {} },
      typeClasses: shouldNotHaveRenderHints(importedPt.type) ? [] : [{
        kind: "render_hint",
        name: "SELECTABLE",
      }, { kind: "render_hint", name: "SORTABLE" }],
      type: convertType(importedPt.type),
    }));
  const objectDisplayName = objectDef.displayName
    ?? convertToDisplayName(objectDef.apiName);
  const ontologyImportObject: OntologyIrObjectType = {
    ...objectDef,
    displayMetadata: {
      displayName: objectDisplayName,
      pluralDisplayName: objectDisplayName + "s",
      visibility: "NORMAL",
      icon: {
        type: "blueprint",
        blueprint: { locator: "cube", color: "#2D72D2" },
      },
    },
    propertyTypes: Object.fromEntries(
      importPropertyTypes.map((pt) => [pt.apiName, pt]),
    ),
    implementsInterfaces2: [],
    allImplementsInterfaces: {},
    primaryKeys: [],
    titlePropertyTypeRid: properties.at(0)!.apiName,
    status: { type: "active", active: {} },
  };
  return ontologyImportObject;
}
function shouldNotHaveRenderHints(type: PropertyTypeType): boolean {
  return ["struct", "mediaReference", "geotimeSeries"].includes(
    typeof type === "object" ? type.type : type,
  );
}
