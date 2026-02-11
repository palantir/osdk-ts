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

import type {
  OntologyIrBaseFormatter,
  OntologyIrValueTypeReferenceWithMetadata,
  SharedPropertyTypeGothamMapping,
  Visibility,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { cloneDefinition } from "./cloneDefinition.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  namespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import type { Nullability } from "./properties/Nullability.js";
import { type PropertyTypeType } from "./properties/PropertyTypeType.js";
import { type SharedPropertyType } from "./properties/SharedPropertyType.js";
import {
  defaultTypeClasses,
  getPropertyTypeName,
  hasRenderHints,
  shouldNotHaveRenderHints,
} from "./propertyConversionUtils.js";

export interface SharedPropertyTypeDefinition {
  apiName: string;
  type: PropertyTypeType;
  array?: boolean;
  description?: string;
  displayName?: string;
  valueType?: OntologyIrValueTypeReferenceWithMetadata;
  visibility?: Visibility;
  nullability?: Nullability;
  typeClasses?: SharedPropertyType["typeClasses"];
  aliases?: Array<string>;
  gothamMapping?: SharedPropertyTypeGothamMapping;
  baseFormatter?: OntologyIrBaseFormatter;
}

export function defineSharedPropertyType(
  sptDefInput: SharedPropertyTypeDefinition,
): SharedPropertyType {
  const sptDef = cloneDefinition(sptDefInput);
  const apiName = namespace + sptDef.apiName;
  invariant(
    ontologyDefinition[OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE][apiName]
      === undefined,
    `Shared property type ${apiName} already exists`,
  );

  invariant(
    !shouldNotHaveRenderHints(sptDef.type)
      || !hasRenderHints(sptDef.typeClasses),
    `Shared property type ${apiName} of type '${
      getPropertyTypeName(sptDef.type)
    }' should not have render hints`,
  );

  const fullSpt: SharedPropertyType = {
    ...sptDef,
    apiName,
    nonNameSpacedApiName: sptDef.apiName,
    displayName: sptDef.displayName ?? sptDef.apiName, // This way the non-namespaced api name is the display name (maybe not ideal)
    typeClasses: sptDef.typeClasses
      ?? (shouldNotHaveRenderHints(sptDef.type) ? [] : defaultTypeClasses),
    __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
  };
  updateOntology(fullSpt);
  return fullSpt;
}
