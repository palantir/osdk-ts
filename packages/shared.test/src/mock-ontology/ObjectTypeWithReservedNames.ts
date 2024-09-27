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

import type {
  ObjectMetadata,
  ObjectTypeLinkDefinition,
  VersionBound,
} from "@osdk/api";

export interface ObjectTypeWithReservedNamesDef
  extends ObjectMetadata, VersionBound<"0.15.0">
{
  type: "object";
  apiName: "ObjectTypeWithReservedNames";
  primaryKeyApiName: "id";
  primaryKeyType: "integer";
  links: {
    const: ObjectTypeLinkDefinition<ObjectTypeWithReservedNamesDef, false>;
  };
  properties: {
    id: {
      type: "integer";
      multiplicity: false;
    };
    catch: {
      multiplicity: false;
      type: "integer";
    };
  };
}

export const ObjectTypeWithReservedNames: ObjectTypeWithReservedNamesDef = {
  type: "object",
  apiName: "ObjectTypeWithReservedNames",
  primaryKeyApiName: "id" as const,
  primaryKeyType: "integer",
  links: {
    const: {
      targetType: "ObjectTypeWithReservedNames",
      multiplicity: false,
    },
  },
  properties: {
    id: {
      type: "integer",
      multiplicity: false,
    },
    catch: {
      multiplicity: false,
      type: "integer",
    },
  },
  icon: {
    type: "blueprint",
    name: "icon",
    color: "blue",
  },
  titleProperty: "id" as const,
  displayName: "ObjectTypeWithReservedNames",
  pluralDisplayName: "",
  status: "ACTIVE",
  interfaceMap: {},
  inverseInterfaceMap: {},
  rid: "",
};
