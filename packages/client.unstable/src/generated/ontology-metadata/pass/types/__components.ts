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

import type { ActionTypeRid as _api_ActionTypeRid } from "../../api/__components.js";
import type { OntologyBranchRid as _api_OntologyBranchRid } from "../../api/__components.js";
import type { GlobalBranchRid as _api_GlobalBranchRid } from "../../api/__components.js";
import type { OntologyVersion as _api_OntologyVersion } from "../../api/__components.js";
import type { MarkingId as _api_MarkingId } from "../../api/__components.js";
import type { Redacted as _api_Redacted } from "../../api/__components.js";
import type { DatasetRid as _api_DatasetRid } from "../../api/__components.js";
import type { FunctionRid as _api_FunctionRid } from "../../api/__components.js";
import type { InterfaceTypeRid as _api_InterfaceTypeRid } from "../../api/__components.js";
import type { LinkTypeRid as _api_LinkTypeRid } from "../../api/__components.js";
import type { MediaSetRid as _api_MediaSetRid } from "../../api/__components.js";
import type { MediaSetBranchRid as _api_MediaSetBranchRid } from "../../api/__components.js";
import type { MediaSetViewRid as _api_MediaSetViewRid } from "../../api/__components.js";
import type { ObjectTypeRid as _api_ObjectTypeRid } from "../../api/__components.js";
import type { PropertyTypeRid as _api_PropertyTypeRid } from "../../api/__components.js";
import type { CompassProjectRid as _api_CompassProjectRid } from "../../api/__components.js";
import type { ObjectSetRid as _api_ObjectSetRid } from "../../api/__components.js";
import type { ValueTypeRid as _api_ValueTypeRid } from "../../api/__components.js";
import type { WebhookVersion as _api_WebhookVersion } from "../../api/__components.js";
import type { WebhookRid as _api_WebhookRid } from "../../api/__components.js";
export interface ActionTypeExecutionPassSpec {
  actionTypeRid: _api_ActionTypeRid;
  branch?: _api_OntologyBranchRid | null | undefined;
  globalBranch?: _api_GlobalBranchRid | null | undefined;
}
export interface ActionTypePassSpec {
  actionTypeRid: _api_ActionTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface AllObjectTypeProperties {}
export interface ArtifactsRepositoryPassSpec {
  cloneRepositoryRid?: ArtifactsRepositoryRid | null | undefined;
  repositoryRid: ArtifactsRepositoryRid;
}
export type ArtifactsRepositoryRid = string;
export interface Authorization_markingIds {
  type: "markingIds";
  markingIds: Array<Array<_api_MarkingId>>;
}

export interface Authorization_redacted {
  type: "redacted";
  redacted: _api_Redacted;
}
export type Authorization = Authorization_markingIds | Authorization_redacted;

export interface AutomationPassSpec {
  branch?: _api_GlobalBranchRid | null | undefined;
  monitorRid: MonitorRid;
  monitorVersion: MonitorVersion;
}
export interface Branch_branchId {
  type: "branchId";
  branchId: string;
}

export interface Branch_redacted {
  type: "redacted";
  redacted: _api_Redacted;
}
export type Branch = Branch_branchId | Branch_redacted;

export type Build2SecurityRid = string;
export interface Build2SecurityRidPassSpec {
  securityRid: Build2SecurityRid;
}
export interface CatalogDatasetPassSpec {
  branch: Branch;
  datasetRid: _api_DatasetRid;
  endTransactionRid?: TransactionRid | null | undefined;
  startTransactionRid?: TransactionRid | null | undefined;
}
export interface ExecutionLogsPassSpec {
  traceOwningRid: TraceOwningRid;
}
export interface ForkPassSpec {
  forkRid: ForkRid;
  grantUpdateFork: boolean;
}
export type ForkRid = string;
export interface FunctionPassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  functionRid: _api_FunctionRid;
  globalBranch?: _api_GlobalBranchRid | null | undefined;
  version: FunctionVersion;
}
export interface FunctionV2PassSpec {
  functionRid: _api_FunctionRid;
  version: FunctionVersion;
}
export interface FunctionVersion_version {
  type: "version";
  version: string;
}

export interface FunctionVersion_redacted {
  type: "redacted";
  redacted: _api_Redacted;
}
export type FunctionVersion =
  | FunctionVersion_version
  | FunctionVersion_redacted;

export interface InputMetadataViolation_inputReadAuthorization {
  type: "inputReadAuthorization";
  inputReadAuthorization: InputReadAuthorizationViolation;
}

export interface InputMetadataViolation_inputRequiredReadAuthorization {
  type: "inputRequiredReadAuthorization";
  inputRequiredReadAuthorization: InputRequiredReadAuthorizationViolation;
}

export interface InputMetadataViolation_resourceReadAuthorization {
  type: "resourceReadAuthorization";
  resourceReadAuthorization: ResourceReadAuthorizationViolation;
}

export interface InputMetadataViolation_resourceWriteAuthorization {
  type: "resourceWriteAuthorization";
  resourceWriteAuthorization: ResourceWriteAuthorizationViolation;
}

export interface InputMetadataViolation_projectContext {
  type: "projectContext";
  projectContext: ProjectContextViolation;
}
/**
 * Input metadata violations returned by PASS. These are modeled after the
 * PASS validate, save and activate input metadata violations
 */
export type InputMetadataViolation =
  | InputMetadataViolation_inputReadAuthorization
  | InputMetadataViolation_inputRequiredReadAuthorization
  | InputMetadataViolation_resourceReadAuthorization
  | InputMetadataViolation_resourceWriteAuthorization
  | InputMetadataViolation_projectContext;

/**
 * The declared input read authorization is not satisfied by a dependency's read authorization.
 *
 * For example, if the declared read authorization is [MarkingA, MarkingB] but a dependency's read authorization
 * is [MarkingA], then the declared read authorization would have more access than the dependency permits.
 */
export interface InputReadAuthorizationViolation {
  dependency: PassSpec;
  dependencyReadAuthorization: Authorization;
  input: PassSpec;
  inputReadAuthorization: Authorization;
}
/**
 * The declared input read authorization does not satisfy a dependency's required read authorization.
 *
 * For example, if the declared read authorization is [MarkingA] but a dependency's required read authorization
 * is [MarkingA, MarkingB], then the declared read authorization would have less access than the dependency
 * requires.
 */
export interface InputRequiredReadAuthorizationViolation {
  dependency: PassSpec;
  dependencyRequiredReadAuthorization: Authorization;
  input: PassSpec;
  inputReadAuthorization: Authorization;
}
export interface InterfaceTypePassSpec {
  globalBranch?: _api_GlobalBranchRid | null | undefined;
  interfaceTypeRid: _api_InterfaceTypeRid;
}
export interface InterfaceTypeV2PassSpec {
  interfaceTypeRid: _api_InterfaceTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface LinkTypePassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  linkType: _api_LinkTypeRid;
}
export interface LinkTypeV2PassSpec {
  linkType: _api_LinkTypeRid;
  ontologyVersion: _api_OntologyVersion;
}
export interface ListenerPassSpec {
  listenerTargetRid: ListenerTargetRid;
}
export type ListenerTargetRid = string;
export interface LmsAttribution_rids {
  type: "rids";
  rids: Array<string>;
}

export interface LmsAttribution_redacted {
  type: "redacted";
  redacted: _api_Redacted;
}
export type LmsAttribution = LmsAttribution_rids | LmsAttribution_redacted;

export type LmsModelRid = string;
export interface LmsPassSpec {
  lmsAttribution: LmsAttribution;
  lmsModelRid: LmsModelRid;
}
export interface LogicExecutionPassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  functionId: LogicFunctionId;
  globalBranch?: _api_GlobalBranchRid | null | undefined;
  logicRid: LogicRid;
  version: LogicVersionId;
}
export type LogicFunctionId = string;
export type LogicRid = string;
export type LogicVersionId = string;
export interface MagritteSourcePassSpec {
  sourceRid: MagritteSourceRid;
}
/**
 * Rid for a Magritte Source, which holds settings for connecting to/from external systems.
 */
export type MagritteSourceRid = string;
export interface MediaSetPassSpec {
  branch?: Branch | null | undefined;
  giveAccessToAllViews?: boolean | null | undefined;
  mediaSetRid: _api_MediaSetRid;
  mediaSetViewPointer?: MediaSetViewPointer | null | undefined;
}
export interface MediaSetViewPointer_branch {
  type: "branch";
  branch: Branch;
}

export interface MediaSetViewPointer_branchRid {
  type: "branchRid";
  branchRid: _api_MediaSetBranchRid;
}

export interface MediaSetViewPointer_viewRid {
  type: "viewRid";
  viewRid: _api_MediaSetViewRid;
}
/**
 * An entity that can be resolved to a specific view of a media set.
 */
export type MediaSetViewPointer =
  | MediaSetViewPointer_branch
  | MediaSetViewPointer_branchRid
  | MediaSetViewPointer_viewRid;

/**
 * A monitor resource identifier.
 */
export type MonitorRid = string;

/**
 * A monitor version.
 */
export type MonitorVersion = number;
export interface ObjectTypePassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  objectType: _api_ObjectTypeRid;
  properties: ObjectTypePropertySelection;
}
export interface ObjectTypePropertySelection_all {
  type: "all";
  all: AllObjectTypeProperties;
}

export interface ObjectTypePropertySelection_selected {
  type: "selected";
  selected: Array<_api_PropertyTypeRid>;
}
export type ObjectTypePropertySelection =
  | ObjectTypePropertySelection_all
  | ObjectTypePropertySelection_selected;

export interface ObjectTypeV2PassSpec {
  objectType: _api_ObjectTypeRid;
  ontologyVersion: _api_OntologyVersion;
  properties: ObjectTypePropertySelection;
}
export type OntologyTransactionId = string;
export type PassRequestId = string;
export interface PassSpec_actionTypeExecution {
  type: "actionTypeExecution";
  actionTypeExecution: ActionTypeExecutionPassSpec;
}

export interface PassSpec_actionType {
  type: "actionType";
  actionType: ActionTypePassSpec;
}

export interface PassSpec_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: ArtifactsRepositoryPassSpec;
}

export interface PassSpec_automation {
  type: "automation";
  automation: AutomationPassSpec;
}

export interface PassSpec_build2SecurityRid {
  type: "build2SecurityRid";
  build2SecurityRid: Build2SecurityRidPassSpec;
}

export interface PassSpec_catalogDataset {
  type: "catalogDataset";
  catalogDataset: CatalogDatasetPassSpec;
}

export interface PassSpec_executionLogs {
  type: "executionLogs";
  executionLogs: ExecutionLogsPassSpec;
}

export interface PassSpec_fork {
  type: "fork";
  fork: ForkPassSpec;
}

export interface PassSpec_function {
  type: "function";
  function: FunctionPassSpec;
}

export interface PassSpec_functionV2 {
  type: "functionV2";
  functionV2: FunctionV2PassSpec;
}

export interface PassSpec_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypePassSpec;
}

export interface PassSpec_interfaceTypeV2 {
  type: "interfaceTypeV2";
  interfaceTypeV2: InterfaceTypeV2PassSpec;
}

export interface PassSpec_linkType {
  type: "linkType";
  linkType: LinkTypePassSpec;
}

export interface PassSpec_linkTypeV2 {
  type: "linkTypeV2";
  linkTypeV2: LinkTypeV2PassSpec;
}

export interface PassSpec_listener {
  type: "listener";
  listener: ListenerPassSpec;
}

export interface PassSpec_lms {
  type: "lms";
  lms: LmsPassSpec;
}

export interface PassSpec_logicExecution {
  type: "logicExecution";
  logicExecution: LogicExecutionPassSpec;
}

export interface PassSpec_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourcePassSpec;
}

export interface PassSpec_mediaSet {
  type: "mediaSet";
  mediaSet: MediaSetPassSpec;
}

export interface PassSpec_objectType {
  type: "objectType";
  objectType: ObjectTypePassSpec;
}

export interface PassSpec_objectTypeV2 {
  type: "objectTypeV2";
  objectTypeV2: ObjectTypeV2PassSpec;
}

export interface PassSpec_request {
  type: "request";
  request: RequestPassSpec;
}

export interface PassSpec_savedObjectSet {
  type: "savedObjectSet";
  savedObjectSet: SavedObjectSetPassSpec;
}

export interface PassSpec_sdk {
  type: "sdk";
  sdk: SdkPassSpec;
}

export interface PassSpec_stream {
  type: "stream";
  stream: StreamPassSpec;
}

export interface PassSpec_temporaryObjectSet {
  type: "temporaryObjectSet";
  temporaryObjectSet: TemporaryObjectSetPassSpec;
}

export interface PassSpec_transaction {
  type: "transaction";
  transaction: TransactionPassSpec;
}

export interface PassSpec_valueType {
  type: "valueType";
  valueType: ValueTypePassSpec;
}

export interface PassSpec_versionedObjectSet {
  type: "versionedObjectSet";
  versionedObjectSet: VersionedObjectSetPassSpec;
}

export interface PassSpec_webhook {
  type: "webhook";
  webhook: WebhookPassSpec;
}

export interface PassSpec_widget {
  type: "widget";
  widget: WidgetPassSpec;
}
export type PassSpec =
  | PassSpec_actionTypeExecution
  | PassSpec_actionType
  | PassSpec_artifactsRepository
  | PassSpec_automation
  | PassSpec_build2SecurityRid
  | PassSpec_catalogDataset
  | PassSpec_executionLogs
  | PassSpec_fork
  | PassSpec_function
  | PassSpec_functionV2
  | PassSpec_interfaceType
  | PassSpec_interfaceTypeV2
  | PassSpec_linkType
  | PassSpec_linkTypeV2
  | PassSpec_listener
  | PassSpec_lms
  | PassSpec_logicExecution
  | PassSpec_magritteSource
  | PassSpec_mediaSet
  | PassSpec_objectType
  | PassSpec_objectTypeV2
  | PassSpec_request
  | PassSpec_savedObjectSet
  | PassSpec_sdk
  | PassSpec_stream
  | PassSpec_temporaryObjectSet
  | PassSpec_transaction
  | PassSpec_valueType
  | PassSpec_versionedObjectSet
  | PassSpec_webhook
  | PassSpec_widget;

/**
 * An input has dependencies which are not present in the input's project context.
 */
export interface ProjectContextViolation {
  constraintImportRid: string;
  dependency: PassSpec;
  input: PassSpec;
  projectResourceRid: string;
  projectRid: _api_CompassProjectRid;
}
export interface RequestPassSpec {
  requestId: PassRequestId;
}
/**
 * The declared read authorization does not satisfy the authorization of a resource that a dependency reads
 * from.
 *
 * For example, if the declared read authorization is [MarkingA] but a dependency indicates that it
 * reads from a resource whose authorization is [MarkingA, MarkingB], then the declared read authorization would
 * not be able to access the resource.
 */
export interface ResourceReadAuthorizationViolation {
  constraintReadRid: string;
  constraintReadRidAuthorization: Authorization;
  dependency: PassSpec;
  input: PassSpec;
  inputReadAuthorization: Authorization;
}
/**
 * The declared write authorization is not satisfied by the authorization of a resource that a dependency writes
 * to.
 *
 * For example, if the declared write authorization is [MarkingA, MarkingB] but a dependency indicates that it
 * writes to a resource whose authorization is [MarkingA], then the declared write authorization would not
 * require adequate declassify checks to write to that resource.
 */
export interface ResourceWriteAuthorizationViolation {
  constraintWriteRid: string;
  constraintWriteRidAuthorization: Authorization;
  dependency: PassSpec;
  input: PassSpec;
  inputWriteAuthorization: Authorization;
}
export interface SavedObjectSetPassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  objectSetRid: _api_ObjectSetRid;
}
export type SdkPackageRid = string;
export interface SdkPassSpec {
  branch?: _api_GlobalBranchRid | null | undefined;
  sdkPackageRid: SdkPackageRid;
  sdkVersion: SdkVersion;
}
/**
 * A SemVer version string corresponding to the version of this SDK.
 */
export type SdkVersion = string;
export interface StreamPassSpec {
  branch: Branch;
  streamDatasetRid: _api_DatasetRid;
}
export interface TemporaryObjectSetPassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  temporaryObjectSetRid: _api_ObjectSetRid;
}
export type TraceOwningRid = string;
export interface TransactionPassSpec {
  transactionId: OntologyTransactionId;
}
export type TransactionRid = string;
export interface ValueTypePassSpec {
  valueTypeRid: _api_ValueTypeRid;
  valueTypeVersion: ValueTypeVersion;
}
export interface ValueTypeVersion_version {
  type: "version";
  version: string;
}

export interface ValueTypeVersion_redacted {
  type: "redacted";
  redacted: _api_Redacted;
}
export type ValueTypeVersion =
  | ValueTypeVersion_version
  | ValueTypeVersion_redacted;

export interface VersionedObjectSetPassSpec {
  branch?: _api_OntologyBranchRid | null | undefined;
  versionedObjectSetRid: _api_ObjectSetRid;
}
export interface WebhookPassSpec {
  version?: _api_WebhookVersion | null | undefined;
  webhookRid: _api_WebhookRid;
}
export interface WidgetPassSpec {
  version: WidgetSetVersion;
  widgetRid: WidgetRid;
  widgetSetRid: WidgetSetRid;
}
export type WidgetRid = string;
export type WidgetSetRid = string;
export interface WidgetSetVersion_version {
  type: "version";
  version: string;
}

export interface WidgetSetVersion_redacted {
  type: "redacted";
  redacted: _api_Redacted;
}
export type WidgetSetVersion =
  | WidgetSetVersion_version
  | WidgetSetVersion_redacted;
