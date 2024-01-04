/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeWithLink } from "@osdk/gateway/types";
import {
  leadLinkType,
  occupants,
  officeLinkType,
  peepsLinkType,
} from "./linkTypes";
import {
  employeeObjectType,
  equipmentObjectType,
  objectTypeWithAllPropertyTypes,
  objectTypeWithTimestampPrimaryKey,
  officeObjectType,
} from "./objectTypeV2";

export const employeeObjectWithLinkTypes: ObjectTypeWithLink = {
  objectType: employeeObjectType,
  linkTypes: [peepsLinkType, leadLinkType, officeLinkType],
};

export const officeObjectTypeWithLinkTypes: ObjectTypeWithLink = {
  objectType: officeObjectType,
  linkTypes: [occupants],
};

export const objectTypeWithAllPropertyTypesWithLinkTypes: ObjectTypeWithLink = {
  objectType: objectTypeWithAllPropertyTypes,
  linkTypes: [],
};
export const objectTypeWithTimestampPrimaryKeyWithLinkTypes:
  ObjectTypeWithLink = {
    objectType: objectTypeWithTimestampPrimaryKey,
    linkTypes: [],
  };
export const equipmentObjectTypeWithLinkTypes: ObjectTypeWithLink = {
  objectType: equipmentObjectType,
  linkTypes: [],
};

export const objectTypesWithLinkTypes: {
  [objectTypeApiName: string]: ObjectTypeWithLink;
} = {
  [employeeObjectType.apiName]: employeeObjectWithLinkTypes,
  [officeObjectType.apiName]: officeObjectTypeWithLinkTypes,
  [objectTypeWithAllPropertyTypes.apiName]:
    objectTypeWithAllPropertyTypesWithLinkTypes,
  [objectTypeWithTimestampPrimaryKey.apiName]:
    objectTypeWithTimestampPrimaryKeyWithLinkTypes,
  [equipmentObjectType.apiName]: equipmentObjectTypeWithLinkTypes,
};
