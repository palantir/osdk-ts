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

import type { PropertyApiName } from "./PropertyApiName";

/**
 * Returns objects where the specified field contains all of the terms in the order provided,
 * but they do have to be adjacent to each other.
 * The last term can be a partial prefix match.
 */
export interface ContainsAllTermsInOrderPrefixLastTerm {
  field: PropertyApiName;
  value: string;
}
