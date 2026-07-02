/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ReactNode } from "react";

/**
 * Build a Combobox `filter` function that searches by `renderValue(item)` when
 * it returns a string, and falls back to the raw item value when it returns
 * non-string JSX. Comparison is case-insensitive.
 */
export function createRenderValueFilter(
  renderValue: (value: string) => ReactNode
): (itemValue: string, query: string) => boolean {
  return (itemValue, query) => {
    const rendered = renderValue(itemValue);
    const searchText = typeof rendered === "string" ? rendered : itemValue;
    return searchText.toLowerCase().includes(query.toLowerCase());
  };
}
