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
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { namespace, ontologyDefinition } from "./defineOntology.js";
import type { PropertyTypeType, SharedPropertyType } from "./types.js";

const defaultTypeClasses: SharedPropertyType["typeClasses"] = [{
  kind: "render_hint",
  name: "SELECTABLE",
}, { kind: "render_hint", name: "SORTABLE" }];

export function defineSharedPropertyType(
  opts: {
    apiName: string;
    type: PropertyTypeType;
    array?: boolean;
    description?: string;
    displayName?: string;
    valueType?: ApiNameValueTypeReference;
    typeClasses?: SharedPropertyType["typeClasses"];
    gothamMapping?: SharedPropertyTypeGothamMapping;
  },
): SharedPropertyType {
  const apiName = namespace + opts.apiName;
  invariant(
    ontologyDefinition.sharedPropertyTypes[apiName] === undefined,
    `Shared property type ${apiName} already exists`,
  );

  return ontologyDefinition.sharedPropertyTypes[apiName] = {
    ...opts,
    apiName,
    nonNameSpacedApiName: opts.apiName,
    displayName: opts.displayName ?? opts.apiName, // This way the non-namespaced api name is the display name (maybe not ideal)
    typeClasses: opts.typeClasses ?? defaultTypeClasses,
  };
}
