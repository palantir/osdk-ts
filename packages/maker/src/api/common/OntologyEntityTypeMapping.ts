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

import type { ActionType } from "../action/ActionType.js";
import type { InterfaceType } from "../interface/InterfaceType.js";
import type { LinkType } from "../links/LinkType.js";
import type { ObjectType } from "../object/ObjectType.js";
import type { SharedPropertyType } from "../properties/SharedPropertyType.js";
import type { ValueTypeDefinitionVersion } from "../values/ValueTypeDefinitionVersion.js";
import type { OntologyEntityTypeEnum } from "./OntologyEntityTypeEnum.js";

export interface OntologyEntityTypeMapping {
  [OntologyEntityTypeEnum.OBJECT_TYPE]: ObjectType;
  [OntologyEntityTypeEnum.ACTION_TYPE]: ActionType;
  [OntologyEntityTypeEnum.LINK_TYPE]: LinkType;
  [OntologyEntityTypeEnum.INTERFACE_TYPE]: InterfaceType;
  [OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE]: SharedPropertyType;
  [OntologyEntityTypeEnum.VALUE_TYPE]: ValueTypeDefinitionVersion;
}

export type OntologyEntityType =
  OntologyEntityTypeMapping[keyof OntologyEntityTypeMapping];
