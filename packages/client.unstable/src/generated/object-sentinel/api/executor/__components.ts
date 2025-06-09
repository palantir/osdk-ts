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
  ActionTypeRid as _api_ActionTypeRid,
  BatchExecutionEventSummary as _api_BatchExecutionEventSummary,
  BatchExecutionInstance as _api_BatchExecutionInstance,
  BatchExecutionInstanceId as _api_BatchExecutionInstanceId,
  BranchRid as _api_BranchRid,
  EffectId as _api_EffectId,
  EventsToRetry as _api_EventsToRetry,
  ExecuteForUsers as _api_ExecuteForUsers,
  MonitorBatchExecution as _api_MonitorBatchExecution,
  MonitorEvent as _api_MonitorEvent,
  MonitorEventId as _api_MonitorEventId,
  MonitorEventSummary as _api_MonitorEventSummary,
  MonitorLocator as _api_MonitorLocator,
  MonitorRid as _api_MonitorRid,
  ObjectSetSource as _api_ObjectSetSource,
  SchedulingStrategy as _api_SchedulingStrategy,
  SequentialExecutionSettings as _api_SequentialExecutionSettings,
} from "../__components.js";
import type { PageToken as _api_registry_PageToken } from "../registry/__components.js";
export interface BatchExecuteMonitorRequest {
  batchSize?: number | null | undefined;
  branchRid?: _api_BranchRid | null | undefined;
  effectsToExecute: Array<_api_EffectId>;
  forUsers?: _api_ExecuteForUsers | null | undefined;
  monitorRid: _api_MonitorRid;
  objectSetSource: _api_ObjectSetSource;
  parallelism?: number | null | undefined;
  schedulingStrategy?: _api_SchedulingStrategy | null | undefined;
  sendNotificationOnCompletion?: boolean | null | undefined;
  sequentialExecutionSettings?:
    | _api_SequentialExecutionSettings
    | null
    | undefined;
}
export interface BatchExecuteMonitorResponse {
  eventId: _api_MonitorEventId;
}
export interface BatchExecutionErrors {
  batchSizeIsNotPositive?: BatchSizeIsNotPositive | null | undefined;
  batchSizeMustBeOneWithWebhooksOrNotifications?:
    | BatchSizeMustBeOneWithWebhooksOrNotifications
    | null
    | undefined;
  fallbackEffectsSelected?: FallbackEffectsSelected | null | undefined;
  invalidParallelism?: InvalidParallelism | null | undefined;
  mustSelectAtLeastOneEffect?: MustSelectAtLeastOneEffect | null | undefined;
  parentEffectMustBeSelected?: ParentEffectMustBeSelected | null | undefined;
  tooManyBatches?: TooManyBatches | null | undefined;
  tooManyObjects?: TooManyObjects | null | undefined;
}
export interface BatchExecutionEventsRequest {
  branchRid?: _api_BranchRid | null | undefined;
  monitorRid: _api_MonitorRid;
}
export interface BatchExecutionEventsResponse {
  executions: Array<_api_MonitorBatchExecution>;
}
export interface BatchExecutionInfos {
  estimatedRuntime?: EstimatedRuntime | null | undefined;
}
export interface BatchExecutionStatusByEventIdRequest {
  branchRid?: _api_BranchRid | null | undefined;
  eventId: _api_MonitorEventId;
  monitorRid: _api_MonitorRid;
}
export interface BatchExecutionStatusByEventIdResponse {
  executionInstances: Array<_api_BatchExecutionInstance>;
  nextPageToken?: _api_registry_PageToken | null | undefined;
}
export interface BatchExecutionStatusRequest {
  executionInstanceIds: Array<_api_BatchExecutionInstanceId>;
  monitorRid: _api_MonitorRid;
}
export interface BatchExecutionStatusResponse {
  executionInstances: Array<_api_BatchExecutionInstance>;
}
export interface BatchExecutionSummaryRequest {
  branchRid?: _api_BranchRid | null | undefined;
  eventIds: Array<_api_MonitorEventId>;
  monitorRid: _api_MonitorRid;
}
export interface BatchExecutionSummaryResponse {
  summaries: Array<_api_BatchExecutionEventSummary>;
}
export interface BatchExecutionWarnings {
  hasPreviousPropertyInput?: HasPreviousPropertyInput | null | undefined;
  orderableEffectsSelected?: OrderableEffectsSelected | null | undefined;
}
/**
 * Batch size must be greater than 0.
 */
export interface BatchSizeIsNotPositive {
}
/**
 * If an effect with webhooks or notifications is selected, the batch size must be set to 1.
 */
export interface BatchSizeMustBeOneWithWebhooksOrNotifications {
  actionTypeRids: Array<_api_ActionTypeRid>;
}
export interface CancelBatchExecutionRequest {
  branchRid?: _api_BranchRid | null | undefined;
  executionId: _api_MonitorEventId;
  monitorRid: _api_MonitorRid;
}
export interface CancelBatchExecutionResponse {
  cancelledInstances: Array<_api_BatchExecutionInstanceId>;
  cancelledSchedulingJob?: _api_MonitorEventId | null | undefined;
}
export interface EstimatedRuntime {
  estimatedRuntimeMillis: number;
}
export interface ExecuteMonitorRequest {
  branchRid?: _api_BranchRid | null | undefined;
}
export interface ExecuteMonitorResponse {
  monitorEvent?: _api_MonitorEvent | null | undefined;
}
/**
 * Fallback effects cannot be selected in manual execution.
 */
export interface FallbackEffectsSelected {
  fallbackEffectIds: Array<_api_EffectId>;
}
export interface GetExecutionEffectSummaryRequest {
  branchRid?: _api_BranchRid | null | undefined;
  monitorEventId: _api_MonitorEventId;
  monitorRid: _api_MonitorRid;
}
export interface GetExecutionEffectSummaryResponse {
  summary: _api_MonitorEventSummary;
}
/**
 * The automation has a previous property input, which is not currently supported with manual executions.
 */
export interface HasPreviousPropertyInput {
  effectIds: Array<_api_EffectId>;
}
/**
 * The automation has an invalid parallelism.
 */
export interface InvalidParallelism {
  maximumParallelism: number;
  minimumParallelism: number;
  providedParallelism: number;
}
/**
 * Must select at least one effect.
 */
export interface MustSelectAtLeastOneEffect {
}
/**
 * Orderable effects are selected. Effects will not be ordered in manual execution.
 */
export interface OrderableEffectsSelected {
  effectIdsWithOrdering: Array<_api_EffectId>;
}
/**
 * The effects on which the following effects are dependent must be selected.
 */
export interface ParentEffectMustBeSelected {
  invalidEffectIds: Array<_api_EffectId>;
}
export interface RetryRequest {
  batchSize: number;
  branchRid?: _api_BranchRid | null | undefined;
  effectsToRetry: Array<_api_EffectId>;
  eventsToRetry: _api_EventsToRetry;
  monitorLocator: _api_MonitorLocator;
  parallelism?: number | null | undefined;
  schedulingStrategy?: _api_SchedulingStrategy | null | undefined;
  sequentialExecutionSettings?:
    | _api_SequentialExecutionSettings
    | null
    | undefined;
}
export interface RetryResponse {
  retryEventId: _api_MonitorEventId;
}
export interface TooManyBatches {
  maximumNumberOfBatches: number;
  providedNumberOfBatches: number;
}
export interface TooManyObjects {
  maximumObjectSetSize: number;
  providedObjectSetSize: number;
}
export interface ValidateBatchExecutionRequest {
  requestToValidate: BatchExecuteMonitorRequest;
}
export interface ValidatedBatchExecutionResponse {
  errors: BatchExecutionErrors;
  info: BatchExecutionInfos;
  warnings: BatchExecutionWarnings;
}
export interface ValidatedRetryEventsResponse {
  errors: BatchExecutionErrors;
  info: BatchExecutionInfos;
  warnings: BatchExecutionWarnings;
}
export interface ValidateRetryEventsRequest {
  requestToValidate: RetryRequest;
}
