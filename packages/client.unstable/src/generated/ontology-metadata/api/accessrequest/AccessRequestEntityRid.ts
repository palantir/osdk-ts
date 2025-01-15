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

import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface AccessRequestEntityRid_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}

export interface AccessRequestEntityRid_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: LinkTypeRid;
}

export interface AccessRequestEntityRid_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: ActionTypeRid;
}

export interface AccessRequestEntityRid_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}

export interface AccessRequestEntityRid_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: InterfaceTypeRid;
}

export interface AccessRequestEntityRid_typeGroupRid {
  type: "typeGroupRid";
  typeGroupRid: TypeGroupRid;
}
/**
 * the entity rids we are requesting access for
 */
export type AccessRequestEntityRid =
  | AccessRequestEntityRid_objectTypeRid
  | AccessRequestEntityRid_linkTypeRid
  | AccessRequestEntityRid_actionTypeRid
  | AccessRequestEntityRid_sharedPropertyTypeRid
  | AccessRequestEntityRid_interfaceTypeRid
  | AccessRequestEntityRid_typeGroupRid;
