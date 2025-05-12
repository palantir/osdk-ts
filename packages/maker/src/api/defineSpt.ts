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
  ApiNameValueTypeReference,
  SharedPropertyTypeGothamMapping,
  Visibility,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import {
  globalNamespace,
  ontologyDefinition,
  updateOntology,
} from "./defineOntology.js";
import {
  OntologyEntityTypeEnum,
  type PropertyTypeType,
  type SharedPropertyType,
} from "./types.js";

const defaultTypeClasses: SharedPropertyType["typeClasses"] = [{
  kind: "render_hint",
  name: "SELECTABLE",
}, { kind: "render_hint", name: "SORTABLE" }];

export interface SharedPropertyTypeDefinition {
  apiName: string;
  type: PropertyTypeType;
  array?: boolean;
  description?: string;
  displayName?: string;
  valueType?: ApiNameValueTypeReference;
  visibility?: Visibility;
  typeClasses?: SharedPropertyType["typeClasses"];
  gothamMapping?: SharedPropertyTypeGothamMapping;
}

export function defineSharedPropertyType(
  sptDef: SharedPropertyTypeDefinition,
): SharedPropertyType {
  const apiName = globalNamespace + sptDef.apiName;
  invariant(
    ontologyDefinition[OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE][apiName]
      === undefined,
    `Shared property type ${apiName} already exists`,
  );

  const fullSpt: SharedPropertyType = {
    ...sptDef,
    apiName,
    nonNameSpacedApiName: sptDef.apiName,
    displayName: sptDef.displayName ?? sptDef.apiName, // This way the non-namespaced api name is the display name (maybe not ideal)
    typeClasses: sptDef.typeClasses ?? defaultTypeClasses,
    __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
  };
  updateOntology(fullSpt);
  return fullSpt;
}
