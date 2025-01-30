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

import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectQuery } from "./ParameterObjectQuery.js";
export interface ParameterObjectQueryOrEmpty_empty {
  type: "empty";
  empty: MustBeEmpty;
}

export interface ParameterObjectQueryOrEmpty_objectQuery {
  type: "objectQuery";
  objectQuery: ParameterObjectQuery;
}
/**
 * Allows values that satisfy the objectQuery. If empty, it will only allow empty values.
 */
export type ParameterObjectQueryOrEmpty =
  | ParameterObjectQueryOrEmpty_empty
  | ParameterObjectQueryOrEmpty_objectQuery;
