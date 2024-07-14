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

import type { ConditionDisplayMetadata } from "./ConditionDisplayMetadata.js";
import type { ConditionValue } from "./ConditionValue.js";
import type { MarkingFilter } from "./MarkingFilter.js";

/**
 * True if the user satisfies the markings represented by the value field.
 * This follows com.palantir.gps.api.policy.MarkingsCondition
 */
export interface MarkingsCondition {
  value: ConditionValue;
  filters: MarkingFilter;
  displayMetadata: ConditionDisplayMetadata | undefined;
}
