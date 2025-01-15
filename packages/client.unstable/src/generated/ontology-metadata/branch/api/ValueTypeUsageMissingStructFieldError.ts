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

import type { ObjectTypeFieldApiName } from "../../api/ObjectTypeFieldApiName.js";

/**
 * The property type is missing one or more struct fields from the value type. The property type should have a
 * superset of the fields on the value type. A struct field's API name must match the value type's field name.
 */
export interface ValueTypeUsageMissingStructFieldError {
  missingStructFields: Array<ObjectTypeFieldApiName>;
}
