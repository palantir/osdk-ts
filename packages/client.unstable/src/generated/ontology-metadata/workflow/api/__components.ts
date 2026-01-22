/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  ActionTypeIdentifier as _api_ActionTypeIdentifier,
  ActionTypeParameterIdentifier as _api_ActionTypeParameterIdentifier,
  ActionTypeRid as _api_ActionTypeRid,
  FunctionRid as _api_FunctionRid,
  FunctionVersion as _api_FunctionVersion,
  LinkTypeId as _api_LinkTypeId,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectTypeId as _api_ObjectTypeId,
  ObjectTypeRid as _api_ObjectTypeRid,
  ParameterRid as _api_ParameterRid,
  RelationCardinality as _api_RelationCardinality,
  WorkflowObjectTypeTraitReference as _api_WorkflowObjectTypeTraitReference,
} from "../../api/__components.js";
import type { BaseParameterType as _api_types_BaseParameterType } from "../../api/types/__components.js";

/**
 * This is used in `WorkflowArchetype` to represent an identifier to which an `ActionType` will be associated to in a `Workflow` definition.
 */
export interface ActionTypeArchetype {
  description: ActionTypeArchetypeDescription;
  displayName: ActionTypeArchetypeDisplayName;
  id: ActionTypeArchetypeId;
  parameters: Record<
    ActionTypeParameterArchetypeId,
    ActionTypeParameterArchetype
  >;
  required: boolean;
}
/**
 * A description of the `ActionTypeArchetype`. The maximum size allowed is 200 characters.
 */
export type ActionTypeArchetypeDescription = string;

/**
 * Represents a display name for the `ActionTypeArchetype`. The maximum allowed size is 100 characters. This is human readable and is safe to log.
 */
export type ActionTypeArchetypeDisplayName = string;

/**
 * An identifier for an `ActionType` specification as part of a `WorkflowArchetype`. This is human readable and
 * is safe to log.
 */
export type ActionTypeArchetypeId = string;

/**
 * This is used in `ActionTypeArchetype` to represent an identifier to which an `ActionTypeParameter` will be associated to in a `Workflow` definition.
 */
export interface ActionTypeParameterArchetype {
  description: ActionTypeParameterArchetypeDescription;
  displayName: ActionTypeParameterArchetypeDisplayName;
  id: ActionTypeParameterArchetypeId;
  required: boolean;
  type: _api_types_BaseParameterType;
}
/**
 * A description of the `ActionTypeParameterArchetype`. The maximum size allowed is 200 characters.
 */
export type ActionTypeParameterArchetypeDescription = string;

/**
 * Represents a display name for the `ActionTypeParameterArchetype`. The maximum allowed size is 100 characters. This is human readable and is safe to log.
 */
export type ActionTypeParameterArchetypeDisplayName = string;

/**
 * An identifier for an ActionType's `Parameter` specification as part of a `WorkflowArchetype`. This is human readable and
 * is safe to log.
 */
export type ActionTypeParameterArchetypeId = string;

/**
 * This is used in `WorkflowArchetype` to represent an identifier to which function will be associated to in a `Workflow` definition.
 */
export interface FunctionArchetype {
  description: FunctionArchetypeDescription;
  displayName: FunctionArchetypeDisplayName;
  id: FunctionArchetypeId;
  required: boolean;
}
/**
 * A description of the `FunctionArchetype`. The maximum size allowed is 200 characters.
 */
export type FunctionArchetypeDescription = string;

/**
 * Represents a display name for the `FunctionArchetype`. The maximum allowed size is 100 characters. This is human readable and is safe to log.
 */
export type FunctionArchetypeDisplayName = string;

/**
 * An identifier for a Function specification as part of a `WorkflowArchetype`.
 */
export type FunctionArchetypeId = string;

/**
 * This is used in `WorkflowArchetype` to represent an identifier to which an `LinkType` will be associated to in a `Workflow` definition.
 */
export interface LinkTypeArchetype {
  description: LinkTypeArchetypeDescription;
  displayName: LinkTypeArchetypeDisplayName;
  fromObjectType: ObjectTypeArchetypeId;
  id: LinkTypeArchetypeId;
  relationCardinality?: _api_RelationCardinality | null | undefined;
  requiredIfObjectTypeArchetypesDefined: boolean;
  toObjectType: ObjectTypeArchetypeId;
}
/**
 * A description of the `LinkTypeArchetype`. The maximum size allowed is 200 characters.
 */
export type LinkTypeArchetypeDescription = string;

/**
 * Represents a display name for the `LinkTypeArchetype`. The maximum allowed size is 100 characters. This is human readable and is safe to log.
 */
export type LinkTypeArchetypeDisplayName = string;

/**
 * An identifier for a `LinkType` specification as part of a `WorkflowArchetype`. This is human readable and
 * is safe to log.
 */
export type LinkTypeArchetypeId = string;

/**
 * Request to load a page of all Workflows visible to the user in an Ontology.
 */
export interface LoadAllWorkflowsPageRequest {
  loadRedacted?: boolean | null | undefined;
  pageToken?: LoadAllWorkflowsPageToken | null | undefined;
}
/**
 * Response to LoadAllWorkflowsPageRequest.
 */
export interface LoadAllWorkflowsPageResponse {
  nextPageToken?: LoadAllWorkflowsPageToken | null | undefined;
  workflows: Record<WorkflowRid, Workflow>;
}
/**
 * A paging token used to retrieve further pages of a LoadAllWorkflowsPageResponse. Clients shouldn't make any assumptions about
 * the content of the token and it should not be parsed/modified.
 */
export type LoadAllWorkflowsPageToken = string;

/**
 * This is used in `WorkflowArchetype` to represent an identifier to which an `ObjectType` will be associated to in a `Workflow` definition.
 */
export interface ObjectTypeArchetype {
  description: ObjectTypeArchetypeDescription;
  displayName: ObjectTypeArchetypeDisplayName;
  id: ObjectTypeArchetypeId;
  objectTypeTraitReference?:
    | _api_WorkflowObjectTypeTraitReference
    | null
    | undefined;
  required: boolean;
}
/**
 * A description of the `ObjectTypeArchetype`. The maximum size allowed is 200 characters.
 */
export type ObjectTypeArchetypeDescription = string;

/**
 * Represents a display name for the `ObjectTypeArchetype`. The maximum allowed size is 100 characters. This is human readable and is safe to log.
 */
export type ObjectTypeArchetypeDisplayName = string;

/**
 * An identifier for an `ObjectType` specification as part of a `WorkflowArchetype`. This is human readable and
 * is safe to log.
 */
export type ObjectTypeArchetypeId = string;

/**
 * A workflow represents how a subset of the ontology components interact with each other to contruct an end-to-end
 * functioning paradigm.
 */
export interface Workflow {
  actionsTypes: Record<ActionTypeArchetypeId, WorkflowActionType>;
  description: WorkflowDescription;
  displayName: WorkflowDisplayName;
  functions: Record<FunctionArchetypeId, WorkflowFunction>;
  linkTypes: Record<LinkTypeArchetypeId, _api_LinkTypeRid>;
  objectTypes: Record<ObjectTypeArchetypeId, _api_ObjectTypeRid>;
  redacted?: boolean | null | undefined;
  rid: WorkflowRid;
  verticalReference?: WorkflowVerticalReference | null | undefined;
  workflowArchetypeReference: WorkflowArchetypeReference;
}
/**
 * A `WorkflowActionType` is an instantiation of a `ActionTypeArchetypeDefinition`, providing a concrete `ActionTypeRid`.
 * This represents a set of properties for referencing an ActionType in a `Workflow` definition.
 */
export interface WorkflowActionType {
  parameters: Record<ActionTypeParameterArchetypeId, _api_ParameterRid>;
  rid: _api_ActionTypeRid;
}
/**
 * A `WorkflowActionTypeV2` is an instantiation of a `ActionTypeArchetypeDefinition`, providing a concrete `ActionTypeIdentifier`.
 * This represents a set of properties for referencing an ActionType in a `Workflow` definition.
 */
export interface WorkflowActionTypeV2 {
  identifier: _api_ActionTypeIdentifier;
  parameters: Record<
    ActionTypeParameterArchetypeId,
    _api_ActionTypeParameterIdentifier
  >;
}
/**
 * WorkflowArchetype represent a set of Ontology entities along with some metadata used to represent opiniated and repeatable workflow patterns.
 */
export interface WorkflowArchetype {
  actionTypeArchetypes: Array<ActionTypeArchetype>;
  description: WorkflowArchetypeDescription;
  displayName: WorkflowArchetypeDisplayName;
  functionArchetypes: Array<FunctionArchetype>;
  id: WorkflowArchetypeId;
  linkTypeArchetypes: Array<LinkTypeArchetype>;
  objectTypeArchetypes: Array<ObjectTypeArchetype>;
  version: WorkflowArchetypeVersion;
}
/**
 * A description of the `WorkflowArchetype`. The maximum size allowed is 200 characters.
 */
export type WorkflowArchetypeDescription = string;

/**
 * Represents a display name for the `WorkflowArchetype`. The maximum allowed size is 100 characters. This is human readable and is safe to log.
 */
export type WorkflowArchetypeDisplayName = string;

/**
 * A human readable id for the `WorkflowArchetype`. This is also used as an identifier of a `WorkflowArchetype` in
 * a `Workflow` definition. This is safe to log.
 */
export type WorkflowArchetypeId = string;

/**
 * A type to uniquely identify a specific version of a `WorkflowArchetype` in a `Workflow` definition.
 */
export interface WorkflowArchetypeReference {
  workflowArchetypeId: WorkflowArchetypeId;
  workflowArchetypeVersion: WorkflowArchetypeVersion;
}
/**
 * This represents the version of the WorkflowArchetype. This is a human readable field and is safe to log.
 */
export type WorkflowArchetypeVersion = string;

/**
 * A type to represent the entities of a `Workflow` that is being created.
 */
export interface WorkflowCreate {
  workflow: WorkflowModification;
}
/**
 * A description of a `Workflow`. The maximum size allowed is 500 characters and is not safe to log.
 */
export type WorkflowDescription = string;

/**
 * A string representing the name of the `Workflow` for display purposes. This is not guaranteed
 * to be unique. The maximum size allowed is 100 characters and is not safe to log.
 */
export type WorkflowDisplayName = string;

/**
 * A `WorkflowFunction` is a type to uniquely represent a `Function` in a `Workflow` definition.
 */
export interface WorkflowFunction {
  rid: _api_FunctionRid;
  version: _api_FunctionVersion;
}
/**
 * An identifier of a `Workflow` used for referencing a Workflow in the same request it is created in. This is guaranteed to be unique and is safe to log.
 */
export type WorkflowIdInRequest = string;

/**
 * A type to represent a `Workflow` in its create and update request. This holds all the properties that a `Workflow` has except `WorkflowRid`.
 */
export interface WorkflowModification {
  actionsTypes: Record<ActionTypeArchetypeId, WorkflowActionType>;
  actionsTypesV2: Record<ActionTypeArchetypeId, WorkflowActionTypeV2>;
  description: WorkflowDescription;
  displayName: WorkflowDisplayName;
  functions: Record<FunctionArchetypeId, WorkflowFunction>;
  linkTypes: Record<LinkTypeArchetypeId, _api_LinkTypeId>;
  objectTypes: Record<ObjectTypeArchetypeId, _api_ObjectTypeId>;
  verticalReference?: WorkflowVerticalReference | null | undefined;
  workflowArchetypeReference: WorkflowArchetypeReference;
}
/**
 * An rid uniquely identifying a `Workflow`. This rid is a randomly generated identifier and is safe
 * to log.
 */
export type WorkflowRid = string;

/**
 * A type to represent the entities of a `Workflow` that is being updated.
 */
export interface WorkflowUpdate {
  workflow: WorkflowModification;
}
/**
 * An identifier for a vertical of a specific type with which all the workflows belonging to the same vertical group are to be associated.
 */
export type WorkflowVerticalId = string;

/**
 * A combination of `WorkflowVerticalId` and `WorkflowVerticalType` to uniquely identify a Vertical instance with which a `Workflow` is associated.
 */
export interface WorkflowVerticalIdentifierV2 {
  useCaseTemplateId: string;
  verticalId: WorkflowVerticalId;
  verticalTemplateReference: WorkflowVerticalTemplateReference;
}
export interface WorkflowVerticalReference_verticalIdentifier {
  type: "verticalIdentifier";
  verticalIdentifier: WorkflowVerticalIdentifierV2;
}
/**
 * A type to uniquely identify a Vertical instance with which a Workflow is associated.
 */
export type WorkflowVerticalReference =
  WorkflowVerticalReference_verticalIdentifier;

/**
 * The reference to a vertical template.
 */
export interface WorkflowVerticalTemplateReference {
  id: string;
  version: string;
}
