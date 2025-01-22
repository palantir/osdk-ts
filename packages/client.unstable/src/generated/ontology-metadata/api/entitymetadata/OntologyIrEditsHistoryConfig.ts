/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";

/**
 * Edits history tracking is enabled for this entity with the specified configuration. All action edits
 * for objects of this object type will be available for querying from the point the history was enabled.
 */
export interface OntologyIrEditsHistoryConfig {
  store: ObjectTypeApiName;
}
