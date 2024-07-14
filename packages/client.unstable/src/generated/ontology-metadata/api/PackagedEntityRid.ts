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

import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
export interface PackagedEntityRid_objectTypeRid {
  type: "objectTypeRid";
  objectTypeRid: ObjectTypeRid;
}

export interface PackagedEntityRid_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: LinkTypeRid;
}

export interface PackagedEntityRid_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: ActionTypeRid;
}

export interface PackagedEntityRid_sharedPropertyTypeRid {
  type: "sharedPropertyTypeRid";
  sharedPropertyTypeRid: SharedPropertyTypeRid;
}

export interface PackagedEntityRid_interfaceTypeRid {
  type: "interfaceTypeRid";
  interfaceTypeRid: InterfaceTypeRid;
}
export type PackagedEntityRid =
  | PackagedEntityRid_objectTypeRid
  | PackagedEntityRid_linkTypeRid
  | PackagedEntityRid_actionTypeRid
  | PackagedEntityRid_sharedPropertyTypeRid
  | PackagedEntityRid_interfaceTypeRid;
