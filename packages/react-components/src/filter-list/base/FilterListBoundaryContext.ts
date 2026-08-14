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

import type React from "react";
import { createContext, useContext } from "react";

/**
 * Provides the filter list container element so that dropdown positioners
 * inside the filter list can use it as their collision boundary, flipping
 * above the trigger when space below is insufficient within the sidebar.
 */
const FilterListBoundaryContext = createContext<Element | null>(null);

export const FilterListBoundaryProvider: React.Provider<Element | null> =
  FilterListBoundaryContext.Provider;

export function useFilterListBoundary(): Element | undefined {
  return useContext(FilterListBoundaryContext) ?? undefined;
}
