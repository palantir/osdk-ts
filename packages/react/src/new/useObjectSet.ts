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

import type {
  DerivedPropertyCreator,
  LinkNames,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import { getWireObjectSet } from "@osdk/client/internal";
import React from "react";

export interface UseObjectSetOptions<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * Where clause for filtering
   */
  where?: WhereClause<Q>;

  /**
   * Derived properties to add to the object set
   */
  withProperties?: { [K in keyof RDPs]: DerivedPropertyCreator<Q, RDPs[K]> };

  /**
   * Object sets to union with
   */
  union?: ObjectSet<Q>[];

  /**
   * Object sets to intersect with
   */
  intersect?: ObjectSet<Q>[];

  /**
   * Object sets to subtract from
   */
  subtract?: ObjectSet<Q>[];

  /**
   * Link to pivot to (changes the type)
   */
  pivotTo?: LinkNames<Q>;

  /**
   * The preferred page size for the list
   */
  pageSize?: number;

  /**
   * Sort order for the results
   */
  orderBy?: {
    [K in PropertyKeys<Q>]?: "asc" | "desc";
  };
}

export interface UseObjectSetResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * The fetched data with derived properties
   */
  data:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined;

  /**
   * Whether data is currently being loaded
   */
  isLoading: boolean;

  /**
   * Any error that occurred during fetching
   */
  error: Error | undefined;

  /**
   * Function to fetch more pages (undefined if no more pages)
   */
  fetchMore: (() => Promise<void>) | undefined;

  /**
   * The final ObjectSet after all transformations
   */
  objectSet: ObjectSet<Q, RDPs>;
}

type ObjectSetQueryKey<Q extends ObjectOrInterfaceDefinition> = [
  string,
  {
    where?: any;
    withProperties?: string[];
    union?: string[];
    intersect?: string[];
    subtract?: string[];
    pivotTo?: string;
    pageSize?: number;
    orderBy?: {
      [K in PropertyKeys<Q>]?: "asc" | "desc";
    };
  },
];

function getQueryKey<
  Q extends ObjectOrInterfaceDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs>,
  options: UseObjectSetOptions<Q, RDPs>,
): ObjectSetQueryKey<Q> {
  const baseKey = JSON.stringify(getWireObjectSet(baseObjectSet as any));

  const optionsKey = {
    where: options.where,
    withProperties: options.withProperties
      ? Object.keys(options.withProperties).sort()
      : undefined,
    union: options.union?.map(os => JSON.stringify(getWireObjectSet(os))),
    intersect: options.intersect?.map(os =>
      JSON.stringify(getWireObjectSet(os))
    ),
    subtract: options.subtract?.map(os => JSON.stringify(getWireObjectSet(os))),
    pivotTo: options.pivotTo,
    pageSize: options.pageSize,
    orderBy: options.orderBy,
  };

  return [baseKey, optionsKey];
}

export function useObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef> = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs>,
  options: UseObjectSetOptions<Q, RDPs> = {},
): UseObjectSetResult<Q, RDPs> {
  const [data, setData] = React.useState<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
  >();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error>();
  const [nextPageToken, setNextPageToken] = React.useState<string>();
  const isMountedRef = React.useRef(true);

  const queryKey = React.useMemo(
    () => getQueryKey(baseObjectSet, options),
    [
      baseObjectSet,
      options.where,
      options.withProperties,
      options.union,
      options.intersect,
      options.subtract,
      options.pivotTo,
      options.pageSize,
      options.orderBy,
    ],
  );
  const serializedKey = React.useMemo(
    () => JSON.stringify(queryKey),
    [queryKey],
  );

  const finalObjectSet = React.useMemo(() => {
    let result: any = baseObjectSet;

    if (options.withProperties) {
      result = result.withProperties(options.withProperties);
    }
    if (options.where) {
      result = result.where(options.where);
    }
    if (options.union?.length) {
      result = result.union(...options.union);
    }
    if (options.intersect?.length) {
      result = result.intersect(...options.intersect);
    }
    if (options.subtract?.length) {
      result = result.subtract(...options.subtract);
    }
    if (options.pivotTo) {
      result = result.pivotTo(options.pivotTo);
    }

    return result as ObjectSet<Q, RDPs>;
  }, [serializedKey]);

  const fetcher = React.useCallback(async () => {
    const fetchArgs = {
      ...(options.pageSize && { $pageSize: options.pageSize }),
      ...(options.orderBy && { $orderBy: options.orderBy }),
    };

    return finalObjectSet.fetchPage(fetchArgs);
  }, [serializedKey]);

  React.useEffect(() => {
    isMountedRef.current = true;
    let cancelled = false;

    async function doFetch() {
      setIsLoading(true);
      setError(undefined);

      try {
        const result = await fetcher();

        if (!cancelled && isMountedRef.current) {
          setData(
            result.data as Osdk.Instance<
              Q,
              "$allBaseProperties",
              PropertyKeys<Q>,
              RDPs
            >[],
          );
          setNextPageToken(result.nextPageToken);
        }
      } catch (error) {
        if (!cancelled && isMountedRef.current) {
          setError(error instanceof Error ? error : new Error(String(error)));
        }
      } finally {
        if (!cancelled && isMountedRef.current) {
          setIsLoading(false);
        }
      }
    }

    void doFetch();

    return () => {
      cancelled = true;
      isMountedRef.current = false;
    };
  }, [serializedKey, fetcher]);

  const fetchMore = React.useCallback(async () => {
    if (!nextPageToken || isLoading) return;

    setIsLoading(true);
    try {
      const fetchArgs = {
        $nextPageToken: nextPageToken,
        ...(options.pageSize && { $pageSize: options.pageSize }),
        ...(options.orderBy && { $orderBy: options.orderBy }),
      };

      const result = await finalObjectSet.fetchPage(fetchArgs);

      if (isMountedRef.current) {
        setData(
          prev => [
            ...(prev || []),
            ...result.data as Osdk.Instance<
              Q,
              "$allBaseProperties",
              PropertyKeys<Q>,
              RDPs
            >[],
          ],
        );
        setNextPageToken(result.nextPageToken);
      }
    } catch (error) {
      if (isMountedRef.current) {
        setError(error instanceof Error ? error : new Error(String(error)));
      }
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [nextPageToken, isLoading, serializedKey]);

  return {
    data,
    isLoading,
    error,
    fetchMore: nextPageToken ? fetchMore : undefined,
    objectSet: finalObjectSet,
  };
}
