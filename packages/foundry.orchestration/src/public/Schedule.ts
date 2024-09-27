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
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Orchestration from "../_components.js";

//

const _createSchedule: $FoundryPlatformMethod<
  (
    $body: _Orchestration.CreateScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Schedule>
> = [1, "/v2/orchestration/schedules", 3];

/**
 * Creates a new Schedule.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules
 */
export function createSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    $body: _Orchestration.CreateScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Schedule> {
  return $foundryPlatformFetch($ctx, _createSchedule, ...args);
}

const _deleteSchedule: $FoundryPlatformMethod<
  (
    scheduleRid: _Orchestration.ScheduleRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/orchestration/schedules/{0}", 2];

/**
 * Delete the Schedule with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}
 */
export function deleteSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    scheduleRid: _Orchestration.ScheduleRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteSchedule, ...args);
}

const _getSchedule: $FoundryPlatformMethod<
  (
    scheduleRid: _Orchestration.ScheduleRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Schedule>
> = [0, "/v2/orchestration/schedules/{0}", 2];

/**
 * Get the Schedule with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-read]
 * URL: /v2/orchestration/schedules/{scheduleRid}
 */
export function getSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    scheduleRid: _Orchestration.ScheduleRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Schedule> {
  return $foundryPlatformFetch($ctx, _getSchedule, ...args);
}

const _replaceSchedule: $FoundryPlatformMethod<
  (
    scheduleRid: _Orchestration.ScheduleRid,
    $body: _Orchestration.ReplaceScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Schedule>
> = [2, "/v2/orchestration/schedules/{0}", 3];

/**
 * Replace the Schedule with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}
 */
export function replaceSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    scheduleRid: _Orchestration.ScheduleRid,
    $body: _Orchestration.ReplaceScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Schedule> {
  return $foundryPlatformFetch($ctx, _replaceSchedule, ...args);
}

const _runSchedule: $FoundryPlatformMethod<
  (
    scheduleRid: _Orchestration.ScheduleRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.ScheduleRun>
> = [1, "/v2/orchestration/schedules/{0}/run", 2];

/**
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}/run
 */
export function runSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    scheduleRid: _Orchestration.ScheduleRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.ScheduleRun> {
  return $foundryPlatformFetch($ctx, _runSchedule, ...args);
}

const _pauseSchedule: $FoundryPlatformMethod<
  (
    scheduleRid: _Orchestration.ScheduleRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/orchestration/schedules/{0}/pause", 2];

/**
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}/pause
 */
export function pauseSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    scheduleRid: _Orchestration.ScheduleRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _pauseSchedule, ...args);
}

const _unpauseSchedule: $FoundryPlatformMethod<
  (
    scheduleRid: _Orchestration.ScheduleRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/orchestration/schedules/{0}/unpause", 2];

/**
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}/unpause
 */
export function unpauseSchedule(
  $ctx: $Client | $ClientContext,
  ...args: [
    scheduleRid: _Orchestration.ScheduleRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _unpauseSchedule, ...args);
}
