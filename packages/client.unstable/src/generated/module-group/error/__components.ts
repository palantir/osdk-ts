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

export type InvalidDeployedAppUpdateWhileRunningReason =
  | "MGS_TO_DEPLOYMENT_BACKED"
  | "DEPLOYMENT_TO_MGS_BACKED"
  | "AUTH_MODE_CHANGED"
  | "CM_OUTPUT_CHANGED"
  | "CM_INPUT_REMOVED"
  | "BUILD2_MODE_WITH_EXTERNAL_SOURCES_CM_INPUT_CHANGED"
  | "BUILD2_MODE_EXTERNAL_SOURCES_CHANGED"
  | "RPM_RQ_RESOLUTION_BRANCH_CHANGED"
  | "CM_SECURITY_SPEC_CHANGED";
export interface ResourceValidationError {
  errorType: ResourceValidationErrorType;
  maxQuantity?: any | null | undefined;
  requestedResource: Array<any>;
  resourceQueueComputeResources?: any | null | undefined;
  resourceQueueRid?: any | null | undefined;
}
export type ResourceValidationErrorType =
  | "REQUESTED_TOO_MANY_CPU_FOR_RESOURCE_QUEUE"
  | "REQUESTED_TOO_MANY_GPU_FOR_RESOURCE_QUEUE"
  | "RESOURCE_QUEUE_HAS_NO_GPU_TYPE_OR_VENDOR"
  | "BAD_GPU_TYPE_OR_VENDOR_FOR_RESOURCE_QUEUE"
  | "RESOURCE_QUEUE_HAS_NO_GPU"
  | "MULTIPLE_CONTAINERS_REQUESTED_GPU"
  | "CPU_TOO_MANY_FOR_INSTANCE_GROUP"
  | "GPU_TOO_MANY_FOR_INSTANCE_GROUP"
  | "REQUESTED_MEMORY_TOO_LARGE";
