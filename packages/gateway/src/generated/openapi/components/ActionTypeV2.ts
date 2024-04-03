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

import type { ActionParameterV2 } from "./ActionParameterV2";
import type { ActionTypeApiName } from "./ActionTypeApiName";
import type { ActionTypeRid } from "./ActionTypeRid";
import type { DisplayName } from "./DisplayName";
import type { LogicRule } from "./LogicRule";
import type { ParameterId } from "./ParameterId";
import type { ReleaseStatus } from "./ReleaseStatus";

/** Represents an action type in the Ontology. */
export interface ActionTypeV2 {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: DisplayName;
  status: ReleaseStatus;
  parameters: Record<ParameterId, ActionParameterV2>;
  rid: ActionTypeRid;
  operations: ReadonlyArray<LogicRule>;
}
