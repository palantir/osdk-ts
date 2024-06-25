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

import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface PermissionsOntologyEntity_objectType {
  type: "objectType";
  objectType: ObjectTypeRid;
}

export interface PermissionsOntologyEntity_linkType {
  type: "linkType";
  linkType: LinkTypeRid;
}

export interface PermissionsOntologyEntity_actionType {
  type: "actionType";
  actionType: ActionTypeRid;
}

export interface PermissionsOntologyEntity_workflow {
  type: "workflow";
  workflow: WorkflowRid;
}

export interface PermissionsOntologyEntity_sharedPropertyType {
  type: "sharedPropertyType";
  sharedPropertyType: SharedPropertyTypeRid;
}

export interface PermissionsOntologyEntity_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeRid;
}

export interface PermissionsOntologyEntity_typeGroup {
  type: "typeGroup";
  typeGroup: TypeGroupRid;
}
/**
 * The ontology entity to apply role grants to.
 */
export type PermissionsOntologyEntity =
  | PermissionsOntologyEntity_objectType
  | PermissionsOntologyEntity_linkType
  | PermissionsOntologyEntity_actionType
  | PermissionsOntologyEntity_workflow
  | PermissionsOntologyEntity_sharedPropertyType
  | PermissionsOntologyEntity_interfaceType
  | PermissionsOntologyEntity_typeGroup;
