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

import type { TypeGroupDisplayMetadata } from "./TypeGroupDisplayMetadata.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";

/**
 * A type group is a collection of entities that are related to each other. Type groups are used to organize
 * entities into logical groups. This is useful for displaying entities in the UI, or for querying entities
 * within a certain scope.
 */
export interface TypeGroup {
  rid: TypeGroupRid;
  displayMetadata: TypeGroupDisplayMetadata;
}
