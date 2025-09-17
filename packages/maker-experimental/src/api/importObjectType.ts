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

import {
  convertToDisplayName,
  convertToPluralDisplayName,
  importOntologyEntity,
  type ObjectPropertyType,
  type ObjectType,
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
): ObjectType {
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

  return finalObject;
}
