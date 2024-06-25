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

import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RuleSetRid } from "../../api/RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../../api/TypeGroupRid.js";
import type { UserId } from "../../api/UserId.js";
import type { WorkflowRid } from "../../workflow/api/WorkflowRid.js";
import type { OntologyBranchEntityModificationData } from "./OntologyBranchEntityModificationData.js";
import type { OntologyBranchSchemaMigrationModificationMetadata } from "./OntologyBranchSchemaMigrationModificationMetadata.js";

/**
 * A type to represent the modified ontology entities and the contributors of an OntologyBranch.
 */
export interface OntologyBranchModificationData {
  affectedObjectTypes: Record<
    ObjectTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedObjectTypeDatasources: Record<
    ObjectTypeRid,
    Record<DatasourceRid, OntologyBranchEntityModificationData>
  >;
  affectedObjectTypeEntityMetadatas: Record<
    ObjectTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedLinkTypes: Record<LinkTypeRid, OntologyBranchEntityModificationData>;
  affectedManyToManyLinkTypeDatasources: Record<
    LinkTypeRid,
    Record<DatasourceRid, OntologyBranchEntityModificationData>
  >;
  affectedLinkTypeEntityMetadatas: Record<
    LinkTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedRuleSets: Record<RuleSetRid, OntologyBranchEntityModificationData>;
  affectedActionTypes: Record<
    ActionTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedWorkflows: Record<WorkflowRid, OntologyBranchEntityModificationData>;
  affectedSharedPropertyTypes: Record<
    SharedPropertyTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedInterfaceTypes: Record<
    InterfaceTypeRid,
    OntologyBranchEntityModificationData
  >;
  affectedTypeGroups: Record<
    TypeGroupRid,
    OntologyBranchEntityModificationData
  >;
  affectedObjectTypeSchemaMigrations: Record<
    ObjectTypeRid,
    OntologyBranchSchemaMigrationModificationMetadata
  >;
  contributors: Array<UserId>;
}
