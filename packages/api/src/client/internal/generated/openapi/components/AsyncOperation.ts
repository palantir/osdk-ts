/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { AsyncActionOperation } from "./AsyncActionOperation";
import type { AsyncApplyActionOperationV2 } from "./AsyncApplyActionOperationV2";

export interface AsyncOperation_ApplyActionAsyncV2
  extends AsyncApplyActionOperationV2
{
  type: "applyActionAsyncV2";
}

export interface AsyncOperation_ApplyActionAsync extends AsyncActionOperation {
  type: "applyActionAsync";
}

export type AsyncOperation =
  | AsyncOperation_ApplyActionAsyncV2
  | AsyncOperation_ApplyActionAsync;
