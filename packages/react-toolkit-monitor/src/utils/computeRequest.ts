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

import type { ComputeRequest } from "../types/compute.js";

export type FulfilledComputeRequest = Extract<ComputeRequest, { type: "fulfilled" }>;
export type PendingComputeRequest = Extract<ComputeRequest, { type: "pending" }>;
export type FailedComputeRequest = Extract<ComputeRequest, { type: "failed" }>;

export const visitComputeRequest = <T>(
  request: ComputeRequest,
  visitor: {
    pending: (request: PendingComputeRequest) => T;
    failed: (request: FailedComputeRequest) => T;
    fulfilled: (request: FulfilledComputeRequest) => T;
  },
): T => {
  if (request.type === "pending") {
    return visitor.pending(request);
  }

  if (request.type === "failed") {
    return visitor.failed(request);
  }

  return visitor.fulfilled(request);
};
