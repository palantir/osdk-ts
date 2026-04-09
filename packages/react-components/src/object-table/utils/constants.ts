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

export const SELECTION_COLUMN_ID = "__selection__";

export const DEFAULT_COLUMN_WIDTH = 80;

export const DEFAULT_ROW_HEIGHT = 40;

export const DEFAULT_LOADING_COLUMN_WIDTH = 120;

export const MIN_LOADING_ROWS = 5;

export const SCROLL_FETCH_THRESHOLD = 100;

export const VIRTUALIZER_OVERSCAN = 5;

export const DEFAULT_PAGE_SIZE = 50;

export const DEFAULT_OBJECT_TABLE_DEDUPE_INTERVAL_MS = 60_000;

export const DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS = 300_000;

export const SELECTION_COLUMN_WIDTH = 50;

export const NUMBER_TYPES: readonly string[] = [
  "double",
  "integer",
  "long",
  "float",
  "decimal",
  "byte",
  "short",
];

export const VALIDATION_ERROR_MESSAGE = "Validation error";

export const EMPTY_ARRAY: [] = [];
