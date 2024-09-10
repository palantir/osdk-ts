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

import type { CreateValueTypeRequest } from "./CreateValueTypeRequest.js";
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";

/**
 * Request to create multiple Value Types at once. If more than 100 CreateValueTypeRequests are provided in
 * request, service will throw an error.
 *
 * All requests need to share identical permissioning rid, otherwise service will throw an error.
 */
export interface BatchCreateValueTypesRequest {
  valueTypesToCreate: Record<ValueTypeIdInRequest, CreateValueTypeRequest>;
}
