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
