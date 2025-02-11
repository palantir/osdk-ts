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

import type { ColumnName } from "./ColumnName.js";
import type { NestedStructFieldApiNameMapping } from "./NestedStructFieldApiNameMapping.js";
import type { StructFieldName } from "./StructFieldName.js";

/**
 * A mapping from the backing column struct field names to the struct property type field api names. Optionally
 * allows specifying nested fields, although OMS will throw in practice since this is only to avoid an API break
 * in the future if we want to support nested structs.
 */
export interface StructFieldApiNameMapping {
  column: ColumnName;
  mapping: Record<StructFieldName, NestedStructFieldApiNameMapping>;
}
