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

import type { ActionTypeRid } from "../../api/ActionTypeRid.mjs";
import type { DatasourceRid } from "../../api/DatasourceRid.mjs";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.mjs";
import type { LinkTypeRid } from "../../api/LinkTypeRid.mjs";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.mjs";
import type { RuleSetRid } from "../../api/RuleSetRid.mjs";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.mjs";
import type { TypeGroupRid } from "../../api/TypeGroupRid.mjs";
import type { UserId } from "../../api/UserId.mjs";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.mjs";
import type { OntologyBranchEntityModificationData } from "./OntologyBranchEntityModificationData.mjs";
import type { OntologyBranchSchemaMigrationModificationMetadata } from "./OntologyBranchSchemaMigrationModificationMetadata.mjs";

export interface OntologyBranchModificationData {
  affectedObjectTypes: Map<ObjectTypeRid, OntologyBranchEntityModificationData>;
  affectedObjectTypeDatasources: Map<
    ObjectTypeRid,
    Map<DatasourceRid, OntologyBranchEntityModificationData>
  >;
  affectedObjectTypeEntityMetadatas: Map<
    ObjectTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedLinkTypes: Map<LinkTypeRid, OntologyBranchEntityModificationData>;
  affectedManyToManyLinkTypeDatasources: Map<
    LinkTypeRid,
    Map<DatasourceRid, OntologyBranchEntityModificationData>
  >;
  affectedLinkTypeEntityMetadatas: Map<
    LinkTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedRuleSets: Map<RuleSetRid, OntologyBranchEntityModificationData>;
  affectedActionTypes: Map<ActionTypeRid, OntologyBranchEntityModificationData>;
  affectedWorkflows: Map<WorkflowRid, OntologyBranchEntityModificationData>;
  affectedSharedPropertyTypes: Map<
    SharedPropertyTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedInterfaceTypes: Map<
    InterfaceTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedTypeGroups: Map<TypeGroupRid, OntologyBranchEntityModificationData>;
  affectedObjectTypeSchemaMigrations: Map<
    ObjectTypeRid,
    OntologyBranchSchemaMigrationModificationMetadata
  >;
  contributors: Array<UserId>;
}
