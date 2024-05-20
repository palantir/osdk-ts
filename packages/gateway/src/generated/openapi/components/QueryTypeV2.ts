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

import type { DisplayName } from "./DisplayName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
import type { ParameterId } from "./ParameterId.js";
import type { QueryApiName } from "./QueryApiName.js";
import type { QueryDataType } from "./QueryDataType.js";
import type { QueryParameterV2 } from "./QueryParameterV2.js";

/** Represents a query type in the Ontology. */
export interface QueryTypeV2 {
  apiName: QueryApiName;
  description?: string;
  displayName?: DisplayName;
  parameters: Record<ParameterId, QueryParameterV2>;
  output: QueryDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}
