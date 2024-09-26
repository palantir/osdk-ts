/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type * as _Core from "@osdk/foundry.core";
import type * as _Datasets from "@osdk/foundry.datasets";
import type * as _Filesystem from "@osdk/foundry.filesystem";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * If any job in the build is unsuccessful, immediately finish the
build by cancelling all other jobs.
   *
   * Log Safety: SAFE
   */
export type AbortOnFailure = boolean;

/**
 * Log Safety: UNSAFE
 */
export interface Action {
  target: BuildTarget;
  branchName: _Datasets.BranchName;
  fallbackBranches: FallbackBranches;
  forceBuild: ForceBuild;
  retryCount?: RetryCount;
  retryBackoffDuration?: RetryBackoffDuration;
  abortOnFailure: AbortOnFailure;
  notificationsEnabled: NotificationsEnabled;
}

/**
 * Trigger after all of the given triggers emit an event.
 *
 * Log Safety: UNSAFE
 */
export interface AndTrigger {
  triggers: Array<Trigger>;
}

/**
 * Log Safety: UNSAFE
 */
export interface Build {
  rid: BuildRid;
  branchName: _Datasets.BranchName;
  createdTime: _Core.CreatedTime;
  createdBy: _Core.CreatedBy;
  fallbackBranches: FallbackBranches;
  retryCount: RetryCount;
  retryBackoffDuration: RetryBackoffDuration;
  abortOnFailure: AbortOnFailure;
  status: BuildStatus;
}

/**
 * The RID of a build
 *
 * Log Safety: SAFE
 */
export type BuildRid = LooselyBrandedString<"BuildRid">;

/**
 * The status of the build.
 *
 * Log Safety: SAFE
 */
export type BuildStatus = "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED";

/**
 * The targets of the build.
 *
 * Log Safety: UNSAFE
 */
export type BuildTarget =
  | ({ type: "upstream" } & UpstreamTarget)
  | ({ type: "manual" } & ManualTarget)
  | ({ type: "connecting" } & ConnectingTarget);

/**
   * All datasets between the input datasets (exclusive) and the
target datasets (inclusive) except for the datasets to ignore.
   *
   * Log Safety: SAFE
   */
export interface ConnectingTarget {
  inputDatasetRids: Array<_Datasets.DatasetRid>;
  targetDatasetRids: Array<_Datasets.DatasetRid>;
  ignoredDatasetRids: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateBuildsRequest {
  target: BuildTarget;
  branchName?: _Datasets.BranchName;
  fallbackBranches: FallbackBranches;
  forceBuild?: ForceBuild;
  retryCount?: RetryCount;
  retryBackoffDuration?: RetryBackoffDuration;
  abortOnFailure?: AbortOnFailure;
  notificationsEnabled?: NotificationsEnabled;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequest {
  displayName?: string;
  description?: string;
  action: CreateScheduleRequestAction;
  trigger?: Trigger;
  scopeMode?: CreateScheduleRequestScopeMode;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestAction {
  abortOnFailure?: AbortOnFailure;
  forceBuild?: ForceBuild;
  retryBackoffDuration?: RetryBackoffDuration;
  retryCount?: RetryCount;
  fallbackBranches?: FallbackBranches;
  branchName?: _Datasets.BranchName;
  notificationsEnabled?: NotificationsEnabled;
  target: CreateScheduleRequestActionBuildTarget;
}

/**
 * The targets of the build.
 *
 * Log Safety: UNSAFE
 */
export type CreateScheduleRequestActionBuildTarget =
  | ({
    type: "upstream";
  } & CreateScheduleRequestActionBuildTargetUpstreamTarget)
  | ({ type: "manual" } & CreateScheduleRequestActionBuildTargetManualTarget)
  | ({
    type: "connecting";
  } & CreateScheduleRequestActionBuildTargetConnectingTarget);

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestActionBuildTargetConnectingTarget {
  ignoredDatasetRids?: Array<_Datasets.DatasetRid>;
  inputDatasetRids: Array<_Datasets.DatasetRid>;
  targetDatasetRids: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestActionBuildTargetManualTarget {
  datasetRids: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestActionBuildTargetUpstreamTarget {
  datasetRids: Array<_Datasets.DatasetRid>;
  ignoredDatasetRids?: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestActionDuration {
  unit: _Core.TimeUnit;
  value: number;
}

/**
 * The boundaries for the schedule build.
 *
 * Log Safety: UNSAFE
 */
export type CreateScheduleRequestScopeMode =
  | ({ type: "project" } & CreateScheduleRequestScopeModeProjectScope)
  | ({ type: "user" } & CreateScheduleRequestScopeModeUserScope);

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestScopeModeProjectScope {
  projectRids: Array<_Filesystem.ProjectRid>;
}

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestScopeModeUserScope {}

/**
 * Log Safety: UNSAFE
 */
export type CreateScheduleRequestTrigger =
  | ({ type: "jobSucceeded" } & CreateScheduleRequestTriggerJobSucceededTrigger)
  | ({ type: "or" } & CreateScheduleRequestTriggerOrTrigger)
  | ({ type: "newLogic" } & CreateScheduleRequestTriggerNewLogicTrigger)
  | ({ type: "and" } & CreateScheduleRequestTriggerAndTrigger)
  | ({
    type: "datasetUpdated";
  } & CreateScheduleRequestTriggerDatasetUpdatedTrigger)
  | ({
    type: "scheduleSucceeded";
  } & CreateScheduleRequestTriggerScheduleSucceededTrigger)
  | ({
    type: "mediaSetUpdated";
  } & CreateScheduleRequestTriggerMediaSetUpdatedTrigger)
  | ({ type: "time" } & CreateScheduleRequestTriggerTimeTrigger);

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestTriggerAndTrigger {
  triggers: Array<Trigger>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestTriggerDatasetUpdatedTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestTriggerJobSucceededTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestTriggerMediaSetUpdatedTrigger {
  branchName?: _Datasets.BranchName;
  mediaSetRid: _Core.MediaSetRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestTriggerNewLogicTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateScheduleRequestTriggerOrTrigger {
  triggers: Array<Trigger>;
}

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestTriggerScheduleSucceededTrigger {
  scheduleRid: ScheduleRid;
}

/**
 * Log Safety: SAFE
 */
export interface CreateScheduleRequestTriggerTimeTrigger {
  cronExpression: CronExpression;
  timeZone?: _Core.ZoneId;
}

/**
   * A standard CRON expression with minute, hour, day, month
and day of week.
   *
   * Log Safety: SAFE
   */
export type CronExpression = LooselyBrandedString<"CronExpression">;

/**
   * Trigger whenever a new transaction is committed to the
dataset on the target branch.
   *
   * Log Safety: UNSAFE
   */
export interface DatasetUpdatedTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName: _Datasets.BranchName;
}

/**
   * The branches to retrieve JobSpecs from if no JobSpec is found on the
target branch.
   *
   * Log Safety: UNSAFE
   */
export type FallbackBranches = Array<_Datasets.BranchName>;

/**
 * Whether to ignore staleness information when running the build.
 *
 * Log Safety: SAFE
 */
export type ForceBuild = boolean;

/**
   * Trigger whenever a job succeeds on the dataset and on the target
branch.
   *
   * Log Safety: UNSAFE
   */
export interface JobSucceededTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName: _Datasets.BranchName;
}

/**
 * Manually specify all datasets to build.
 *
 * Log Safety: SAFE
 */
export interface ManualTarget {
  datasetRids: Array<_Datasets.DatasetRid>;
}

/**
   * Trigger whenever an update is made to a media set on the target
branch. For transactional media sets, this happens when a transaction
is committed. For non-transactional media sets, this event happens
eventually (but not necessary immediately) after an update.
   *
   * Log Safety: UNSAFE
   */
export interface MediaSetUpdatedTrigger {
  mediaSetRid: _Core.MediaSetRid;
  branchName: _Datasets.BranchName;
}

/**
   * Trigger whenever a new JobSpec is put on the dataset and on
that branch.
   *
   * Log Safety: UNSAFE
   */
export interface NewLogicTrigger {
  branchName: _Datasets.BranchName;
  datasetRid: _Datasets.DatasetRid;
}

/**
 * Whether to receive a notification at the end of scheduled builds.
 *
 * Log Safety: SAFE
 */
export type NotificationsEnabled = boolean;

/**
 * Trigger whenever any of the given triggers emit an event.
 *
 * Log Safety: UNSAFE
 */
export interface OrTrigger {
  triggers: Array<Trigger>;
}

/**
 * The schedule will only build resources in the following projects.
 *
 * Log Safety: SAFE
 */
export interface ProjectScope {
  projectRids: Array<_Filesystem.ProjectRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequest {
  displayName?: string;
  description?: string;
  action: ReplaceScheduleRequestAction;
  trigger?: Trigger;
  scopeMode?: ReplaceScheduleRequestScopeMode;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestAction {
  abortOnFailure?: AbortOnFailure;
  forceBuild?: ForceBuild;
  retryBackoffDuration?: RetryBackoffDuration;
  retryCount?: RetryCount;
  fallbackBranches?: FallbackBranches;
  branchName?: _Datasets.BranchName;
  notificationsEnabled?: NotificationsEnabled;
  target: ReplaceScheduleRequestActionBuildTarget;
}

/**
 * The targets of the build.
 *
 * Log Safety: UNSAFE
 */
export type ReplaceScheduleRequestActionBuildTarget =
  | ({
    type: "upstream";
  } & ReplaceScheduleRequestActionBuildTargetUpstreamTarget)
  | ({ type: "manual" } & ReplaceScheduleRequestActionBuildTargetManualTarget)
  | ({
    type: "connecting";
  } & ReplaceScheduleRequestActionBuildTargetConnectingTarget);

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestActionBuildTargetConnectingTarget {
  ignoredDatasetRids?: Array<_Datasets.DatasetRid>;
  inputDatasetRids: Array<_Datasets.DatasetRid>;
  targetDatasetRids: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestActionBuildTargetManualTarget {
  datasetRids: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestActionBuildTargetUpstreamTarget {
  datasetRids: Array<_Datasets.DatasetRid>;
  ignoredDatasetRids?: Array<_Datasets.DatasetRid>;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestActionDuration {
  unit: _Core.TimeUnit;
  value: number;
}

/**
 * The boundaries for the schedule build.
 *
 * Log Safety: UNSAFE
 */
export type ReplaceScheduleRequestScopeMode =
  | ({ type: "project" } & ReplaceScheduleRequestScopeModeProjectScope)
  | ({ type: "user" } & ReplaceScheduleRequestScopeModeUserScope);

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestScopeModeProjectScope {
  projectRids: Array<_Filesystem.ProjectRid>;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestScopeModeUserScope {}

/**
 * Log Safety: UNSAFE
 */
export type ReplaceScheduleRequestTrigger =
  | ({
    type: "jobSucceeded";
  } & ReplaceScheduleRequestTriggerJobSucceededTrigger)
  | ({ type: "or" } & ReplaceScheduleRequestTriggerOrTrigger)
  | ({ type: "newLogic" } & ReplaceScheduleRequestTriggerNewLogicTrigger)
  | ({ type: "and" } & ReplaceScheduleRequestTriggerAndTrigger)
  | ({
    type: "datasetUpdated";
  } & ReplaceScheduleRequestTriggerDatasetUpdatedTrigger)
  | ({
    type: "scheduleSucceeded";
  } & ReplaceScheduleRequestTriggerScheduleSucceededTrigger)
  | ({
    type: "mediaSetUpdated";
  } & ReplaceScheduleRequestTriggerMediaSetUpdatedTrigger)
  | ({ type: "time" } & ReplaceScheduleRequestTriggerTimeTrigger);

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestTriggerAndTrigger {
  triggers: Array<Trigger>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestTriggerDatasetUpdatedTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestTriggerJobSucceededTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestTriggerMediaSetUpdatedTrigger {
  branchName?: _Datasets.BranchName;
  mediaSetRid: _Core.MediaSetRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestTriggerNewLogicTrigger {
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceScheduleRequestTriggerOrTrigger {
  triggers: Array<Trigger>;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestTriggerScheduleSucceededTrigger {
  scheduleRid: ScheduleRid;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceScheduleRequestTriggerTimeTrigger {
  cronExpression: CronExpression;
  timeZone?: _Core.ZoneId;
}

/**
 * The duration to wait before retrying after a Job fails.
 *
 * Log Safety: SAFE
 */
export type RetryBackoffDuration = _Core.Duration;

/**
   * The number of retry attempts for failed Jobs within the Build. A Job's failure is not considered final until
all retries have been attempted or an error occurs indicating that retries cannot be performed. Be aware,
not all types of failures can be retried.
   *
   * Log Safety: SAFE
   */
export type RetryCount = number;

/**
 * Log Safety: UNSAFE
 */
export interface Schedule {
  rid: ScheduleRid;
  displayName?: string;
  description?: string;
  currentVersionRid: ScheduleVersionRid;
  createdTime: _Core.CreatedTime;
  createdBy: _Core.CreatedBy;
  updatedTime: _Core.UpdatedTime;
  updatedBy: _Core.UpdatedBy;
  paused: SchedulePaused;
  trigger?: Trigger;
  action: Action;
  scopeMode: ScopeMode;
}

/**
 * Log Safety: UNSAFE
 */
export type SchedulePaused = boolean;

/**
 * The Resource Identifier (RID) of a Schedule.
 *
 * Log Safety: SAFE
 */
export type ScheduleRid = LooselyBrandedString<"ScheduleRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ScheduleRun {
  rid: ScheduleRunRid;
  scheduleRid: ScheduleRid;
  scheduleVersionRid: ScheduleVersionRid;
  createdTime: _Core.CreatedTime;
  createdBy?: _Core.CreatedBy;
  result?: ScheduleRunResult;
}

/**
 * An error occurred attempting to run the schedule.
 *
 * Log Safety: UNSAFE
 */
export interface ScheduleRunError {
  errorName: ScheduleRunErrorName;
  description: string;
}

/**
 * Log Safety: SAFE
 */
export type ScheduleRunErrorName =
  | "TargetResolutionFailure"
  | "CyclicDependency"
  | "IncompatibleTargets"
  | "PermissionDenied"
  | "JobSpecNotFound"
  | "ScheduleOwnerNotFound"
  | "Internal";

/**
 * The schedule is not running as all targets are up-to-date.
 *
 * Log Safety: SAFE
 */
export interface ScheduleRunIgnored {}

/**
   * The result of attempting to trigger the schedule. The schedule run will either be submitted as a build,
ignored if all targets are up-to-date or error.
   *
   * Log Safety: UNSAFE
   */
export type ScheduleRunResult =
  | ({ type: "ignored" } & ScheduleRunIgnored)
  | ({ type: "submitted" } & ScheduleRunSubmitted)
  | ({ type: "error" } & ScheduleRunError);

/**
 * The RID of a schedule run
 *
 * Log Safety: SAFE
 */
export type ScheduleRunRid = LooselyBrandedString<"ScheduleRunRid">;

/**
 * The schedule has been successfully triggered.
 *
 * Log Safety: SAFE
 */
export interface ScheduleRunSubmitted {
  buildRid: BuildRid;
}

/**
   * Trigger whenever the specified schedule completes its action
successfully.
   *
   * Log Safety: SAFE
   */
export interface ScheduleSucceededTrigger {
  scheduleRid: ScheduleRid;
}

/**
 * Log Safety: SAFE
 */
export interface ScheduleVersion {
  rid: ScheduleVersionRid;
}

/**
 * The RID of a schedule version
 *
 * Log Safety: SAFE
 */
export type ScheduleVersionRid = LooselyBrandedString<"ScheduleVersionRid">;

/**
 * The boundaries for the schedule build.
 *
 * Log Safety: UNSAFE
 */
export type ScopeMode =
  | ({ type: "project" } & ProjectScope)
  | ({ type: "user" } & UserScope);

/**
 * Trigger on a time based schedule.
 *
 * Log Safety: SAFE
 */
export interface TimeTrigger {
  cronExpression: CronExpression;
  timeZone: _Core.ZoneId;
}

/**
 * Log Safety: UNSAFE
 */
export type Trigger =
  | ({ type: "jobSucceeded" } & JobSucceededTrigger)
  | ({ type: "or" } & OrTrigger)
  | ({ type: "newLogic" } & NewLogicTrigger)
  | ({ type: "and" } & AndTrigger)
  | ({ type: "datasetUpdated" } & DatasetUpdatedTrigger)
  | ({ type: "scheduleSucceeded" } & ScheduleSucceededTrigger)
  | ({ type: "mediaSetUpdated" } & MediaSetUpdatedTrigger)
  | ({ type: "time" } & TimeTrigger);

/**
 * Target the specified datasets along with all upstream datasets except the ignored datasets.
 *
 * Log Safety: SAFE
 */
export interface UpstreamTarget {
  datasetRids: Array<_Datasets.DatasetRid>;
  ignoredDatasetRids: Array<_Datasets.DatasetRid>;
}

/**
   * When triggered, the schedule will build all resources that the
associated user is permitted to build.
   *
   * Log Safety: SAFE
   */
export interface UserScope {}
