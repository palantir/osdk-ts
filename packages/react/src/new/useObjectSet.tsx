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

interface CacheEntry<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
  revalidate: () => Promise<void>;
}

interface ObjectSetCache {
  get(key: string): CacheEntry<any> | undefined;
  set(key: string, entry: CacheEntry<any>): void;
  subscribe(key: string, callback: () => void): () => void;
  invalidate(key: string): void;
  invalidateAll(): void;
  invalidateByPattern(pattern: (key: string) => boolean): void;
}

export const ObjectSetCacheContext: React.Context<ObjectSetCache | null> = React
  .createContext<ObjectSetCache | null>(null);

export function ObjectSetProvider(
  { children }: { children: React.ReactNode },
): React.JSX.Element {
  const cache = React.useRef(new Map<string, CacheEntry<any>>());
  const subscribers = React.useRef(new Map<string, Set<() => void>>());

  const cacheInterface: ObjectSetCache = React.useMemo(() => ({
    get: (key) => cache.current.get(key),
    set: (key, entry) => {
      cache.current.set(key, entry);
      subscribers.current.get(key)?.forEach(cb => cb());
    },
    subscribe: (key, callback) => {
      if (!subscribers.current.has(key)) {
        subscribers.current.set(key, new Set());
      }
      subscribers.current.get(key)!.add(callback);

      return () => {
        subscribers.current.get(key)?.delete(callback);
      };
    },
    invalidate: (key) => {
      const entry = cache.current.get(key);
      if (entry?.revalidate) {
        void entry.revalidate();
      }
    },
    invalidateAll: () => {
      for (const [_, entry] of cache.current) {
        if (entry?.revalidate) {
          void entry.revalidate();
        }
      }
    },
    invalidateByPattern: (pattern) => {
      for (const [key, entry] of cache.current) {
        if (pattern(key) && entry?.revalidate) {
          void entry.revalidate();
        }
      }
    },
  }), []);

  return (
    <ObjectSetCacheContext.Provider value={cacheInterface}>
      {children}
    </ObjectSetCacheContext.Provider>
  );
}

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

  /**
   * Minimum time between fetch requests in milliseconds (defaults to 2000ms)
   */
  dedupeIntervalMs?: number;
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

  /**
   * Function to revalidate/refetch the data
   */
  revalidate: () => Promise<void>;
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
    dedupeIntervalMs?: number;
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
    dedupeIntervalMs: options.dedupeIntervalMs,
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
  const cache = React.useContext(ObjectSetCacheContext);
  const [data, setData] = React.useState<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
  >();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error>();
  const [nextPageToken, setNextPageToken] = React.useState<string>();
  const isMountedRef = React.useRef(true);
  const lastFetchStartedRef = React.useRef<number>();
  const pendingFetchRef = React.useRef<Promise<void>>();

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
      options.dedupeIntervalMs,
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

    const result = await finalObjectSet.fetchPage(fetchArgs);
    return result.data as Osdk.Instance<
      Q,
      "$allBaseProperties",
      PropertyKeys<Q>,
      RDPs
    >[];
  }, [serializedKey]);

  const revalidate = React.useCallback(async () => {
    const dedupeInterval = options.dedupeIntervalMs ?? 2_000;
    if (
      lastFetchStartedRef.current
      && Date.now() - lastFetchStartedRef.current < dedupeInterval
    ) {
      return pendingFetchRef.current || Promise.resolve();
    }

    if (pendingFetchRef.current) {
      return pendingFetchRef.current;
    }

    lastFetchStartedRef.current = Date.now();

    const fetchPromise = (async () => {
      setIsLoading(true);
      setError(undefined);

      try {
        const result = await fetcher();

        if (isMountedRef.current) {
          setData(result);
          setNextPageToken(undefined);
        }
      } catch (err) {
        if (isMountedRef.current) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
        pendingFetchRef.current = undefined;
      }
    })();

    pendingFetchRef.current = fetchPromise;
    return fetchPromise;
  }, [fetcher, options.dedupeIntervalMs]);

  React.useEffect(() => {
    if (!cache) return;

    const entry: CacheEntry<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    > = {
      data,
      error,
      isLoading,
      revalidate,
    };

    cache.set(serializedKey, entry);
  }, [
    cache,
    serializedKey,
    data,
    error,
    isLoading,
    revalidate,
  ]);

  React.useEffect(() => {
    if (!cache) return;

    const unsubscribe = cache.subscribe(serializedKey, () => {
      const entry = cache.get(serializedKey);
      if (entry) {
        setData(entry.data);
        setError(entry.error);
        setIsLoading(entry.isLoading);
      }
    });

    return unsubscribe;
  }, [cache, serializedKey]);

  React.useEffect(() => {
    isMountedRef.current = true;

    if (cache) {
      const cached = cache.get(serializedKey);
      if (cached?.data) {
        setData(cached.data);
        setIsLoading(false);
        setError(cached.error);
        return;
      }
    }

    void revalidate();

    return () => {
      isMountedRef.current = false;
    };
  }, [serializedKey, cache, revalidate]);

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
        const newData = [
          ...(data || []),
          ...result.data as Osdk.Instance<
            Q,
            "$allBaseProperties",
            PropertyKeys<Q>,
            RDPs
          >[],
        ];
        setData(newData);
        setNextPageToken(result.nextPageToken);
      }
    } catch (err) {
      if (isMountedRef.current) {
        setError(err instanceof Error ? err : new Error(String(err)));
      }
    } finally {
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [nextPageToken, isLoading, data, serializedKey]);

  return {
    data,
    isLoading,
    error,
    fetchMore: nextPageToken ? fetchMore : undefined,
    objectSet: finalObjectSet,
    revalidate,
  };
}
