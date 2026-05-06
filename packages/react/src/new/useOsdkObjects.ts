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
  DerivedProperty,
  LinkedType,
  LinkNames,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type {
  InferShapeDefinition,
  InlineShapeConfig,
  LinkStatus,
  NullabilityViolation,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/unstable";
import { configToShapeDefinition } from "@osdk/api/unstable";
import type { ObserveObjectsCallbackArgs } from "@osdk/client/observable";
import React from "react";
import { extractPayloadError, isPayloadLoading } from "./hookUtils.js";
import { devToolsMetadata, makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext } from "./OsdkContext.js";
import type { PerItemLinkStatus } from "./shapes/useShape.js";
import { useShapeList } from "./shapes/useShape.js";

export interface UseOsdkObjectsOptions<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * Fetch objects by their RIDs (Resource Identifiers).
   * When provided, starts with a static objectset containing these RIDs.
   * Can be combined with `where` to filter the RID set, and with `orderBy` to sort results.
   *
   * @example
   * ```tsx
   * // Fetch specific objects by RID
   * useOsdkObjects(Employee, { rids: ['ri.foo.123', 'ri.foo.456'] });
   * ```
   *
   * @example
   * ```tsx
   * // Fetch specific objects by RID, filtered by status
   * useOsdkObjects(Employee, {
   *   rids: ['ri.foo.123', 'ri.foo.456', 'ri.foo.789'],
   *   where: { status: 'active' },
   * });
   * ```
   */
  rids?: readonly string[];

  /**
   * Standard OSDK Where clause with RDP support.
   * When used with `rids`, filters the RID set.
   * When used alone, filters all objects of the type.
   */
  where?: WhereClause<T, RDPs>;

  /**
   * Sort results by one or more properties.
   */
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };

  /**
   * The preferred page size for the list.
   */
  pageSize?: number;

  /**
   * Define derived properties (RDPs) to be computed server-side and attached to each object.
   * These properties will be available on the returned objects alongside their regular properties.
   */
  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<T, RDPs[K]> };

  /**
   * The number of milliseconds to wait after the last observed list change.
   *
   * Two uses of `useOsdkObjects` with the same parameters will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;

  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute. It will still
   * return any cached data, but will not fetch from the server.
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * Intersect the results with additional object sets.
   * Each element defines a where clause for an object set to intersect with.
   * The final result will only include objects that match ALL conditions.
   */
  intersectWith?: Array<{
    where: WhereClause<T, RDPs>;
  }>;

  /**
   * Pivot to related objects through a link.
   * This changes the return type from T to the linked object type.
   *
   * Cannot be combined with `streamUpdates`. The server does not support
   * websocket subscriptions for link-traversal queries.
   */
  pivotTo?: LinkNames<T>;

  /**
   * Causes the list to automatically fetch more as soon as the previous page
   * has been loaded. If a number is provided, it will continue to automatically
   * fetch more until the list is at least that long.
   *
   * - `true`: Fetch all available pages automatically
   * - `number`: Fetch pages until at least this many items are loaded
   * - `undefined` (default): Only fetch the first page, user must call fetchMore()
   */
  autoFetchMore?: boolean | number;

  /**
   * Enable streaming updates via websocket subscription.
   *
   * Cannot be combined with `pivotTo`. The server does not support
   * websocket subscriptions for link-traversal queries.
   */
  streamUpdates?: boolean;

  /**
   * Restrict which properties are returned for each object.
   * When provided, only the specified properties will be fetched,
   * reducing payload sizes for list views.
   *
   * @example
   * ```tsx
   * // Only fetch name and status properties
   * useOsdkObjects(Employee, { $select: ["name", "status"] });
   * ```
   */
  $select?: readonly PropertyKeys<T>[];

  /**
   * When true, loads per-property security metadata (marking requirements)
   * alongside each object. The returned objects will have `$propertySecurities`
   * populated with conjunctive/disjunctive marking requirements per property.
   */
  $loadPropertySecurityMetadata?: boolean;

  /**
   * When true, includes all properties of the underlying concrete object type
   * for interface queries. Has no effect for non-interface queries.
   */
  $includeAllBaseObjectProperties?: boolean;
}

export interface UseOsdkListResult<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  EXTRA_OPTIONS extends never | "$rid" = never,
> {
  /**
   * Function to fetch more pages (undefined if no more pages)
   */
  fetchMore: (() => Promise<void>) | undefined;

  /**
   * The fetched data with derived properties
   */
  data:
    | Osdk.Instance<
      T,
      "$allBaseProperties" | EXTRA_OPTIONS,
      PropertyKeys<T>,
      RDPs
    >[]
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
   * Refers to whether the ordered list of objects (only considering the $primaryKey)
   * is optimistic or not.
   *
   * If you need to know if the contents of the list are optimistic you can
   * do that on a per object basis with useOsdkObject
   */
  isOptimistic: boolean;

  /**
   * The total count of objects matching the query (if available from the API)
   */
  totalCount?: string;

  hasMore: boolean;

  objectSet: ObjectSet<T, RDPs> | undefined;

  refetch: () => Promise<void>;
}

export interface UseOsdkObjectsShapeResult<
  Q extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<Q>,
> {
  data: ShapeInstance<InferShapeDefinition<Q, C>>[] | undefined;
  shape: InferShapeDefinition<Q, C>;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  fetchMore: (() => Promise<void>) | undefined;
  droppedCount: number;
  nullabilityViolations: readonly NullabilityViolation[];
  itemLinkStatus: PerItemLinkStatus<InferShapeDefinition<Q, C>>;
  linkStatus: Partial<
    {
      [K in keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>]: LinkStatus;
    }
  >;
  loadDeferred: (
    primaryKey: string | number,
    linkName: keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>,
  ) => void;
  retry: (
    primaryKey?: string | number,
    linkName?: keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>,
  ) => void;
  invalidate: (
    linkName?: keyof ShapeDerivedLinks<InferShapeDefinition<Q, C>>,
  ) => void;
}

const EMPTY_WHERE = {};

// pivotTo overloads: streamUpdates is forbidden (the server does not support
// websocket subscriptions for link-traversal queries).
export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, {}> & {
    pivotTo: L;
    rids: readonly string[];
    streamUpdates?: never;
  },
): UseOsdkListResult<LinkedType<Q, L>, {}, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, {}> & {
    pivotTo: L;
    streamUpdates?: never;
    shape?: never;
  },
): UseOsdkListResult<LinkedType<Q, L>, {}>;

// Non-pivotTo overloads: pivotTo is forbidden to prevent fallthrough from the
// pivotTo overloads above (which would give the wrong return type).
export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, RDPs> & {
    rids: readonly string[];
    pivotTo?: never;
  },
): UseOsdkListResult<Q, RDPs, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  const C extends InlineShapeConfig<Q>,
>(
  type: Q,
  options:
    & Omit<
      UseOsdkObjectsOptions<Q>,
      "pivotTo" | "withProperties" | "rids" | "intersectWith"
    >
    & { shape: C; pivotTo?: never },
): UseOsdkObjectsShapeResult<Q, C>;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?:
    & UseOsdkObjectsOptions<Q, RDPs>
    & { pivotTo?: never },
): UseOsdkListResult<Q, RDPs>;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  C extends InlineShapeConfig<Q> = InlineShapeConfig<Q>,
>(
  type: Q,
  options?: UseOsdkObjectsOptions<Q, RDPs> & { shape?: C },
):
  | UseOsdkListResult<Q, RDPs>
  | UseOsdkListResult<Q, RDPs, "$rid">
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>>
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
  | UseOsdkObjectsShapeResult<Q, C>
{
  const hasShape = options !== undefined && "shape" in options
    && options.shape !== undefined;

  const modeRef = React.useRef(hasShape);
  if (modeRef.current !== hasShape) {
    throw new Error(
      "useOsdkObjects: cannot switch between shape/non-shape mode",
    );
  }

  if (hasShape) {
    return useOsdkObjectsWithShape(
      type,
      options as UseOsdkObjectsOptions<Q> & { shape: C },
    );
  }

  return useOsdkObjectsBase(type, options);
}

function useOsdkObjectsBase<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?: UseOsdkObjectsOptions<Q, RDPs>,
):
  | UseOsdkListResult<Q, RDPs>
  | UseOsdkListResult<Q, RDPs, "$rid">
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>, {}>
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
{
  const { observableClient } = React.useContext(OsdkContext);

  const {
    rids,
    pageSize,
    dedupeIntervalMs,
    withProperties,
    enabled = true,
    where,
    orderBy,
    streamUpdates,
    autoFetchMore,
    intersectWith,
    pivotTo,
    $select,
    $loadPropertySecurityMetadata,
    $includeAllBaseObjectProperties,
  } = options ?? {};

  const canonOptions = observableClient.canonicalizeOptions({
    where,
    withProperties,
    orderBy,
    intersectWith,
    $select,
  });

  const stableRids = React.useMemo(
    () => rids,
    [JSON.stringify(rids)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectsCallbackArgs<Q, RDPs>>(
          () => ({ unsubscribe: () => {} }),
          devToolsMetadata({
            hookType: "useOsdkObjects",
            objectType: type.apiName,
          }),
        );
      }

      return makeExternalStore<ObserveObjectsCallbackArgs<Q, RDPs>>(
        (observer) =>
          observableClient.observeList<Q, RDPs>({
            type,
            rids: stableRids,
            where: canonOptions.where,
            dedupeInterval: dedupeIntervalMs ?? 2_000,
            pageSize,
            orderBy: canonOptions.orderBy,
            streamUpdates,
            withProperties: canonOptions.withProperties,
            autoFetchMore,
            $includeAllBaseObjectProperties,
            ...(canonOptions.intersectWith
              ? { intersectWith: canonOptions.intersectWith }
              : {}),
            ...(pivotTo ? { pivotTo } : {}),
            ...(canonOptions.$select ? { select: canonOptions.$select } : {}),
            ...($loadPropertySecurityMetadata
              ? { $loadPropertySecurityMetadata }
              : {}),
          }, observer),
        devToolsMetadata({
          hookType: "useOsdkObjects",
          objectType: type.apiName,
          where: canonOptions.where,
          orderBy: canonOptions.orderBy,
          pageSize,
        }),
      );
    },
    [
      enabled,
      observableClient,
      type.apiName,
      type.type,
      stableRids,
      canonOptions.where,
      dedupeIntervalMs,
      pageSize,
      canonOptions.orderBy,
      streamUpdates,
      canonOptions.withProperties,
      autoFetchMore,
      canonOptions.intersectWith,
      pivotTo,
      canonOptions.$select,
      $loadPropertySecurityMetadata,
      $includeAllBaseObjectProperties,
    ],
  );

  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);

  const refetch = React.useCallback(async () => {
    await observableClient.invalidateObjectType(type.apiName);
  }, [observableClient, type.apiName]);

  return React.useMemo<UseOsdkListResult<Q, RDPs>>(
    () => ({
      fetchMore: listPayload?.hasMore ? listPayload.fetchMore : undefined,
      error: extractPayloadError(listPayload, "Failed to load objects"),
      data: listPayload?.resolvedList,
      isLoading: isPayloadLoading(listPayload, enabled),
      isOptimistic: listPayload?.isOptimistic ?? false,
      totalCount: listPayload?.totalCount,
      hasMore: listPayload?.hasMore ?? false,
      objectSet: listPayload?.objectSet,
      refetch,
    }),
    [listPayload, enabled, refetch],
  );
}

function useOsdkObjectsWithShape<
  Q extends ObjectOrInterfaceDefinition,
  C extends InlineShapeConfig<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q> & { shape: C },
): UseOsdkObjectsShapeResult<Q, C> {
  type S = InferShapeDefinition<Q, C>;

  const configRef = React.useRef(options.shape);
  const shapeDef = React.useMemo(
    () => configToShapeDefinition(type, configRef.current),
    [type],
  ) as S;

  const result = useShapeList(
    shapeDef as ShapeDefinition<Q>,
    {
      where: options.where,
      pageSize: options.pageSize,
      orderBy: options.orderBy,
      autoFetchMore: options.autoFetchMore,
      dedupeIntervalMs: options.dedupeIntervalMs,
      streamUpdates: options.streamUpdates,
      enabled: options.enabled,
      links: undefined,
    },
  );

  return {
    data: result.data as ShapeInstance<S>[] | undefined,
    shape: shapeDef,
    isLoading: result.isLoading,
    error: result.error,
    isOptimistic: result.isOptimistic,
    fetchMore: result.fetchMore,
    droppedCount: result.droppedCount,
    nullabilityViolations: result.nullabilityViolations,
    itemLinkStatus: result.itemLinkStatus as PerItemLinkStatus<S>,
    linkStatus: result.linkStatus as UseOsdkObjectsShapeResult<
      Q,
      C
    >["linkStatus"],
    loadDeferred: result.loadDeferred as UseOsdkObjectsShapeResult<
      Q,
      C
    >["loadDeferred"],
    retry: result.retry as UseOsdkObjectsShapeResult<Q, C>["retry"],
    invalidate: result.invalidate as UseOsdkObjectsShapeResult<
      Q,
      C
    >["invalidate"],
  };
}
