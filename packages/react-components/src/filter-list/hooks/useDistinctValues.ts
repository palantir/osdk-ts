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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import { useOsdkClient } from "@osdk/react/experimental";
import { useEffect, useState } from "react";

const MAX_DISTINCT_VALUES = 1000;
const PAGE_SIZE = 100;

interface UseDistinctValuesResult {
  values: string[];
  isLoading: boolean;
  error: Error | undefined;
}

export function useDistinctValues<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
>(
  objectType: Q,
  propertyKey: K,
): UseDistinctValuesResult {
  const client = useOsdkClient();
  const [values, setValues] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;

    async function fetchDistinctValues() {
      setIsLoading(true);
      setError(undefined);

      try {
        const objectSet = client(objectType);
        const distinctSet = new Set<string>();
        let hasMore = true;
        let nextPageToken: string | undefined;

        while (hasMore && distinctSet.size < MAX_DISTINCT_VALUES) {
          const page = await objectSet.fetchPage({
            $pageSize: PAGE_SIZE,
            $nextPageToken: nextPageToken,
            $select: [propertyKey] as [K],
          });

          if (cancelled) return;

          for (const obj of page.data) {
            const value = obj[propertyKey as keyof typeof obj];
            if (value != null && value !== "") {
              distinctSet.add(String(value));
            }
          }

          nextPageToken = page.nextPageToken;
          hasMore = !!nextPageToken;
        }

        const sortedValues = Array.from(distinctSet).sort((a, b) =>
          a.localeCompare(b)
        );
        setValues(sortedValues);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void fetchDistinctValues();

    return () => {
      cancelled = true;
    };
  }, [client, objectType, propertyKey]);

  return { values, isLoading, error };
}
