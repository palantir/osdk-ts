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

import type { BatchCreateValueTypeFailureResponses } from "./BatchCreateValueTypeFailureResponses.js";
import type { BatchCreateValueTypeSuccessResponses } from "./BatchCreateValueTypeSuccessResponses.js";
export interface BatchCreateValueTypesResponse_success {
  type: "success";
  success: BatchCreateValueTypeSuccessResponses;
}

export interface BatchCreateValueTypesResponse_failure {
  type: "failure";
  failure: BatchCreateValueTypeFailureResponses;
}
/**
 * Batch value type creation is all-or-nothing. Either all the requested value types are created successfully,
 * or none of them are created if a single creation request fails.
 */
export type BatchCreateValueTypesResponse =
  | BatchCreateValueTypesResponse_success
  | BatchCreateValueTypesResponse_failure;
