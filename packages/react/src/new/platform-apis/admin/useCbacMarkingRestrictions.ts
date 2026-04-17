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

import { CbacMarkingRestrictionsObjects } from "@osdk/foundry.admin";
import React from "react";
import { usePlatformQuery } from "../../../utils/usePlatformQuery.js";
import { OsdkContext2 } from "../../OsdkContext2.js";

export interface CbacMarkingRestrictionsData {
  disallowedMarkings: string[];
  impliedMarkings: string[];
  requiredMarkings: string[][];
  userSatisfiesMarkings: boolean;
  isValid: boolean;
}

export interface UseCbacMarkingRestrictionsOptions {
  markingIds: string[];
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

export interface UseCbacMarkingRestrictionsResult {
  restrictions: CbacMarkingRestrictionsData | undefined;
  isLoading: boolean;

  error: Error | undefined;

  refetch: () => void;
}

/**
 * Get CBAC marking restrictions (implied, disallowed, required) for the given marking IDs.
 * @param options Options to control the query.
 */
export function useCbacMarkingRestrictions({
  markingIds,
  enabled: externalEnabled = true,
}: UseCbacMarkingRestrictionsOptions): UseCbacMarkingRestrictionsResult {
  const { client } = React.useContext(OsdkContext2);

  const stableMarkingIds = React.useMemo(
    () => markingIds,
    [JSON.stringify(markingIds)],
  );

  const enabled = stableMarkingIds.length > 0 && externalEnabled;

  const handleQuery = React.useCallback(() => {
    return CbacMarkingRestrictionsObjects.get(client, {
      markingIds: stableMarkingIds,
      preview: true,
    });
  }, [client, stableMarkingIds]);

  const query = usePlatformQuery({
    query: handleQuery,
    enabled,
    queryName: "cbac-marking-restrictions",
  });

  const restrictions = React.useMemo(():
    | CbacMarkingRestrictionsData
    | undefined => {
    if (query.data == null) {
      return undefined;
    }
    return {
      disallowedMarkings: query.data.disallowedMarkings.map(String),
      impliedMarkings: query.data.impliedMarkings.map(String),
      requiredMarkings: query.data.requiredMarkings.map((group) =>
        group.map(String),
      ),
      userSatisfiesMarkings: query.data.userSatisfiesMarkings,
      isValid: query.data.isValid,
    };
  }, [query.data]);

  return {
    restrictions,
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
