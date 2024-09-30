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

import type { CreateValueTypeFailure } from "./CreateValueTypeFailure.js";
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";

/**
 * An unsuccessful response to a batch create value types request. At least one value type could not be
 * created. The ids of the offending value type requests are present in this response.
 */
export interface BatchCreateValueTypeFailureResponses {
  valueTypeCreationFailures: Record<
    ValueTypeIdInRequest,
    CreateValueTypeFailure
  >;
}
