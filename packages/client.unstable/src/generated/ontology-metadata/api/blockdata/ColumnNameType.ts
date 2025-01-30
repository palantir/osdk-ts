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

/**
 * API_NAME_FORMATTED is the recommended option for most use cases. API_NAME_FORMATTED uses the snake case format
 * of property api names while API_NAME uses the default camel case format. DATASOURCE_COLUMN_NAME uses the
 * column names of the backing datasource. However, it will use API_NAME_FORMATTED for columns that do not have
 * a backing column name (eg. edit-only properties). DATASOURCE_COLUMN_NAME should generally only be used for
 * migration of writeback datasets from V1 backend. PROPERTY_ID is deprecated.
 */
export type ColumnNameType =
  | "PROPERTY_RID"
  | "PROPERTY_ID"
  | "API_NAME"
  | "API_NAME_FORMATTED"
  | "DATASOURCE_COLUMN_NAME";
