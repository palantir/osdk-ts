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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * The given build inputs could be found.

   *
   * Log Safety: SAFE
   */
export interface BuildInputsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "BuildInputsNotFound";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
   * The provided token does not have permission to use the given resources as inputs to the build.

   *
   * Log Safety: SAFE
   */
export interface BuildInputsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "BuildInputsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * The given Build could not be found.
 *
 * Log Safety: SAFE
 */
export interface BuildNotFound {
  errorCode: "NOT_FOUND";
  errorName: "BuildNotFound";
  errorInstanceId: string;
  parameters: {
    buildRid: unknown;
  };
}

/**
 * The action targets are missing job specs
 *
 * Log Safety: SAFE
 */
export interface BuildTargetsMissingJobSpecs {
  errorCode: "INVALID_ARGUMENT";
  errorName: "BuildTargetsMissingJobSpecs";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
   * The given build targets could be found.

   *
   * Log Safety: SAFE
   */
export interface BuildTargetsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "BuildTargetsNotFound";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
   * The provided token does not have permission to build the given resources.

   *
   * Log Safety: SAFE
   */
export interface BuildTargetsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "BuildTargetsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
   * Unable to resolve the given target to a set of targets to build.

   *
   * Log Safety: SAFE
   */
export interface BuildTargetsResolutionError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "BuildTargetsResolutionError";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not create the Build.
 *
 * Log Safety: SAFE
 */
export interface CreateBuildsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateBuildsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not create the Schedule.
 *
 * Log Safety: SAFE
 */
export interface CreateSchedulePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateSchedulePermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the Schedule.
 *
 * Log Safety: SAFE
 */
export interface DeleteSchedulePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteSchedulePermissionDenied";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}

/**
 * The AND trigger should have at least one value.
 *
 * Log Safety: SAFE
 */
export interface InvalidAndTrigger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAndTrigger";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given MediaSet rid is invalid.
 *
 * Log Safety: SAFE
 */
export interface InvalidMediaSetTrigger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidMediaSetTrigger";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}

/**
 * The OR trigger should have at least one value.
 *
 * Log Safety: SAFE
 */
export interface InvalidOrTrigger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidOrTrigger";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The schedule description is too long.
 *
 * Log Safety: SAFE
 */
export interface InvalidScheduleDescription {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidScheduleDescription";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The schedule name is too long
 *
 * Log Safety: SAFE
 */
export interface InvalidScheduleName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidScheduleName";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The schedule trigger cron expression is invalid.
 *
 * Log Safety: SAFE
 */
export interface InvalidTimeTrigger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidTimeTrigger";
  errorInstanceId: string;
  parameters: {
    cronExpression: unknown;
  };
}

/**
 * The build target must contains at least one dataset target
 *
 * Log Safety: SAFE
 */
export interface MissingBuildTargets {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingBuildTargets";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The connecting build target must contains at least one input dataset target
 *
 * Log Safety: SAFE
 */
export interface MissingConnectingBuildInputs {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingConnectingBuildInputs";
  errorInstanceId: string;
  parameters: {};
}

/**
 * You must pass in a trigger when creating or updating a schedule
 *
 * Log Safety: SAFE
 */
export interface MissingTrigger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingTrigger";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not pause the Schedule.
 *
 * Log Safety: SAFE
 */
export interface PauseSchedulePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PauseSchedulePermissionDenied";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}

/**
 * Could not replace the Schedule.
 *
 * Log Safety: SAFE
 */
export interface ReplaceSchedulePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceSchedulePermissionDenied";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}

/**
 * Could not run the Schedule.
 *
 * Log Safety: SAFE
 */
export interface RunSchedulePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RunSchedulePermissionDenied";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}

/**
 * The given Schedule could not be found.
 *
 * Log Safety: SAFE
 */
export interface ScheduleNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ScheduleNotFound";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}

/**
 * The given resources in the schedule trigger could not be found.
 *
 * Log Safety: SAFE
 */
export interface ScheduleTriggerResourcesNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ScheduleTriggerResourcesNotFound";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * The provided token does not have permission to use the given resources as a schedule trigger.
 *
 * Log Safety: SAFE
 */
export interface ScheduleTriggerResourcesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ScheduleTriggerResourcesPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
   * The schedule target is not supported. The schedule target must be either a connecting target, upstream
target or list of single dataset targets.

   *
   * Log Safety: SAFE
   */
export interface TargetNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TargetNotSupported";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}

/**
 * Could not unpause the Schedule.
 *
 * Log Safety: SAFE
 */
export interface UnpauseSchedulePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UnpauseSchedulePermissionDenied";
  errorInstanceId: string;
  parameters: {
    scheduleRid: unknown;
  };
}
