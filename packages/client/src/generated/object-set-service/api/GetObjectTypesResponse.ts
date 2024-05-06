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

import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";

/**
 * The objectTypeIds and objectTypeRids lists are guaranteed to match up.  Specifically, the id at objectTypeIds[i] and the rid at objectTypeRids[i] represent the same object type for all i, and the lists are the same length. There are guaranteed to be no duplicates in either list.
 */
export interface GetObjectTypesResponse {
  objectTypeIds: Array<ObjectTypeId>;
  objectTypeRids: Array<ObjectTypeRid>;
}
