/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  MarketplaceObjectReferenceList as _api_types_MarketplaceObjectReferenceList,
  MarketplaceValue as _api_types_MarketplaceValue,
  ObjectReference as _api_types_ObjectReference,
  ObjectReferenceByRid as _api_types_ObjectReferenceByRid,
  ObjectReferenceList as _api_types_ObjectReferenceList,
  StringValue as _api_types_StringValue,
  Value as _api_types_Value,
} from "./types/__components.js";
export interface AcceptedReview {
  reviewMetadata: ReviewMetadata;
}
export interface ActionAccepted {
}
export interface ActionCreated {
}
export interface ActionEffect {
  actionInputs: Record<ActionParameterRid, EffectInput>;
  actionTypeRid: ActionTypeRid;
  actionTypeVersion?: ActionTypeVersion | null | undefined;
  executionMode?: ExecutionMode | null | undefined;
  executionSettings?: EffectExecutionSettings | null | undefined;
}
export interface ActionEffectExecutionWarning_editsValidation {
  type: "editsValidation";
  editsValidation: EditsValidationWarning;
}
/**
 * Warnings that occurred during the execution of an effect. These are not errors, but may be useful for debugging.
 */
export type ActionEffectExecutionWarning =
  ActionEffectExecutionWarning_editsValidation;

export interface ActionEffectInReview {
  executionId: FoundryLogicExecutionId;
  fromEffect: EffectId;
  generatedAt: string;
  generatedFrom: FoundryLogicLocator;
  id: ActionEffectInReviewId;
  lastUpdated?: string | null | undefined;
  monitorEventId: MonitorEventId;
  parameters: Record<ActionParameterRid, _api_types_Value>;
  reviewData: Review;
  rid: ActionTypeRid;
  scenarioRid?: VersionedScenarioRid | null | undefined;
  triggeredBy: TriggeredBy;
  user: UserId;
}
export type ActionEffectInReviewId = string;
export interface ActionEffectLog_success {
  type: "success";
  success: SuccessActionEffectLog;
}

export interface ActionEffectLog_failure {
  type: "failure";
  failure: FailureEffectLog;
}

export interface ActionEffectLog_successMultiple {
  type: "successMultiple";
  successMultiple: SuccessMultiple;
}

export interface ActionEffectLog_failureMultiple {
  type: "failureMultiple";
  failureMultiple: FailureMultiple;
}

export interface ActionEffectLog_multiple {
  type: "multiple";
  multiple: Array<ActionEffectLog>;
}
export type ActionEffectLog =
  | ActionEffectLog_success
  | ActionEffectLog_failure
  | ActionEffectLog_successMultiple
  | ActionEffectLog_failureMultiple
  | ActionEffectLog_multiple;

export interface ActionEffectsUnsupported {
  actionTypeRid: ActionTypeRid;
}
export interface ActionOrLogicEffectAddedForNonUserSubscriber {
  locator: ActionOrLogicLocator;
}
export interface ActionOrLogicLocator_actionTypeRid {
  type: "actionTypeRid";
  actionTypeRid: ActionTypeRid;
}

export interface ActionOrLogicLocator_logicLocator {
  type: "logicLocator";
  logicLocator: FoundryLogicLocator;
}
export type ActionOrLogicLocator =
  | ActionOrLogicLocator_actionTypeRid
  | ActionOrLogicLocator_logicLocator;

/**
 * An action parameter rid.
 */
export type ActionParameterRid = string;
export interface ActionParameterRidNotFound {
}
export interface ActionRejected {
}
/**
 * An action instance resource identifier.
 */
export type ActionRid = string;
export interface ActionTypeNotPermittedToRunFromAutomate {
  actionTypeRid: ActionTypeRid;
}
/**
 * An action type resource identifier.
 */
export type ActionTypeRid = string;

/**
 * An action type version.
 */
export type ActionTypeVersion = string;
export interface ActionUpdated {
}
/**
 * The type of the object locator. Corresponds to the object set type set in the event condition.
 */
export interface AffectedObject {
  objectTypeRid: ObjectTypeRid;
}
export interface AffectedObjectProvidedForNonLiveMonitor {
}
/**
 * Will be substituted at runtime with the affected objects. The corresponding type is an object set rid.
 */
export interface AffectedObjects {
  affectedObjectsType?: AffectedObjectsType | null | undefined;
  objectTypeRids: Array<ObjectTypeRid>;
}
export interface AffectedObjectsType_objectReferenceListType {
  type: "objectReferenceListType";
  objectReferenceListType: ObjectReferenceListType;
}

export interface AffectedObjectsType_objectSetRidType {
  type: "objectSetRidType";
  objectSetRidType: ObjectSetRidType;
}
export type AffectedObjectsType =
  | AffectedObjectsType_objectReferenceListType
  | AffectedObjectsType_objectSetRidType;

export interface Aggregation_count {
  type: "count";
  count: CountAggregation;
}

export interface Aggregation_sum {
  type: "sum";
  sum: PropertyAggregation;
}

export interface Aggregation_avg {
  type: "avg";
  avg: PropertyAggregation;
}

export interface Aggregation_min {
  type: "min";
  min: PropertyAggregation;
}

export interface Aggregation_max {
  type: "max";
  max: PropertyAggregation;
}
export type Aggregation =
  | Aggregation_count
  | Aggregation_sum
  | Aggregation_avg
  | Aggregation_min
  | Aggregation_max;

export interface AllBatchesToRetry {
}
export interface AllMetricIdsShouldBeUnique {
}
export interface AllNewRecords {
}
/**
 * Triggers on all objects in the defined object set when evaluated. This changes the semantics of
 * "affected objects", as there is no diff when using this condition.
 */
export interface AllObjectsEvent {
}
export interface AllowCyclesUpToLimit {
}
/**
 * Default configuration. Send all notifications (monitor metadata or side effects) to all users.
 */
export interface AllSubscribers {
}
export interface AllUsers {
}
export interface AndPredicate {
  predicates: Array<Predicate>;
}
export interface AnyPropertyModifiedEvent {
}
/**
 * The resource identifier for an artifact's backing repository.
 */
export type ArtifactsRepositoryRid = string;
export interface ArtifactsResource {
  repoRid: ArtifactsRepositoryRid;
}
export interface AtLeastOneMetricIsUsed {
}
export interface AttachmentObjectPropertyInput_previousProperty {
  type: "previousProperty";
  previousProperty: ObjectChangedProperty;
}

export interface AttachmentObjectPropertyInput_currentProperty {
  type: "currentProperty";
  currentProperty: ObjectChangedProperty;
}
export type AttachmentObjectPropertyInput =
  | AttachmentObjectPropertyInput_previousProperty
  | AttachmentObjectPropertyInput_currentProperty;

export interface AttachmentSource_notepad {
  type: "notepad";
  notepad: NotepadAttachmentSource;
}

export interface AttachmentSource_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: NotepadTemplateAttachmentSource;
}

export interface AttachmentSource_staticBlobsterRid {
  type: "staticBlobsterRid";
  staticBlobsterRid: BlobsterRid;
}

export interface AttachmentSource_objectProperty {
  type: "objectProperty";
  objectProperty: AttachmentObjectPropertyInput;
}
export type AttachmentSource =
  | AttachmentSource_notepad
  | AttachmentSource_notepadTemplate
  | AttachmentSource_staticBlobsterRid
  | AttachmentSource_objectProperty;

export interface AutomationBlockCreationError_actionEffectsUnsupported {
  type: "actionEffectsUnsupported";
  actionEffectsUnsupported: ActionEffectsUnsupported;
}

export interface AutomationBlockCreationError_logicEffectsUnsupported {
  type: "logicEffectsUnsupported";
  logicEffectsUnsupported: LogicEffectsUnsupported;
}

export interface AutomationBlockCreationError_userIdInputUnsupported {
  type: "userIdInputUnsupported";
  userIdInputUnsupported: UserIdInputUnsupported;
}

export interface AutomationBlockCreationError_versionedObjectSetsUnsupported {
  type: "versionedObjectSetsUnsupported";
  versionedObjectSetsUnsupported: VersionedObjectSetsUnsupported;
}

export interface AutomationBlockCreationError_automationNotPublished {
  type: "automationNotPublished";
  automationNotPublished: AutomationNotPublished;
}

export interface AutomationBlockCreationError_scopedTokenUnsupported {
  type: "scopedTokenUnsupported";
  scopedTokenUnsupported: ScopedTokenUnsupported;
}

export interface AutomationBlockCreationError_scopedTokenWithLanguageModelUnsupported {
  type: "scopedTokenWithLanguageModelUnsupported";
  scopedTokenWithLanguageModelUnsupported:
    ScopedTokenWithLanguageModelUnsupported;
}

export interface AutomationBlockCreationError_groupedExecutionNotSupportedForScheduled {
  type: "groupedExecutionNotSupportedForScheduled";
  groupedExecutionNotSupportedForScheduled:
    GroupedExecutionNotSupportedForScheduled;
}

export interface AutomationBlockCreationError_multipleObjectTypesUsedInCondition {
  type: "multipleObjectTypesUsedInCondition";
  multipleObjectTypesUsedInCondition: MultipleObjectTypesUsedInCondition;
}

export interface AutomationBlockCreationError_objectMetricsUnsupported {
  type: "objectMetricsUnsupported";
  objectMetricsUnsupported: ObjectMetricUnsupported;
}

export interface AutomationBlockCreationError_timeSeriesMonitorUnsupported {
  type: "timeSeriesMonitorUnsupported";
  timeSeriesMonitorUnsupported: TimeSeriesMonitorUnsupported;
}

export interface AutomationBlockCreationError_automationDependencyMonitorUnsupported {
  type: "automationDependencyMonitorUnsupported";
  automationDependencyMonitorUnsupported:
    AutomationDependencyMonitorUnsupported;
}
export type AutomationBlockCreationError =
  | AutomationBlockCreationError_actionEffectsUnsupported
  | AutomationBlockCreationError_logicEffectsUnsupported
  | AutomationBlockCreationError_userIdInputUnsupported
  | AutomationBlockCreationError_versionedObjectSetsUnsupported
  | AutomationBlockCreationError_automationNotPublished
  | AutomationBlockCreationError_scopedTokenUnsupported
  | AutomationBlockCreationError_scopedTokenWithLanguageModelUnsupported
  | AutomationBlockCreationError_groupedExecutionNotSupportedForScheduled
  | AutomationBlockCreationError_multipleObjectTypesUsedInCondition
  | AutomationBlockCreationError_objectMetricsUnsupported
  | AutomationBlockCreationError_timeSeriesMonitorUnsupported
  | AutomationBlockCreationError_automationDependencyMonitorUnsupported;

export interface AutomationBlockData_v1 {
  type: "v1";
  v1: AutomationBlockDataV1;
}
export type AutomationBlockData = AutomationBlockData_v1;

/**
 * The data generated by packaging all the object sets contained in a single ObjectSetCreateBlockRequest request
 * to market place. The request can contain multiple object sets, which are packaged into a single
 * SingleObjectSetBlockData block.
 */
export interface AutomationBlockDataV1 {
  marketplaceMonitor: any;
  referencedObjectSetEntities?:
    | MarketplaceReferencedEntities
    | null
    | undefined;
  requiredInputEntityIds: Array<MarketplaceId>;
}
/**
 * Condition for child automation, triggered by completion of a parent monitor.
 */
export interface AutomationDependency {
  event?: Event | null | undefined;
  monitorRid: MonitorRid;
  triggerIfNoAffectedObjects?: boolean | null | undefined;
  waitTime?: WaitTime | null | undefined;
}
export interface AutomationDependencyMonitorUnsupported {
}
export interface AutomationInstantEvent {
  invoicedDimension: string;
  timestamp: string;
  usage: number | "NaN" | "Infinity" | "-Infinity";
  usageCategory: string;
}
export interface AutomationNotPublished {
  monitorRid: MonitorRid;
}
export interface AutomationValidationError_genericValidationError {
  type: "genericValidationError";
  genericValidationError: GenericValidationError;
}

export interface AutomationValidationError_autoUpgradingUnsupported {
  type: "autoUpgradingUnsupported";
  autoUpgradingUnsupported: AutoUpgradingUnsupported;
}

export interface AutomationValidationError_installingDisabledAutomation {
  type: "installingDisabledAutomation";
  installingDisabledAutomation: InstallingDisabledAutomation;
}

export interface AutomationValidationError_installingMutedAutomation {
  type: "installingMutedAutomation";
  installingMutedAutomation: InstallingMutedAutomation;
}
export type AutomationValidationError =
  | AutomationValidationError_genericValidationError
  | AutomationValidationError_autoUpgradingUnsupported
  | AutomationValidationError_installingDisabledAutomation
  | AutomationValidationError_installingMutedAutomation;

export interface AutoUpgradingUnsupported {
}
/**
 * The backing dataset for the root object type of a timeseries monitor is not in project scope.
 */
export interface BackingDatasetForRootObjectTypeNotInProjectScope {
  backingDatasetNotInProjectScope: DatasetRid;
}
export type BaseVersion = string;
export interface BatchDelay_seconds {
  type: "seconds";
  seconds: BatchDelaySeconds;
}
/**
 * The delay between the batches. Defaults to 1 minute if not provided.
 */
export type BatchDelay = BatchDelay_seconds;

export interface BatchDelaySeconds {
  secondsBetween: number;
}
export interface BatchesToRetry_all {
  type: "all";
  all: AllBatchesToRetry;
}

export interface BatchesToRetry_specific {
  type: "specific";
  specific: SpecificBatchesToRetry;
}
export type BatchesToRetry = BatchesToRetry_all | BatchesToRetry_specific;

export interface BatchEventToRetry {
  batchesToRetry: BatchesToRetry;
  monitorEventId: MonitorEventId;
  typesToRetry: Array<RetryableBatchType>;
}
export interface BatchExecutionCancellationReason_userCancelled {
  type: "userCancelled";
  userCancelled: UserCancelledBatchExecution;
}

export interface BatchExecutionCancellationReason_tooManyFailures {
  type: "tooManyFailures";
  tooManyFailures: TooManyFailures;
}

export interface BatchExecutionCancellationReason_schedulingJobFailure {
  type: "schedulingJobFailure";
  schedulingJobFailure: SchedulingJobFailure;
}
export type BatchExecutionCancellationReason =
  | BatchExecutionCancellationReason_userCancelled
  | BatchExecutionCancellationReason_tooManyFailures
  | BatchExecutionCancellationReason_schedulingJobFailure;

export interface BatchExecutionEventSummary {
  estimatedCompletionTime: string;
  monitorEventId: MonitorEventId;
  statuses: Record<
    BatchExecutionInstanceTypeEnum,
    BatchExecutionInstanceTypeSummary
  >;
}
export interface BatchExecutionInstance {
  generatedAt: string;
  id: BatchExecutionInstanceId;
  index?: BatchExecutionInstanceIndex | null | undefined;
  lastUpdatedAt?: string | null | undefined;
  triggeredBy: Array<ObjectRid>;
  triggeredByV2?: TriggeredBy | null | undefined;
  triggerEffects: Record<EffectId, Effect>;
  type: BatchExecutionInstanceType;
}
export interface BatchExecutionInstanceCancelled {
  reason?: BatchExecutionCancellationReason | null | undefined;
}
export interface BatchExecutionInstanceCompleted {
  effectsTriggered: Record<EffectId, EffectLog>;
  effectsTriggeredV2: Array<EffectLogV2>;
}
/**
 * Transient failure. Job will be retried.
 */
export type BatchExecutionInstanceFailed = FailureEffectLog;
export type BatchExecutionInstanceId = string;
export type BatchExecutionInstanceIndex = number;
export interface BatchExecutionInstanceQueued {
}
export interface BatchExecutionInstanceSubmitted {
}
export interface BatchExecutionInstanceType_queued {
  type: "queued";
  queued: BatchExecutionInstanceQueued;
}

export interface BatchExecutionInstanceType_submitted {
  type: "submitted";
  submitted: BatchExecutionInstanceSubmitted;
}

export interface BatchExecutionInstanceType_completed {
  type: "completed";
  completed: BatchExecutionInstanceCompleted;
}

export interface BatchExecutionInstanceType_failed {
  type: "failed";
  failed: BatchExecutionInstanceFailed;
}

export interface BatchExecutionInstanceType_cancelled {
  type: "cancelled";
  cancelled: BatchExecutionInstanceCancelled;
}
export type BatchExecutionInstanceType =
  | BatchExecutionInstanceType_queued
  | BatchExecutionInstanceType_submitted
  | BatchExecutionInstanceType_completed
  | BatchExecutionInstanceType_failed
  | BatchExecutionInstanceType_cancelled;

export type BatchExecutionInstanceTypeEnum =
  | "QUEUED"
  | "SUBMITTED"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";
export interface BatchExecutionInstanceTypeSummary {
  count: number;
}
export type BlobsterRid = string;

/**
 * A boolean expression that will result in either a single boolean value or a boolean value per bucket
 * where the buckets are produced by best-effort combining the bucket keys of the left and right operands:
 * - If both sides contain a single value then these values will be compared to produce a single boolean.
 * - If the left or right side contains a single value and the other side contains bucketed values then the
 * single value will be distributed over the buckets to produce a boolean value per bucket.
 * - If both sides contain a bucketed values then the bucket keys will be compared and the expression evaluated
 * for every match found. Any non matching keys are ignored.
 * e.g. left: StaticValue, right: SavedObjectSetMultiMetric -> compare the chosen object property of each object
 * in the set with the static value and produce a boolean value per object rid
 */
export interface BooleanExpression {
  left: Operand;
  operator: ComparisonOperator;
  right: Operand;
}
export interface BranchingUnsupportedForConditionType {
}
export interface BranchingUnsupportedForEffect {
}
export interface BranchingUnsupportedForVersionedObjectSets {
}
export interface BranchingUnsupportedInScopedMode {
}
/**
 * The global branch rid tracked by foundry-branching's branch-service.
 */
export type BranchRid = string;
export type ChangeType = "INCREASE" | "DECREASE";
export type ComparisonOperator =
  | "EQUAL"
  | "NOT_EQUAL"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUAL_TO"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUAL_TO";
export interface ConditionErrorLocation {
}
export type ConjureErrorArgs = Record<ErrorArgName, ErrorArgValue>;
export interface ConstantBackoff {
  attemptLimit: number;
  durationMillis: number;
  jitter?: JitterConfiguration | null | undefined;
}
export interface CouldNotGetAllTimeseriesSyncs {
  rootObjectTypeRid: ObjectTypeRid;
  sensorObjectTypeRids: Array<ObjectTypeRid>;
}
export interface CountAggregation {
}
/**
 * A newly created object changed caused this monitor to be evaluated and it's predicate returned true.
 */
export interface CreatedObjectChange {
  objectProperties: Record<ObjectPropertyTypeRid, ObjectPropertyValue>;
  objectRid: ObjectRid;
}
export interface CreateScenario {
  actionInputs: Record<ActionParameterRid, EffectInput>;
  actionTypeRid: ActionTypeRid;
  effectId?: EffectId | null | undefined;
  foundryLogicExecutionIdParameter?: ActionParameterRid | null | undefined;
  scenarioRidParameter: ActionParameterRid;
  scenarioTitleInput?: ScenarioTitleInput | null | undefined;
  scenarioTitleParameter: ActionParameterRid;
}
/**
 * A cron expression string
 */
export type CronExpression = string;
export interface CronTooFrequent {
}
/**
 * Will be substituted at runtime with the current user. The corresponding type is a User.
 */
export interface CurrentUser {
}
export interface CycleDetected {
  automationsInCycle: Array<MonitorRid>;
  selfTriggerLimitHit?: number | null | undefined;
}
export interface CycleDetectionSettings_allowCyclesUpToLimit {
  type: "allowCyclesUpToLimit";
  allowCyclesUpToLimit: AllowCyclesUpToLimit;
}

export interface CycleDetectionSettings_noCyclesAllowed {
  type: "noCyclesAllowed";
  noCyclesAllowed: NoCyclesAllowed;
}
export type CycleDetectionSettings =
  | CycleDetectionSettings_allowCyclesUpToLimit
  | CycleDetectionSettings_noCyclesAllowed;

export type DatasetRid = string;

/**
 * A deleted object changed caused this monitor to be evaluated and it's predicate returned true.
 */
export interface DeletedObjectChange {
  objectRid: ObjectRid;
}
/**
 * Do not use. This only exists for backcompat
 */
export interface DeprecatedFailureEffectLog {
  errorInstanceId?: string | null | undefined;
  isServerError?: boolean | null | undefined;
  safeMessage: string;
  traceId: TraceId;
  triggeredBy?: TriggeredBy | null | undefined;
  unsafeMessage?: string | null | undefined;
}
/**
 * If a monitor triggers too many times in a given time interval, it will be auto disabled and no longer store
 * Monitor history entries.
 */
export interface DisabledConfig {
  isDisabledIndefinitely?: boolean | null | undefined;
  reason?: DisabledReason | null | undefined;
  until?: string | null | undefined;
}
export interface DisabledReason_userProvided {
  type: "userProvided";
  userProvided: UserProvidedReason;
}

export interface DisabledReason_cycleDetected {
  type: "cycleDetected";
  cycleDetected: CycleDetected;
}

export interface DisabledReason_rateLimited {
  type: "rateLimited";
  rateLimited: RateLimited;
}

export interface DisabledReason_forceDisabledByServer {
  type: "forceDisabledByServer";
  forceDisabledByServer: ForceDisabledByServer;
}
export type DisabledReason =
  | DisabledReason_userProvided
  | DisabledReason_cycleDetected
  | DisabledReason_rateLimited
  | DisabledReason_forceDisabledByServer;

export interface DropEventsConfig_failIfAnyEventsDropped {
  type: "failIfAnyEventsDropped";
  failIfAnyEventsDropped: FailIfAnyEventsDropped;
}

export interface DropEventsConfig_dropEventsOverLimit {
  type: "dropEventsOverLimit";
  dropEventsOverLimit: DropEventsOverLimit;
}
export type DropEventsConfig =
  | DropEventsConfig_failIfAnyEventsDropped
  | DropEventsConfig_dropEventsOverLimit;

export interface DropEventsOverLimit {
}
export interface DroppedObjects {
  numDropped: number;
}
export interface DuplicateEffectInputIdsInTemplateNotification {
  duplicateEffectInput?: EffectInput | null | undefined;
  duplicateEffectInputId: EffectInputId;
}
export interface EditsValidationWarning {
  validationId: EffectValidationId;
}
export interface Effect_action {
  type: "action";
  action: ActionEffect;
}

export interface Effect_notification {
  type: "notification";
  notification: NotificationEffect;
}

export interface Effect_logic {
  type: "logic";
  logic: FoundryLogicEffect;
}

export interface Effect_function {
  type: "function";
  function: FunctionEffect;
}
export type Effect =
  | Effect_action
  | Effect_notification
  | Effect_logic
  | Effect_function;

export interface EffectDependenciesInconsistentWithEffectOrdering {
}
export interface EffectDryRunExecutionValidation_v1 {
  type: "v1";
  v1: EffectDryRunExecutionValidationV1;
}
export type EffectDryRunExecutionValidation =
  EffectDryRunExecutionValidation_v1;

export interface EffectDryRunExecutionValidationFailureHandler_throwOnFailure {
  type: "throwOnFailure";
  throwOnFailure: ThrowOnFailure;
}

export interface EffectDryRunExecutionValidationFailureHandler_warnOnFailure {
  type: "warnOnFailure";
  warnOnFailure: WarnOnFailure;
}
export type EffectDryRunExecutionValidationFailureHandler =
  | EffectDryRunExecutionValidationFailureHandler_throwOnFailure
  | EffectDryRunExecutionValidationFailureHandler_warnOnFailure;

export interface EffectDryRunExecutionValidationV1 {
  onFailure: EffectDryRunExecutionValidationFailureHandler;
  validators: Array<EffectDryRunExecutionValidator>;
}
export interface EffectDryRunExecutionValidator {
  definition: EffectDryRunExecutionValidatorDefinition;
  id: EffectValidationId;
}
export interface EffectDryRunExecutionValidatorDefinition_modifiedObjectsAreInSet {
  type: "modifiedObjectsAreInSet";
  modifiedObjectsAreInSet: ValidateAllModifiedObjectsAreInObjectSet;
}
export type EffectDryRunExecutionValidatorDefinition =
  EffectDryRunExecutionValidatorDefinition_modifiedObjectsAreInSet;

export type EffectExecutionId = string;

/**
 * Metadata associated with a single effect execution, on a single effect. This field should not be responsible
 * for any stateful (i.e. aggregate across executions) metadata, and should be scoped to a single job/execution.
 */
export interface EffectExecutionMetadata {
  endTime: string;
  startTime: string;
}
/**
 * Settings for the execution of a specific effect.
 * Overrides global execution settings if the global settings exist.
 */
export interface EffectExecutionSettings {
  batchSize?: number | null | undefined;
  retryConfig?: RetryConfig | null | undefined;
  triggerDependencyDefinition?: TriggerDependencyDefinition | null | undefined;
  validation?: EffectDryRunExecutionValidation | null | undefined;
}
/**
 * A programmatically generated UUID.
 */
export type EffectId = string;
export interface EffectInput_staticValue {
  type: "staticValue";
  staticValue: _api_types_Value;
}

export interface EffectInput_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRid;
}

export interface EffectInput_objectReference {
  type: "objectReference";
  objectReference: _api_types_ObjectReference;
}

export interface EffectInput_objectReferenceList {
  type: "objectReferenceList";
  objectReferenceList: _api_types_ObjectReferenceList;
}

export interface EffectInput_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: VersionedObjectSetRid;
}

export interface EffectInput_affectedObject {
  type: "affectedObject";
  affectedObject: AffectedObject;
}

export interface EffectInput_affectedObjects {
  type: "affectedObjects";
  affectedObjects: AffectedObjects;
}

export interface EffectInput_previousProperty {
  type: "previousProperty";
  previousProperty: ObjectChangedProperty;
}

export interface EffectInput_currentProperty {
  type: "currentProperty";
  currentProperty: ObjectChangedProperty;
}

export interface EffectInput_currentUser {
  type: "currentUser";
  currentUser: CurrentUser;
}

export interface EffectInput_relativeTimestamp {
  type: "relativeTimestamp";
  relativeTimestamp: RelativeTimestamp;
}

export interface EffectInput_object {
  type: "object";
  object: ObjectRid;
}

export interface EffectInput_string {
  type: "string";
  string: _api_types_StringValue;
}

export interface EffectInput_failureMessage {
  type: "failureMessage";
  failureMessage: FailureMessage;
}

export interface EffectInput_eventId {
  type: "eventId";
  eventId: MonitorEventIdInput;
}

export interface EffectInput_monitorRid {
  type: "monitorRid";
  monitorRid: MonitorRidInput;
}

export interface EffectInput_streamColumn {
  type: "streamColumn";
  streamColumn: StreamingColumnInput;
}
export type EffectInput =
  | EffectInput_staticValue
  | EffectInput_objectSetRid
  | EffectInput_objectReference
  | EffectInput_objectReferenceList
  | EffectInput_versionedObjectSetRid
  | EffectInput_affectedObject
  | EffectInput_affectedObjects
  | EffectInput_previousProperty
  | EffectInput_currentProperty
  | EffectInput_currentUser
  | EffectInput_relativeTimestamp
  | EffectInput_object
  | EffectInput_string
  | EffectInput_failureMessage
  | EffectInput_eventId
  | EffectInput_monitorRid
  | EffectInput_streamColumn;

export type EffectInputId = string;
export type EffectInputTypeEnum =
  | "STATIC_VALUE"
  | "CURRENT_PROPERTY"
  | "PREVIOUS_PROPERTY"
  | "AFFECTED_OBJECTS"
  | "AFFECTED_OBJECT"
  | "CURRENT_USER"
  | "RELATIVE_TIMESTAMP"
  | "STREAM_COLUMN";

/**
 * The actual type of the action's parameter does not match the expected type. Note this error is only thrown for actions.
 */
export interface EffectInputTypeMismatch {
  actionParameterRid: ActionParameterRid;
  actionTypeRid: ActionTypeRid;
  actualType: string;
  expectedType: string;
}
export interface EffectLog_action {
  type: "action";
  action: ActionEffectLog;
}

export interface EffectLog_notification {
  type: "notification";
  notification: NotificationEffectLog;
}

export interface EffectLog_foundryLogic {
  type: "foundryLogic";
  foundryLogic: FoundryLogicEffectLog;
}

export interface EffectLog_function {
  type: "function";
  function: FunctionEffectLogs;
}
export type EffectLog =
  | EffectLog_action
  | EffectLog_notification
  | EffectLog_foundryLogic
  | EffectLog_function;

export interface EffectLogV2 {
  effectExecutionId: EffectExecutionId;
  effectExecutionMetadata: EffectExecutionMetadata;
  effectId: EffectId;
  effectLog: EffectLog;
}
export interface EffectOrdering_defaultEffectOrdering {
  type: "defaultEffectOrdering";
  defaultEffectOrdering: Array<EffectId>;
}
export type EffectOrdering = EffectOrdering_defaultEffectOrdering;

export interface EffectRendering {
  effectId?: EffectId | null | undefined;
  executionMode?: ExecutionMode | null | undefined;
  executionSettings?: EffectExecutionSettings | null | undefined;
  notificationEffectRendering: NotificationEffectRendering;
  recipients?: NotificationRecipients | null | undefined;
}
export interface EffectsErrorLocation {
  effectId?: EffectId | null | undefined;
  effectParameterId?: string | null | undefined;
}
export interface EffectSummaryTypeCount {
  count: number;
}
export type EffectSummaryTypeEnum = "SUCCEEDED" | "FAILED" | "SKIPPED";
export type EffectValidationId = string;
export type ErrorArgName = string;
export type ErrorArgValue = any;
export interface ErrorLocation_condition {
  type: "condition";
  condition: ConditionErrorLocation;
}

export interface ErrorLocation_metadata {
  type: "metadata";
  metadata: MetadataErrorLocation;
}

export interface ErrorLocation_effects {
  type: "effects";
  effects: EffectsErrorLocation;
}
/**
 * The specific item that the error is relevant for. FEs should use this to be able to highlight the relevant part of the configuraton.
 */
export type ErrorLocation =
  | ErrorLocation_condition
  | ErrorLocation_metadata
  | ErrorLocation_effects;

export interface Event {
  andPredicate?: Predicate | null | undefined;
  eventType: EventType;
}
export interface EventDriverConfig {
  cronExpression: CronExpression;
  zoneId: ZoneId;
}
export interface EventOrigin {
  liveObjects?: ObjectsChangedEventOrigin | null | undefined;
}
export type EventSetDependencyRid = string;
export interface EventsToRetry_singleBatchEvent {
  type: "singleBatchEvent";
  singleBatchEvent: BatchEventToRetry;
}

export interface EventsToRetry_triggerEvents {
  type: "triggerEvents";
  triggerEvents: Array<TriggerEventToRetry>;
}

export interface EventsToRetry_runtimeErrors {
  type: "runtimeErrors";
  runtimeErrors: Array<RuntimeErrorToRetry>;
}
export type EventsToRetry =
  | EventsToRetry_singleBatchEvent
  | EventsToRetry_triggerEvents
  | EventsToRetry_runtimeErrors;

export interface EventType_objectSetEvent {
  type: "objectSetEvent";
  objectSetEvent: ObjectSetEvent;
}

export interface EventType_objectEvent {
  type: "objectEvent";
  objectEvent: ObjectEvent;
}

export interface EventType_metricChangeEvent {
  type: "metricChangeEvent";
  metricChangeEvent: MetricChangeEvent;
}

export interface EventType_notSavedObjectSetEvent {
  type: "notSavedObjectSetEvent";
  notSavedObjectSetEvent: NotSavedObjectSetEvent;
}

export interface EventType_functionGeneratedObjectSetEvent {
  type: "functionGeneratedObjectSetEvent";
  functionGeneratedObjectSetEvent: FunctionGeneratedObjectSetEvent;
}
export type EventType =
  | EventType_objectSetEvent
  | EventType_objectEvent
  | EventType_metricChangeEvent
  | EventType_notSavedObjectSetEvent
  | EventType_functionGeneratedObjectSetEvent;

export interface ExceededFailureThreshold {
}
export interface ExceptPropertiesModifiedEvent {
  propertiesToExclude: Array<ObjectPropertyTypeRid>;
}
export interface ExecuteForUsers_allUsers {
  type: "allUsers";
  allUsers: AllUsers;
}

export interface ExecuteForUsers_executorUser {
  type: "executorUser";
  executorUser: ExecutorUser;
}
export type ExecuteForUsers =
  | ExecuteForUsers_allUsers
  | ExecuteForUsers_executorUser;

export interface ExecutionMode_perObject {
  type: "perObject";
  perObject: PerObject;
}

export interface ExecutionMode_perBatchOfObjects {
  type: "perBatchOfObjects";
  perBatchOfObjects: PerBatchOfObjects;
}

export interface ExecutionMode_perPartition {
  type: "perPartition";
  perPartition: PerPartition;
}
export type ExecutionMode =
  | ExecutionMode_perObject
  | ExecutionMode_perBatchOfObjects
  | ExecutionMode_perPartition;

export type ExecutionModeTypeEnum =
  | "PER_OBJECT"
  | "PER_BATCH"
  | "PER_PARTITION";
export interface ExecutorUser {
}
/**
 * Staged action that has not been reviewed within the specified retention window. Does not contain parameters.
 */
export interface ExpiredActionEffectInReview {
  executionId: FoundryLogicExecutionId;
  expiredAt: string;
  fromEffect: EffectId;
  generatedAt: string;
  generatedFrom: FoundryLogicLocator;
  id: ActionEffectInReviewId;
  monitorEventId: MonitorEventId;
  rid: ActionTypeRid;
  triggeredBy: TriggeredBy;
  user: UserId;
}
export interface ExpiryConfig {
  expireOn?: string | null | undefined;
}
export interface ExponentialBackoff {
  attemptLimit: number;
  jitter?: JitterConfiguration | null | undefined;
  maxDurationMillis: number;
  stepDurationMillis: number;
}
export interface FailIfAnyEventsDropped {
}
/**
 * This contains information on a failed effect. This could be because e.g. the user does not pass the action
 * validations or because there was a critical error while triggering the effect.
 */
export interface FailureEffectLog {
  args: ConjureErrorArgs;
  errorInstanceId?: string | null | undefined;
  isServerError: boolean;
  retries?: Retries | null | undefined;
  safeMessage: string;
  traceId?: TraceId | null | undefined;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
  triggeredBy?: TriggeredBy | null | undefined;
  unsafeMessage?: string | null | undefined;
}
export interface FailureFoundryLogicEffectLog {
  executionId?: FoundryLogicExecutionId | null | undefined;
  failureLog: FailureEffectLog;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
  triggeredBy: ObjectRid;
  triggeredByV2?: TriggeredBy | null | undefined;
}
export interface FailureInputProvidedWithoutEffectDependency {
}
/**
 * Will be substituted at runtime with the failure message.
 */
export interface FailureMessage {
  safety: FailureMessageSafety;
}
/**
 * Currently limited to all concatenated failure data, which is potentially unsafe.
 */
export type FailureMessageSafety = "FULL_CONTEXT";

/**
 * Prefer using ActionEffectLog.multiple(...)
 */
export interface FailureMultiple {
  results: Array<FailureEffectLog>;
}
/**
 * The review failed to apply (either the review ID does not exist or the action failed to apply.)
 */
export interface FailureStagedActionExecutionEffectLog {
  failureLog: FailureEffectLog;
  stagedActionId: ActionEffectInReviewId;
}
export interface FeatureIsNotAvailable {
  feature: PotentiallyUnavailableFeature;
}
/**
 * The automation was force disabled via runtime config. Used for breakglass situations, and should only
 * be used after consulting with the automate team.
 */
export interface ForceDisabledByServer {
}
export type ForkRid = string;
export interface FoundryFieldSchema {
  arraySubtype?: FoundryFieldSchema | null | undefined;
  mapKeyType?: FoundryFieldSchema | null | undefined;
  mapValueType?: FoundryFieldSchema | null | undefined;
  nullable?: boolean | null | undefined;
  precision?: number | null | undefined;
  scale?: number | null | undefined;
  subSchemas?: Array<FoundryFieldSchema> | null | undefined;
  type: FoundryFieldType;
}
/**
 * FoundryFieldType
 */
export type FoundryFieldType =
  | "ARRAY"
  | "DECIMAL"
  | "MAP"
  | "STRUCT"
  | "LONG"
  | "BINARY"
  | "BOOLEAN"
  | "BYTE"
  | "DATE"
  | "DOUBLE"
  | "FLOAT"
  | "INTEGER"
  | "SHORT"
  | "STRING"
  | "TIMESTAMP";
export interface FoundryLogicEffect {
  executionMode?: ExecutionMode | null | undefined;
  executionSettings?: EffectExecutionSettings | null | undefined;
  locator: FoundryLogicLocator;
  logicInputs: Record<FoundryLogicParameterId, EffectInput>;
  onSuccess: Array<OnSuccess>;
  review: boolean;
}
export interface FoundryLogicEffectLog_stagedLogs {
  type: "stagedLogs";
  stagedLogs: Array<StagedFoundryLogicEffectLog>;
}

export interface FoundryLogicEffectLog_acceptedLogs {
  type: "acceptedLogs";
  acceptedLogs: Array<StagedActionExecutionEffectLog>;
}
export type FoundryLogicEffectLog =
  | FoundryLogicEffectLog_stagedLogs
  | FoundryLogicEffectLog_acceptedLogs;

export type FoundryLogicExecutionId = string;
export interface FoundryLogicLocator {
  logicFunctionId: string;
  logicVersion: string;
  pipelineRid: string;
  publishedFunctionLocator?: FunctionLocator | null | undefined;
}
/**
 * The display name of the logic parameter.
 */
export type FoundryLogicParameterId = string;
export interface FoundryTelemetryServiceTracingMetadata {
  traceId: FoundryTraceId;
  traceOwningRid?: TraceOwningRid | null | undefined;
}
/**
 * A unique identifier for a single top-to-bottom execution. Generated as a time-based uuid using the current
 * time and a unique identifier. See https://www.baeldung.com/java-generating-time-based-uuids.
 *
 * Note that this trace ID is for Foundry applications to write telemetry for users and is not
 * related to the trace IDs generated by our internal tracing infrastructure.
 */
export type FoundryTraceId = string;

/**
 * Execute a function. Currently limited to compute module effects. Functions with ontology edit return
 * types will not have the edits applied.
 */
export interface FunctionEffect {
  executionMode?: ExecutionMode | null | undefined;
  executionSettings?: EffectExecutionSettings | null | undefined;
  functionInputs: Record<FunctionInputName, EffectInput>;
  functionLocator: FunctionLocator;
}
export interface FunctionEffectLog_success {
  type: "success";
  success: SuccessResult;
}

export interface FunctionEffectLog_failedResultV1 {
  type: "failedResultV1";
  failedResultV1: FailureEffectLog;
}
export type FunctionEffectLog =
  | FunctionEffectLog_success
  | FunctionEffectLog_failedResultV1;

export interface FunctionEffectLogs {
  logs: Array<FunctionEffectLog>;
}
export interface FunctionEffectsUnsupported {
}
export interface FunctionGeneratedObjectSetEvent {
  eventType: ObjectSetEventTypeV2;
  function: ObjectSetFunction;
}
export interface FunctionGeneratedObjectSetsUnsupported {
}
export interface FunctionGeneratedRecipients {
  functionInputs: Record<FunctionInputName, EffectInput>;
  functionLocator: FunctionLocator;
}
export interface FunctionGeneratedRecipientsNeedsScopedMode {
}
/**
 * Name of an Input to a Function.
 */
export type FunctionInputName = string;

/**
 * Wraps a function rid and version to serve as an identifier.
 */
export interface FunctionLocator {
  functionRid: FunctionRid;
  functionVersion: FunctionVersion;
}
export interface FunctionOutputTypeNotBoolean {
}
/**
 * Defines a Function on Object that will be called. The function output must be a boolean.
 */
export interface FunctionPredicate {
  functionInputs: Record<FunctionInputName, PredicateFunctionInput>;
  functionLocator: FunctionLocator;
}
export interface FunctionPredicateParameterTypeDoesNotMatch {
  functionInputName: FunctionInputName;
}
/**
 * A function can return null | undefined, which will cause a notification to be skipped.
 */
export interface FunctionReturnEmpty {
}
/**
 * The rid for a Function.
 */
export type FunctionRid = string;
export interface FunctionSpecsNotFound {
}
export interface FunctionValue_untyped {
  type: "untyped";
  untyped: UntypedValue;
}
export type FunctionValue = FunctionValue_untyped;

/**
 * The version of a Function.
 */
export type FunctionVersion = string;
export interface GenericError {
  args: ConjureErrorArgs;
  errorInstanceId: string;
  errorName: string;
  traceId: string;
}
export type GenericValidationError = any;
export interface GlobalEffectExecutionSettings {
  batchSize: number;
  doNotMuteAutomationOnFailures?: boolean | null | undefined;
  effectOrdering?: EffectOrdering | null | undefined;
}
export interface GpsBackedObjectTypesUnsupported {
  objectTypeRid: ObjectTypeRid;
}
export interface GroupBy_properties {
  type: "properties";
  properties: Array<ObjectPropertyTypeRid>;
}
/**
 * The properties to group by. Sequential execution with a set of object sets, partitioned by the specification
 * in this config. Note that side effects will execute once per partition with this configured, e.g. if the
 * affected objects for a subscriber look like:
 * prop_1 | prop_2
 * A      | 1
 * A      | 2
 * B      | 3
 * C      | 4
 * (with properties set to [prop_1]) will result in the following inputs for actions/notifications
 * applications:
 * [(A, 1), (A, 2)]
 * [(B, 3)]
 * [(C, 4)]
 * and 3 total executions.
 */
export type GroupBy = GroupBy_properties;

/**
 * For scheduled automations, there is not exactly one object type that is operated on - this makes it hard for us to generate a marketplace identifier (which required object type rid as well as property type rid.). This constraint will be relaxed in future versions.
 */
export interface GroupedExecutionNotSupportedForScheduled {
}
/**
 * A Multipass group id.
 */
export type GroupId = string;
export type GroupPropertyRid = ObjectPropertyTypeRid;
export interface GroupSubscriberType {
  groupId: GroupId;
}
/**
 * Using min/max operations on object set should be preferred over comparing multi metrics
 * against a single value
 */
export interface InefficientMultiMetricUsage {
}
export interface InstallingDisabledAutomation {
}
export interface InstallingMutedAutomation {
}
export interface InvalidAutomationError {
  errorMessage: string;
}
export interface InvalidBatchSize {
  maximumBatchSize: number;
  providedBatchSize: number;
}
export interface InvalidCron {
}
export interface InvalidEffectInputForExecutionMode {
  effectId: EffectId;
  effectInputType: EffectInputTypeEnum;
  executionModeType: ExecutionModeTypeEnum;
}
export interface InvalidEffectInputForTemplateNotification {
  effectInput: EffectInput;
}
export interface InvalidExpiryAndLocation {
  maxAllowedExpiryDays: number;
}
export interface InvalidLookbackWindow {
  lookbackMillis: number;
  maxMillis: number;
}
export interface InvalidMgsRateLimit {
  maximumRateLimit: number;
  minimumRateLimit: number;
  providedRateLimit: number;
}
export interface InvalidObjectSet {
}
export interface InvalidTemplateEmailNotificationString {
}
export interface InvalidTemplateShortNotificationString {
}
export interface InvalidTransactionReadLimit {
  datasetsNotInInput: Array<DatasetRid>;
  override: TransactionReadLimit;
}
/**
 * Url for notification link must be a valid Url.
 */
export interface InvalidUrlNotificationLink {
}
export interface InvalidZoneId {
}
/**
 * Not actually configurable, we evaluate this to a boolean at runtime based on the monitor's current triggering
 * state. Not supported in event-based monitor logic.
 */
export interface IsMonitorTriggeringContextInput {
}
export interface JitterConfiguration_jitterFactor {
  type: "jitterFactor";
  jitterFactor: number | "NaN" | "Infinity" | "-Infinity";
}

export interface JitterConfiguration_jitterDurationMillis {
  type: "jitterDurationMillis";
  jitterDurationMillis: number;
}
/**
 * Jitter is random noise added to each retry delay in order to avoid simultaneous retries.
 */
export type JitterConfiguration =
  | JitterConfiguration_jitterFactor
  | JitterConfiguration_jitterDurationMillis;

export type JobId = string;
export type LanguageModelRid = string;
export interface LinkedSensorObjectTypesNotFound {
  sensorObjectTypeRids: Array<ObjectTypeRid>;
}
/**
 * A link type rid.
 */
export type LinkTypeRid = string;
export interface LiveConfig {
  editsOnlyMonitoring?: boolean | null | undefined;
  lowLatencyPatchesEnabled: boolean;
  monitorMetricsEnabled?: boolean | null | undefined;
  streamBackedObjectsEnabled?: boolean | null | undefined;
}
export interface LogicEffectsUnsupported {
  logicRid: string;
}
/**
 * The rid for a magritte source.
 */
export interface MagritteSourceResource {
  backingRepositoryRid: string;
  sourceRid: MagritteSourceRid;
}
/**
 * The rid for a magritte source.
 */
export type MagritteSourceRid = string;
export interface MagritteSourcesUnsupported {
  sourceRids: MagritteSourceRid;
}
export interface ManagementSettings {
  managers: Array<MonitorSubscriberType>;
  metadataNotificationSettings: MetadataNotificationSettings;
}
/**
 * Only send failure notifications (side effects or monitor metadata) to managers. Note that since side effect
 * execution is scoped to users, side effects will fail silently for non-manager users.
 */
export interface ManagersOnly {
}
export interface ManagerUsers {
}
export interface MarketplaceActionEffect {
  actionInputs: Record<MarketplaceActionParameterRid, MarketplaceEffectInput>;
  actionTypeRid: MarketplaceActionTypeRid;
  actionTypeVersion?: ActionTypeVersion | null | undefined;
  executionMode?: MarketplaceExecutionMode | null | undefined;
  executionSettings?: MarketplaceEffectExecutionSettings | null | undefined;
}
export type MarketplaceActionParameterRid = MarketplaceId;
export type MarketplaceActionTypeRid = MarketplaceId;

/**
 * The type of the object locator. Corresponds to the object set type set in the event condition.
 */
export interface MarketplaceAffectedObject {
  objectTypeRid: MarketplaceObjectTypeRid;
}
/**
 * Will be substituted at runtime with the affected objects. The corresponding type is an object set rid.
 */
export interface MarketplaceAffectedObjects {
  affectedObjectsType?: AffectedObjectsType | null | undefined;
  objectTypeRids: Array<MarketplaceObjectTypeRid>;
}
export interface MarketplaceAggregation_count {
  type: "count";
  count: CountAggregation;
}

export interface MarketplaceAggregation_sum {
  type: "sum";
  sum: MarketplacePropertyAggregation;
}

export interface MarketplaceAggregation_avg {
  type: "avg";
  avg: MarketplacePropertyAggregation;
}

export interface MarketplaceAggregation_min {
  type: "min";
  min: MarketplacePropertyAggregation;
}

export interface MarketplaceAggregation_max {
  type: "max";
  max: MarketplacePropertyAggregation;
}
export type MarketplaceAggregation =
  | MarketplaceAggregation_count
  | MarketplaceAggregation_sum
  | MarketplaceAggregation_avg
  | MarketplaceAggregation_min
  | MarketplaceAggregation_max;

export interface MarketplaceAndPredicate {
  predicates: Array<MarketplacePredicate>;
}
export interface MarketplaceAttachmentObjectPropertyInput_previousProperty {
  type: "previousProperty";
  previousProperty: MarketplaceObjectProperty;
}

export interface MarketplaceAttachmentObjectPropertyInput_currentProperty {
  type: "currentProperty";
  currentProperty: MarketplaceObjectProperty;
}
export type MarketplaceAttachmentObjectPropertyInput =
  | MarketplaceAttachmentObjectPropertyInput_previousProperty
  | MarketplaceAttachmentObjectPropertyInput_currentProperty;

export interface MarketplaceAttachmentSource_notepad {
  type: "notepad";
  notepad: MarketplaceNotepadAttachmentSource;
}

export interface MarketplaceAttachmentSource_notepadTemplate {
  type: "notepadTemplate";
  notepadTemplate: MarketplaceNotepadTemplateAttachmentSource;
}

export interface MarketplaceAttachmentSource_staticBlobsterRid {
  type: "staticBlobsterRid";
  staticBlobsterRid: MarketplaceBlobsterRid;
}

export interface MarketplaceAttachmentSource_objectProperty {
  type: "objectProperty";
  objectProperty: MarketplaceAttachmentObjectPropertyInput;
}
export type MarketplaceAttachmentSource =
  | MarketplaceAttachmentSource_notepad
  | MarketplaceAttachmentSource_notepadTemplate
  | MarketplaceAttachmentSource_staticBlobsterRid
  | MarketplaceAttachmentSource_objectProperty;

/**
 * Condition for child automation, triggered by completion of a parent monitor.
 */
export interface MarketplaceAutomationDependency {
  event?: MarketplaceEvent | null | undefined;
  monitorRid: MonitorRid;
  triggerIfNoAffectedObjects?: boolean | null | undefined;
  waitTime?: WaitTime | null | undefined;
}
export type MarketplaceBlobsterRid = MarketplaceId;

/**
 * A boolean expression that will result in either a single boolean value or a boolean value per bucket
 * where the buckets are produced by best-effort combining the bucket keys of the left and right operands:
 * - If both sides contain a single value then these values will be compared to produce a single boolean.
 * - If the left or right side contains a single value and the other side contains bucketed values then the
 * single value will be distributed over the buckets to produce a boolean value per bucket.
 * - If both sides contain a bucketed values then the bucket keys will be compared and the expression evaluated
 * for every match found. Any non matching keys are ignored.
 * e.g. left: StaticValue, right: SavedObjectSetMultiMetric -> compare the chosen object property of each object
 * in the set with the static value and produce a boolean value per object rid
 */
export interface MarketplaceBooleanExpression {
  left: MarketplaceOperand;
  operator: ComparisonOperator;
  right: MarketplaceOperand;
}
export interface MarketplaceCreateScenario {
  actionInputs: Record<MarketplaceActionParameterRid, MarketplaceEffectInput>;
  actionTypeRid: MarketplaceActionTypeRid;
  effectId?: EffectId | null | undefined;
  foundryLogicExecutionIdParameter?:
    | MarketplaceActionParameterRid
    | null
    | undefined;
  scenarioRidParameter: MarketplaceActionParameterRid;
  scenarioTitleInput?: MarketplaceScenarioTitleInput | null | undefined;
  scenarioTitleParameter: MarketplaceActionParameterRid;
}
export interface MarketplaceEffect_action {
  type: "action";
  action: MarketplaceActionEffect;
}

export interface MarketplaceEffect_notification {
  type: "notification";
  notification: NotificationEffect;
}

export interface MarketplaceEffect_logic {
  type: "logic";
  logic: MarketplaceFoundryLogicEffect;
}

export interface MarketplaceEffect_function {
  type: "function";
  function: MarketplaceFunctionEffect;
}
export type MarketplaceEffect =
  | MarketplaceEffect_action
  | MarketplaceEffect_notification
  | MarketplaceEffect_logic
  | MarketplaceEffect_function;

export interface MarketplaceEffectDryRunExecutionValidation_v1 {
  type: "v1";
  v1: MarketplaceEffectDryRunExecutionValidationV1;
}
export type MarketplaceEffectDryRunExecutionValidation =
  MarketplaceEffectDryRunExecutionValidation_v1;

export interface MarketplaceEffectDryRunExecutionValidationV1 {
  onFailure: EffectDryRunExecutionValidationFailureHandler;
  validators: Array<MarketplaceEffectDryRunExecutionValidator>;
}
export interface MarketplaceEffectDryRunExecutionValidator {
  definition: MarketplaceEffectDryRunExecutionValidatorDefinition;
  id: EffectValidationId;
}
export interface MarketplaceEffectDryRunExecutionValidatorDefinition_modifiedObjectsAreInSet {
  type: "modifiedObjectsAreInSet";
  modifiedObjectsAreInSet: MarketplaceValidateAllModifiedObjectsAreInObjectSet;
}
export type MarketplaceEffectDryRunExecutionValidatorDefinition =
  MarketplaceEffectDryRunExecutionValidatorDefinition_modifiedObjectsAreInSet;

/**
 * Settings for the execution of a specific effect.
 * Overrides global execution settings if the global settings exist.
 */
export interface MarketplaceEffectExecutionSettings {
  batchSize?: number | null | undefined;
  retryConfig?: RetryConfig | null | undefined;
  triggerDependencyDefinition?: TriggerDependencyDefinition | null | undefined;
  validation?: MarketplaceEffectDryRunExecutionValidation | null | undefined;
}
export interface MarketplaceEffectInput_staticValue {
  type: "staticValue";
  staticValue: _api_types_MarketplaceValue;
}

export interface MarketplaceEffectInput_objectSetRid {
  type: "objectSetRid";
  objectSetRid: MarketplaceObjectSetRid;
}

export interface MarketplaceEffectInput_objectReference {
  type: "objectReference";
  objectReference: MarketplaceObjectReference;
}

export interface MarketplaceEffectInput_objectReferenceList {
  type: "objectReferenceList";
  objectReferenceList: _api_types_MarketplaceObjectReferenceList;
}

export interface MarketplaceEffectInput_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: VersionedObjectSetRid;
}

export interface MarketplaceEffectInput_affectedObject {
  type: "affectedObject";
  affectedObject: MarketplaceAffectedObject;
}

export interface MarketplaceEffectInput_affectedObjects {
  type: "affectedObjects";
  affectedObjects: MarketplaceAffectedObjects;
}

export interface MarketplaceEffectInput_previousProperty {
  type: "previousProperty";
  previousProperty: MarketplaceObjectProperty;
}

export interface MarketplaceEffectInput_currentProperty {
  type: "currentProperty";
  currentProperty: MarketplaceObjectProperty;
}

export interface MarketplaceEffectInput_currentUser {
  type: "currentUser";
  currentUser: CurrentUser;
}

export interface MarketplaceEffectInput_relativeTimestamp {
  type: "relativeTimestamp";
  relativeTimestamp: RelativeTimestamp;
}

export interface MarketplaceEffectInput_object {
  type: "object";
  object: MarketplaceObjectRid;
}

export interface MarketplaceEffectInput_string {
  type: "string";
  string: _api_types_StringValue;
}

export interface MarketplaceEffectInput_failureMessage {
  type: "failureMessage";
  failureMessage: FailureMessage;
}

export interface MarketplaceEffectInput_eventId {
  type: "eventId";
  eventId: MonitorEventIdInput;
}

export interface MarketplaceEffectInput_monitorRid {
  type: "monitorRid";
  monitorRid: MonitorRidInput;
}

export interface MarketplaceEffectInput_streamColumn {
  type: "streamColumn";
  streamColumn: StreamingColumnInput;
}
export type MarketplaceEffectInput =
  | MarketplaceEffectInput_staticValue
  | MarketplaceEffectInput_objectSetRid
  | MarketplaceEffectInput_objectReference
  | MarketplaceEffectInput_objectReferenceList
  | MarketplaceEffectInput_versionedObjectSetRid
  | MarketplaceEffectInput_affectedObject
  | MarketplaceEffectInput_affectedObjects
  | MarketplaceEffectInput_previousProperty
  | MarketplaceEffectInput_currentProperty
  | MarketplaceEffectInput_currentUser
  | MarketplaceEffectInput_relativeTimestamp
  | MarketplaceEffectInput_object
  | MarketplaceEffectInput_string
  | MarketplaceEffectInput_failureMessage
  | MarketplaceEffectInput_eventId
  | MarketplaceEffectInput_monitorRid
  | MarketplaceEffectInput_streamColumn;

export interface MarketplaceEffectRendering {
  effectId?: EffectId | null | undefined;
  executionMode?: MarketplaceExecutionMode | null | undefined;
  executionSettings?: MarketplaceEffectExecutionSettings | null | undefined;
  notificationEffectRendering: MarketplaceNotificationEffectRendering;
  recipients?: MarketplaceNotificationRecipients | null | undefined;
}
export interface MarketplaceEvent {
  andPredicate?: MarketplacePredicate | null | undefined;
  eventType: MarketplaceEventType;
}
export interface MarketplaceEventType_objectSetEvent {
  type: "objectSetEvent";
  objectSetEvent: MarketplaceObjectSetEvent;
}

export interface MarketplaceEventType_objectEvent {
  type: "objectEvent";
  objectEvent: MarketplaceObjectEvent;
}

export interface MarketplaceEventType_metricChangeEvent {
  type: "metricChangeEvent";
  metricChangeEvent: MarketplaceMetricChangeEvent;
}

export interface MarketplaceEventType_notSavedObjectSetEvent {
  type: "notSavedObjectSetEvent";
  notSavedObjectSetEvent: MarketplaceNotSavedObjectSetEvent;
}

export interface MarketplaceEventType_functionGeneratedObjectSetEvent {
  type: "functionGeneratedObjectSetEvent";
  functionGeneratedObjectSetEvent: MarketplaceFunctionGeneratedObjectSetEvent;
}
export type MarketplaceEventType =
  | MarketplaceEventType_objectSetEvent
  | MarketplaceEventType_objectEvent
  | MarketplaceEventType_metricChangeEvent
  | MarketplaceEventType_notSavedObjectSetEvent
  | MarketplaceEventType_functionGeneratedObjectSetEvent;

export interface MarketplaceExceptPropertiesModifiedEvent {
  propertiesToExclude: Array<MarketplaceObjectPropertyTypeRid>;
}
export interface MarketplaceExecutionMode_perObject {
  type: "perObject";
  perObject: PerObject;
}

export interface MarketplaceExecutionMode_perBatchOfObjects {
  type: "perBatchOfObjects";
  perBatchOfObjects: PerBatchOfObjects;
}

export interface MarketplaceExecutionMode_perPartition {
  type: "perPartition";
  perPartition: MarketplacePerPartition;
}
export type MarketplaceExecutionMode =
  | MarketplaceExecutionMode_perObject
  | MarketplaceExecutionMode_perBatchOfObjects
  | MarketplaceExecutionMode_perPartition;

export interface MarketplaceFoundryLogicEffect {
  executionMode?: MarketplaceExecutionMode | null | undefined;
  executionSettings?: MarketplaceEffectExecutionSettings | null | undefined;
  locator: MarketplaceFoundryLogicLocator;
  logicInputs: Record<FoundryLogicParameterId, MarketplaceEffectInput>;
  onSuccess: Array<MarketplaceOnSuccess>;
  review: boolean;
}
export type MarketplaceFoundryLogicLocator = MarketplaceId;

/**
 * Execute a function. Currently limited to compute module effects. Functions with ontology edit return
 * types will not have the edits applied.
 */
export interface MarketplaceFunctionEffect {
  executionMode?: MarketplaceExecutionMode | null | undefined;
  executionSettings?: MarketplaceEffectExecutionSettings | null | undefined;
  functionInputs: Record<FunctionInputName, MarketplaceEffectInput>;
  functionLocator: MarketplaceFunctionLocator;
}
export interface MarketplaceFunctionGeneratedObjectSetEvent {
  eventType: MarketplaceObjectSetEventTypeV2;
  function: MarketplaceObjectSetFunction;
}
export interface MarketplaceFunctionGeneratedRecipients {
  functionInputs: Record<FunctionInputName, MarketplaceEffectInput>;
  functionLocator: MarketplaceFunctionLocator;
}
export type MarketplaceFunctionLocator = MarketplaceId;

/**
 * Defines a Function on Object that will be called. The function output must be a boolean.
 */
export interface MarketplaceFunctionPredicate {
  functionInputs: Record<FunctionInputName, MarketplacePredicateFunctionInput>;
  functionLocator: MarketplaceFunctionLocator;
}
export interface MarketplaceGroupBy_properties {
  type: "properties";
  properties: Array<MarketplaceObjectPropertyTypeRid>;
}
/**
 * The properties to group by. Sequential execution with a set of object sets, partitioned by the specification
 * in this config. Note that side effects will execute once per partition with this configured, e.g. if the
 * affected objects for a subscriber look like:
 * prop_1 | prop_2
 * A      | 1
 * A      | 2
 * B      | 3
 * C      | 4
 * (with properties set to [prop_1]) will result in the following inputs for actions/notifications
 * applications:
 * [(A, 1), (A, 2)]
 * [(B, 3)]
 * [(C, 4)]
 * and 3 total executions.
 */
export type MarketplaceGroupBy = MarketplaceGroupBy_properties;

export type MarketplaceGroupId = MarketplaceId;
export type MarketplaceGroupPropertyRid = MarketplaceObjectPropertyTypeRid;
export interface MarketplaceGroupSubscriberType {
  groupId: MarketplaceGroupId;
}
export type MarketplaceId = string;
export type MarketplaceLanguageModelRid = MarketplaceId;
export type MarketplaceLinkTypeRid = MarketplaceId;
export interface MarketplaceManagementSettings {
  managers: Array<MarketplaceMonitorSubscriberType>;
  metadataNotificationSettings: MetadataNotificationSettings;
}
export interface MarketplaceMathBinaryOperation {
  left: MarketplaceOperand;
  operator: MathBinaryOperator;
  right: MarketplaceOperand;
}
export interface MarketplaceMathUnaryOperation {
  operator: MathUnaryOperator;
  value: MarketplaceOperand;
}
/**
 * Defines an event on a change (increase or decrease) of a single metric.
 */
export interface MarketplaceMetricChangeEvent {
  changeMetric: MarketplaceSingleMetric;
  changeType: ChangeType;
}
export interface MarketplaceMonitor {
  attribution?: MarketplaceMonitorVersionAttribution | null | undefined;
  isCurrentlyInTriggeringState: boolean;
  lastEvaluationTime?: string | null | undefined;
  lastHistoryEvent: MarketplaceMonitorEvent;
  lastRecoveryEvent: MarketplaceMonitorEvent;
  lastTriggerEvent: MarketplaceMonitorEvent;
  logic: MarketplaceMonitorLogic;
  metadata: MarketplaceMonitorMetadata;
  monitorType: MonitorType;
  publishedMonitorVersion?: MonitorVersion | null | undefined;
  version: MonitorVersion;
  versionedObjectSetsVersionsUsed: Record<
    VersionedObjectSetRid,
    MarketplaceVersionedObjectSet
  >;
}
export interface MarketplaceMonitorEvent {
}
export interface MarketplaceMonitorLogic_event {
  type: "event";
  event: MarketplaceEvent;
}

export interface MarketplaceMonitorLogic_scheduledEvent {
  type: "scheduledEvent";
  scheduledEvent: MarketplaceScheduledEvent;
}

export interface MarketplaceMonitorLogic_simpleCondition {
  type: "simpleCondition";
  simpleCondition: MarketplaceSimpleCondition;
}

export interface MarketplaceMonitorLogic_withRecoveryCondition {
  type: "withRecoveryCondition";
  withRecoveryCondition: MarketplaceWithRecoveryCondition;
}

export interface MarketplaceMonitorLogic_schedule {
  type: "schedule";
  schedule: ScheduleCondition;
}

export interface MarketplaceMonitorLogic_scheduledSimpleCondition {
  type: "scheduledSimpleCondition";
  scheduledSimpleCondition: MarketplaceScheduledSimpleCondition;
}

export interface MarketplaceMonitorLogic_timeSeries {
  type: "timeSeries";
  timeSeries: MarketplaceTimeSeriesCondition;
}

export interface MarketplaceMonitorLogic_automationDependency {
  type: "automationDependency";
  automationDependency: MarketplaceAutomationDependency;
}

export interface MarketplaceMonitorLogic_streamCondition {
  type: "streamCondition";
  streamCondition: MarketplaceStreamCondition;
}
export type MarketplaceMonitorLogic =
  | MarketplaceMonitorLogic_event
  | MarketplaceMonitorLogic_scheduledEvent
  | MarketplaceMonitorLogic_simpleCondition
  | MarketplaceMonitorLogic_withRecoveryCondition
  | MarketplaceMonitorLogic_schedule
  | MarketplaceMonitorLogic_scheduledSimpleCondition
  | MarketplaceMonitorLogic_timeSeries
  | MarketplaceMonitorLogic_automationDependency
  | MarketplaceMonitorLogic_streamCondition;

export interface MarketplaceMonitorMetadata {
  branchRid?: BranchRid | null | undefined;
  cycleDetectionSettings?: CycleDetectionSettings | null | undefined;
  dependentAutomations: Array<MonitorRid>;
  disabled: DisabledConfig;
  expiry?: ExpiryConfig | null | undefined;
  expiryDate: string;
  globalEffectExecutionSettings?:
    | GlobalEffectExecutionSettings
    | null
    | undefined;
  liveConfig?: LiveConfig | null | undefined;
  management?: MarketplaceManagementSettings | null | undefined;
  mgsConfig?: MgsConfig | null | undefined;
  muted: MarketplaceMutedConfig;
  priority?: MonitorPriority | null | undefined;
  rendering?: MarketplaceRenderingConfig | null | undefined;
  renderingV2: Record<EffectId, MarketplaceRenderingConfig>;
  rid: MonitorRid;
  scopedTokenEffects?: MarketplaceScopedTokenEffects | null | undefined;
  subscribers: Array<MarketplaceMonitorSubscriber>;
  telemetryConfig?: TelemetryConfig | null | undefined;
  timeSeriesAlertingOverrides?: TimeSeriesAlertingOverrides | null | undefined;
  triggerExecutionSettings?: TriggerExecutionSettings | null | undefined;
}
export interface MarketplaceMonitorSubscriber {
  recoveryEffects: Record<EffectId, MarketplaceEffect>;
  subscriberType: MarketplaceMonitorSubscriberType;
  triggerEffects: Record<EffectId, MarketplaceEffect>;
}
export interface MarketplaceMonitorSubscriberType_user {
  type: "user";
  user: MarketplaceUserSubscriberType;
}

export interface MarketplaceMonitorSubscriberType_group {
  type: "group";
  group: MarketplaceGroupSubscriberType;
}
/**
 * A subscriber to a monitor.
 */
export type MarketplaceMonitorSubscriberType =
  | MarketplaceMonitorSubscriberType_user
  | MarketplaceMonitorSubscriberType_group;

/**
 * Details about attribution for creating a given monitor version
 */
export interface MarketplaceMonitorVersionAttribution {
  createdAt: string;
  createdBy?: MarketplaceUserId | null | undefined;
}
export interface MarketplaceMultiMetric {
  metricId: MetricId;
  multiMetricType: MarketplaceMultiMetricType;
}
export interface MarketplaceMultiMetricType_objectSetMultiMetric {
  type: "objectSetMultiMetric";
  objectSetMultiMetric: MarketplaceObjectSetMultiMetric;
}

export interface MarketplaceMultiMetricType_versionedObjectSetMultiMetric {
  type: "versionedObjectSetMultiMetric";
  versionedObjectSetMultiMetric: MarketplaceVersionedObjectSetMultiMetric;
}
export type MarketplaceMultiMetricType =
  | MarketplaceMultiMetricType_objectSetMultiMetric
  | MarketplaceMultiMetricType_versionedObjectSetMultiMetric;

/**
 * If muted, no effects will be triggered. The monitor history will still be saved.
 */
export interface MarketplaceMutedConfig {
  forUsers: MarketplaceMutedForUsers;
  isMutedIndefinitely?: boolean | null | undefined;
  until?: string | null | undefined;
}
export interface MarketplaceMutedForUsers {
}
export interface MarketplaceNotepadAttachmentSource {
  notepadRid: MarketplaceNotepadRid;
}
export type MarketplaceNotepadRid = MarketplaceId;
export interface MarketplaceNotepadTemplateAttachmentSource {
  inputs: MarketplaceNotepadTemplateInputsMap;
  notepadTemplateRid: MarketplaceNotepadTemplateRid;
  notepadTemplateVersion: NotepadTemplateVersion;
}
export type MarketplaceNotepadTemplateInputName = MarketplaceId;

/**
 * Specifies a map from template input parameters to actual values. The values are passed to the Notepad template
 * and are used to generate the new Notepad document.
 */
export type MarketplaceNotepadTemplateInputsMap = Record<
  MarketplaceNotepadTemplateInputName,
  MarketplaceEffectInput
>;
export type MarketplaceNotepadTemplateRid = MarketplaceId;
export interface MarketplaceNotificationAttachment {
  fileName?: string | null | undefined;
  inputs: Record<EffectInputId, MarketplaceEffectInput>;
  source: MarketplaceAttachmentSource;
}
export interface MarketplaceNotificationEffectFunctionRendering {
  additionalAttachments: Array<MarketplaceNotificationAttachment>;
  functionInputs: Record<FunctionInputName, MarketplaceEffectInput>;
  functionLocator: MarketplaceFunctionLocator;
}
export interface MarketplaceNotificationEffectRendering_plainText {
  type: "plainText";
  plainText: MarketplacePlainTextNotificationContent;
}

export interface MarketplaceNotificationEffectRendering_functionRendering {
  type: "functionRendering";
  functionRendering: MarketplaceNotificationEffectFunctionRendering;
}

export interface MarketplaceNotificationEffectRendering_systemDefault {
  type: "systemDefault";
  systemDefault: SystemDefaultRendering;
}
export type MarketplaceNotificationEffectRendering =
  | MarketplaceNotificationEffectRendering_plainText
  | MarketplaceNotificationEffectRendering_functionRendering
  | MarketplaceNotificationEffectRendering_systemDefault;

export interface MarketplaceNotificationLink {
  label: string;
  urlTarget: MarketplaceUrlTarget;
}
export interface MarketplaceNotificationRecipients_propertyBacked {
  type: "propertyBacked";
  propertyBacked: Array<MarketplacePrincipalObjectProperty>;
}

export interface MarketplaceNotificationRecipients_functionGenerated {
  type: "functionGenerated";
  functionGenerated: MarketplaceFunctionGeneratedRecipients;
}
export type MarketplaceNotificationRecipients =
  | MarketplaceNotificationRecipients_propertyBacked
  | MarketplaceNotificationRecipients_functionGenerated;

export interface MarketplaceNotSavedObjectSetEvent {
  eventType: MarketplaceObjectSetEventTypeV2;
  objectSetRid: MarketplaceObjectSetRid;
}
export interface MarketplaceObjectEvent {
  eventType: ObjectEventType;
  objectRid: MarketplaceObjectRid;
}
export interface MarketplaceObjectMetric {
  objectRid: MarketplaceObjectRid;
  propertyTypeRid: MarketplaceObjectPropertyTypeRid;
}
export type MarketplaceObjectProperty = MarketplaceId;
export type MarketplaceObjectPropertyTypeRid = MarketplaceId;
export type MarketplaceObjectReference = MarketplaceId;
export type MarketplaceObjectReferenceValue = MarketplaceId;
export type MarketplaceObjectRid = MarketplaceId;
export interface MarketplaceObjectSetAggregateMetric {
  aggregation: MarketplaceAggregation;
  objectSetRid: MarketplaceObjectSetRid;
}
export interface MarketplaceObjectSetEvent {
  eventType: ObjectSetEventType;
  eventTypeV2?: MarketplaceObjectSetEventTypeV2 | null | undefined;
  versionedObjectSetRid: VersionedObjectSetRid;
}
export interface MarketplaceObjectSetEventTypeV2_added {
  type: "added";
  added: ObjectsAddedEvent;
}

export interface MarketplaceObjectSetEventTypeV2_removed {
  type: "removed";
  removed: ObjectsRemovedEvent;
}

export interface MarketplaceObjectSetEventTypeV2_modified {
  type: "modified";
  modified: MarketplaceObjectsModifiedEvent;
}

export interface MarketplaceObjectSetEventTypeV2_allObjects {
  type: "allObjects";
  allObjects: AllObjectsEvent;
}
export type MarketplaceObjectSetEventTypeV2 =
  | MarketplaceObjectSetEventTypeV2_added
  | MarketplaceObjectSetEventTypeV2_removed
  | MarketplaceObjectSetEventTypeV2_modified
  | MarketplaceObjectSetEventTypeV2_allObjects;

/**
 * The output of this function must be an object set.
 */
export interface MarketplaceObjectSetFunction {
  functionInputs: Record<FunctionInputName, MarketplaceObjectSetFunctionInput>;
  functionLocator: MarketplaceFunctionLocator;
}
export interface MarketplaceObjectSetFunctionInput_staticValue {
  type: "staticValue";
  staticValue: _api_types_MarketplaceValue;
}
export type MarketplaceObjectSetFunctionInput =
  MarketplaceObjectSetFunctionInput_staticValue;

/**
 * Will contain a value of propertyTypeRid per object in the object set.
 */
export interface MarketplaceObjectSetMultiMetric {
  objectSetRid: MarketplaceObjectSetRid;
  propertyTypeRid: MarketplaceObjectPropertyTypeRid;
}
export type MarketplaceObjectSetRid = MarketplaceId;
export interface MarketplaceObjectsModifiedEvent {
  propertiesModified: MarketplacePropertiesModifiedEvent;
  shouldMonitorObjectsAdded: boolean;
  shouldMonitorObjectsRemoved: boolean;
}
export type MarketplaceObjectTypeId = MarketplaceId;
export type MarketplaceObjectTypeRid = MarketplaceId;
export interface MarketplaceOnSuccess_createScenario {
  type: "createScenario";
  createScenario: MarketplaceCreateScenario;
}
export type MarketplaceOnSuccess = MarketplaceOnSuccess_createScenario;

export interface MarketplaceOperand_value {
  type: "value";
  value: _api_types_MarketplaceValue;
}

export interface MarketplaceOperand_singleMetric {
  type: "singleMetric";
  singleMetric: MarketplaceSingleMetric;
}

export interface MarketplaceOperand_multiMetric {
  type: "multiMetric";
  multiMetric: MarketplaceMultiMetric;
}

export interface MarketplaceOperand_binaryOperation {
  type: "binaryOperation";
  binaryOperation: MarketplaceMathBinaryOperation;
}

export interface MarketplaceOperand_unaryOperation {
  type: "unaryOperation";
  unaryOperation: MarketplaceMathUnaryOperation;
}
/**
 * An operand can resolve to either a single value or many values bucketed in some way.
 */
export type MarketplaceOperand =
  | MarketplaceOperand_value
  | MarketplaceOperand_singleMetric
  | MarketplaceOperand_multiMetric
  | MarketplaceOperand_binaryOperation
  | MarketplaceOperand_unaryOperation;

export interface MarketplaceOrPredicate {
  predicates: Array<MarketplacePredicate>;
}
export interface MarketplacePerPartition {
  groupBy: MarketplaceGroupBy;
}
export interface MarketplacePlainTextEmailContent {
  body: string;
  links: Array<MarketplaceNotificationLink>;
  subject: string;
}
/**
 * Plain text rendering for notifications.
 */
export interface MarketplacePlainTextNotificationContent {
  attachments: Array<MarketplaceNotificationAttachment>;
  emailContent?: MarketplacePlainTextEmailContent | null | undefined;
  inputs: Record<EffectInputId, MarketplaceEffectInput>;
  shortContent: MarketplacePlainTextShortContent;
}
/**
 * Hard coded strings to be used when creating notifications.
 */
export interface MarketplacePlainTextShortContent {
  heading: string;
  links: Array<MarketplaceNotificationLink>;
  message: string;
}
export interface MarketplacePredicate_booleanExpression {
  type: "booleanExpression";
  booleanExpression: MarketplaceBooleanExpression;
}

export interface MarketplacePredicate_andPredicate {
  type: "andPredicate";
  andPredicate: MarketplaceAndPredicate;
}

export interface MarketplacePredicate_orPredicate {
  type: "orPredicate";
  orPredicate: MarketplaceOrPredicate;
}

export interface MarketplacePredicate_functionPredicate {
  type: "functionPredicate";
  functionPredicate: MarketplaceFunctionPredicate;
}
export type MarketplacePredicate =
  | MarketplacePredicate_booleanExpression
  | MarketplacePredicate_andPredicate
  | MarketplacePredicate_orPredicate
  | MarketplacePredicate_functionPredicate;

export interface MarketplacePredicateFunctionInput_currentlyTriggering {
  type: "currentlyTriggering";
  currentlyTriggering: IsMonitorTriggeringContextInput;
}

export interface MarketplacePredicateFunctionInput_staticValue {
  type: "staticValue";
  staticValue: _api_types_MarketplaceValue;
}

export interface MarketplacePredicateFunctionInput_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: VersionedObjectSetRid;
}

export interface MarketplacePredicateFunctionInput_objectSetRid {
  type: "objectSetRid";
  objectSetRid: MarketplaceObjectSetRid;
}
export type MarketplacePredicateFunctionInput =
  | MarketplacePredicateFunctionInput_currentlyTriggering
  | MarketplacePredicateFunctionInput_staticValue
  | MarketplacePredicateFunctionInput_versionedObjectSetRid
  | MarketplacePredicateFunctionInput_objectSetRid;

export interface MarketplacePrincipalObjectProperty {
  objectTypeRid: MarketplaceObjectTypeRid;
  principalProperty: MarketplacePrincipalProperty;
}
export interface MarketplacePrincipalProperty_userPropertyRid {
  type: "userPropertyRid";
  userPropertyRid: MarketplaceUserPropertyRid;
}

export interface MarketplacePrincipalProperty_groupPropertyRid {
  type: "groupPropertyRid";
  groupPropertyRid: MarketplaceGroupPropertyRid;
}
export type MarketplacePrincipalProperty =
  | MarketplacePrincipalProperty_userPropertyRid
  | MarketplacePrincipalProperty_groupPropertyRid;

export interface MarketplacePropertiesModifiedEvent_anyPropertiesModified {
  type: "anyPropertiesModified";
  anyPropertiesModified: AnyPropertyModifiedEvent;
}

export interface MarketplacePropertiesModifiedEvent_exceptPropertiesModified {
  type: "exceptPropertiesModified";
  exceptPropertiesModified: MarketplaceExceptPropertiesModifiedEvent;
}

export interface MarketplacePropertiesModifiedEvent_somePropertiesModified {
  type: "somePropertiesModified";
  somePropertiesModified: MarketplaceSomePropertiesModifiedEvent;
}
export type MarketplacePropertiesModifiedEvent =
  | MarketplacePropertiesModifiedEvent_anyPropertiesModified
  | MarketplacePropertiesModifiedEvent_exceptPropertiesModified
  | MarketplacePropertiesModifiedEvent_somePropertiesModified;

export interface MarketplacePropertyAggregation {
  propertyTypeRid: MarketplaceObjectPropertyTypeRid;
}
export interface MarketplaceReferencedEntities {
  linkTypeRids: Array<MarketplaceLinkTypeRid>;
  objectTypeRids: Array<MarketplaceObjectTypeRid>;
}
/**
 * Allows users to configure how side effects should be rendered for all the subscribers of this monitor.
 * User's effects (e.g. notifications) will only use these settings if they have a notification side effect
 * configured.
 */
export interface MarketplaceRenderingConfig {
  recoveryEffectsRendering?: MarketplaceEffectRendering | null | undefined;
  triggerEffectsRendering: MarketplaceEffectRendering;
}
/**
 * Scope that the automation is running against, includes the entities that the token that we run with has
 * access to.
 *
 * This type includes the resources whose input managers we'll need to call. Note that there are also additional
 * resources that would be required by the scope that need to be imported into the project.
 */
export interface MarketplaceRunningAutomationScope {
  actionTypeRids: Array<MarketplaceActionTypeRid>;
  artifacts: Array<ArtifactsResource>;
  functionLocators: Array<MarketplaceFunctionLocator>;
  functionRids: Array<FunctionRid>;
  languageModelRid: Array<LanguageModelRid>;
  linkTypeRids: Array<MarketplaceLinkTypeRid>;
  mediaSets: Array<MediaSetResource>;
  objectTypeRids: Array<MarketplaceObjectTypeRid>;
  sources: Array<MagritteSourceRid>;
  sourcesV2: Array<MagritteSourceResource>;
  valueTypes: Array<ValueTypeResource>;
  webhookLocators: Array<WebhookLocator>;
}
export interface MarketplaceScenarioTitleInput_currentProperty {
  type: "currentProperty";
  currentProperty: MarketplaceObjectProperty;
}
export type MarketplaceScenarioTitleInput =
  MarketplaceScenarioTitleInput_currentProperty;

export interface MarketplaceScheduledEvent {
  event: MarketplaceEvent;
  schedule: ScheduleCondition;
  triggerIfNoAffectedObjects?: boolean | null | undefined;
}
export interface MarketplaceScheduledSimpleCondition {
  schedule: ScheduleCondition;
  simpleCondition: MarketplaceSimpleCondition;
}
export interface MarketplaceScopedEffect_action {
  type: "action";
  action: MarketplaceActionEffect;
}

export interface MarketplaceScopedEffect_logic {
  type: "logic";
  logic: MarketplaceFoundryLogicEffect;
}
/**
 * The same as Effect, but a narrower type since notifications are not yet allowed as scoped effects.
 */
export type MarketplaceScopedEffect =
  | MarketplaceScopedEffect_action
  | MarketplaceScopedEffect_logic;

export interface MarketplaceScopedEffectExecutor_user {
  type: "user";
  user: MarketplaceUserId;
}
export type MarketplaceScopedEffectExecutor =
  MarketplaceScopedEffectExecutor_user;

/**
 * Used for side effects not executed on behalf of a single user, and rather executed using a scoped token.
 */
export interface MarketplaceScopedSideEffects {
  onBehalfOf?: MarketplaceScopedEffectExecutor | null | undefined;
  persistHistoryEvent?: boolean | null | undefined;
  triggerEffects: Record<EffectId, MarketplaceScopedEffect>;
}
export interface MarketplaceScopedTokenEffects {
  additionalScope: MarketplaceRunningAutomationScope;
  generatedScope: MarketplaceRunningAutomationScope;
  sideEffects: MarketplaceScopedSideEffects;
}
/**
 * This defines a simple condition monitor that is stateful and can be considered in a triggering state.
 *
 * Here's an example:
 * predicate1 OR predicate2
 *
 * | time | predicate1 | predicate2 | Does it trigger? | Does it recover? | Is it in a triggering state?     |
 * -----------------------------------------------------------------------------------------------------------
 * | t0   | False      | False      | False            | False          | False                              |
 * | t1   | True       | False      | True             | False          | True                               |
 * | t2   | False      | True       | False            | False          | True                               |
 * | t3   | True       | True       | False            | False          | True                               |
 * | t4   | False      | False      | False            | True           | False                              |
 */
export interface MarketplaceSimpleCondition {
  triggerPredicate: MarketplacePredicate;
}
export interface MarketplaceSingleMetric {
  metricId: MetricId;
  singleMetricType: MarketplaceSingleMetricType;
}
export interface MarketplaceSingleMetricType_objectSetAggregateMetric {
  type: "objectSetAggregateMetric";
  objectSetAggregateMetric: MarketplaceObjectSetAggregateMetric;
}

export interface MarketplaceSingleMetricType_versionedObjectSetAggregateMetric {
  type: "versionedObjectSetAggregateMetric";
  versionedObjectSetAggregateMetric:
    MarketplaceVersionedObjectSetAggregateMetric;
}

export interface MarketplaceSingleMetricType_objectMetric {
  type: "objectMetric";
  objectMetric: MarketplaceObjectMetric;
}
export type MarketplaceSingleMetricType =
  | MarketplaceSingleMetricType_objectSetAggregateMetric
  | MarketplaceSingleMetricType_versionedObjectSetAggregateMetric
  | MarketplaceSingleMetricType_objectMetric;

export interface MarketplaceSomePropertiesModifiedEvent {
  propertiesToMonitor: Array<MarketplaceObjectPropertyTypeRid>;
}
/**
 * A condition which operates on a streaming dataset.
 */
export interface MarketplaceStreamCondition {
  datasetRid: MarketplaceStreamingDatasetRid;
  eventType: StreamEventType;
}
export type MarketplaceStreamingDatasetRid = MarketplaceId;

/**
 * Condition for monitoring time series.
 */
export interface MarketplaceTimeSeriesCondition {
  intermediateObjectTypeCondition:
    MarketplaceTimeSeriesConditionAutomationCondition;
  outputInfo: MarketplaceTimeSeriesConditionOutputInfo;
  quiverLocator: TimeSeriesQuiverLocator;
  streaming?: TimeSeriesStreamingConfiguration | null | undefined;
}
/**
 * The sub-condition used for the intermediate object type.
 * Note that when this is scheduled, this does not imply the update schedule of the output object
 * type.
 * This logic will always default to live when possible. If non-live is request, a scheduled event can be used in the logic.
 */
export interface MarketplaceTimeSeriesConditionAutomationCondition {
  logic: MarketplaceTimeseriesIntermediateObjectTypeMonitorLogic;
}
export interface MarketplaceTimeSeriesConditionOutputInfo_v1 {
  type: "v1";
  v1: MarketplaceTimeSeriesConditionOutputInfoV1;
}
export type MarketplaceTimeSeriesConditionOutputInfo =
  MarketplaceTimeSeriesConditionOutputInfo_v1;

export interface MarketplaceTimeSeriesConditionOutputInfoV1 {
  datasetRid: DatasetRid;
  eventPropertiesMapping: TimeSeriesEventPropertiesMapping;
  objectTypeRid: MarketplaceObjectTypeRid;
}
export interface MarketplaceTimeseriesIntermediateObjectTypeMonitorLogic_event {
  type: "event";
  event: MarketplaceEvent;
}

export interface MarketplaceTimeseriesIntermediateObjectTypeMonitorLogic_scheduledEvent {
  type: "scheduledEvent";
  scheduledEvent: MarketplaceScheduledEvent;
}
/**
 * The logic used for automating the intermediate object type. Note that pure schedules are not allowed, since we want to force users to only see alerts for the given automation, and therefore always need a filter on the object type.
 */
export type MarketplaceTimeseriesIntermediateObjectTypeMonitorLogic =
  | MarketplaceTimeseriesIntermediateObjectTypeMonitorLogic_event
  | MarketplaceTimeseriesIntermediateObjectTypeMonitorLogic_scheduledEvent;

export interface MarketplaceUrlTarget_rid {
  type: "rid";
  rid: MarketplaceUrlTargetRid;
}

export interface MarketplaceUrlTarget_url {
  type: "url";
  url: Url;
}
/**
 * The target for generating a URL.
 */
export type MarketplaceUrlTarget =
  | MarketplaceUrlTarget_rid
  | MarketplaceUrlTarget_url;

export type MarketplaceUrlTargetRid = string;
export interface MarketplaceUserId {
}
export type MarketplaceUserPropertyRid = MarketplaceObjectPropertyTypeRid;
export interface MarketplaceUserSubscriberType {
  userId: MarketplaceUserId;
}
export interface MarketplaceValidateAllModifiedObjectsAreInObjectSet {
  objectSet: MarketplaceObjectSetRid;
}
export interface MarketplaceVersionedObjectSet {
  objectSetRid: MarketplaceObjectSetRid;
  objectSetVersion: ObjectSetVersion;
}
export interface MarketplaceVersionedObjectSetAggregateMetric {
  aggregation: MarketplaceAggregation;
  versionedObjectSetRid: VersionedObjectSetRid;
}
/**
 * Will contain a value of propertyTypeRid per object in the object set.
 */
export interface MarketplaceVersionedObjectSetMultiMetric {
  propertyTypeRid: MarketplaceObjectPropertyTypeRid;
  versionedObjectSetRid: VersionedObjectSetRid;
}
/**
 * This defined a monitor that has different values for triggering and recovery.
 * Here's an example:
 * Operand is count(employees), the operator is >, the trigger value is 10, and the recovery value is 8.
 *
 * | time | count(employees) | Does it trigger? | Does it recover? | Is it in a triggering state?     |
 * ----------------------------------------------------------------------------------------------------
 * | t0   | 5                | False            | False           | False                             |
 * | t1   | 11               | True             | False           | True                              |
 * | t2   | 12               | False            | False           | True                              |
 * | t3   | 9                | False            | False           | True                              |
 * | t4   | 8                | False            | True            | False                             |
 *
 * A monitor can only trigger again if it is not currently in a triggering state, similarly it can only recover
 * if it is in a triggering state. For slow monitors, this may drop some events.
 */
export interface MarketplaceWithRecoveryCondition {
  operand: MarketplaceOperand;
  operator: ComparisonOperator;
  recoveryValue: _api_types_MarketplaceValue;
  triggerValue: _api_types_MarketplaceValue;
}
export interface MathBinaryOperation {
  left: Operand;
  operator: MathBinaryOperator;
  right: Operand;
}
export type MathBinaryOperator = "PLUS" | "MINUS" | "TIMES" | "DIVIDE";
export interface MathUnaryOperation {
  operator: MathUnaryOperator;
  value: Operand;
}
export type MathUnaryOperator = "MINUS" | "ABS";
export interface MediaSetResource {
  rid: MediaSetRid;
}
export type MediaSetRid = string;
export interface MetadataErrorLocation {
}
export interface MetadataNotificationRecipients_allSubscribers {
  type: "allSubscribers";
  allSubscribers: AllSubscribers;
}

export interface MetadataNotificationRecipients_managersOnly {
  type: "managersOnly";
  managersOnly: ManagersOnly;
}
export type MetadataNotificationRecipients =
  | MetadataNotificationRecipients_allSubscribers
  | MetadataNotificationRecipients_managersOnly;

/**
 * Notification configurations for events regarding the monitor's status. Currently notifications are
 * configurable for monitor configuration errors (auto-disabling, monitor expiry, and runtime/evaluation errors)
 * as well as errors that may occur from side effect failures.
 */
export interface MetadataNotificationSettings {
  monitorConfigurationErrors: MetadataNotificationRecipients;
  sideEffectFailures: MetadataNotificationRecipients;
}
/**
 * Defines an event on a change (increase or decrease) of a single metric.
 */
export interface MetricChangeEvent {
  changeMetric: SingleMetric;
  changeType: ChangeType;
}
export interface MetricChanges {
  changes: Record<MetricId, _api_types_Value>;
}
/**
 * A programmatically generated UUID.
 */
export type MetricId = string;

/**
 * Metadata for one attempt to execute a job on MGS.
 */
export interface MgsAttemptMetadata {
  effectLogs: Array<EffectLogV2>;
  failureReason?: FailureEffectLog | null | undefined;
  triggerTime?: string | null | undefined;
}
export interface MgsConfig {
  maxParallelism: number;
}
export interface MissingRequiredActionParameter {
}
export interface MissingResource {
  resource: ProjectScopedResource;
}
export interface Monitor {
  attribution?: MonitorVersionAttribution | null | undefined;
  isCurrentlyInTriggeringState: boolean;
  lastEvaluationTime?: string | null | undefined;
  lastHistoryEvent: StoredMonitorEvent;
  lastRecoveryEvent: StoredMonitorEvent;
  lastTriggerEvent: StoredMonitorEvent;
  logic: MonitorLogic;
  metadata: MonitorMetadata;
  monitorType: MonitorType;
  publishedMonitorVersion?: MonitorVersion | null | undefined;
  version: MonitorVersion;
  versionedObjectSetsVersionsUsed: Record<
    VersionedObjectSetRid,
    VersionedObjectSet
  >;
}
export interface MonitorBatchExecution {
  batchExecutionHasCompleted?: boolean | null | undefined;
  batchSize?: number | null | undefined;
  effectsToExecute: Array<EffectId>;
  executeForUsers?: ExecuteForUsers | null | undefined;
  instances: Array<BatchExecutionInstanceId>;
  monitorVersion: MonitorVersion;
  objectSetSource?: ObjectSetSource | null | undefined;
  parallelism?: number | null | undefined;
  retryFor?: EventsToRetry | null | undefined;
  schedulingStrategy?: SchedulingStrategy | null | undefined;
  sendNotificationOnCompletion?: boolean | null | undefined;
  sequentialExecutionSettings?: SequentialExecutionSettings | null | undefined;
  statusHistory: Array<MonitorScheduleBatchExecutionStatusWithTimestamp>;
  triggeredForUsers: Array<UserId>;
  userWhoExecuted?: UserId | null | undefined;
}
/**
 * Monitor definiton is modified by given user. Note this event was previously not emitted for metadata events.
 */
export interface MonitorDefinitionUpdated {
  previousVersion?: MonitorVersion | null | undefined;
  userWhoUpdatedMonitorLogic: UserId;
  version?: MonitorVersion | null | undefined;
}
/**
 * Unless a MonitorReenabled event happens before `until` - the monitor was disabled for the entire duration.
 */
export interface MonitorDisabled {
  disabledByBackend: boolean;
  isDisabledIndefinitely?: boolean | null | undefined;
  reason?: DisabledReason | null | undefined;
  until: string;
}
/**
 * A programmatically generated UUID. Represents a unique runtime occurrence of a monitor evaluation and is
 * shared across monitor subscribers and side effects.
 */
export type MonitorEvaluationId = string;

/**
 * A single entry in the monitor history.
 */
export interface MonitorEvent {
  metadata: MonitorEventMetadata;
  type: MonitorEventType;
}
/**
 * A programmatically generated UUID.
 */
export type MonitorEventId = string;
export interface MonitorEventIdInput {
}
export interface MonitorEventMetadata {
  branchRid?: BranchRid | null | undefined;
  evaluationId?: MonitorEvaluationId | null | undefined;
  id: MonitorEventId;
  isScopedEvent?: boolean | null | undefined;
  jobId?: JobId | null | undefined;
  monitorRid?: MonitorRid | null | undefined;
  otherNotificationsTriggered: Array<NotificationEffectLog>;
  queueMetadata?: QueueMetadata | null | undefined;
  seen?: boolean | null | undefined;
  triggerTime: string;
}
/**
 * GK resource, corresponds to security for a set of events.
 */
export type MonitorEventSetRid = string;
export interface MonitorEventSummary {
  effectSummaries: Record<
    EffectId,
    Record<EffectSummaryTypeEnum, EffectSummaryTypeCount>
  >;
  monitorEventId: MonitorEventId;
}
export interface MonitorEventType_monitorTriggered {
  type: "monitorTriggered";
  monitorTriggered: MonitorTriggered;
}

export interface MonitorEventType_monitorRecovered {
  type: "monitorRecovered";
  monitorRecovered: MonitorRecovered;
}

export interface MonitorEventType_monitorRuntimeError {
  type: "monitorRuntimeError";
  monitorRuntimeError: MonitorRuntimeError;
}

export interface MonitorEventType_monitorBatchExecution {
  type: "monitorBatchExecution";
  monitorBatchExecution: MonitorBatchExecution;
}

export interface MonitorEventType_monitorDisabled {
  type: "monitorDisabled";
  monitorDisabled: MonitorDisabled;
}

export interface MonitorEventType_monitorReenabled {
  type: "monitorReenabled";
  monitorReenabled: MonitorReenabled;
}

export interface MonitorEventType_monitorMuted {
  type: "monitorMuted";
  monitorMuted: MonitorMuted;
}

export interface MonitorEventType_monitorUnmuted {
  type: "monitorUnmuted";
  monitorUnmuted: MonitorUnmuted;
}

export interface MonitorEventType_monitorSubscribed {
  type: "monitorSubscribed";
  monitorSubscribed: MonitorSubscribed;
}

export interface MonitorEventType_monitorUnsubscribed {
  type: "monitorUnsubscribed";
  monitorUnsubscribed: MonitorUnsubscribed;
}

export interface MonitorEventType_monitorLogicUpdated {
  type: "monitorLogicUpdated";
  monitorLogicUpdated: MonitorDefinitionUpdated;
}

export interface MonitorEventType_monitorTimeseriesJob {
  type: "monitorTimeseriesJob";
  monitorTimeseriesJob: MonitorTimeseriesJobEvent;
}
export type MonitorEventType =
  | MonitorEventType_monitorTriggered
  | MonitorEventType_monitorRecovered
  | MonitorEventType_monitorRuntimeError
  | MonitorEventType_monitorBatchExecution
  | MonitorEventType_monitorDisabled
  | MonitorEventType_monitorReenabled
  | MonitorEventType_monitorMuted
  | MonitorEventType_monitorUnmuted
  | MonitorEventType_monitorSubscribed
  | MonitorEventType_monitorUnsubscribed
  | MonitorEventType_monitorLogicUpdated
  | MonitorEventType_monitorTimeseriesJob;

/**
 * Contains a MonitorEvent and its corresponding MonitorRid
 */
export interface MonitorEventWithRid {
  event: MonitorEvent;
  rid: MonitorRid;
}
export interface MonitorLocator {
  branchRid?: BranchRid | null | undefined;
  rid: MonitorRid;
  version: MonitorVersion;
}
export interface MonitorLocatorWithPriority {
  monitorLocator: MonitorLocator;
  priority?: MonitorPriority | null | undefined;
}
export interface MonitorLogic_event {
  type: "event";
  event: Event;
}

export interface MonitorLogic_scheduledEvent {
  type: "scheduledEvent";
  scheduledEvent: ScheduledEvent;
}

export interface MonitorLogic_simpleCondition {
  type: "simpleCondition";
  simpleCondition: SimpleCondition;
}

export interface MonitorLogic_withRecoveryCondition {
  type: "withRecoveryCondition";
  withRecoveryCondition: WithRecoveryCondition;
}

export interface MonitorLogic_schedule {
  type: "schedule";
  schedule: ScheduleCondition;
}

export interface MonitorLogic_scheduledSimpleCondition {
  type: "scheduledSimpleCondition";
  scheduledSimpleCondition: ScheduledSimpleCondition;
}

export interface MonitorLogic_timeSeries {
  type: "timeSeries";
  timeSeries: TimeSeriesCondition;
}

export interface MonitorLogic_automationDependency {
  type: "automationDependency";
  automationDependency: AutomationDependency;
}

export interface MonitorLogic_streamCondition {
  type: "streamCondition";
  streamCondition: StreamCondition;
}
export type MonitorLogic =
  | MonitorLogic_event
  | MonitorLogic_scheduledEvent
  | MonitorLogic_simpleCondition
  | MonitorLogic_withRecoveryCondition
  | MonitorLogic_schedule
  | MonitorLogic_scheduledSimpleCondition
  | MonitorLogic_timeSeries
  | MonitorLogic_automationDependency
  | MonitorLogic_streamCondition;

export interface MonitorMetadata {
  branchRid?: BranchRid | null | undefined;
  cycleDetectionSettings?: CycleDetectionSettings | null | undefined;
  dependentAutomations: Array<MonitorRid>;
  disabled: DisabledConfig;
  expiry?: ExpiryConfig | null | undefined;
  expiryDate: string;
  globalEffectExecutionSettings?:
    | GlobalEffectExecutionSettings
    | null
    | undefined;
  liveConfig?: LiveConfig | null | undefined;
  management?: ManagementSettings | null | undefined;
  mgsConfig?: MgsConfig | null | undefined;
  muted: MutedConfig;
  priority?: MonitorPriority | null | undefined;
  rendering?: RenderingConfig | null | undefined;
  renderingV2: Record<EffectId, RenderingConfig>;
  rid: MonitorRid;
  scopedTokenEffects?: ScopedTokenEffects | null | undefined;
  subscribers: Array<MonitorSubscriber>;
  telemetryConfig?: TelemetryConfig | null | undefined;
  timeSeriesAlertingOverrides?: TimeSeriesAlertingOverrides | null | undefined;
  triggerExecutionSettings?: TriggerExecutionSettings | null | undefined;
}
/**
 * A single entry in the monitor history that is accessible to all those who can view the monitor.
 */
export interface MonitorMetadataEvent {
  metadata: MonitorEventMetadata;
  type: MonitorMetadataEventType;
}
export interface MonitorMetadataEventType_monitorBatchExecution {
  type: "monitorBatchExecution";
  monitorBatchExecution: SafeMetadataMonitorBatchExecution;
}

export interface MonitorMetadataEventType_monitorDisabled {
  type: "monitorDisabled";
  monitorDisabled: MonitorDisabled;
}

export interface MonitorMetadataEventType_monitorReenabled {
  type: "monitorReenabled";
  monitorReenabled: MonitorReenabled;
}

export interface MonitorMetadataEventType_monitorMuted {
  type: "monitorMuted";
  monitorMuted: MonitorMuted;
}

export interface MonitorMetadataEventType_monitorUnmuted {
  type: "monitorUnmuted";
  monitorUnmuted: MonitorUnmuted;
}

export interface MonitorMetadataEventType_monitorSubscribed {
  type: "monitorSubscribed";
  monitorSubscribed: MonitorSubscribed;
}

export interface MonitorMetadataEventType_monitorUnsubscribed {
  type: "monitorUnsubscribed";
  monitorUnsubscribed: MonitorUnsubscribed;
}

export interface MonitorMetadataEventType_monitorLogicUpdated {
  type: "monitorLogicUpdated";
  monitorLogicUpdated: MonitorDefinitionUpdated;
}
/**
 * Metadata events, these are safe to view if you have view-monitor, and contain no information about ontology objects.
 */
export type MonitorMetadataEventType =
  | MonitorMetadataEventType_monitorBatchExecution
  | MonitorMetadataEventType_monitorDisabled
  | MonitorMetadataEventType_monitorReenabled
  | MonitorMetadataEventType_monitorMuted
  | MonitorMetadataEventType_monitorUnmuted
  | MonitorMetadataEventType_monitorSubscribed
  | MonitorMetadataEventType_monitorUnsubscribed
  | MonitorMetadataEventType_monitorLogicUpdated;

export interface MonitorMetrics {
  latencySeconds: number | "NaN" | "Infinity" | "-Infinity";
  numEvaluations: number | "NaN" | "Infinity" | "-Infinity";
  runtimeSeconds: number | "NaN" | "Infinity" | "-Infinity";
}
/**
 * A muted monitor does not trigger any side effects.
 */
export interface MonitorMuted {
  forUser: Array<UserId>;
  isMutedIndefinitely?: boolean | null | undefined;
  mutedReason?: MutedReason | null | undefined;
  until: string;
}
export interface MonitorPriority_staticPriority {
  type: "staticPriority";
  staticPriority: StaticPriority;
}
export type MonitorPriority = MonitorPriority_staticPriority;

/**
 * A recovery event. e.g. if your condition is value >, your trigger is 10 and your recovery is 9. This will
 * trigger when the monitor previously fired and has now recovered by getting a value <= 9.
 */
export interface MonitorRecovered {
  effectsTriggered: Record<EffectId, EffectLog>;
  metricChanges: MetricChanges;
  monitorVersion: MonitorVersion;
  objectChanges: Array<ObjectChange>;
}
/**
 * This can only happen if someone un-disables a monitor via the API.
 */
export interface MonitorReenabled {
}
/**
 * A monitor resource identifier.
 */
export type MonitorRid = string;
export interface MonitorRidInput {
}
/**
 * A runtime error occurred while trying to evaluate this monitor.
 */
export interface MonitorRuntimeError {
  eventOrigin?: EventOrigin | null | undefined;
  failureLog?: FailureEffectLog | null | undefined;
  message: string;
  monitorVersion: MonitorVersion;
  traceId?: TraceId | null | undefined;
}
export interface MonitorScheduleBatchExecutionCancelled {
}
/**
 * All batches are currently being cancelled
 */
export interface MonitorScheduleBatchExecutionCancelling {
}
/**
 * Batches failed to cancel
 */
export interface MonitorScheduleBatchExecutionCancellingFailed {
  failureLog: FailureEffectLog;
}
export interface MonitorScheduleBatchExecutionCompleted {
}
export interface MonitorScheduleBatchExecutionQueued {
}
export interface MonitorScheduleBatchExecutionStatus_queued {
  type: "queued";
  queued: MonitorScheduleBatchExecutionQueued;
}

export interface MonitorScheduleBatchExecutionStatus_generatingRids {
  type: "generatingRids";
  generatingRids: MonitorScheduleBatchGeneratingObjectRids;
}

export interface MonitorScheduleBatchExecutionStatus_generatingRidsFailed {
  type: "generatingRidsFailed";
  generatingRidsFailed: MonitorScheduleBatchGeneratingObjectRidsFailed;
}

export interface MonitorScheduleBatchExecutionStatus_completed {
  type: "completed";
  completed: MonitorScheduleBatchExecutionCompleted;
}

export interface MonitorScheduleBatchExecutionStatus_cancelling {
  type: "cancelling";
  cancelling: MonitorScheduleBatchExecutionCancelling;
}

export interface MonitorScheduleBatchExecutionStatus_cancelled {
  type: "cancelled";
  cancelled: MonitorScheduleBatchExecutionCancelled;
}

export interface MonitorScheduleBatchExecutionStatus_cancellingFailed {
  type: "cancellingFailed";
  cancellingFailed: MonitorScheduleBatchExecutionCancellingFailed;
}
export type MonitorScheduleBatchExecutionStatus =
  | MonitorScheduleBatchExecutionStatus_queued
  | MonitorScheduleBatchExecutionStatus_generatingRids
  | MonitorScheduleBatchExecutionStatus_generatingRidsFailed
  | MonitorScheduleBatchExecutionStatus_completed
  | MonitorScheduleBatchExecutionStatus_cancelling
  | MonitorScheduleBatchExecutionStatus_cancelled
  | MonitorScheduleBatchExecutionStatus_cancellingFailed;

export interface MonitorScheduleBatchExecutionStatusWithTimestamp {
  status: MonitorScheduleBatchExecutionStatus;
  timestamp: string;
}
export interface MonitorScheduleBatchGeneratingObjectRids {
}
export interface MonitorScheduleBatchGeneratingObjectRidsFailed {
  failureLog: FailureEffectLog;
}
/**
 * An event of this user being subsribed to this monitor.
 */
export interface MonitorSubscribed {
  userWhoSubscribedYou: UserId;
}
export interface MonitorSubscriber {
  recoveryEffects: Record<EffectId, Effect>;
  subscriberType: MonitorSubscriberType;
  triggerEffects: Record<EffectId, Effect>;
}
export interface MonitorSubscriberType_user {
  type: "user";
  user: UserSubscriberType;
}

export interface MonitorSubscriberType_group {
  type: "group";
  group: GroupSubscriberType;
}
/**
 * A subscriber to a monitor.
 */
export type MonitorSubscriberType =
  | MonitorSubscriberType_user
  | MonitorSubscriberType_group;

export interface MonitorTimeseriesConditionOutputLive {
}
/**
 * An event signifying an execution of a timeseries alert evaluation job.
 */
export interface MonitorTimeseriesJobEvent {
  errors: Array<FailureEffectLog>;
  jobRid: TimeseriesJobRid;
  processedTransactionRanges?: ProcessedTransactionRanges | null | undefined;
  skippedObjects?: SkippedObjects | null | undefined;
}
/**
 * A regular trigger event. e.g. if your condition is value > 10, the first time this condition is met, this
 * event will occur.
 */
export interface MonitorTriggered {
  droppedObjects?: DroppedObjects | null | undefined;
  effectsTriggered: Record<EffectId, EffectLog>;
  effectsTriggeredV2: Array<EffectLogV2>;
  eventOrigin?: EventOrigin | null | undefined;
  metricChanges: MetricChanges;
  mgsAttemptMetadata: Array<MgsAttemptMetadata>;
  monitorVersion: MonitorVersion;
  objectChanges: Array<ObjectChange>;
  runtimeError?: FailureEffectLog | null | undefined;
  scopedEventMetadata?: ScopedTriggerEventMetadata | null | undefined;
}
/**
 * A single entry in the monitor history, that must be scoped to a single subscriber
 */
export interface MonitorTriggerEvent {
  metadata: MonitorEventMetadata;
  type: MonitorTriggerEventType;
}
export interface MonitorTriggerEventType_monitorTriggered {
  type: "monitorTriggered";
  monitorTriggered: MonitorTriggered;
}

export interface MonitorTriggerEventType_monitorRecovered {
  type: "monitorRecovered";
  monitorRecovered: MonitorRecovered;
}

export interface MonitorTriggerEventType_monitorRuntimeError {
  type: "monitorRuntimeError";
  monitorRuntimeError: MonitorRuntimeError;
}

export interface MonitorTriggerEventType_monitorBatchExecution {
  type: "monitorBatchExecution";
  monitorBatchExecution: MonitorBatchExecution;
}
/**
 * User scoped events
 */
export type MonitorTriggerEventType =
  | MonitorTriggerEventType_monitorTriggered
  | MonitorTriggerEventType_monitorRecovered
  | MonitorTriggerEventType_monitorRuntimeError
  | MonitorTriggerEventType_monitorBatchExecution;

/**
 * The type of monitor this is evaluated to be. Based on the logic it contains. Scheduled means it is evaluated
 * only on a schedule and not live. Funnel backed means it is computed from a live stream of edits.
 */
export type MonitorType = "SCHEDULED" | "FUNNEL_BACKED_INCREMENTAL";

/**
 * An unmuted monitor starts triggering side effects again (but not retroactively).
 */
export interface MonitorUnmuted {
  forUser: Array<UserId>;
}
/**
 * An event of this user being unsubscribed from this monitor.
 */
export interface MonitorUnsubscribed {
  userWhoUnsubscribedYou: UserId;
}
/**
 * The errors that are found in a monitor. Empty fields signify no errors for that error category.
 *
 * Error categories ("conditon/effects/etc.") are used to classify errors by the part of the monitor that required remediation.
 * If an error spans categories, add it to a new category.
 */
export interface MonitorValidationError {
  error: MonitorValidationErrorUnion;
  location: ErrorLocation;
}
export interface MonitorValidationErrorUnion_cronTooFrequent {
  type: "cronTooFrequent";
  cronTooFrequent: CronTooFrequent;
}

export interface MonitorValidationErrorUnion_invalidCron {
  type: "invalidCron";
  invalidCron: InvalidCron;
}

export interface MonitorValidationErrorUnion_invalidZoneId {
  type: "invalidZoneId";
  invalidZoneId: InvalidZoneId;
}

export interface MonitorValidationErrorUnion_unknownTimeseriesQuiverArtifact {
  type: "unknownTimeseriesQuiverArtifact";
  unknownTimeseriesQuiverArtifact: UnknownTimeseriesQuiverArtifact;
}

export interface MonitorValidationErrorUnion_invalidLookbackWindow {
  type: "invalidLookbackWindow";
  invalidLookbackWindow: InvalidLookbackWindow;
}

export interface MonitorValidationErrorUnion_unauthorizedForTimeseriesScopeObjectSet {
  type: "unauthorizedForTimeseriesScopeObjectSet";
  unauthorizedForTimeseriesScopeObjectSet:
    UnauthorizedForTimeseriesScopeObjectSet;
}

export interface MonitorValidationErrorUnion_rootObjectTypeNotFound {
  type: "rootObjectTypeNotFound";
  rootObjectTypeNotFound: RootObjectTypeNotFound;
}

export interface MonitorValidationErrorUnion_linkedSensorObjectTypesNotFound {
  type: "linkedSensorObjectTypesNotFound";
  linkedSensorObjectTypesNotFound: LinkedSensorObjectTypesNotFound;
}

export interface MonitorValidationErrorUnion_couldNotGetAllTimeseriesSyncs {
  type: "couldNotGetAllTimeseriesSyncs";
  couldNotGetAllTimeseriesSyncs: CouldNotGetAllTimeseriesSyncs;
}

export interface MonitorValidationErrorUnion_invalidTransactionReadLimit {
  type: "invalidTransactionReadLimit";
  invalidTransactionReadLimit: InvalidTransactionReadLimit;
}

export interface MonitorValidationErrorUnion_outputObjectTypeNotFound {
  type: "outputObjectTypeNotFound";
  outputObjectTypeNotFound: OutputObjectTypeNotFound;
}

export interface MonitorValidationErrorUnion_noBackingDatasetForRootObjectType {
  type: "noBackingDatasetForRootObjectType";
  noBackingDatasetForRootObjectType: NoBackingDatasetForRootObjectType;
}

export interface MonitorValidationErrorUnion_multipleBackingDatasetsForRootObjectType {
  type: "multipleBackingDatasetsForRootObjectType";
  multipleBackingDatasetsForRootObjectType:
    MultipleBackingDatasetsForRootObjectType;
}

export interface MonitorValidationErrorUnion_backingDatasetForRootObjectTypeNotInProjectScope {
  type: "backingDatasetForRootObjectTypeNotInProjectScope";
  backingDatasetForRootObjectTypeNotInProjectScope:
    BackingDatasetForRootObjectTypeNotInProjectScope;
}

export interface MonitorValidationErrorUnion_outputsNotInSingleProject {
  type: "outputsNotInSingleProject";
  outputsNotInSingleProject: OutputsNotInSingleProject;
}

export interface MonitorValidationErrorUnion_invalidExpiryAndLocation {
  type: "invalidExpiryAndLocation";
  invalidExpiryAndLocation: InvalidExpiryAndLocation;
}

export interface MonitorValidationErrorUnion_actionOrLogicEffectAddedForNonUserSubscriber {
  type: "actionOrLogicEffectAddedForNonUserSubscriber";
  actionOrLogicEffectAddedForNonUserSubscriber:
    ActionOrLogicEffectAddedForNonUserSubscriber;
}

export interface MonitorValidationErrorUnion_allMetricIdsShouldBeUnique {
  type: "allMetricIdsShouldBeUnique";
  allMetricIdsShouldBeUnique: AllMetricIdsShouldBeUnique;
}

export interface MonitorValidationErrorUnion_inefficientMultiMetricUsage {
  type: "inefficientMultiMetricUsage";
  inefficientMultiMetricUsage: InefficientMultiMetricUsage;
}

export interface MonitorValidationErrorUnion_atLeastOneMetricIsUsed {
  type: "atLeastOneMetricIsUsed";
  atLeastOneMetricIsUsed: AtLeastOneMetricIsUsed;
}

export interface MonitorValidationErrorUnion_onlyTemporarySetsAllowed {
  type: "onlyTemporarySetsAllowed";
  onlyTemporarySetsAllowed: OnlyTemporarySetsAllowed;
}

export interface MonitorValidationErrorUnion_actionTypeNotPermittedToRunFromAutomate {
  type: "actionTypeNotPermittedToRunFromAutomate";
  actionTypeNotPermittedToRunFromAutomate:
    ActionTypeNotPermittedToRunFromAutomate;
}

export interface MonitorValidationErrorUnion_onlyOneEffectDependencyAllowed {
  type: "onlyOneEffectDependencyAllowed";
  onlyOneEffectDependencyAllowed: OnlyOneEffectDependencyAllowed;
}

export interface MonitorValidationErrorUnion_effectDependenciesInconsistentWithEffectOrdering {
  type: "effectDependenciesInconsistentWithEffectOrdering";
  effectDependenciesInconsistentWithEffectOrdering:
    EffectDependenciesInconsistentWithEffectOrdering;
}

export interface MonitorValidationErrorUnion_invalidTemplateShortNotificationString {
  type: "invalidTemplateShortNotificationString";
  invalidTemplateShortNotificationString:
    InvalidTemplateShortNotificationString;
}

export interface MonitorValidationErrorUnion_invalidTemplateEmailNotificationString {
  type: "invalidTemplateEmailNotificationString";
  invalidTemplateEmailNotificationString:
    InvalidTemplateEmailNotificationString;
}

export interface MonitorValidationErrorUnion_duplicateEffectInputIdsInTemplateNotification {
  type: "duplicateEffectInputIdsInTemplateNotification";
  duplicateEffectInputIdsInTemplateNotification:
    DuplicateEffectInputIdsInTemplateNotification;
}

export interface MonitorValidationErrorUnion_templateNotificationInputsMissingParameters {
  type: "templateNotificationInputsMissingParameters";
  templateNotificationInputsMissingParameters:
    TemplateNotificationInputsMissingParameters;
}

export interface MonitorValidationErrorUnion_invalidEffectInputForTemplateNotification {
  type: "invalidEffectInputForTemplateNotification";
  invalidEffectInputForTemplateNotification:
    InvalidEffectInputForTemplateNotification;
}

export interface MonitorValidationErrorUnion_effectInputTypeMismatch {
  type: "effectInputTypeMismatch";
  effectInputTypeMismatch: EffectInputTypeMismatch;
}

export interface MonitorValidationErrorUnion_invalidObjectSet {
  type: "invalidObjectSet";
  invalidObjectSet: InvalidObjectSet;
}

export interface MonitorValidationErrorUnion_affectedObjectProvidedForNonLiveMonitor {
  type: "affectedObjectProvidedForNonLiveMonitor";
  affectedObjectProvidedForNonLiveMonitor:
    AffectedObjectProvidedForNonLiveMonitor;
}

export interface MonitorValidationErrorUnion_objectLocatorInputNotPermitted {
  type: "objectLocatorInputNotPermitted";
  objectLocatorInputNotPermitted: ObjectLocatorInputNotPermitted;
}

export interface MonitorValidationErrorUnion_providedPropertyRidsDoNotExistOnObjectTypes {
  type: "providedPropertyRidsDoNotExistOnObjectTypes";
  providedPropertyRidsDoNotExistOnObjectTypes:
    ProvidedPropertyRidsDoNotExistOnObjectTypes;
}

export interface MonitorValidationErrorUnion_actionParameterRidNotFound {
  type: "actionParameterRidNotFound";
  actionParameterRidNotFound: ActionParameterRidNotFound;
}

export interface MonitorValidationErrorUnion_missingRequiredActionParameter {
  type: "missingRequiredActionParameter";
  missingRequiredActionParameter: MissingRequiredActionParameter;
}

export interface MonitorValidationErrorUnion_unsupportedEffectInputType {
  type: "unsupportedEffectInputType";
  unsupportedEffectInputType: UnsupportedEffectInputType;
}

export interface MonitorValidationErrorUnion_invalidAutomation {
  type: "invalidAutomation";
  invalidAutomation: InvalidAutomationError;
}

export interface MonitorValidationErrorUnion_invalidEffectInputForExecutionMode {
  type: "invalidEffectInputForExecutionMode";
  invalidEffectInputForExecutionMode: InvalidEffectInputForExecutionMode;
}

export interface MonitorValidationErrorUnion_failureInputProvidedWithoutEffectDependency {
  type: "failureInputProvidedWithoutEffectDependency";
  failureInputProvidedWithoutEffectDependency:
    FailureInputProvidedWithoutEffectDependency;
}

export interface MonitorValidationErrorUnion_functionOutputTypeNotBoolean {
  type: "functionOutputTypeNotBoolean";
  functionOutputTypeNotBoolean: FunctionOutputTypeNotBoolean;
}

export interface MonitorValidationErrorUnion_functionPredicateParameterTypeDoesNotMatch {
  type: "functionPredicateParameterTypeDoesNotMatch";
  functionPredicateParameterTypeDoesNotMatch:
    FunctionPredicateParameterTypeDoesNotMatch;
}

export interface MonitorValidationErrorUnion_functionSpecsNotFound {
  type: "functionSpecsNotFound";
  functionSpecsNotFound: FunctionSpecsNotFound;
}

export interface MonitorValidationErrorUnion_scopedEffectsExecutingAsDifferentUser {
  type: "scopedEffectsExecutingAsDifferentUser";
  scopedEffectsExecutingAsDifferentUser: ScopedEffectsExecutingAsDifferentUser;
}

export interface MonitorValidationErrorUnion_featureNotAvailable {
  type: "featureNotAvailable";
  featureNotAvailable: FeatureIsNotAvailable;
}

export interface MonitorValidationErrorUnion_invalidUrlNotificationLink {
  type: "invalidUrlNotificationLink";
  invalidUrlNotificationLink: InvalidUrlNotificationLink;
}

export interface MonitorValidationErrorUnion_invalidBatchSize {
  type: "invalidBatchSize";
  invalidBatchSize: InvalidBatchSize;
}

export interface MonitorValidationErrorUnion_invalidMgsRateLimit {
  type: "invalidMgsRateLimit";
  invalidMgsRateLimit: InvalidMgsRateLimit;
}

export interface MonitorValidationErrorUnion_branchingUnsupportedForConditionType {
  type: "branchingUnsupportedForConditionType";
  branchingUnsupportedForConditionType: BranchingUnsupportedForConditionType;
}

export interface MonitorValidationErrorUnion_branchingUnsupportedForVersionedObjectSets {
  type: "branchingUnsupportedForVersionedObjectSets";
  branchingUnsupportedForVersionedObjectSets:
    BranchingUnsupportedForVersionedObjectSets;
}

export interface MonitorValidationErrorUnion_functionGeneratedRecipientsNeedsScopedMode {
  type: "functionGeneratedRecipientsNeedsScopedMode";
  functionGeneratedRecipientsNeedsScopedMode:
    FunctionGeneratedRecipientsNeedsScopedMode;
}

export interface MonitorValidationErrorUnion_functionEffectsUnsupported {
  type: "functionEffectsUnsupported";
  functionEffectsUnsupported: FunctionEffectsUnsupported;
}

export interface MonitorValidationErrorUnion_genericError {
  type: "genericError";
  genericError: GenericError;
}
/**
 * Union type of every possible CRUD validation error. Note that not all errors correspond to all possible ErrorLocations.
 */
export type MonitorValidationErrorUnion =
  | MonitorValidationErrorUnion_cronTooFrequent
  | MonitorValidationErrorUnion_invalidCron
  | MonitorValidationErrorUnion_invalidZoneId
  | MonitorValidationErrorUnion_unknownTimeseriesQuiverArtifact
  | MonitorValidationErrorUnion_invalidLookbackWindow
  | MonitorValidationErrorUnion_unauthorizedForTimeseriesScopeObjectSet
  | MonitorValidationErrorUnion_rootObjectTypeNotFound
  | MonitorValidationErrorUnion_linkedSensorObjectTypesNotFound
  | MonitorValidationErrorUnion_couldNotGetAllTimeseriesSyncs
  | MonitorValidationErrorUnion_invalidTransactionReadLimit
  | MonitorValidationErrorUnion_outputObjectTypeNotFound
  | MonitorValidationErrorUnion_noBackingDatasetForRootObjectType
  | MonitorValidationErrorUnion_multipleBackingDatasetsForRootObjectType
  | MonitorValidationErrorUnion_backingDatasetForRootObjectTypeNotInProjectScope
  | MonitorValidationErrorUnion_outputsNotInSingleProject
  | MonitorValidationErrorUnion_invalidExpiryAndLocation
  | MonitorValidationErrorUnion_actionOrLogicEffectAddedForNonUserSubscriber
  | MonitorValidationErrorUnion_allMetricIdsShouldBeUnique
  | MonitorValidationErrorUnion_inefficientMultiMetricUsage
  | MonitorValidationErrorUnion_atLeastOneMetricIsUsed
  | MonitorValidationErrorUnion_onlyTemporarySetsAllowed
  | MonitorValidationErrorUnion_actionTypeNotPermittedToRunFromAutomate
  | MonitorValidationErrorUnion_onlyOneEffectDependencyAllowed
  | MonitorValidationErrorUnion_effectDependenciesInconsistentWithEffectOrdering
  | MonitorValidationErrorUnion_invalidTemplateShortNotificationString
  | MonitorValidationErrorUnion_invalidTemplateEmailNotificationString
  | MonitorValidationErrorUnion_duplicateEffectInputIdsInTemplateNotification
  | MonitorValidationErrorUnion_templateNotificationInputsMissingParameters
  | MonitorValidationErrorUnion_invalidEffectInputForTemplateNotification
  | MonitorValidationErrorUnion_effectInputTypeMismatch
  | MonitorValidationErrorUnion_invalidObjectSet
  | MonitorValidationErrorUnion_affectedObjectProvidedForNonLiveMonitor
  | MonitorValidationErrorUnion_objectLocatorInputNotPermitted
  | MonitorValidationErrorUnion_providedPropertyRidsDoNotExistOnObjectTypes
  | MonitorValidationErrorUnion_actionParameterRidNotFound
  | MonitorValidationErrorUnion_missingRequiredActionParameter
  | MonitorValidationErrorUnion_unsupportedEffectInputType
  | MonitorValidationErrorUnion_invalidAutomation
  | MonitorValidationErrorUnion_invalidEffectInputForExecutionMode
  | MonitorValidationErrorUnion_failureInputProvidedWithoutEffectDependency
  | MonitorValidationErrorUnion_functionOutputTypeNotBoolean
  | MonitorValidationErrorUnion_functionPredicateParameterTypeDoesNotMatch
  | MonitorValidationErrorUnion_functionSpecsNotFound
  | MonitorValidationErrorUnion_scopedEffectsExecutingAsDifferentUser
  | MonitorValidationErrorUnion_featureNotAvailable
  | MonitorValidationErrorUnion_invalidUrlNotificationLink
  | MonitorValidationErrorUnion_invalidBatchSize
  | MonitorValidationErrorUnion_invalidMgsRateLimit
  | MonitorValidationErrorUnion_branchingUnsupportedForConditionType
  | MonitorValidationErrorUnion_branchingUnsupportedForVersionedObjectSets
  | MonitorValidationErrorUnion_functionGeneratedRecipientsNeedsScopedMode
  | MonitorValidationErrorUnion_functionEffectsUnsupported
  | MonitorValidationErrorUnion_genericError;

export interface MonitorValidationWarning_streamingSyncsIgnoredForTimeseriesMonitor {
  type: "streamingSyncsIgnoredForTimeseriesMonitor";
  streamingSyncsIgnoredForTimeseriesMonitor:
    StreamingSyncsIgnoredForTimeseriesMonitor;
}

export interface MonitorValidationWarning_scopedEffectsRunningOnGpsObjectTypes {
  type: "scopedEffectsRunningOnGpsObjectTypes";
  scopedEffectsRunningOnGpsObjectTypes: ScopedEffectsRunningOnGpsObjectTypes;
}

export interface MonitorValidationWarning_v2JobsNotEnabled {
  type: "v2JobsNotEnabled";
  v2JobsNotEnabled: V2JobsNotEnabled;
}
export type MonitorValidationWarning =
  | MonitorValidationWarning_streamingSyncsIgnoredForTimeseriesMonitor
  | MonitorValidationWarning_scopedEffectsRunningOnGpsObjectTypes
  | MonitorValidationWarning_v2JobsNotEnabled;

/**
 * A monitor version.
 */
export type MonitorVersion = number;

/**
 * Details about attribution for creating a given monitor version
 */
export interface MonitorVersionAttribution {
  createdAt: string;
  createdBy?: UserId | null | undefined;
}
export interface MonitorVersionData {
  logic: MonitorLogic;
  metadata: MonitorMetadata;
  monitorType: MonitorType;
  version: MonitorVersion;
  versionedObjectSetsVersionsUsed: Record<
    VersionedObjectSetRid,
    VersionedObjectSet
  >;
}
export interface MonitorVersions {
  lastEvaluationTime?: string | null | undefined;
  metadata: MonitorMetadata;
  publishedMonitorVersion?: MonitorVersion | null | undefined;
  versions: Record<MonitorVersion, MonitorVersionData>;
}
export interface MultiMetric {
  metricId: MetricId;
  multiMetricType: MultiMetricType;
}
export interface MultiMetricType_objectSetMultiMetric {
  type: "objectSetMultiMetric";
  objectSetMultiMetric: ObjectSetMultiMetric;
}

export interface MultiMetricType_versionedObjectSetMultiMetric {
  type: "versionedObjectSetMultiMetric";
  versionedObjectSetMultiMetric: VersionedObjectSetMultiMetric;
}
export type MultiMetricType =
  | MultiMetricType_objectSetMultiMetric
  | MultiMetricType_versionedObjectSetMultiMetric;

/**
 * There are multiple backing datasets for the root object type of a timeseries monitor. It's unclear which
 * datasources to include in job spec and to use at runtime. In such cases users should configure a
 * materialization as the canonical dataset of the object type to use for alerting.
 */
export interface MultipleBackingDatasetsForRootObjectType {
  backingDatasets: Array<DatasetRid>;
}
/**
 * Multiple object types are used in the object set condition; this is currently unsupported.
 */
export interface MultipleObjectTypesUsedInCondition {
}
/**
 * If muted, no effects will be triggered. The monitor history will still be saved.
 */
export interface MutedConfig {
  forUsers: MutedForUsers;
  isMutedIndefinitely?: boolean | null | undefined;
  until?: string | null | undefined;
}
export type MutedForUsers = Array<UserId>;
export interface MutedReason_userManuallyMuted {
  type: "userManuallyMuted";
  userManuallyMuted: UserManuallyMuted;
}

export interface MutedReason_exceededFailureThreshold {
  type: "exceededFailureThreshold";
  exceededFailureThreshold: ExceededFailureThreshold;
}
export type MutedReason =
  | MutedReason_userManuallyMuted
  | MutedReason_exceededFailureThreshold;

/**
 * There is no dataset datasource for the root object type of a timeseries monitor. If the root object type is
 * backed by a restricted view, users should set up a materialization on the object type.
 */
export interface NoBackingDatasetForRootObjectType {
}
export interface NoCyclesAllowed {
}
export interface NoEditsGeneratedEffectLog {
  traceId?: TraceId | null | undefined;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
  triggeredBy: TriggeredBy;
}
export interface NoObjectSetProvided {
}
export interface NotepadAttachmentSource {
  notepadRid: NotepadRid;
}
/**
 * The rid for a Notepad document.
 */
export type NotepadRid = string;
export interface NotepadTemplateAttachmentSource {
  inputs: NotepadTemplateInputsMap;
  notepadTemplateRid: NotepadTemplateRid;
  notepadTemplateVersion: NotepadTemplateVersion;
}
export type NotepadTemplateInputName = string;

/**
 * Specifies a map from template input parameters to actual values. The values are passed to the Notepad template
 * and are used to generate the new Notepad document.
 */
export type NotepadTemplateInputsMap = Record<
  NotepadTemplateInputName,
  EffectInput
>;
export type NotepadTemplateParameterId = string;

/**
 * The rid for a Notepad template.
 */
export type NotepadTemplateRid = string;

/**
 * The version number for a Notepad template.
 */
export type NotepadTemplateVersion = number;
export interface NotificationAttachment {
  fileName?: string | null | undefined;
  inputs: Record<EffectInputId, EffectInput>;
  source: AttachmentSource;
}
/**
 * Not actually configurable, we will generate a notification based on the underlying change with a link to the
 * monitor.
 */
export interface NotificationEffect {
}
export interface NotificationEffectFunctionRendering {
  additionalAttachments: Array<NotificationAttachment>;
  functionInputs: Record<FunctionInputName, EffectInput>;
  functionLocator: FunctionLocator;
}
export interface NotificationEffectLog_success {
  type: "success";
  success: SuccessNotificationEffectLog;
}

export interface NotificationEffectLog_failure {
  type: "failure";
  failure: FailureEffectLog;
}

export interface NotificationEffectLog_skipped {
  type: "skipped";
  skipped: SkipEffectLog;
}

export interface NotificationEffectLog_multiple {
  type: "multiple";
  multiple: Array<NotificationEffectLog>;
}
export type NotificationEffectLog =
  | NotificationEffectLog_success
  | NotificationEffectLog_failure
  | NotificationEffectLog_skipped
  | NotificationEffectLog_multiple;

export interface NotificationEffectRendering_plainText {
  type: "plainText";
  plainText: PlainTextNotificationContent;
}

export interface NotificationEffectRendering_functionRendering {
  type: "functionRendering";
  functionRendering: NotificationEffectFunctionRendering;
}

export interface NotificationEffectRendering_systemDefault {
  type: "systemDefault";
  systemDefault: SystemDefaultRendering;
}
export type NotificationEffectRendering =
  | NotificationEffectRendering_plainText
  | NotificationEffectRendering_functionRendering
  | NotificationEffectRendering_systemDefault;

/**
 * Id of an instance of a notification. This is a UUID (although the notification-service declares it as a
 * string).
 */
export type NotificationId = string;
export interface NotificationLink {
  label: string;
  urlTarget: UrlTarget;
}
export interface NotificationRecipients_propertyBacked {
  type: "propertyBacked";
  propertyBacked: Array<PrincipalObjectProperty>;
}

export interface NotificationRecipients_functionGenerated {
  type: "functionGenerated";
  functionGenerated: FunctionGeneratedRecipients;
}
export type NotificationRecipients =
  | NotificationRecipients_propertyBacked
  | NotificationRecipients_functionGenerated;

/**
 * Name of a notification type. This name is hard-coded in cdconfig.
 */
export type NotificationType = string;
export interface NoTransactionBound {
}
export interface NotSavedObjectSetEvent {
  eventType: ObjectSetEventTypeV2;
  objectSetRid: ObjectSetRid;
}
export interface ObjectChange_createdObject {
  type: "createdObject";
  createdObject: CreatedObjectChange;
}

export interface ObjectChange_deletedObject {
  type: "deletedObject";
  deletedObject: DeletedObjectChange;
}

export interface ObjectChange_updatedObject {
  type: "updatedObject";
  updatedObject: UpdatedObjectChange;
}

export interface ObjectChange_streamedRecord {
  type: "streamedRecord";
  streamedRecord: StreamedRecordChange;
}
/**
 * Only created objects are populated right now, when triggeredBy cannot be surfaced (due to users muting the
 * monitor or no effects being populated for a given subscriber.) Atm it's impossible to backpropagate access
 * control changes, so though the API is expressive enough to have properties, these are never provided.
 */
export type ObjectChange =
  | ObjectChange_createdObject
  | ObjectChange_deletedObject
  | ObjectChange_updatedObject
  | ObjectChange_streamedRecord;

export type ObjectChangedEventOriginEnum = "PATCHES" | "CHANGEVIEW" | "STREAM";
export interface ObjectChangedProperty {
  objectType: ObjectTypeRid;
  propertyRid: ObjectPropertyTypeRid;
}
export interface ObjectEvent {
  eventType: ObjectEventType;
  objectRid: ObjectRid;
}
/**
 * Events that can be watched on object rids.
 */
export type ObjectEventType = "ANY_CHANGE";
export interface ObjectLocatorInputNotPermitted {
}
export interface ObjectMetric {
  objectRid: ObjectRid;
  propertyTypeRid: ObjectPropertyTypeRid;
}
export interface ObjectMetricUnsupported {
  objectMetric: ObjectMetric;
}
/**
 * An id identifying the PropertyType.
 */
export type ObjectPropertyTypeId = string;

/**
 * An rid identifying the PropertyType. This rid is generated randomly and is safe for logging purposes.
 */
export type ObjectPropertyTypeRid = string;
export type ObjectPropertyValue = any;
export interface ObjectReferenceListType {
}
/**
 * An object resource identifier.
 */
export type ObjectRid = string;
export interface ObjectsAddedEvent {
}
export interface ObjectsChangedEventOrigin {
  objectTypeRid?: ObjectTypeRid | null | undefined;
  origin: ObjectChangedEventOriginEnum;
  previouslyProcessedOffset?: OffsetLocator | null | undefined;
  processedOffset: OffsetLocator;
}
export interface ObjectSetAggregateMetric {
  aggregation: Aggregation;
  objectSetRid: ObjectSetRid;
}
export interface ObjectSetEvent {
  eventType: ObjectSetEventType;
  eventTypeV2?: ObjectSetEventTypeV2 | null | undefined;
  versionedObjectSetRid: VersionedObjectSetRid;
}
export type ObjectSetEventType =
  | "OBJECT_ADDED"
  | "OBJECT_MODIFIED"
  | "OBJECT_REMOVED"
  | "ALL_OBJECTS";
export interface ObjectSetEventTypeV2_added {
  type: "added";
  added: ObjectsAddedEvent;
}

export interface ObjectSetEventTypeV2_removed {
  type: "removed";
  removed: ObjectsRemovedEvent;
}

export interface ObjectSetEventTypeV2_modified {
  type: "modified";
  modified: ObjectsModifiedEvent;
}

export interface ObjectSetEventTypeV2_allObjects {
  type: "allObjects";
  allObjects: AllObjectsEvent;
}
export type ObjectSetEventTypeV2 =
  | ObjectSetEventTypeV2_added
  | ObjectSetEventTypeV2_removed
  | ObjectSetEventTypeV2_modified
  | ObjectSetEventTypeV2_allObjects;

/**
 * The output of this function must be an object set.
 */
export interface ObjectSetFunction {
  functionInputs: Record<FunctionInputName, ObjectSetFunctionInput>;
  functionLocator: FunctionLocator;
}
export interface ObjectSetFunctionInput_staticValue {
  type: "staticValue";
  staticValue: _api_types_Value;
}
export type ObjectSetFunctionInput = ObjectSetFunctionInput_staticValue;

/**
 * Will contain a value of propertyTypeRid per object in the object set.
 */
export interface ObjectSetMultiMetric {
  objectSetRid: ObjectSetRid;
  propertyTypeRid: ObjectPropertyTypeRid;
}
/**
 * An object set resource identifier.
 */
export type ObjectSetRid = string;
export interface ObjectSetRidType {
}
export interface ObjectSetSource_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRid;
}

export interface ObjectSetSource_noObjectSetProvided {
  type: "noObjectSetProvided";
  noObjectSetProvided: NoObjectSetProvided;
}

export interface ObjectSetSource_objectSetFunction {
  type: "objectSetFunction";
  objectSetFunction: ObjectSetFunction;
}
export type ObjectSetSource =
  | ObjectSetSource_objectSetRid
  | ObjectSetSource_noObjectSetProvided
  | ObjectSetSource_objectSetFunction;

/**
 * An object set version.
 */
export type ObjectSetVersion = string;
export interface ObjectsModifiedEvent {
  propertiesModified: PropertiesModifiedEvent;
  shouldMonitorObjectsAdded: boolean;
  shouldMonitorObjectsRemoved: boolean;
}
export interface ObjectsRemovedEvent {
}
/**
 * An object type rid.
 */
export type ObjectTypeRid = string;
export interface OffsetLocator {
  baseVersion: BaseVersion;
  patchOffset?: PatchOffset | null | undefined;
  scrollOffset?: ScrollOffset | null | undefined;
}
export interface OnlyOneEffectDependencyAllowed {
}
export interface OnlyTemporarySetsAllowed {
}
export interface OnSuccess_createScenario {
  type: "createScenario";
  createScenario: CreateScenario;
}
export type OnSuccess = OnSuccess_createScenario;

export interface OpenReview {
}
export interface Operand_value {
  type: "value";
  value: _api_types_Value;
}

export interface Operand_singleMetric {
  type: "singleMetric";
  singleMetric: SingleMetric;
}

export interface Operand_multiMetric {
  type: "multiMetric";
  multiMetric: MultiMetric;
}

export interface Operand_binaryOperation {
  type: "binaryOperation";
  binaryOperation: MathBinaryOperation;
}

export interface Operand_unaryOperation {
  type: "unaryOperation";
  unaryOperation: MathUnaryOperation;
}
/**
 * An operand can resolve to either a single value or many values bucketed in some way.
 */
export type Operand =
  | Operand_value
  | Operand_singleMetric
  | Operand_multiMetric
  | Operand_binaryOperation
  | Operand_unaryOperation;

export interface OrPredicate {
  predicates: Array<Predicate>;
}
export interface OutputObjectTypeNotFound {
}
/**
 * All outputs of a build must be in the same project including the automations and output datasets.
 */
export interface OutputsNotInSingleProject {
  attemptedProjectRid: string;
  existingOutputDatasetProjectRid: string;
}
export interface PartitionAndOffset {
  partitionId: PartitionId;
  partitionOffset: PartitionOffset;
}
export type PartitionId = number;
export type PartitionOffset = number;
export type PatchOffset = number;

/**
 * Batch execution of side effects. Input objects are coalesced into an object set, then side effects are
 * executed with the entire set.
 */
export interface PerBatchOfObjects {
}
/**
 * Sequential execution of side effects. Side effects are executed once with each object provided.
 */
export interface PerObject {
}
export interface PerPartition {
  groupBy: GroupBy;
}
export interface PlainTextEmailContent {
  body: string;
  links: Array<NotificationLink>;
  subject: string;
}
/**
 * Plain text rendering for notifications.
 */
export interface PlainTextNotificationContent {
  attachments: Array<NotificationAttachment>;
  emailContent?: PlainTextEmailContent | null | undefined;
  inputs: Record<EffectInputId, EffectInput>;
  shortContent: PlainTextShortContent;
}
/**
 * Hard coded strings to be used when creating notifications.
 */
export interface PlainTextShortContent {
  heading: string;
  links: Array<NotificationLink>;
  message: string;
}
export type PotentiallyUnavailableFeature =
  | "AIP_LOGIC"
  | "NOTIFICATION"
  | "NOTIFICATION_ATTACHMENTS"
  | "SCOPED_EFFECTS"
  | "TIMESERIES_CONDITION"
  | "HIGH_SCALE_AUTOMATIONS";
export interface Predicate_booleanExpression {
  type: "booleanExpression";
  booleanExpression: BooleanExpression;
}

export interface Predicate_andPredicate {
  type: "andPredicate";
  andPredicate: AndPredicate;
}

export interface Predicate_orPredicate {
  type: "orPredicate";
  orPredicate: OrPredicate;
}

export interface Predicate_functionPredicate {
  type: "functionPredicate";
  functionPredicate: FunctionPredicate;
}
export type Predicate =
  | Predicate_booleanExpression
  | Predicate_andPredicate
  | Predicate_orPredicate
  | Predicate_functionPredicate;

export interface PredicateFunctionInput_currentlyTriggering {
  type: "currentlyTriggering";
  currentlyTriggering: IsMonitorTriggeringContextInput;
}

export interface PredicateFunctionInput_staticValue {
  type: "staticValue";
  staticValue: _api_types_Value;
}

export interface PredicateFunctionInput_versionedObjectSetRid {
  type: "versionedObjectSetRid";
  versionedObjectSetRid: VersionedObjectSetRid;
}

export interface PredicateFunctionInput_objectSetRid {
  type: "objectSetRid";
  objectSetRid: ObjectSetRid;
}
export type PredicateFunctionInput =
  | PredicateFunctionInput_currentlyTriggering
  | PredicateFunctionInput_staticValue
  | PredicateFunctionInput_versionedObjectSetRid
  | PredicateFunctionInput_objectSetRid;

export interface PrincipalObjectProperty {
  objectTypeRid: ObjectTypeRid;
  principalProperty: PrincipalProperty;
}
export interface PrincipalProperty_userPropertyRid {
  type: "userPropertyRid";
  userPropertyRid: UserPropertyRid;
}

export interface PrincipalProperty_groupPropertyRid {
  type: "groupPropertyRid";
  groupPropertyRid: GroupPropertyRid;
}
export type PrincipalProperty =
  | PrincipalProperty_userPropertyRid
  | PrincipalProperty_groupPropertyRid;

/**
 * Add transaction ranges per input dataset that were processed in the job. Each range does not include
 * transactions that were already processed in previous jobs.
 */
export interface ProcessedTransactionRanges {
  transactionRanges: Record<DatasetRid, TransactionRange>;
}
export interface ProjectScopedResource_genericResource {
  type: "genericResource";
  genericResource: string;
}

export interface ProjectScopedResource_multipleMaterializationsAvailable {
  type: "multipleMaterializationsAvailable";
  multipleMaterializationsAvailable: Array<string>;
}
export type ProjectScopedResource =
  | ProjectScopedResource_genericResource
  | ProjectScopedResource_multipleMaterializationsAvailable;

export interface ProjectScopeIssue_missingResource {
  type: "missingResource";
  missingResource: MissingResource;
}

export interface ProjectScopeIssue_unsupported {
  type: "unsupported";
  unsupported: UnsupportedForScopedMode;
}
export type ProjectScopeIssue =
  | ProjectScopeIssue_missingResource
  | ProjectScopeIssue_unsupported;

export interface PropertiesModifiedEvent_anyPropertiesModified {
  type: "anyPropertiesModified";
  anyPropertiesModified: AnyPropertyModifiedEvent;
}

export interface PropertiesModifiedEvent_exceptPropertiesModified {
  type: "exceptPropertiesModified";
  exceptPropertiesModified: ExceptPropertiesModifiedEvent;
}

export interface PropertiesModifiedEvent_somePropertiesModified {
  type: "somePropertiesModified";
  somePropertiesModified: SomePropertiesModifiedEvent;
}
export type PropertiesModifiedEvent =
  | PropertiesModifiedEvent_anyPropertiesModified
  | PropertiesModifiedEvent_exceptPropertiesModified
  | PropertiesModifiedEvent_somePropertiesModified;

export interface PropertyAggregation {
  propertyTypeRid: ObjectPropertyTypeRid;
}
export interface ProvidedPropertyRidsDoNotExistOnObjectTypes {
  nonExistentObjectPropertyTypeRids: Array<ObjectPropertyTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}
/**
 * Metadata about the job's queue metadata, including the amount of time in the queue and reason for being
 * enqueued. If not present, the job was not queued.
 */
export interface QueueMetadata {
  timeInQueueSeconds: number;
}
export type QuiverArtifactRid = string;
export type QuiverArtifactSnapshotRid = string;
export type QuiverArtifactVersion = number;
export interface RateLimited {
  duration: number;
  numTriggers: number;
}
export interface RejectedReview {
  reviewMetadata: ReviewMetadata;
}
export interface RejectStagedActionEffectLog_success {
  type: "success";
  success: SuccessStagedActionRejectionEffectLog;
}

export interface RejectStagedActionEffectLog_failure {
  type: "failure";
  failure: FailureStagedActionExecutionEffectLog;
}
export type RejectStagedActionEffectLog =
  | RejectStagedActionEffectLog_success
  | RejectStagedActionEffectLog_failure;

/**
 * Will be substituted at runtime with a timestamp defined to be relative to the current time at runtime.
 */
export interface RelativeTimestamp {
  offsetMillis: number;
}
/**
 * Allows users to configure how side effects should be rendered for all the subscribers of this monitor.
 * User's effects (e.g. notifications) will only use these settings if they have a notification side effect
 * configured.
 */
export interface RenderingConfig {
  recoveryEffectsRendering?: EffectRendering | null | undefined;
  triggerEffectsRendering: EffectRendering;
}
export interface Retries {
  attempts: number;
}
export type RetryableBatchType =
  | "FAILED"
  | "COMPLETED"
  | "CANCELLED"
  | "COMPLETED_INCLUDING_SUCCESSES";
export interface RetryableIssues_retryAllFailures {
  type: "retryAllFailures";
  retryAllFailures: RetryAllFailures;
}

export interface RetryableIssues_retryAllFailuresWithoutAllowlist {
  type: "retryAllFailuresWithoutAllowlist";
  retryAllFailuresWithoutAllowlist: RetryAllFailuresWithoutAllowlist;
}
export type RetryableIssues =
  | RetryableIssues_retryAllFailures
  | RetryableIssues_retryAllFailuresWithoutAllowlist;

export interface RetryAllFailures {
}
export interface RetryAllFailuresWithoutAllowlist {
}
export interface RetryBackoffStrategy_exponentialBackoff {
  type: "exponentialBackoff";
  exponentialBackoff: ExponentialBackoff;
}

export interface RetryBackoffStrategy_constantBackoff {
  type: "constantBackoff";
  constantBackoff: ConstantBackoff;
}
export type RetryBackoffStrategy =
  | RetryBackoffStrategy_exponentialBackoff
  | RetryBackoffStrategy_constantBackoff;

export interface RetryConfig {
  backoffStrategy: RetryBackoffStrategy;
  retryableIssues: RetryableIssues;
}
export interface Review_openReview {
  type: "openReview";
  openReview: OpenReview;
}

export interface Review_acceptedReview {
  type: "acceptedReview";
  acceptedReview: AcceptedReview;
}

export interface Review_rejectedReview {
  type: "rejectedReview";
  rejectedReview: RejectedReview;
}
export type Review =
  | Review_openReview
  | Review_acceptedReview
  | Review_rejectedReview;

export interface ReviewMetadata {
  reason?: string | null | undefined;
  reviewedAt: string;
  reviewedBy: UserId;
}
export type ReviewStatus = "OPEN" | "ACCEPTED" | "REJECTED";
export interface RootObjectTypeNotFound {
}
/**
 * Scope that the automation is running against, includes the entities that the token that we run with has
 * access to.
 *
 * This type includes the resources whose input managers we'll need to call. Note that there are also additional
 * resources that would be required by the scope that need to be imported into the project.
 */
export interface RunningAutomationScope {
  actionTypeRids: Array<ActionTypeRid>;
  artifacts: Array<ArtifactsResource>;
  functionLocators: Array<FunctionLocator>;
  functionRids: Array<FunctionRid>;
  languageModelRid: Array<LanguageModelRid>;
  linkTypeRids: Array<LinkTypeRid>;
  mediaSets: Array<MediaSetResource>;
  objectTypeRids: Array<ObjectTypeRid>;
  sources: Array<MagritteSourceRid>;
  sourcesV2: Array<MagritteSourceResource>;
  valueTypes: Array<ValueTypeResource>;
  webhookLocators: Array<WebhookLocator>;
}
export interface RuntimeErrorToRetry {
  monitorEventId: MonitorEventId;
}
/**
 * A version of the MonitorBatchExecution event that contains no derived ontology data, only metadata. This includes timing and failure information.
 */
export interface SafeMetadataMonitorBatchExecution {
  monitorVersion: MonitorVersion;
  userWhoExecuted?: UserId | null | undefined;
}
export interface ScenarioTitleInput_currentProperty {
  type: "currentProperty";
  currentProperty: ObjectChangedProperty;
}
export type ScenarioTitleInput = ScenarioTitleInput_currentProperty;

/**
 * Schedule the batch execution job to schedule the initial batch at a random valid execution time for the
 * provided cron expression within the next 24 hours. Each batch thereafter will be scheduled at the next valid
 * execution time after the previous batch.
 */
export interface ScheduleAtCron {
  cronExpression: CronExpression;
  timeZone: ZoneId;
}
/**
 * Scheduled monitor, based on a cron expression. Can be at most once per hour.
 */
export interface ScheduleCondition {
  cronExpression: CronExpression;
  displayMetadata?: ScheduleDisplayMetadata | null | undefined;
  setStartTimeOnSave?: boolean | null | undefined;
  timeZone: ZoneId;
}
export interface ScheduledEvent {
  event: Event;
  schedule: ScheduleCondition;
  triggerIfNoAffectedObjects?: boolean | null | undefined;
}
/**
 * Metadata defining how the schedule was configured
 */
export interface ScheduleDisplayMetadata {
  useCronStringConfig: boolean;
  useLowestLatencyPossible?: boolean | null | undefined;
}
export interface ScheduledSimpleCondition {
  schedule: ScheduleCondition;
  simpleCondition: SimpleCondition;
}
/**
 * Schedule the batch execution job to begin running immediately.
 */
export interface ScheduleImmediately {
  batchDelay?: BatchDelay | null | undefined;
}
export interface SchedulingJobFailure {
}
export interface SchedulingStrategy_scheduleImmediately {
  type: "scheduleImmediately";
  scheduleImmediately: ScheduleImmediately;
}

export interface SchedulingStrategy_scheduleAtCron {
  type: "scheduleAtCron";
  scheduleAtCron: ScheduleAtCron;
}
export type SchedulingStrategy =
  | SchedulingStrategy_scheduleImmediately
  | SchedulingStrategy_scheduleAtCron;

export interface ScopedEffect_action {
  type: "action";
  action: ActionEffect;
}

export interface ScopedEffect_logic {
  type: "logic";
  logic: FoundryLogicEffect;
}
/**
 * The same as Effect, but a narrower type since notifications are not yet allowed as scoped effects.
 */
export type ScopedEffect = ScopedEffect_action | ScopedEffect_logic;

export interface ScopedEffectExecutor_user {
  type: "user";
  user: UserId;
}
export type ScopedEffectExecutor = ScopedEffectExecutor_user;

export interface ScopedEffectsExecutingAsDifferentUser {
  currentUserId: UserId;
  executorUserId: UserId;
}
export interface ScopedEffectsRunningOnGpsObjectTypes {
  objectTypeRids: Array<ObjectTypeRid>;
}
/**
 * A single entry in the monitor history. Use for events generated via a scoped token, i.e. runtime events. Not used for metadata events.
 */
export interface ScopedPermissionMonitorEvent {
  metadata: MonitorEventMetadata;
  type: ScopedPermissionMonitorEventType;
}
export interface ScopedPermissionMonitorEventType_monitorTriggered {
  type: "monitorTriggered";
  monitorTriggered: MonitorTriggered;
}

export interface ScopedPermissionMonitorEventType_monitorRecovered {
  type: "monitorRecovered";
  monitorRecovered: MonitorRecovered;
}

export interface ScopedPermissionMonitorEventType_monitorRuntimeError {
  type: "monitorRuntimeError";
  monitorRuntimeError: MonitorRuntimeError;
}

export interface ScopedPermissionMonitorEventType_monitorTimeseriesJobEvent {
  type: "monitorTimeseriesJobEvent";
  monitorTimeseriesJobEvent: MonitorTimeseriesJobEvent;
}
export type ScopedPermissionMonitorEventType =
  | ScopedPermissionMonitorEventType_monitorTriggered
  | ScopedPermissionMonitorEventType_monitorRecovered
  | ScopedPermissionMonitorEventType_monitorRuntimeError
  | ScopedPermissionMonitorEventType_monitorTimeseriesJobEvent;

/**
 * Used for side effects not executed on behalf of a single user, and rather executed using a scoped token.
 */
export interface ScopedSideEffects {
  onBehalfOf?: ScopedEffectExecutor | null | undefined;
  persistHistoryEvent?: boolean | null | undefined;
  triggerEffects: Record<EffectId, ScopedEffect>;
}
export interface ScopedTokenEffects {
  additionalScope: RunningAutomationScope;
  generatedScope: RunningAutomationScope;
  sideEffects: ScopedSideEffects;
}
export interface ScopedTokenUnsupported {
}
export interface ScopedTokenWithLanguageModelUnsupported {
}
export interface ScopedTriggerEventMetadata {
  userIds: Array<UserId>;
}
export type ScrollOffset = string;

/**
 * Semantic versions - not supported by logic so this is left empty for now
 */
export interface SemVer {
}
export interface SemVerValueTypesUnsupported {
  valueTypeRid: ValueTypeRid;
}
export interface SequentialExecutionSettings {
  shouldExecuteSequentially: boolean;
}
/**
 * This defines a simple condition monitor that is stateful and can be considered in a triggering state.
 *
 * Here's an example:
 * predicate1 OR predicate2
 *
 * | time | predicate1 | predicate2 | Does it trigger? | Does it recover? | Is it in a triggering state?     |
 * -----------------------------------------------------------------------------------------------------------
 * | t0   | False      | False      | False            | False          | False                              |
 * | t1   | True       | False      | True             | False          | True                               |
 * | t2   | False      | True       | False            | False          | True                               |
 * | t3   | True       | True       | False            | False          | True                               |
 * | t4   | False      | False      | False            | True           | False                              |
 */
export interface SimpleCondition {
  triggerPredicate: Predicate;
}
export interface SingleEffectTriggerDependencyDefinition {
  dependency: TriggerDependency;
  effectId: EffectId;
}
export interface SingleMetric {
  metricId: MetricId;
  singleMetricType: SingleMetricType;
}
export interface SingleMetricType_objectSetAggregateMetric {
  type: "objectSetAggregateMetric";
  objectSetAggregateMetric: ObjectSetAggregateMetric;
}

export interface SingleMetricType_versionedObjectSetAggregateMetric {
  type: "versionedObjectSetAggregateMetric";
  versionedObjectSetAggregateMetric: VersionedObjectSetAggregateMetric;
}

export interface SingleMetricType_objectMetric {
  type: "objectMetric";
  objectMetric: ObjectMetric;
}
export type SingleMetricType =
  | SingleMetricType_objectSetAggregateMetric
  | SingleMetricType_versionedObjectSetAggregateMetric
  | SingleMetricType_objectMetric;

/**
 * A notification effect can be skipped when the function returns null or undefined. This should only be
 * used for intentional skips, i.e. the function returns empty intentionally.
 */
export interface SkipEffectLog {
  skipReason: SkipReason;
  triggeredBy?: TriggeredBy | null | undefined;
}
/**
 * Details about a single object skipped for timeseries alert generation.
 */
export interface SkippedObjectDetail {
  failureEffectLog: FailureEffectLog;
  objectReference: _api_types_ObjectReferenceByRid;
}
/**
 * Objects that were skipped for timeseries alert generation, truncated to prevent overloading object-sentinel
 * server.
 */
export interface SkippedObjects {
  numTotalSkippedObjects: number;
  truncatedDetails: Array<SkippedObjectDetail>;
}
export interface SkipReason_functionReturn {
  type: "functionReturn";
  functionReturn: FunctionReturnEmpty;
}
export type SkipReason = SkipReason_functionReturn;

export interface SomePropertiesModifiedEvent {
  propertiesToMonitor: Array<ObjectPropertyTypeRid>;
}
/**
 * Only retry a specific number of batches. Note that because we only allow a single job for a given
 * monitor, running a retry job like this does prevent running other retry jobs for the same monitor at the same
 * time.
 */
export interface SpecificBatchesToRetry {
  batchIds: Array<BatchExecutionInstanceId>;
}
export interface StagedActionEvent {
  actionEffectInReviewId: ActionEffectInReviewId;
  attribution: StagedActionEventAttribution;
  reviewEvent: StagedActionReviewEvent;
  stagedActionEventId: StagedActionEventId;
}
export interface StagedActionEventAttribution {
  generatedAt: string;
  generatedBy: UserId;
}
export type StagedActionEventId = string;
export interface StagedActionExecutionEffectLog_success {
  type: "success";
  success: SuccessStagedActionExecutionEffectLog;
}

export interface StagedActionExecutionEffectLog_failure {
  type: "failure";
  failure: FailureStagedActionExecutionEffectLog;
}

export interface StagedActionExecutionEffectLog_noEditsGenerated {
  type: "noEditsGenerated";
  noEditsGenerated: NoEditsGeneratedEffectLog;
}

export interface StagedActionExecutionEffectLog_failureToGenerateLogic {
  type: "failureToGenerateLogic";
  failureToGenerateLogic: FailureFoundryLogicEffectLog;
}
export type StagedActionExecutionEffectLog =
  | StagedActionExecutionEffectLog_success
  | StagedActionExecutionEffectLog_failure
  | StagedActionExecutionEffectLog_noEditsGenerated
  | StagedActionExecutionEffectLog_failureToGenerateLogic;

export interface StagedActionReviewEvent_actionCreated {
  type: "actionCreated";
  actionCreated: ActionCreated;
}

export interface StagedActionReviewEvent_actionUpdated {
  type: "actionUpdated";
  actionUpdated: ActionUpdated;
}

export interface StagedActionReviewEvent_actionAccepted {
  type: "actionAccepted";
  actionAccepted: ActionAccepted;
}

export interface StagedActionReviewEvent_actionRejected {
  type: "actionRejected";
  actionRejected: ActionRejected;
}
export type StagedActionReviewEvent =
  | StagedActionReviewEvent_actionCreated
  | StagedActionReviewEvent_actionUpdated
  | StagedActionReviewEvent_actionAccepted
  | StagedActionReviewEvent_actionRejected;

export interface StagedFoundryLogicEffectLog_success {
  type: "success";
  success: SuccessFoundryLogicEffectLog;
}

export interface StagedFoundryLogicEffectLog_failure {
  type: "failure";
  failure: FailureFoundryLogicEffectLog;
}

export interface StagedFoundryLogicEffectLog_noEditsGenerated {
  type: "noEditsGenerated";
  noEditsGenerated: NoEditsGeneratedEffectLog;
}
export type StagedFoundryLogicEffectLog =
  | StagedFoundryLogicEffectLog_success
  | StagedFoundryLogicEffectLog_failure
  | StagedFoundryLogicEffectLog_noEditsGenerated;

export interface StatefulFunctionsUnsupported {
  functionRid: FunctionRid;
}
export interface StaticPriority {
  priority: number;
  updatedAtEpochMillis: number;
}
/**
 * The monitor event stored on the Monitor. This needs to be scrubbed before templatizing for the Marketplace
 * integration, so we distinguish here stored events on monitors.
 * Note that this is not an issue when Marketplace upgrades monitors, as stored events are re-computed on install.
 */
export type StoredMonitorEvent = MonitorEvent | null | undefined;
export type StreamColumnName = string;

/**
 * A condition which operates on a streaming dataset.
 */
export interface StreamCondition {
  datasetRid: StreamingDatasetRid;
  eventType: StreamEventType;
}
/**
 * A record in a stream triggered this automation.
 */
export interface StreamedRecordChange {
  partitionAndOffset: PartitionAndOffset;
}
export interface StreamEventType_allNewRecords {
  type: "allNewRecords";
  allNewRecords: AllNewRecords;
}
/**
 * Defines when to trigger effects on a streaming dataset.
 */
export type StreamEventType = StreamEventType_allNewRecords;

export interface StreamingColumnInput {
  columnName: StreamColumnName;
  columnType: FoundryFieldSchema;
}
/**
 * The rid for a streaming dataset. Note that this is actually of the form ri.foundry.main.dataset.<uuid>, but will reference a stream.
 */
export type StreamingDatasetRid = string;

/**
 * For now we ignore the streaming syncs linked to the root/sensor object types. They would not be added to the
 * job spec or schedule.
 */
export interface StreamingSyncsIgnoredForTimeseriesMonitor {
  streamingSyncsByLinkedObjectType: Record<string, Array<string>>;
}
export interface SuccessActionEffectLog {
  actionRid: ActionRid;
  retries?: Retries | null | undefined;
  traceId?: TraceId | null | undefined;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
  triggeredBy?: TriggeredBy | null | undefined;
  warnings: Array<ActionEffectExecutionWarning>;
}
export interface SuccessFoundryLogicEffectLog {
  actionEffectInReviewIds: Array<ActionEffectInReviewId>;
  retries?: Retries | null | undefined;
  traceId?: TraceId | null | undefined;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
  triggeredBy?: TriggeredBy | null | undefined;
}
/**
 * Prefer using ActionEffectLog.multiple(...)
 */
export interface SuccessMultiple {
  results: Array<SuccessActionEffectLog>;
}
export interface SuccessNotificationEffectLog {
  notificationId: NotificationId;
  notificationType: NotificationType;
  renderingErrors: Array<DeprecatedFailureEffectLog>;
  renderingRetries?: Retries | null | undefined;
  traceId?: TraceId | null | undefined;
  triggeredBy?: TriggeredBy | null | undefined;
}
export interface SuccessResult {
  returnValue?: FunctionValue | null | undefined;
  triggeredBy?: TriggeredBy | null | undefined;
}
export interface SuccessStagedActionExecutionEffectLog {
  actionRid: ActionRid;
  objectRid?: ObjectRid | null | undefined;
  stagedActionId: ActionEffectInReviewId;
  traceId?: TraceId | null | undefined;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
  triggeredBy?: TriggeredBy | null | undefined;
}
export interface SuccessStagedActionRejectionEffectLog {
  rejectedActionId: ActionEffectInReviewId;
  tracing?: FoundryTelemetryServiceTracingMetadata | null | undefined;
}
/**
 * Emails and notifications will render with the default configuration.
 * This has the same effect as not specifying any EffectRendering at all.
 */
export interface SystemDefaultRendering {
}
export interface TelemetryConfig {
  enableTelemetry: boolean;
}
export interface TemplateNotificationInputsMissingParameters {
  missingEffectInputId: EffectInputId;
}
export interface ThrowOnFailure {
}
export interface TimeSeriesAlertingOverrides {
  transactionReadLimit?: TransactionReadLimit | null | undefined;
}
/**
 * Condition for monitoring time series.
 */
export interface TimeSeriesCondition {
  intermediateObjectTypeCondition: TimeSeriesConditionAutomationCondition;
  outputInfo: TimeSeriesConditionOutputInfo;
  quiverLocator: TimeSeriesQuiverLocator;
  streaming?: TimeSeriesStreamingConfiguration | null | undefined;
}
/**
 * The sub-condition used for the intermediate object type.
 * Note that when this is scheduled, this does not imply the update schedule of the output object
 * type.
 * This logic will always default to live when possible. If non-live is request, a scheduled event can be used in the logic.
 */
export interface TimeSeriesConditionAutomationCondition {
  logic: TimeseriesIntermediateObjectTypeMonitorLogic;
}
export interface TimeSeriesConditionOutputInfo_v1 {
  type: "v1";
  v1: TimeSeriesConditionOutputInfoV1;
}
export type TimeSeriesConditionOutputInfo = TimeSeriesConditionOutputInfo_v1;

export interface TimeSeriesConditionOutputInfoV1 {
  datasetRid: DatasetRid;
  eventPropertiesMapping: TimeSeriesEventPropertiesMapping;
  objectTypeRid: ObjectTypeRid;
}
export interface TimeSeriesEventPropertiesMapping_typeclassBackedPropertyMapping {
  type: "typeclassBackedPropertyMapping";
  typeclassBackedPropertyMapping: TypeclassBackedPropertyMapping;
}
/**
 * Maps expected property ids to properties in the provided object type.
 */
export type TimeSeriesEventPropertiesMapping =
  TimeSeriesEventPropertiesMapping_typeclassBackedPropertyMapping;

export interface TimeseriesIntermediateObjectTypeMonitorLogic_event {
  type: "event";
  event: Event;
}

export interface TimeseriesIntermediateObjectTypeMonitorLogic_scheduledEvent {
  type: "scheduledEvent";
  scheduledEvent: ScheduledEvent;
}
/**
 * The logic used for automating the intermediate object type. Note that pure schedules are not allowed, since we want to force users to only see alerts for the given automation, and therefore always need a filter on the object type.
 */
export type TimeseriesIntermediateObjectTypeMonitorLogic =
  | TimeseriesIntermediateObjectTypeMonitorLogic_event
  | TimeseriesIntermediateObjectTypeMonitorLogic_scheduledEvent;

/**
 * A job rid for a given build. This job is owned by job-tracker
 */
export type TimeseriesJobRid = string;
export interface TimeSeriesMonitorUnsupported {
}
export interface TimeSeriesQuiverLocator_versionedQuiverLocator {
  type: "versionedQuiverLocator";
  versionedQuiverLocator: VersionedQuiverLocator;
}

export interface TimeSeriesQuiverLocator_unversionedQuiverLocator {
  type: "unversionedQuiverLocator";
  unversionedQuiverLocator: UnversionedQuiverSnapshotLocator;
}
export type TimeSeriesQuiverLocator =
  | TimeSeriesQuiverLocator_versionedQuiverLocator
  | TimeSeriesQuiverLocator_unversionedQuiverLocator;

export interface TimeSeriesStreamingConfiguration {
  eventDriverConfig?: EventDriverConfig | null | undefined;
}
export type TimeseriesSyncRid = string;
export interface TooManyFailures {
  numInstancesWithFailures: number;
}
/**
 * A unique identifier used to identify and follow a thread's execution.
 */
export type TraceId = string;
export type TraceOwningRid = string;
export interface TransactionBound_transactionBound {
  type: "transactionBound";
  transactionBound: number;
}

export interface TransactionBound_noTransactionBound {
  type: "noTransactionBound";
  noTransactionBound: NoTransactionBound;
}
export type TransactionBound =
  | TransactionBound_transactionBound
  | TransactionBound_noTransactionBound;

/**
 * An inclusive range of transactions, marked by the first and last transaction.
 */
export interface TransactionRange {
  first: TransactionRid;
  last: TransactionRid;
}
export interface TransactionReadLimit_monitorLimit {
  type: "monitorLimit";
  monitorLimit: TransactionBound;
}

export interface TransactionReadLimit_perDatasetLimit {
  type: "perDatasetLimit";
  perDatasetLimit: Record<DatasetRid, TransactionBound>;
}
export type TransactionReadLimit =
  | TransactionReadLimit_monitorLimit
  | TransactionReadLimit_perDatasetLimit;

export type TransactionRid = string;
export interface TriggerDependency_triggerOnFailureThreshold {
  type: "triggerOnFailureThreshold";
  triggerOnFailureThreshold: TriggerOnFailureThreshold;
}

export interface TriggerDependency_triggerOnSuccess {
  type: "triggerOnSuccess";
  triggerOnSuccess: TriggerOnSuccess;
}
export type TriggerDependency =
  | TriggerDependency_triggerOnFailureThreshold
  | TriggerDependency_triggerOnSuccess;

export interface TriggerDependencyDefinition {
  dependencyDefinitions: Array<SingleEffectTriggerDependencyDefinition>;
}
export interface TriggeredBy_object {
  type: "object";
  object: ObjectRid;
}

export interface TriggeredBy_objects {
  type: "objects";
  objects: Array<ObjectRid>;
}

export interface TriggeredBy_offsets {
  type: "offsets";
  offsets: Array<PartitionAndOffset>;
}
export type TriggeredBy =
  | TriggeredBy_object
  | TriggeredBy_objects
  | TriggeredBy_offsets;

export interface TriggerEventToRetry {
  effectTypesToInclude: Array<EffectSummaryTypeEnum>;
  monitorEventId: MonitorEventId;
}
/**
 * Settings related to the execution of triggers, not to the execution of effects
 */
export interface TriggerExecutionSettings {
  dropEventsConfig: DropEventsConfig;
}
export interface TriggerOnFailureThreshold {
  numFailures: number;
}
export interface TriggerOnSuccess {
}
/**
 * The property mapping is determined from typeclasses on the properties.
 * Note that in future, we may allow extra properties that are injected as static values per-automation, or
 * injected dynamically from the root object type.
 */
export interface TypeclassBackedPropertyMapping {
}
export interface UnauthorizedForTimeseriesScopeObjectSet {
}
export interface UnknownTimeseriesQuiverArtifact {
}
export interface UnsupportedEffectInputType {
}
export interface UnsupportedForScopedMode_statefulFunctionsUnsupported {
  type: "statefulFunctionsUnsupported";
  statefulFunctionsUnsupported: StatefulFunctionsUnsupported;
}

export interface UnsupportedForScopedMode_functionGeneratedObjectSetsUnsupported {
  type: "functionGeneratedObjectSetsUnsupported";
  functionGeneratedObjectSetsUnsupported:
    FunctionGeneratedObjectSetsUnsupported;
}

export interface UnsupportedForScopedMode_sourcesUnsupported {
  type: "sourcesUnsupported";
  sourcesUnsupported: MagritteSourcesUnsupported;
}

export interface UnsupportedForScopedMode_semVerValueTypesUnsupported {
  type: "semVerValueTypesUnsupported";
  semVerValueTypesUnsupported: SemVerValueTypesUnsupported;
}
export type UnsupportedForScopedMode =
  | UnsupportedForScopedMode_statefulFunctionsUnsupported
  | UnsupportedForScopedMode_functionGeneratedObjectSetsUnsupported
  | UnsupportedForScopedMode_sourcesUnsupported
  | UnsupportedForScopedMode_semVerValueTypesUnsupported;

/**
 * Copied directly from Functions. We use an untyped value always, because it's currently not possible
 * to use the output of a function execution regardless.
 */
export type UntypedValue = any | null | undefined;

/**
 * A Quiver Locator that is stored as a "snapshot" of the Quiver artifact. This artifact is not versioned by quiver, but is immutable.
 */
export interface UnversionedQuiverSnapshotLocator {
  rid: QuiverArtifactSnapshotRid;
}
/**
 * The updated value of an object property that caused this monitor to be evaluated and it's predicate returned
 * true.
 */
export interface UpdatedObjectChange {
  newPropertyValue: ObjectPropertyValue;
  objectPropertyTypeRid: ObjectPropertyTypeRid;
  objectRid: ObjectRid;
  oldPropertyValue: ObjectPropertyValue;
}
/**
 * A fully qualified url.
 */
export type Url = string;
export interface UrlTarget_rid {
  type: "rid";
  rid: UrlTargetRid;
}

export interface UrlTarget_url {
  type: "url";
  url: Url;
}
/**
 * The target for generating a URL.
 */
export type UrlTarget = UrlTarget_rid | UrlTarget_url;

/**
 * The rid should either be a Compass rid or an Object rid. Anything else will render to the stack homepage.
 */
export type UrlTargetRid = string;
export interface UserCancelledBatchExecution {
}
/**
 * A Multipass user id. This is a UUID (although the MP api declares it as a string).
 */
export type UserId = string;
export interface UserIdInputUnsupported {
  location: UserIdLocation;
  userId: UserId;
}
export interface UserIdLocation_managers {
  type: "managers";
  managers: ManagerUsers;
}

export interface UserIdLocation_notificationEffect {
  type: "notificationEffect";
  notificationEffect: Array<EffectId>;
}
export type UserIdLocation =
  | UserIdLocation_managers
  | UserIdLocation_notificationEffect;

export interface UserManuallyMuted {
}
export type UserPropertyRid = ObjectPropertyTypeRid;
export interface UserProvidedReason {
  reason: string;
}
export interface UserSubscriberType {
  userId: UserId;
}
export interface V2JobsNotEnabled {
}
export interface ValidateAllModifiedObjectsAreInObjectSet {
  objectSet: ObjectSetRid;
}
export interface ValueTypeResource {
  rid: ValueTypeRid;
  version: ValueTypeVersionIdentifier;
}
export type ValueTypeRid = string;
export type ValueTypeVersionId = string;
export interface ValueTypeVersionIdentifier_uuid {
  type: "uuid";
  uuid: ValueTypeVersionId;
}

export interface ValueTypeVersionIdentifier_semver {
  type: "semver";
  semver: SemVer;
}
export type ValueTypeVersionIdentifier =
  | ValueTypeVersionIdentifier_uuid
  | ValueTypeVersionIdentifier_semver;

export interface VersionedObjectSet {
  objectSetRid: ObjectSetRid;
  objectSetVersion: ObjectSetVersion;
}
export interface VersionedObjectSetAggregateMetric {
  aggregation: Aggregation;
  versionedObjectSetRid: VersionedObjectSetRid;
}
/**
 * Will contain a value of propertyTypeRid per object in the object set.
 */
export interface VersionedObjectSetMultiMetric {
  propertyTypeRid: ObjectPropertyTypeRid;
  versionedObjectSetRid: VersionedObjectSetRid;
}
/**
 * A versioned object set resource identifier.
 */
export type VersionedObjectSetRid = string;
export interface VersionedObjectSetsUnsupported {
  objectSetRid: VersionedObjectSetRid;
}
export interface VersionedQuiverLocator {
  artifactRid: QuiverArtifactRid;
  artifactVersion: QuiverArtifactVersion;
}
export type VersionedScenarioRid = string;

/**
 * Represents duration of time in minutes and seconds.
 */
export interface WaitTime {
  minutes: number;
  seconds: number;
}
export interface WarnOnFailure {
}
/**
 * The rid for a Webhook.
 */
export interface WebhookLocator {
  webhookRid: string;
  webhookVersion: number;
}
/**
 * This defined a monitor that has different values for triggering and recovery.
 * Here's an example:
 * Operand is count(employees), the operator is >, the trigger value is 10, and the recovery value is 8.
 *
 * | time | count(employees) | Does it trigger? | Does it recover? | Is it in a triggering state?     |
 * ----------------------------------------------------------------------------------------------------
 * | t0   | 5                | False            | False           | False                             |
 * | t1   | 11               | True             | False           | True                              |
 * | t2   | 12               | False            | False           | True                              |
 * | t3   | 9                | False            | False           | True                              |
 * | t4   | 8                | False            | True            | False                             |
 *
 * A monitor can only trigger again if it is not currently in a triggering state, similarly it can only recover
 * if it is in a triggering state. For slow monitors, this may drop some events.
 */
export interface WithRecoveryCondition {
  operand: Operand;
  operator: ComparisonOperator;
  recoveryValue: _api_types_Value;
  triggerValue: _api_types_Value;
}
export type ZoneId = string;
