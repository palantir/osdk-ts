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

import type { WorkflowIdInRequest } from "../../workflow/api/WorkflowIdInRequest.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { ActionType } from "../ActionType.js";
import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { RuleSetIdInRequest } from "../formatting/RuleSetIdInRequest.js";
import type { InterfaceTypeIdInRequest } from "../InterfaceTypeIdInRequest.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { RuleSetRid } from "../RuleSetRid.js";
import type { SharedPropertyTypeIdInRequest } from "../SharedPropertyTypeIdInRequest.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupIdInRequest } from "../TypeGroupIdInRequest.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface OntologyModificationResponse {
  ontologyVersion: OntologyVersion;
  createdRuleSets: Record<RuleSetIdInRequest, RuleSetRid>;
  createdWorkflows: Record<WorkflowIdInRequest, WorkflowRid>;
  createdActionTypes: Array<ActionType>;
  updatedActionTypes: Record<ActionTypeRid, ActionType>;
  createdSharedPropertyTypes: Record<
    SharedPropertyTypeIdInRequest,
    SharedPropertyTypeRid
  >;
  createdObjectTypes: Record<ObjectTypeId, ObjectTypeRid>;
  createdLinkTypes: Record<LinkTypeId, LinkTypeRid>;
  createdInterfaceTypes: Record<InterfaceTypeIdInRequest, InterfaceTypeRid>;
  createdTypeGroups: Record<TypeGroupIdInRequest, TypeGroupRid>;
}
