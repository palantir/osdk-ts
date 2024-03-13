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

import type { ObjectTypeFullMetadata } from "@osdk/gateway/types";
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

export const employeeObjectWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: employeeObjectType,
  linkTypes: [peepsLinkType, leadLinkType, officeLinkType],
  implementsInterfaces: ["FooInterface"],
  sharedPropertyTypeMapping: {
    fooSpt: "fullName",
  },
};

export const officeObjectTypeWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: officeObjectType,
  linkTypes: [occupants],
  implementsInterfaces: [],
  sharedPropertyTypeMapping: {},
};

export const objectTypeWithAllPropertyTypesWithLinkTypes:
  ObjectTypeFullMetadata = {
    objectType: objectTypeWithAllPropertyTypes,
    linkTypes: [],
    implementsInterfaces: [],
    sharedPropertyTypeMapping: {},
  };
export const objectTypeWithTimestampPrimaryKeyWithLinkTypes:
  ObjectTypeFullMetadata = {
    objectType: objectTypeWithTimestampPrimaryKey,
    linkTypes: [],
    implementsInterfaces: [],
    sharedPropertyTypeMapping: {},
  };
export const equipmentObjectTypeWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: equipmentObjectType,
  linkTypes: [],
  implementsInterfaces: [],
  sharedPropertyTypeMapping: {},
};

export const objectTypesWithLinkTypes: {
  [objectTypeApiName: string]: ObjectTypeFullMetadata;
} = {
  [employeeObjectType.apiName]: employeeObjectWithLinkTypes,
  [officeObjectType.apiName]: officeObjectTypeWithLinkTypes,
  [objectTypeWithAllPropertyTypes.apiName]:
    objectTypeWithAllPropertyTypesWithLinkTypes,
  [objectTypeWithTimestampPrimaryKey.apiName]:
    objectTypeWithTimestampPrimaryKeyWithLinkTypes,
  [equipmentObjectType.apiName]: equipmentObjectTypeWithLinkTypes,
};
