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

import type { MarkingCategory } from "@osdk/foundry.admin";
import { MarkingCategories } from "@osdk/foundry.admin";
import React from "react";

import { usePlatformPaginatedQuery } from "../../../utils/usePlatformPaginatedQuery.js";
import { OsdkContext } from "../../OsdkContext.js";

export interface UseMarkingCategoriesOptions {
  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute.
   *
   * This is useful for:
   * - Lazy/on-demand queries that should wait for user interaction
   * - Dependent queries that need data from another query first
   * - Conditional queries based on component state
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * The preferred page size (maximum 100).
   * @default 100
   */
  pageSize?: number;

  /**
   * Automatically fetch additional pages.
   * - `true`: Fetch all available pages.
   * - `number`: Fetch until at least this many items are loaded, or no pages remain.
   * - `false` or `undefined` (default): Fetch only the first page; call `fetchMore()` for more.
   */
  autoFetchMore?: boolean | number;
}

export interface UseMarkingCategoriesResult {
  categories: MarkingCategory[] | undefined;
  isLoading: boolean;

  error: Error | undefined;

  refetch: () => void;

  /** Whether the server has more pages to fetch. */
  hasMore: boolean;

  /** Fetch the next page, appending to the list. Undefined when no more pages are available. */
  fetchMore: (() => Promise<void>) | undefined;
}

/**
 * List marking categories, fetching one page by default.
 * Use `autoFetchMore` to load additional pages automatically, or call `fetchMore()`.
 * Loaded pages remain available during loading and errors; check `hasMore` for completeness.
 * @param options Options to control the query.
 */
export function useMarkingCategories({
  enabled = true,
  pageSize = 100,
  autoFetchMore,
}: UseMarkingCategoriesOptions = {}): UseMarkingCategoriesResult {
  const { client } = React.useContext(OsdkContext);

  const handleQuery = React.useCallback(
    (pageToken: string | undefined) => {
      return MarkingCategories.list(client, { pageSize, pageToken });
    },
    [client, pageSize],
  );

  const query = usePlatformPaginatedQuery({
    query: handleQuery,
    enabled,
    autoFetchMore,
    queryName: "marking-categories",
  });

  return {
    categories: query.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
    hasMore: query.hasMore,
    fetchMore: query.fetchMore,
  };
}
