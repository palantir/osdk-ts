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
  OntologyIrBaseFormatter,
  Visibility,
} from "@osdk/client.unstable";
import type { RequiredFields } from "../../util/RequiredFields.js";
import type { Nullability } from "../properties/Nullability.js";
import type { PropertyTypeType } from "../properties/PropertyTypeType.js";
import type { ReducerType } from "../properties/ReducerType.js";
import type { SharedPropertyType } from "../properties/SharedPropertyType.js";
import type { ValueTypeDefinitionVersion } from "../values/ValueTypeDefinitionVersion.js";
import type { ObjectTypeStatus } from "./ObjectTypeStatus.js";

export type ObjectPropertyType = RequiredFields<
  Partial<ObjectPropertyTypeInner>,
  "apiName" | "type" | "displayName"
>;

export interface ObjectPropertyTypeInner {
  // <These values are taken from OntologyIrPropertyType (Old code used an Omit)>
  apiName: string; // was: ObjectTypeFieldApiName;

  // FIXME: This still depends on conjure types
  baseFormatter?: OntologyIrBaseFormatter | null | undefined;
  indexedForSearch: boolean;
  typeClasses: Array<{
    kind: string;
    name: string;
  }>;
  // </These values are taken from OntologyIrPropertyType (Old code used an Omit)>
  type: PropertyTypeType;
  array?: boolean;
  reducers?: Array<ReducerType>;
  valueType: ValueTypeDefinitionVersion;
  sharedPropertyType: SharedPropertyType;
  description: string | undefined;
  displayName: string;
  visibility: Visibility;
  nullability?: Nullability;
  status?: ObjectTypeStatus;
  editOnly?: boolean;
}
