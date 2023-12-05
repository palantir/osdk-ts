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

import type { WorkflowIdInRequest } from "../../workflow/api/WorkflowIdInRequest.mjs";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.mjs";
import type { ActionType } from "../ActionType.mjs";
import type { ActionTypeRid } from "../ActionTypeRid.mjs";
import type { RuleSetIdInRequest } from "../formatting/RuleSetIdInRequest.mjs";
import type { InterfaceTypeIdInRequest } from "../InterfaceTypeIdInRequest.mjs";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.mjs";
import type { LinkTypeId } from "../LinkTypeId.mjs";
import type { LinkTypeRid } from "../LinkTypeRid.mjs";
import type { ObjectTypeId } from "../ObjectTypeId.mjs";
import type { ObjectTypeRid } from "../ObjectTypeRid.mjs";
import type { OntologyVersion } from "../OntologyVersion.mjs";
import type { RuleSetRid } from "../RuleSetRid.mjs";
import type { SharedPropertyTypeIdInRequest } from "../SharedPropertyTypeIdInRequest.mjs";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.mjs";
import type { TypeGroupIdInRequest } from "../TypeGroupIdInRequest.mjs";
import type { TypeGroupRid } from "../TypeGroupRid.mjs";

export interface OntologyModificationResponse {
  ontologyVersion: OntologyVersion;
  createdRuleSets: Map<RuleSetIdInRequest, RuleSetRid>;
  createdWorkflows: Map<WorkflowIdInRequest, WorkflowRid>;
  createdActionTypes: Array<ActionType>;
  updatedActionTypes: Map<ActionTypeRid, ActionType>;
  createdSharedPropertyTypes: Map<
    SharedPropertyTypeIdInRequest,
    SharedPropertyTypeRid
  >;
  createdObjectTypes: Map<ObjectTypeId, ObjectTypeRid>;
  createdLinkTypes: Map<LinkTypeId, LinkTypeRid>;
  createdInterfaceTypes: Map<InterfaceTypeIdInRequest, InterfaceTypeRid>;
  createdTypeGroups: Map<TypeGroupIdInRequest, TypeGroupRid>;
}
