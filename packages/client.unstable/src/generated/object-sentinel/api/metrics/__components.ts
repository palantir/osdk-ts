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
  AutomationInstantEvent as _api_AutomationInstantEvent,
  BranchRid as _api_BranchRid,
  MonitorEventId as _api_MonitorEventId,
  MonitorLocator as _api_MonitorLocator,
  MonitorMetrics as _api_MonitorMetrics,
  MonitorRid as _api_MonitorRid,
  ObjectTypeRid as _api_ObjectTypeRid,
  ZoneId as _api_ZoneId,
} from "../__components.js";
export interface BucketedData {
  data: TelemetryData;
  fromTimestamp: string;
  toTimestamp: string;
}
export type BucketInterval = "MINUTE" | "HOUR" | "DAY";
export interface BucketSize_interval {
  type: "interval";
  interval: BucketInterval;
}

export interface BucketSize_fullRange {
  type: "fullRange";
  fullRange: FullRange;
}
export type BucketSize = BucketSize_interval | BucketSize_fullRange;

export interface CurrentlyEvaluating {
  startedAt?: string | null | undefined;
}
export interface CurrentlyIndexing {
}
/**
 * An enum to represent how automation dependencies should be traversed
 */
export type DependentAutomationsSearchDirectionEnum =
  | "UPSTREAM"
  | "DOWNSTREAM"
  | "BOTH";
export interface EvaluationInformation_notSupportedForNonLive {
  type: "notSupportedForNonLive";
  notSupportedForNonLive: NotSupportedForNonLive;
}

export interface EvaluationInformation_upToDate {
  type: "upToDate";
  upToDate: UpToDate;
}

export interface EvaluationInformation_currentlyEvaluating {
  type: "currentlyEvaluating";
  currentlyEvaluating: CurrentlyEvaluating;
}

export interface EvaluationInformation_failing {
  type: "failing";
  failing: FailingEvaluation;
}

export interface EvaluationInformation_stalled {
  type: "stalled";
  stalled: StalledEvaluation;
}

export interface EvaluationInformation_metricsAreNotAvailable {
  type: "metricsAreNotAvailable";
  metricsAreNotAvailable: MetricsAreNotAvailable;
}

export interface EvaluationInformation_currentlyIndexing {
  type: "currentlyIndexing";
  currentlyIndexing: CurrentlyIndexing;
}
export type EvaluationInformation =
  | EvaluationInformation_notSupportedForNonLive
  | EvaluationInformation_upToDate
  | EvaluationInformation_currentlyEvaluating
  | EvaluationInformation_failing
  | EvaluationInformation_stalled
  | EvaluationInformation_metricsAreNotAvailable
  | EvaluationInformation_currentlyIndexing;

export interface FailingEvaluation {
  lastAttemptedAt: string;
  lastError?: string | null | undefined;
  startedAt?: string | null | undefined;
}
export interface FullRange {
}
export interface GetAggregateBucketedDataRequest {
  bucketSize?: BucketSize | null | undefined;
  monitorRids: Array<_api_MonitorRid>;
  timeFrom: string;
  timeTo: string;
  timezone?: _api_ZoneId | null | undefined;
}
export interface GetAggregateBucketedDataResponse {
  data: Array<BucketedData>;
}
export interface GetAutomationEvaluationInformationRequest {
  monitorRid: _api_MonitorRid;
}
export interface GetAutomationEvaluationInformationResponse {
  information: EvaluationInformation;
}
export interface GetAutomationEventDependenciesRequest {
  branchRid?: _api_BranchRid | null | undefined;
  eventId: _api_MonitorEventId;
  monitorRid: _api_MonitorRid;
}
export interface GetAutomationTriggerDependenciesResponse {
  dependencies: Array<InferredMonitorDependency>;
}
export interface GetDependentAutomationsRequest {
  branchRid?: _api_BranchRid | null | undefined;
  depth: number;
  monitorRid: _api_MonitorRid;
  searchDirection: DependentAutomationsSearchDirectionEnum;
}
export interface GetEvaluationInformationResponse {
  information: EvaluationInformation;
}
export interface GetMonitorMetricsResponse {
  monitorMetrics?: _api_MonitorMetrics | null | undefined;
}
export interface GetRunningMonitorsForObjectTypeRequest {
  monitorRids: Array<_api_MonitorRid>;
  objectTypeRids: Array<_api_ObjectTypeRid>;
}
export interface GetRunningMonitorsForObjectTypeResponse {
  runningMonitors: Record<_api_ObjectTypeRid, Array<_api_MonitorRid>>;
}
export interface GetUsageInformationResponse {
  instantEvents: Array<_api_AutomationInstantEvent>;
}
export interface InferredMonitorDependency {
  source: InferredMonitorDependencySource;
  sourceMonitorLocator: _api_MonitorLocator;
  targetMonitorLocator: _api_MonitorLocator;
}
export interface InferredMonitorDependencySource_liveEvaluation {
  type: "liveEvaluation";
  liveEvaluation: LiveEvaluationDependencySource;
}
export type InferredMonitorDependencySource =
  InferredMonitorDependencySource_liveEvaluation;

export interface LiveEvaluationDependencySource {
  lastSourceEventId: _api_MonitorEventId;
  lastTriggeredEventId: _api_MonitorEventId;
}
export interface MetricsAreNotAvailable {
}
export interface NotSupportedForNonLive {
}
export interface StalledEvaluation {
  registeredAt?: string | null | undefined;
}
export interface TelemetryData {
  numErrors: number;
  numRuns: number;
  runtimeMillis: number;
}
export interface UpToDate {
  finishedAt?: string | null | undefined;
  startedAt?: string | null | undefined;
}
