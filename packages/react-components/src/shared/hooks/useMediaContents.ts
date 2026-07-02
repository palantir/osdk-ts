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

import type { Media } from "@osdk/api";
import { useEffect, useRef, useState } from "react";

export interface UseMediaContentsResult<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
}

/**
 * Fetches media contents and transforms the response into the desired type.
 *
 * @param media - The OSDK Media object to fetch contents from
 * @param transform - Converts the fetch Response into the target type
 * @param cleanup - Optional cleanup function called when data is replaced or on unmount
 *                  (e.g., URL.revokeObjectURL for blob URLs)
 */
export function useMediaContents<T>(
  media: Media,
  transform: (response: Response) => Promise<T>,
  cleanup?: (data: T) => void
): UseMediaContentsResult<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const cleanupRef = useRef(cleanup);
  cleanupRef.current = cleanup;
  const dataRef = useRef<T | undefined>(undefined);
  dataRef.current = data;

  useEffect(
    function fetchMediaContents() {
      let cancelled = false;
      setLoading(true);
      setError(undefined);
      setData((prev) => {
        if (prev !== undefined) {
          cleanupRef.current?.(prev);
        }
        return undefined;
      });

      media
        .fetchContents()
        .then((response) => transform(response))
        .then((result) => {
          if (!cancelled) {
            setData(result);
            setLoading(false);
          } else {
            cleanupRef.current?.(result);
          }
        })
        .catch((err: unknown) => {
          if (!cancelled) {
            setError(err instanceof Error ? err : new Error(String(err)));
            setLoading(false);
          }
        });

      return () => {
        cancelled = true;
      };
    },
    [media, transform]
  );

  useEffect(() => {
    return () => {
      if (dataRef.current !== undefined) {
        cleanupRef.current?.(dataRef.current);
      }
    };
  }, []);

  return { data, loading, error };
}
