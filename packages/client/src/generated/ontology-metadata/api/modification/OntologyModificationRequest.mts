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

import type { WorkflowCreate } from "../../workflow/api/WorkflowCreate.mjs";
import type { WorkflowIdInRequest } from "../../workflow/api/WorkflowIdInRequest.mjs";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.mjs";
import type { WorkflowUpdate } from "../../workflow/api/WorkflowUpdate.mjs";
import type { ActionTypeCreate } from "../ActionTypeCreate.mjs";
import type { ActionTypeIdInRequest } from "../ActionTypeIdInRequest.mjs";
import type { ActionTypeRid } from "../ActionTypeRid.mjs";
import type { ActionTypeUpdate } from "../ActionTypeUpdate.mjs";
import type { RuleSet } from "../formatting/RuleSet.mjs";
import type { RuleSetCreate } from "../formatting/RuleSetCreate.mjs";
import type { RuleSetIdInRequest } from "../formatting/RuleSetIdInRequest.mjs";
import type { InterfaceTypeIdInRequest } from "../InterfaceTypeIdInRequest.mjs";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.mjs";
import type { LinkTypeId } from "../LinkTypeId.mjs";
import type { ObjectTypeId } from "../ObjectTypeId.mjs";
import type { ObjectTypeRid } from "../ObjectTypeRid.mjs";
import type { OntologyBranchRid } from "../OntologyBranchRid.mjs";
import type { OntologyVersion } from "../OntologyVersion.mjs";
import type { RuleSetRid } from "../RuleSetRid.mjs";
import type { SchemaMigrationInitialization } from "../schemamigrations/SchemaMigrationInitialization.mjs";
import type { SchemaMigrationModification } from "../schemamigrations/SchemaMigrationModification.mjs";
import type { SharedPropertyTypeIdInRequest } from "../SharedPropertyTypeIdInRequest.mjs";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.mjs";
import type { TypeGroupIdInRequest } from "../TypeGroupIdInRequest.mjs";
import type { TypeGroupRid } from "../TypeGroupRid.mjs";
import type { InterfaceTypeModification } from "./InterfaceTypeModification.mjs";
import type { LinkTypeEntityMetadataModifyRequest } from "./LinkTypeEntityMetadataModifyRequest.mjs";
import type { LinkTypeModifyRequest } from "./LinkTypeModifyRequest.mjs";
import type { ManyToManyLinkTypeDatasourceModifyRequest } from "./ManyToManyLinkTypeDatasourceModifyRequest.mjs";
import type { ObjectTypeDatasourceModifyRequest } from "./ObjectTypeDatasourceModifyRequest.mjs";
import type { ObjectTypeEntityMetadataModifyRequest } from "./ObjectTypeEntityMetadataModifyRequest.mjs";
import type { ObjectTypeModifyRequest } from "./ObjectTypeModifyRequest.mjs";
import type { SharedPropertyTypeModification } from "./SharedPropertyTypeModification.mjs";
import type { TypeGroupModification } from "./TypeGroupModification.mjs";

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
