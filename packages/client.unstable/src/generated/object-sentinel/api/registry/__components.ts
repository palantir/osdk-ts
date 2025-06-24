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
  ActionEffectInReview as _api_ActionEffectInReview,
  ActionEffectInReviewId as _api_ActionEffectInReviewId,
  BranchRid as _api_BranchRid,
  CronExpression as _api_CronExpression,
  CycleDetectionSettings as _api_CycleDetectionSettings,
  DatasetRid as _api_DatasetRid,
  DisabledConfig as _api_DisabledConfig,
  DisabledReason as _api_DisabledReason,
  EffectId as _api_EffectId,
  ExpiredActionEffectInReview as _api_ExpiredActionEffectInReview,
  ExpiryConfig as _api_ExpiryConfig,
  FailureEffectLog as _api_FailureEffectLog,
  GenericError as _api_GenericError,
  GlobalEffectExecutionSettings as _api_GlobalEffectExecutionSettings,
  LinkTypeRid as _api_LinkTypeRid,
  LiveConfig as _api_LiveConfig,
  ManagementSettings as _api_ManagementSettings,
  MgsConfig as _api_MgsConfig,
  Monitor as _api_Monitor,
  MonitorEvent as _api_MonitorEvent,
  MonitorEventId as _api_MonitorEventId,
  MonitorEventSetRid as _api_MonitorEventSetRid,
  MonitorEventWithRid as _api_MonitorEventWithRid,
  MonitorLocator as _api_MonitorLocator,
  MonitorLogic as _api_MonitorLogic,
  MonitorMetadataEvent as _api_MonitorMetadataEvent,
  MonitorRid as _api_MonitorRid,
  MonitorSubscriber as _api_MonitorSubscriber,
  MonitorValidationError as _api_MonitorValidationError,
  MonitorVersions as _api_MonitorVersions,
  MutedConfig as _api_MutedConfig,
  ObjectSetRid as _api_ObjectSetRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  OffsetLocator as _api_OffsetLocator,
  ProcessedTransactionRanges as _api_ProcessedTransactionRanges,
  RejectStagedActionEffectLog as _api_RejectStagedActionEffectLog,
  RenderingConfig as _api_RenderingConfig,
  ReviewStatus as _api_ReviewStatus,
  RunningAutomationScope as _api_RunningAutomationScope,
  ScopedPermissionMonitorEvent as _api_ScopedPermissionMonitorEvent,
  ScopedSideEffects as _api_ScopedSideEffects,
  SkippedObjects as _api_SkippedObjects,
  StagedActionExecutionEffectLog as _api_StagedActionExecutionEffectLog,
  TelemetryConfig as _api_TelemetryConfig,
  TimeSeriesAlertingOverrides as _api_TimeSeriesAlertingOverrides,
  TransactionRange as _api_TransactionRange,
  TriggerExecutionSettings as _api_TriggerExecutionSettings,
  VersionedObjectSetRid as _api_VersionedObjectSetRid,
} from "../__components.js";
export interface AcceptStagedActionsRequest {
  actionInReviewIds: Array<_api_ActionEffectInReviewId>;
  monitorRid: _api_MonitorRid;
  reason?: string | null | undefined;
}
export interface AcceptStagedActionsResponse {
  appliedActions: Array<_api_StagedActionExecutionEffectLog>;
}
/**
 * Overrides for the job configuration. This is collection of optional overrides which will be applied to the job
 * at run time. If a field is not present in the overrides, a default value defined in the job will be used.
 */
export interface BatchJobConfigOverrides {
  alertEvaluationUdfPartitionCount?: number | null | undefined;
  defaultLookbackWindow?: number | null | undefined;
  doNotUseEpoch2?: boolean | null | undefined;
  doNotUseTransactionRangesByInput: Record<
    _api_DatasetRid,
    _api_TransactionRange
  >;
  failEntireJobOnAnyAutomationFailures?: boolean | null | undefined;
  firstJobRunReadLimit?: number | null | undefined;
  jobTimeoutInHours?: number | null | undefined;
  maximumLookbackWindow?: number | null | undefined;
  unionAlerts?: boolean | null | undefined;
}
/**
 * Configuration of the job which evaluates one or more timeseries monitors.
 */
export interface BatchTimeseriesJobConfiguration {
  configOverrides?: BatchJobConfigOverrides | null | undefined;
  tokenMode?: TokenMode | null | undefined;
  transformProfiles: Array<TransformProfile>;
}
export interface BranchMetadata {
  rid: _api_BranchRid;
}
export interface BulkGetBranchesForMonitorRequest {
  monitorRids: Array<_api_MonitorRid>;
}
/**
 * A map of monitor rids to their branches. If the monitor does not exist or the user does not have permission,
 * it will not be present in the map.
 */
export interface BulkGetBranchesForMonitorResponse {
  branches: Record<_api_MonitorRid, GetBranchesForMonitorResponse>;
}
export interface BulkGetMonitorsRequest {
  branchRid?: _api_BranchRid | null | undefined;
  decorations?: Array<MonitorDecoration> | null | undefined;
  monitorRids: Array<_api_MonitorRid>;
}
export interface BulkGetMonitorsResponse {
  monitors: Record<_api_MonitorRid, _api_Monitor>;
}
export interface BulkGetMonitorVersionsRequest {
  monitorLocators: Array<_api_MonitorLocator>;
}
export interface BulkGetMonitorVersionsResponse {
  monitors: Record<_api_MonitorRid, _api_MonitorVersions>;
}
export type CompassFolderRid = string;
export interface CreateMonitorRequest {
  logic: _api_MonitorLogic;
  markings: Array<MarkingId>;
  metadata: UpdateMonitorMetadataRequest;
  name: string;
  parentRid: CompassFolderRid;
  publishOnCreate?: boolean | null | undefined;
  shouldExecuteAfterCreate?: boolean | null | undefined;
}
export interface CreateMonitorResponse {
  failures: Array<_api_MonitorValidationError>;
  locator: _api_MonitorLocator;
}
export interface DisableAutomationRequest {
  branchRid?: _api_BranchRid | null | undefined;
  disable: boolean;
  disabledReason?: _api_DisabledReason | null | undefined;
}
export interface EventUpdate_addError {
  type: "addError";
  addError: UpdateEventAddError;
}

export interface EventUpdate_addErrors {
  type: "addErrors";
  addErrors: UpdateEventAddErrors;
}

export interface EventUpdate_addSkippedObjects {
  type: "addSkippedObjects";
  addSkippedObjects: UpdateEventAddSkippedObjects;
}

export interface EventUpdate_addProcessedTransactionRanges {
  type: "addProcessedTransactionRanges";
  addProcessedTransactionRanges: UpdateEventAddProcessedTransactionRanges;
}
export type EventUpdate =
  | EventUpdate_addError
  | EventUpdate_addErrors
  | EventUpdate_addSkippedObjects
  | EventUpdate_addProcessedTransactionRanges;

export type FlinkTransformProfile = string;
export type GenericCouldNotGenerateLogicalPlanException = _api_GenericError;
export interface GetAllMonitorEventsResponse {
  events: Array<_api_MonitorEventWithRid>;
  nextPageToken?: PageToken | null | undefined;
}
export interface GetBranchesForMonitorResponse {
  branches: Array<BranchMetadata>;
  onMainBranch: boolean;
}
export interface GetGloballyScopedMonitorEventsResponse {
  events: Array<_api_ScopedPermissionMonitorEvent>;
  nextPageToken?: PageToken | null | undefined;
}
export interface GetGloballyScopedMonitorMetadataEventsResponse {
  events: Array<_api_MonitorMetadataEvent>;
  nextPageToken?: PageToken | null | undefined;
}
export interface GetMonitorEventsResponse {
  events: Array<_api_MonitorEvent>;
  nextPageToken?: PageToken | null | undefined;
}
export interface GetMonitorStatusResponse {
  liveStatus?: LiveMonitorStatus | null | undefined;
  nextExecution: NextExecution;
  timeseriesStatus?: TimeseriesMonitorStatus | null | undefined;
}
export interface GetMonitorVersionResponse {
  monitor: _api_Monitor;
}
export interface GetNextExecutionAffectedObjectsRequest {
  monitorRid: _api_MonitorRid;
}
export interface GetNextExecutionAffectedObjectsResponse {
  includedObjects?: IncludedObjects | null | undefined;
}
export interface GetNextExecutionRequest {
  branchRid?: _api_BranchRid | null | undefined;
  cronExpression: _api_CronExpression;
  currentTime: string;
  setStartTimeOnSave: boolean;
}
export interface GetNextExecutionResponse_nextExecution {
  type: "nextExecution";
  nextExecution: string;
}

export interface GetNextExecutionResponse_invalidCron {
  type: "invalidCron";
  invalidCron: InvalidCron;
}
export type GetNextExecutionResponse =
  | GetNextExecutionResponse_nextExecution
  | GetNextExecutionResponse_invalidCron;

export interface GetPublishedMonitorVersionResponse {
  monitor?: _api_Monitor | null | undefined;
}
export interface GetStagedActionsRequest {
  monitorRid: _api_MonitorRid;
  reviewStatus?: _api_ReviewStatus | null | undefined;
}
export interface GetStagedActionsResponse {
  expiredStagedActions: Array<_api_ExpiredActionEffectInReview>;
  nextPageToken?: PageToken | null | undefined;
  stagedActions: Array<_api_ActionEffectInReview>;
}
export interface GetStreamingTimeseriesMonitorGroupRequest {
  monitorGroupRid: StreamingTimeseriesMonitorGroupRid;
  outputDatasetRid: _api_DatasetRid;
  outputObjectTypeRid: _api_ObjectTypeRid;
  rootObjectTypeRid: _api_ObjectTypeRid;
}
export interface GetStreamingTimeseriesMonitorGroupResponse {
  monitorRids: Array<_api_MonitorRid>;
}
/**
 * The objects that will be included in the next execution. This may be up to 1 minute out of date.
 */
export interface IncludedObjects {
  affectedObjects: _api_ObjectSetRid;
}
export interface InvalidCron {
}
export type JobSpecRid = string;
export interface LiveEvaluationInformationResponse {
  nonLiveIssues?: UnableToMonitorLiveReasons | null | undefined;
}
export interface LiveMonitorNotScheduled {
}
export interface LiveMonitorStatus {
  objectTypeRid: _api_ObjectTypeRid;
  progress?: Progress | null | undefined;
}
/**
 * Logic version of a streaming job.
 */
export type LogicVersion = number;

/**
 * Corresponds to a compass Marking string or Provenance MarkingId
 */
export type MarkingId = string;
export type MonitorDecoration =
  | "LATEST_MONITOR_EVENT"
  | "LAST_TRIGGERED_EVENT"
  | "LAST_RECOVERED_EVENT";
export interface MonitorsFilter_versionedObjectSetRidFilter {
  type: "versionedObjectSetRidFilter";
  versionedObjectSetRidFilter: VersionedObjectSetRidFilter;
}
export type MonitorsFilter = MonitorsFilter_versionedObjectSetRidFilter;

/**
 * A request to bulk load the latest version of a monitor. Note that if the filter changes between requests
 * while an old page token is used, undefined behaviour may happen.
 */
export interface MonitorsSearchRequest {
  decorations?: Array<MonitorDecoration> | null | undefined;
  filter: MonitorsFilter;
}
export interface MonitorsSearchResponse {
  monitors: Array<_api_Monitor>;
  nextPageToken?: PageToken | null | undefined;
}
export interface MoreThanOneObjectType {
  objectTypes: Array<_api_ObjectTypeRid>;
}
export interface MuteMonitorForSelfResponse {
}
export interface NextExecution_nonDeterministic {
  type: "nonDeterministic";
  nonDeterministic: NonDeterministicNextExecution;
}

export interface NextExecution_scheduledAt {
  type: "scheduledAt";
  scheduledAt: ScheduledNextExecution;
}

export interface NextExecution_live {
  type: "live";
  live: LiveMonitorNotScheduled;
}
export type NextExecution =
  | NextExecution_nonDeterministic
  | NextExecution_scheduledAt
  | NextExecution_live;

export interface NonDeterministicNextExecution {
  isRunning: boolean;
  scheduledAt?: string | null | undefined;
}
export interface NoObjectType {
}
export interface NotUsingObjectsV2 {
  linkTypes: Array<_api_LinkTypeRid>;
  objectTypes: Array<_api_ObjectTypeRid>;
}
export interface ObjectSetUsesRelativeTimes {
}
/**
 * Represents a page token for a paged request.
 */
export type PageToken = string;
export interface Progress {
  processedOffset?: _api_OffsetLocator | null | undefined;
  targetOffset: _api_OffsetLocator;
}
export interface PublishMonitorVersionRequest {
  branchRid?: _api_BranchRid | null | undefined;
}
export interface PublishMonitorVersionResponse {
}
export interface RejectStagedActionsRequest {
  actionInReviewIds: Array<_api_ActionEffectInReviewId>;
  monitorRid: _api_MonitorRid;
  reason?: string | null | undefined;
}
export interface RejectStagedActionsResponse {
  rejectedActions: Array<_api_RejectStagedActionEffectLog>;
}
export interface ResetMonitorEventSetViewResponse {
}
export interface ScheduledNextExecution {
  isRunning: boolean;
  scheduledAt?: string | null | undefined;
}
export type ScheduleRid = string;
export interface ScopedEventToUpdate {
  eventId: _api_MonitorEventId;
  eventSetRid: _api_MonitorEventSetRid;
  update: EventUpdate;
}
export interface ScopedTokenMode {
}
export interface SeenMonitorEventsRequest {
  monitorToEvents: Record<_api_MonitorRid, Array<UpdateSeenMonitorEventValue>>;
}
export interface SeenMonitorEventsResponse {
}
/**
 * Overrides for the job configuration. This is collection of optional overrides which will be applied to the streaming job
 * at run time. If a field is not present in the overrides, a default value defined in the job will be used.
 */
export interface StreamingJobConfigOverrides {
  debugOperators: Array<string>;
  latePointDataset?: _api_DatasetRid | null | undefined;
}
/**
 * Configuration of a streaming job which evaluates one or more timeseries monitors.
 */
export interface StreamingTimeseriesJobConfiguration {
  configOverrides?: StreamingJobConfigOverrides | null | undefined;
  flinkProfiles: Array<FlinkTransformProfile>;
}
export type StreamingTimeseriesMonitorGroupRid = string;
export interface SubscribeToMonitorRequest {
}
export interface TimeseriesMonitorStatus {
  alertDatasetRid: _api_DatasetRid;
  jobConfiguration?: BatchTimeseriesJobConfiguration | null | undefined;
  jobSpecRid: JobSpecRid;
  monitorsSharingSameJob: Array<_api_MonitorRid>;
  scheduleRid: ScheduleRid;
  streamingJobConfiguration?:
    | StreamingTimeseriesJobConfiguration
    | null
    | undefined;
}
export interface TokenMode_scopedToken {
  type: "scopedToken";
  scopedToken: ScopedTokenMode;
}

export interface TokenMode_userScopedToken {
  type: "userScopedToken";
  userScopedToken: UserScopedTokenMode;
}
/**
 * Token mode of the job. By default ScopedTokenMode is used.
 * ScopedTokenMode means the build runs with a project scoped token and the schedule is owned by the service.
 * UserScopedTokenMode means the build runs with a user scoped token and the schedule is owned by the user.
 * build2 docs on token scoping: https://sourcegraph.palantir.build/github.palantir.build/foundry/foundry-build2@5c39b9ef6274332cd18b4339fc45f57ebf5e82e9/-/blob/docs/source/permissions.rst?L101
 */
export type TokenMode = TokenMode_scopedToken | TokenMode_userScopedToken;

export type TransformProfile = string;

/**
 * The reasons that this object set can't be monitored live.
 */
export interface UnableToMonitorLiveReasons {
  couldNotGenerateLogicalPlan?:
    | GenericCouldNotGenerateLogicalPlanException
    | null
    | undefined;
  moreThanOneObjectType?: MoreThanOneObjectType | null | undefined;
  noObjectType?: NoObjectType | null | undefined;
  notUsingObjectsV2?: NotUsingObjectsV2 | null | undefined;
  objectSetUsesRelativeTimes?: ObjectSetUsesRelativeTimes | null | undefined;
  other: Array<_api_GenericError>;
  unsupportedFilterType: Array<UnsupportedFilterType>;
  unsupportedObjectSet: Array<UnsupportedObjectSetType>;
  unsupportedObjectType?: UnsupportedObjectType | null | undefined;
  usesStreamingObjectType?: UsesStreamingObjectType | null | undefined;
}
export interface UnmuteMonitorForSelfResponse {
}
export interface UnsubscribeFromMonitorRequest {
}
export type UnsupportedFilterType =
  | "PREFIXONLASTTOKEN"
  | "TERMS"
  | "MULTIMATCH"
  | "PHRASE";
export type UnsupportedObjectSetType = "JOINED";
export interface UnsupportedObjectType {
  objectType: _api_ObjectTypeRid;
}
/**
 * Deprecated, use UpdateEventAddErrors.
 */
export interface UpdateEventAddError {
  error: _api_FailureEffectLog;
}
/**
 * Add a list of new failure effect logs to the event.
 */
export interface UpdateEventAddErrors {
  errors: Array<_api_FailureEffectLog>;
}
/**
 * Add transaction ranges per input dataset that were processed in the job.
 */
export interface UpdateEventAddProcessedTransactionRanges {
  processedTransactionRanges: _api_ProcessedTransactionRanges;
}
/**
 * Add a list of skipped objects to the event.
 */
export interface UpdateEventAddSkippedObjects {
  skippedObjects: _api_SkippedObjects;
}
export interface UpdateExistingEventsRequest {
  scopedEventsToUpdate: Record<_api_MonitorRid, ScopedEventToUpdate>;
}
/**
 * The events which have been successfully updated.
 */
export interface UpdateExistingEventsResponse {
  updatedEvents: Array<_api_MonitorEventId>;
}
export interface UpdateMonitorLogicRequest {
  logic: _api_MonitorLogic;
}
export interface UpdateMonitorLogicResponse {
  locator: _api_MonitorLocator;
}
export interface UpdateMonitorMetadataRequest {
  branchRid?: _api_BranchRid | null | undefined;
  cycleDetectionSettings?: _api_CycleDetectionSettings | null | undefined;
  disabled: _api_DisabledConfig;
  expiry?: _api_ExpiryConfig | null | undefined;
  expiryDate?: string | null | undefined;
  globalEffectExecutionSettings?:
    | _api_GlobalEffectExecutionSettings
    | null
    | undefined;
  liveConfig?: _api_LiveConfig | null | undefined;
  management?: _api_ManagementSettings | null | undefined;
  mgsConfig?: _api_MgsConfig | null | undefined;
  muted: _api_MutedConfig;
  priority?: UpdatePriority | null | undefined;
  rendering?: _api_RenderingConfig | null | undefined;
  renderingV2: Record<_api_EffectId, _api_RenderingConfig>;
  scopedTokenEffects?: UpdateScopedTokenEffects | null | undefined;
  subscribers: Array<_api_MonitorSubscriber>;
  telemetryConfig?: _api_TelemetryConfig | null | undefined;
  timeSeriesAlertingOverrides?:
    | _api_TimeSeriesAlertingOverrides
    | null
    | undefined;
  triggerExecutionSettings?: _api_TriggerExecutionSettings | null | undefined;
}
export interface UpdateMonitorMetadataResponse {
  locator: _api_MonitorLocator;
}
export interface UpdateMonitorRequest {
  logic: _api_MonitorLogic;
  metadata: UpdateMonitorMetadataRequest;
  publishOnUpdate?: boolean | null | undefined;
  shouldExecuteAfterUpdate?: boolean | null | undefined;
}
export interface UpdateMonitorResponse {
  failures: Array<_api_MonitorValidationError>;
  locator: _api_MonitorLocator;
}
export interface UpdatePriority {
  priority: number;
}
export interface UpdateScopedTokenEffects {
  additionalScope: _api_RunningAutomationScope;
  sideEffects: _api_ScopedSideEffects;
}
export interface UpdateSeenMonitorEventValue {
  monitorEventId: _api_MonitorEventId;
}
export interface UpdateTimeseriesJobConfigurationBatch {
  newConfiguration: BatchTimeseriesJobConfiguration;
}
export interface UpdateTimeseriesJobConfigurationRequest {
  jobConfiguration: BatchTimeseriesJobConfiguration;
}
export interface UpdateTimeseriesJobConfigurationRequestV2_streaming {
  type: "streaming";
  streaming: UpdateTimeseriesJobConfigurationStreaming;
}

export interface UpdateTimeseriesJobConfigurationRequestV2_batch {
  type: "batch";
  batch: UpdateTimeseriesJobConfigurationBatch;
}
export type UpdateTimeseriesJobConfigurationRequestV2 =
  | UpdateTimeseriesJobConfigurationRequestV2_streaming
  | UpdateTimeseriesJobConfigurationRequestV2_batch;

export interface UpdateTimeseriesJobConfigurationResponse {
}
export interface UpdateTimeseriesJobConfigurationStreaming {
  newConfiguration: StreamingTimeseriesJobConfiguration;
}
export interface UserScopedTokenMode {
}
export interface UsesStreamingObjectType {
  objectType: _api_ObjectTypeRid;
}
/**
 * Filter for monitors saved under specific VersionedObjectSetRid.
 */
export interface VersionedObjectSetRidFilter {
  versionedObjectSetRid: _api_VersionedObjectSetRid;
}
