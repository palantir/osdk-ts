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
  ActionEditResponse,
  ActionReturnValueResponse,
  ActionValidationResponse,
  ApplyActionOptions,
  ApplyBatchActionOptions,
} from "./Actions.js";

// cannot specify both validateOnly and returnEdits as true

/**
 * The value `applyAction` resolves to for the given options.
 *
 * `R` is the action's return value type. Actions without a return value leave it
 * as `never` and resolve to `undefined` (or the edits when `$returnEdits` is set).
 */
export type ActionReturnTypeForOptions<
  Op extends ApplyActionOptions | ApplyBatchActionOptions,
  R = never,
> = Op extends { $validateOnly: true }
  ? ActionValidationResponse
  : Op extends { $returnEdits: true }
    ? [R] extends [never]
      ? ActionEditResponse
      : ActionEditResponse & ActionReturnValueResponse<R>
    : [R] extends [never]
      ? undefined
      : ActionReturnValueResponse<R>;
