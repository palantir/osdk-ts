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

/**/
export interface ActionTypeExecutionInputSpec {
  actionTypeRid: ActionTypeRid;
  branch?: OntologyBranchRid | null | undefined;
  globalBranch?: GlobalBranch | null | undefined;
}
export type ActionTypeRid = string;
export interface AllObjectTypeProperties {}
export interface ArtifactsRepositoryInputSpec {
  cloneRepositoryRid?: ArtifactsRepositoryRid | null | undefined;
  repositoryRid: ArtifactsRepositoryRid;
}
export type ArtifactsRepositoryRid = string;
export interface Authorization {
  clauses: Array<Array<MarkingId>>;
}
export interface AutomationInputSpec {
  branch: GlobalBranch;
  monitorRid: MonitorRid;
  monitorVersion: MonitorVersion;
}
export type Build2SecurityRid = string;
export interface Build2SecurityRidInputSpec {
  securityRid: Build2SecurityRid;
}
export type CatalogBranch = string;
export interface CatalogDatasetInputSpec {
  branch: CatalogBranch;
  datasetRid: DatasetRid;
  endTransactionRid?: TransactionRid | null | undefined;
  startTransactionRid?: TransactionRid | null | undefined;
}
export interface CreateExecutionTokenViolation_inputReadAuthorization {
  type: "inputReadAuthorization";
  inputReadAuthorization: InputReadAuthorizationViolation;
}

export interface CreateExecutionTokenViolation_inputRequiredReadAuthorization {
  type: "inputRequiredReadAuthorization";
  inputRequiredReadAuthorization: InputRequiredReadAuthorizationViolation;
}

export interface CreateExecutionTokenViolation_resourceReadAuthorization {
  type: "resourceReadAuthorization";
  resourceReadAuthorization: ResourceReadAuthorizationViolation;
}

export interface CreateExecutionTokenViolation_resourceWriteAuthorization {
  type: "resourceWriteAuthorization";
  resourceWriteAuthorization: ResourceWriteAuthorizationViolation;
}

export interface CreateExecutionTokenViolation_projectContext {
  type: "projectContext";
  projectContext: ProjectContextViolation;
}
export type CreateExecutionTokenViolation =
  | CreateExecutionTokenViolation_inputReadAuthorization
  | CreateExecutionTokenViolation_inputRequiredReadAuthorization
  | CreateExecutionTokenViolation_resourceReadAuthorization
  | CreateExecutionTokenViolation_resourceWriteAuthorization
  | CreateExecutionTokenViolation_projectContext;

export type DatasetRid = string;
export interface DefaultGlobalBranch {}
export interface ExecutionLogsInputSpec {
  traceOwningRid: TraceOwningRid;
}
export interface ForkInputSpec {
  forkRid: ForkRid;
  grantUpdateFork: boolean;
}
export type ForkRid = string;
export interface FunctionInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  functionRid: FunctionRid;
  globalBranch?: GlobalBranch | null | undefined;
  version: SemanticVersionRange;
}
export type FunctionRid = string;
export interface FunctionV2InputSpec {
  functionRid: FunctionRid;
  version: FunctionVersion;
}
export type FunctionVersion = string;
export interface GlobalBranch_rid {
  type: "rid";
  rid: GlobalBranchRid;
}

export interface GlobalBranch_default {
  type: "default";
  default: DefaultGlobalBranch;
}
export type GlobalBranch = GlobalBranch_rid | GlobalBranch_default;

export type GlobalBranchRid = string;
export interface InputReadAuthorizationViolation {
  constraintInputSpec: InputSpec;
  constraintReadAuthorization: Authorization;
  inputSpec: InputSpec;
  readAuthorization: Authorization;
}
export interface InputRequiredReadAuthorizationViolation {
  constraintInputSpec: InputSpec;
  constraintRequiredReadAuthorization: Authorization;
  inputSpec: InputSpec;
  readAuthorization: Authorization;
}
export interface InputSpec_actionTypeExecution {
  type: "actionTypeExecution";
  actionTypeExecution: ActionTypeExecutionInputSpec;
}

export interface InputSpec_artifactsRepository {
  type: "artifactsRepository";
  artifactsRepository: ArtifactsRepositoryInputSpec;
}

export interface InputSpec_automation {
  type: "automation";
  automation: AutomationInputSpec;
}

export interface InputSpec_build2SecurityRid {
  type: "build2SecurityRid";
  build2SecurityRid: Build2SecurityRidInputSpec;
}

export interface InputSpec_catalogDataset {
  type: "catalogDataset";
  catalogDataset: CatalogDatasetInputSpec;
}

export interface InputSpec_executionLogs {
  type: "executionLogs";
  executionLogs: ExecutionLogsInputSpec;
}

export interface InputSpec_fork {
  type: "fork";
  fork: ForkInputSpec;
}

export interface InputSpec_function {
  type: "function";
  function: FunctionInputSpec;
}

export interface InputSpec_functionV2 {
  type: "functionV2";
  functionV2: FunctionV2InputSpec;
}

export interface InputSpec_interfaceType {
  type: "interfaceType";
  interfaceType: InterfaceTypeInputSpec;
}

export interface InputSpec_linkType {
  type: "linkType";
  linkType: LinkTypeInputSpec;
}

export interface InputSpec_listener {
  type: "listener";
  listener: ListenerInputSpec;
}

export interface InputSpec_lms {
  type: "lms";
  lms: LmsInputSpec;
}

export interface InputSpec_logicExecution {
  type: "logicExecution";
  logicExecution: LogicExecutionInputSpec;
}

export interface InputSpec_magritteSource {
  type: "magritteSource";
  magritteSource: MagritteSourceInputSpec;
}

export interface InputSpec_mediaSet {
  type: "mediaSet";
  mediaSet: MediaSetInputSpec;
}

export interface InputSpec_objectType {
  type: "objectType";
  objectType: ObjectTypeInputSpec;
}

export interface InputSpec_request {
  type: "request";
  request: RequestInputSpec;
}

export interface InputSpec_savedObjectSet {
  type: "savedObjectSet";
  savedObjectSet: SavedObjectSetInputSpec;
}

export interface InputSpec_sdk {
  type: "sdk";
  sdk: SdkInputSpec;
}

export interface InputSpec_stream {
  type: "stream";
  stream: StreamInputSpec;
}

export interface InputSpec_temporaryObjectSet {
  type: "temporaryObjectSet";
  temporaryObjectSet: TemporaryObjectSetInputSpec;
}

export interface InputSpec_transaction {
  type: "transaction";
  transaction: TransactionInputSpec;
}

export interface InputSpec_valueType {
  type: "valueType";
  valueType: ValueTypeInputSpec;
}

export interface InputSpec_versionedObjectSet {
  type: "versionedObjectSet";
  versionedObjectSet: VersionedObjectSetInputSpec;
}

export interface InputSpec_webhook {
  type: "webhook";
  webhook: WebhookInputSpec;
}

export interface InputSpec_widget {
  type: "widget";
  widget: WidgetInputSpec;
}
export type InputSpec =
  | InputSpec_actionTypeExecution
  | InputSpec_artifactsRepository
  | InputSpec_automation
  | InputSpec_build2SecurityRid
  | InputSpec_catalogDataset
  | InputSpec_executionLogs
  | InputSpec_fork
  | InputSpec_function
  | InputSpec_functionV2
  | InputSpec_interfaceType
  | InputSpec_linkType
  | InputSpec_listener
  | InputSpec_lms
  | InputSpec_logicExecution
  | InputSpec_magritteSource
  | InputSpec_mediaSet
  | InputSpec_objectType
  | InputSpec_request
  | InputSpec_savedObjectSet
  | InputSpec_sdk
  | InputSpec_stream
  | InputSpec_temporaryObjectSet
  | InputSpec_transaction
  | InputSpec_valueType
  | InputSpec_versionedObjectSet
  | InputSpec_webhook
  | InputSpec_widget;

export interface InterfaceTypeInputSpec {
  globalBranch: GlobalBranch;
  interfaceTypeRid: InterfaceTypeRid;
}
export type InterfaceTypeRid = string;
export type LinkTypeId = string;
export interface LinkTypeIdentifier_id {
  type: "id";
  id: LinkTypeId;
}

export interface LinkTypeIdentifier_rid {
  type: "rid";
  rid: LinkTypeRid;
}
export type LinkTypeIdentifier = LinkTypeIdentifier_id | LinkTypeIdentifier_rid;

export interface LinkTypeInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  linkType: LinkTypeIdentifier;
}
export type LinkTypeRid = string;
export interface ListenerInputSpec {
  listenerTargetRid: ListenerTargetRid;
}
export type ListenerTargetRid = string;
export interface LmsAttribution_rids {
  type: "rids";
  rids: Array<string>;
}
export type LmsAttribution = LmsAttribution_rids;

export interface LmsInputSpec {
  lmsAttribution?: LmsAttribution | null | undefined;
  lmsModelRid: LmsModelRid;
}
export type LmsModelRid = string;
export type LogicalTimestamp = number;
export interface LogicExecutionInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  functionId: LogicFunctionId;
  globalBranch?: GlobalBranch | null | undefined;
  logicRid: LogicRid;
  version: LogicVersionId;
}
export type LogicFunctionId = string;
export type LogicRid = string;
export type LogicVersionId = string;
export interface MagritteSourceInputSpec {
  sourceRid: MagritteSourceRid;
}
export type MagritteSourceRid = string;
export type MarkingId = string;
export type MediaSetBranchRid = string;
export interface MediaSetInputSpec {
  branch?: CatalogBranch | null | undefined;
  giveAccessToAllViews?: boolean | null | undefined;
  mediaSetRid: MediaSetRid;
  mediaSetViewPointer?: MediaSetViewPointer | null | undefined;
}
export type MediaSetRid = string;
export interface MediaSetViewPointer_branch {
  type: "branch";
  branch: CatalogBranch;
}

export interface MediaSetViewPointer_branchRid {
  type: "branchRid";
  branchRid: MediaSetBranchRid;
}

export interface MediaSetViewPointer_viewRid {
  type: "viewRid";
  viewRid: MediaSetViewRid;
}
export type MediaSetViewPointer =
  | MediaSetViewPointer_branch
  | MediaSetViewPointer_branchRid
  | MediaSetViewPointer_viewRid;

export type MediaSetViewRid = string;
export type MonitorRid = string;
export type MonitorVersion = number;
export type ObjectSetRid = string;
export type ObjectTypeId = string;
export interface ObjectTypeIdentifier_id {
  type: "id";
  id: ObjectTypeId;
}

export interface ObjectTypeIdentifier_rid {
  type: "rid";
  rid: ObjectTypeRid;
}
export type ObjectTypeIdentifier =
  | ObjectTypeIdentifier_id
  | ObjectTypeIdentifier_rid;

export interface ObjectTypeInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  objectType: ObjectTypeIdentifier;
  properties: ObjectTypePropertySelection;
}
export interface ObjectTypePropertySelection_all {
  type: "all";
  all: AllObjectTypeProperties;
}

export interface ObjectTypePropertySelection_selected {
  type: "selected";
  selected: Array<PropertyTypeIdentifier>;
}
export type ObjectTypePropertySelection =
  | ObjectTypePropertySelection_all
  | ObjectTypePropertySelection_selected;

export type ObjectTypeRid = string;
export type OntologyBranchRid = string;
export type OntologyTransactionId = string;
export interface ProjectContextViolation {
  constraintImportRid: string;
  constraintInputSpec: InputSpec;
  inputSpec: InputSpec;
  projectResourceRid: string;
  projectRid: ProjectRid;
}
export type ProjectRid = string;
export type PropertyTypeId = string;
export interface PropertyTypeIdentifier_id {
  type: "id";
  id: PropertyTypeId;
}

export interface PropertyTypeIdentifier_rid {
  type: "rid";
  rid: PropertyTypeRid;
}
export type PropertyTypeIdentifier =
  | PropertyTypeIdentifier_id
  | PropertyTypeIdentifier_rid;

export type PropertyTypeRid = string;
export type RequestId = string;
export interface RequestInputSpec {
  requestId: RequestId;
}
export interface ResourceReadAuthorizationViolation {
  constraintInputSpec: InputSpec;
  constraintReadRid: string;
  constraintReadRidAuthorization: Authorization;
  inputSpec: InputSpec;
  readAuthorization: Authorization;
}
export interface ResourceWriteAuthorizationViolation {
  constraintInputSpec: InputSpec;
  constraintWriteRid: string;
  constraintWriteRidAuthorization: Authorization;
  inputSpec: InputSpec;
  writeAuthorization: Authorization;
}
export interface SavedObjectSetInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  objectSetRid: ObjectSetRid;
}
export interface SdkInputSpec {
  branch?: GlobalBranch | null | undefined;
  sdkPackageRid: SdkPackageRid;
  sdkVersion: SdkVersion;
}
export type SdkPackageRid = string;
export type SdkVersion = string;
export type SemanticVersionRange = string;
export interface StreamInputSpec {
  branch: CatalogBranch;
  streamDatasetRid: DatasetRid;
}
export interface TemporaryObjectSetInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  temporaryObjectSetRid: TemporaryObjectSetRid;
}
export type TemporaryObjectSetRid = string;
export type TraceOwningRid = string;
export interface TransactionInputSpec {
  transactionId: OntologyTransactionId;
}
export type TransactionRid = string;
export interface ValueTypeInputSpec {
  valueTypeRid: ValueTypeRid;
  valueTypeVersion: ValueTypeVersion;
}
export type ValueTypeRid = string;
export interface ValueTypeVersion_id {
  type: "id";
  id: ValueTypeVersionId;
}
export type ValueTypeVersion = ValueTypeVersion_id;

export type ValueTypeVersionId = string;
export interface VersionedObjectSetInputSpec {
  branch?: OntologyBranchRid | null | undefined;
  versionedObjectSetRid: VersionedObjectSetRid;
}
export type VersionedObjectSetRid = string;
export interface WebhookInputSpec {
  version?: WebhookVersion | null | undefined;
  webhookRid: WebhookRid;
}
export type WebhookRid = string;
export type WebhookVersion = number;
export interface WidgetInputSpec {
  version: WidgetSetVersion;
  widgetRid: WidgetRid;
  widgetSetRid: WidgetSetRid;
}
export type WidgetRid = string;
export type WidgetSetRid = string;
export type WidgetSetVersion = string;
