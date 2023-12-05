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

import type { WorkflowCreate } from "../../workflow/api/WorkflowCreate.js";
import type { WorkflowIdInRequest } from "../../workflow/api/WorkflowIdInRequest.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { WorkflowUpdate } from "../../workflow/api/WorkflowUpdate.js";
import type { ActionTypeCreate } from "../ActionTypeCreate.js";
import type { ActionTypeIdInRequest } from "../ActionTypeIdInRequest.js";
import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { ActionTypeUpdate } from "../ActionTypeUpdate.js";
import type { RuleSet } from "../formatting/RuleSet.js";
import type { RuleSetCreate } from "../formatting/RuleSetCreate.js";
import type { RuleSetIdInRequest } from "../formatting/RuleSetIdInRequest.js";
import type { InterfaceTypeIdInRequest } from "../InterfaceTypeIdInRequest.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeId } from "../LinkTypeId.js";
import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { RuleSetRid } from "../RuleSetRid.js";
import type { SchemaMigrationInitialization } from "../schemamigrations/SchemaMigrationInitialization.js";
import type { SchemaMigrationModification } from "../schemamigrations/SchemaMigrationModification.js";
import type { SharedPropertyTypeIdInRequest } from "../SharedPropertyTypeIdInRequest.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupIdInRequest } from "../TypeGroupIdInRequest.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
import type { InterfaceTypeModification } from "./InterfaceTypeModification.js";
import type { LinkTypeEntityMetadataModifyRequest } from "./LinkTypeEntityMetadataModifyRequest.js";
import type { LinkTypeModifyRequest } from "./LinkTypeModifyRequest.js";
import type { ManyToManyLinkTypeDatasourceModifyRequest } from "./ManyToManyLinkTypeDatasourceModifyRequest.js";
import type { ObjectTypeDatasourceModifyRequest } from "./ObjectTypeDatasourceModifyRequest.js";
import type { ObjectTypeEntityMetadataModifyRequest } from "./ObjectTypeEntityMetadataModifyRequest.js";
import type { ObjectTypeModifyRequest } from "./ObjectTypeModifyRequest.js";
import type { SharedPropertyTypeModification } from "./SharedPropertyTypeModification.js";
import type { TypeGroupModification } from "./TypeGroupModification.js";
export interface OntologyModificationRequest {
  objectTypes: Map<ObjectTypeId, ObjectTypeModifyRequest>;
  objectTypeDatasources: Map<
    ObjectTypeId,
    Array<ObjectTypeDatasourceModifyRequest>
  >;
  objectTypeEntityMetadata: Map<
    ObjectTypeId,
    ObjectTypeEntityMetadataModifyRequest
  >;
  objectTypeSchemaMigrationInitializations: Map<
    ObjectTypeId,
    SchemaMigrationInitialization
  >;
  objectTypeSchemaMigrations: Map<ObjectTypeRid, SchemaMigrationModification>;
  linkTypes: Map<LinkTypeId, LinkTypeModifyRequest>;
  manyToManyLinkTypeDatasources: Map<
    LinkTypeId,
    Array<ManyToManyLinkTypeDatasourceModifyRequest>
  >;
  linkTypeEntityMetadata: Map<LinkTypeId, LinkTypeEntityMetadataModifyRequest>;
  workflowsToCreate: Map<WorkflowIdInRequest, WorkflowCreate>;
  workflowsToUpdate: Map<WorkflowRid, WorkflowUpdate>;
  workflowsToDelete: Array<WorkflowRid>;
  ruleSetsToCreate: Map<RuleSetIdInRequest, RuleSetCreate>;
  ruleSetsToUpdate: Map<RuleSetRid, RuleSet>;
  ruleSetsToDelete: Array<RuleSetRid>;
  actionTypesToCreate: Map<ActionTypeIdInRequest, ActionTypeCreate>;
  actionTypesToUpdate: Map<ActionTypeRid, ActionTypeUpdate>;
  actionTypesToDelete: Array<ActionTypeRid>;
  sharedPropertyTypesToCreate: Map<
    SharedPropertyTypeIdInRequest,
    SharedPropertyTypeModification
  >;
  sharedPropertyTypesToUpdate: Map<
    SharedPropertyTypeRid,
    SharedPropertyTypeModification
  >;
  sharedPropertyTypesToDelete: Array<SharedPropertyTypeRid>;
  interfaceTypesToCreate: Map<
    InterfaceTypeIdInRequest,
    InterfaceTypeModification
  >;
  interfaceTypesToUpdate: Map<InterfaceTypeRid, InterfaceTypeModification>;
  interfaceTypesToDelete: Array<InterfaceTypeRid>;
  typeGroupsToCreate: Map<TypeGroupIdInRequest, TypeGroupModification>;
  typeGroupsToUpdate: Map<TypeGroupRid, TypeGroupModification>;
  typeGroupsToDelete: Array<TypeGroupRid>;
  ontologyBranchRid: OntologyBranchRid | undefined;
  expectedOntologyVersion: OntologyVersion | undefined;
  expectedLastRebasedOntologyVersion: OntologyVersion | undefined;
  rebasedOntologyVersion: OntologyVersion | undefined;
  validateActiveEntityDeletions: boolean | undefined;
  useRoles: boolean | undefined;
}
