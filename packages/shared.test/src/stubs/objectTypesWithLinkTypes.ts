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

import type { ObjectTypeFullMetadata } from "@osdk/internal.foundry.core";
import {
  leadLinkType,
  occupants,
  officeLinkType,
  peepsLinkType,
} from "./linkTypes.js";
import {
  employeeObjectType,
  equipmentObjectType,
  objectTypeWithAllPropertyTypes,
  objectTypeWithTimestampPrimaryKey,
  officeObjectType,
  personObjectType,
  taskObjectType,
  todoObjectType,
} from "./objectTypeV2.js";

export const employeeObjectWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: employeeObjectType,
  linkTypes: [peepsLinkType, leadLinkType, officeLinkType],
  implementsInterfaces: ["FooInterface"],
  implementsInterfaces2: {
    FooInterface: {
      properties: {
        fooSpt: "fullName",
      },
    },
  },
  sharedPropertyTypeMapping: {
    fooSpt: "fullName",
  },
};

export const officeObjectTypeWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: officeObjectType,
  linkTypes: [occupants],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

export const objectTypeWithAllPropertyTypesWithLinkTypes:
  ObjectTypeFullMetadata = {
    objectType: objectTypeWithAllPropertyTypes,
    linkTypes: [],
    implementsInterfaces: [],
    implementsInterfaces2: {},
    sharedPropertyTypeMapping: {},
  };
export const objectTypeWithTimestampPrimaryKeyWithLinkTypes:
  ObjectTypeFullMetadata = {
    objectType: objectTypeWithTimestampPrimaryKey,
    linkTypes: [],
    implementsInterfaces: [],
    implementsInterfaces2: {},
    sharedPropertyTypeMapping: {},
  };
export const equipmentObjectTypeWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: equipmentObjectType,
  linkTypes: [],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

export const taskWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: taskObjectType,
  linkTypes: [
    {
      apiName: "Todos",
      displayName: "Todos",
      cardinality: "MANY",
      objectTypeApiName: "Todo",
      status: "ACTIVE",
      linkTypeRid: "rid.link-type.123",
    },
    {
      apiName: "RP",
      displayName: "RP",
      cardinality: "ONE",
      objectTypeApiName: "Person",
      status: "ACTIVE",
      linkTypeRid: "rid.link-type.124",
    },
  ],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

export const todoWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: todoObjectType,
  linkTypes: [],
  implementsInterfaces: [],
  implementsInterfaces2: {},
  sharedPropertyTypeMapping: {},
};

export const personWithLinkTypes: ObjectTypeFullMetadata = {
  objectType: personObjectType,
  linkTypes: [],
  implementsInterfaces: [],
  implementsInterfaces2: {},
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

  [todoObjectType.apiName]: todoWithLinkTypes,
  [taskObjectType.apiName]: taskWithLinkTypes,
  [personObjectType.apiName]: personWithLinkTypes,
};
