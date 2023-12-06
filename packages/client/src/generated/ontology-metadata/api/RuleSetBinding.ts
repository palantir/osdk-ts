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

import type { RuleSetRid } from "./RuleSetRid.js";
import type { ValueReferenceId } from "./ValueReferenceId.js";
import type { ValueReferenceSource } from "./ValueReferenceSource.js";

/**
 * Bind a rule set to a practical use. This enables re-use of rule sets in various contexts (e.g. values can
 * be bound to properties, or to actions). The `it` value is considered special & have semantic meaning at the
 * binding point (e.g. the property to which the rule set is bound).
 */
export interface RuleSetBinding {
  ruleSetRid: RuleSetRid;
  bindings: Record<ValueReferenceId, ValueReferenceSource>;
}
