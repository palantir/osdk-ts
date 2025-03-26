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

import type { SubmitAllValidOrNothingThrowingMode } from "./SubmitAllValidOrNothingThrowingMode.js";
import type { SubmitValidEntriesInOrderUntilFirstFailureMode } from "./SubmitValidEntriesInOrderUntilFirstFailureMode.js";
export interface ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure {
  type: "submitValidEntriesInOrderUntilFirstFailure";
  submitValidEntriesInOrderUntilFirstFailure:
    SubmitValidEntriesInOrderUntilFirstFailureMode;
}

export interface ActionTableSubmissionMode_submitAllValidOrNothingThrowing {
  type: "submitAllValidOrNothingThrowing";
  submitAllValidOrNothingThrowing: SubmitAllValidOrNothingThrowingMode;
}
/**
 * Submission mode defining the validation and processing result handling of action application requests.
 */
export type ActionTableSubmissionMode =
  | ActionTableSubmissionMode_submitValidEntriesInOrderUntilFirstFailure
  | ActionTableSubmissionMode_submitAllValidOrNothingThrowing;
