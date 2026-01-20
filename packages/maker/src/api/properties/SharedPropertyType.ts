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
  OntologyIrValueTypeReferenceWithMetadata,
  SharedPropertyTypeGothamMapping,
  Visibility,
} from "@osdk/client.unstable";
import type { OntologyEntityBase } from "../common/OntologyEntityBase.js";
import type { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type { TypeClass } from "../common/TypeClass.js";
import type { Nullability } from "./Nullability.js";
import type { PropertyTypeType } from "./PropertyTypeType.js";

export interface SharedPropertyType extends OntologyEntityBase, PropertyType {
  apiName: string;
  nonNameSpacedApiName: string;
  aliases?: Array<string>;
  gothamMapping?: SharedPropertyTypeGothamMapping;
  baseFormatter?: OntologyIrBaseFormatter;
  __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE;
}
export interface PropertyType {
  type: PropertyTypeType;
  array?: boolean;
  description?: string;
  displayName?: string;
  valueType?: OntologyIrValueTypeReferenceWithMetadata;
  visibility?: Visibility;
  typeClasses?: TypeClass[];
  nullability?: Nullability;
}
