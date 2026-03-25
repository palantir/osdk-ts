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

import type { Marking } from "@osdk/foundry.admin";
import { Markings } from "@osdk/foundry.admin";
import React from "react";
import { usePlatformQuery } from "../../../utils/usePlatformQuery.js";
import { OsdkContext2 } from "../../OsdkContext2.js";

export interface UseMarkingsOptions {
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
}

export interface UseMarkingsResult {
  markings: Marking[] | undefined;
  isLoading: boolean;

  error: Error | undefined;

  refetch: () => void;
}

/**
 * List all markings.
 * @param options Options to control the query.
 */
export function useMarkings(
  { enabled = true }: UseMarkingsOptions = {},
): UseMarkingsResult {
  const { client } = React.useContext(OsdkContext2);

  const handleQuery = React.useCallback(() => {
    return Markings.list(client);
  }, [client]);

  const query = usePlatformQuery({
    query: handleQuery,
    enabled,
    queryName: "markings",
  });

  return {
    markings: query.data?.data,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
