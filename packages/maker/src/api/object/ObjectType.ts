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

import type { OntologyIrObjectType, Visibility } from "@osdk/client.unstable";
import type { RequiredFields } from "../../util/RequiredFields.js";
import type { BlueprintIcon } from "../common/BlueprintIcons.js";
import type { OntologyEntityBase } from "../common/OntologyEntityBase.js";
import type { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type { InterfaceImplementation } from "./InterfaceImplementation.js";
import type { ObjectPropertyType } from "./ObjectPropertyType.js";
import type { ObjectTypeDatasourceDefinition } from "./ObjectTypeDatasourceDefinition.js";
import type { ObjectTypeStatus } from "./ObjectTypeStatus.js";

export type ObjectType =
  & OntologyEntityBase
  & RequiredFields<
    Partial<ObjectTypeInner>,
    | "apiName"
    | "primaryKeyPropertyApiName"
    | "displayName"
    | "pluralDisplayName"
    | "titlePropertyApiName"
  >
  & {
    datasources?: Array<ObjectTypeDatasourceDefinition>;
    __type: OntologyEntityTypeEnum.OBJECT_TYPE;
  };

export interface ObjectTypeInner extends
  Omit<
    OntologyIrObjectType,
    | "titlePropertyTypeRid"
    | "propertyTypes"
    | "allImplementsInterfaces"
    | "implementsInterfaces2"
    | "displayMetadata"
    | "primaryKeys"
    | "status"
  >
{
  primaryKeyPropertyApiName: string;
  properties: Array<ObjectPropertyType>;
  titlePropertyApiName: string;
  implementsInterfaces: Array<InterfaceImplementation>;
  description: string | undefined;
  icon: { locator: BlueprintIcon; color: string } | undefined;
  displayName: string;
  pluralDisplayName: string;
  visibility: Visibility;
  editsEnabled: boolean;
  status?: ObjectTypeStatus;
  aliases?: Array<string>;
}
