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

import type {
  CreatedBy,
  CreatedTime,
  Duration,
  MediaSetRid,
  UpdatedBy,
  UpdatedTime,
} from "@osdk/foundry.core";
import type { BranchName, DatasetRid } from "@osdk/foundry.datasets";
import type { ProjectRid } from "@osdk/foundry.filesystem";

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
  branchName: BranchName;
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
  branchName: BranchName;
  createdTime: CreatedTime;
  createdBy: CreatedBy;
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
  | ({ type: "manual" } & ManualTarget)
  | ({ type: "upstream" } & UpstreamTarget)
  | ({ type: "connecting" } & ConnectingTarget);

/**
   * All datasets between the input datasets (exclusive) and the
target datasets (inclusive) except for the datasets to ignore.
   *
   * Log Safety: SAFE
   */
export interface ConnectingTarget {
  inputDatasetRids: Array<DatasetRid>;
  targetDatasetRids: Array<DatasetRid>;
  ignoredDatasetRids: Array<DatasetRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateBuildsRequest {
  target: BuildTarget;
  branchName?: BranchName;
  fallbackBranches: FallbackBranches;
  forceBuild?: ForceBuild;
  retryCount?: RetryCount;
  retryBackoffDuration?: RetryBackoffDuration;
  abortOnFailure?: AbortOnFailure;
  notificationsEnabled?: NotificationsEnabled;
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
  datasetRid: DatasetRid;
  branchName: BranchName;
}

/**
   * The branches to retrieve JobSpecs from if no JobSpec is found on the
target branch.
   *
   * Log Safety: UNSAFE
   */
export type FallbackBranches = Array<BranchName>;

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
  datasetRid: DatasetRid;
  branchName: BranchName;
}

/**
 * Manually specify all datasets to build.
 *
 * Log Safety: SAFE
 */
export interface ManualTarget {
  datasetRids: Array<DatasetRid>;
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
  mediaSetRid: MediaSetRid;
  branchName: BranchName;
}

/**
   * Trigger whenever a new JobSpec is put on the dataset and on
that branch.
   *
   * Log Safety: UNSAFE
   */
export interface NewLogicTrigger {
  branchName: BranchName;
  datasetRid: DatasetRid;
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
  projectRids: Array<ProjectRid>;
}

/**
 * The duration to wait before retrying after a Job fails.
 *
 * Log Safety: SAFE
 */
export type RetryBackoffDuration = Duration;

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
  versionRid: ScheduleVersionRid;
  createdTime: CreatedTime;
  createdBy: CreatedBy;
  updatedTime: UpdatedTime;
  updatedBy: UpdatedBy;
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
  | ({ type: "user" } & UserScope)
  | ({ type: "project" } & ProjectScope);

/**
 * Trigger on a time based schedule.
 *
 * Log Safety: SAFE
 */
export interface TimeTrigger {
  cronExpression: CronExpression;
  timeZone: ZoneId;
}

/**
 * Log Safety: UNSAFE
 */
export type Trigger =
  | ({ type: "and" } & AndTrigger)
  | ({ type: "or" } & OrTrigger)
  | ({ type: "time" } & TimeTrigger)
  | ({ type: "datasetUpdated" } & DatasetUpdatedTrigger)
  | ({ type: "newLogic" } & NewLogicTrigger)
  | ({ type: "jobSucceeded" } & JobSucceededTrigger)
  | ({ type: "scheduleSucceeded" } & ScheduleSucceededTrigger)
  | ({ type: "mediaSetUpdated" } & MediaSetUpdatedTrigger);

/**
 * Target the specified datasets along with all upstream datasets except the ignored datasets.
 *
 * Log Safety: SAFE
 */
export interface UpstreamTarget {
  datasetRids: Array<DatasetRid>;
  ignoredDatasetRids: Array<DatasetRid>;
}

/**
   * When triggered, the schedule will build all resources that the
associated user is permitted to build.
   *
   * Log Safety: SAFE
   */
export interface UserScope {}

/**
 * A string representation of a java.time.ZoneId
 *
 * Log Safety: SAFE
 */
export type ZoneId = LooselyBrandedString<"ZoneId">;
