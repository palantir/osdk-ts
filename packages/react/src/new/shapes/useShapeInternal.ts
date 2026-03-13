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
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";
import type {
  LinkLoadConfig,
  LinkStatus,
  NullabilityViolation,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/shapes";
import { ShapeNullabilityError } from "@osdk/api/shapes";
import {
  applyShapeTransformations,
  applyShapeTransformationsToArray,
} from "@osdk/client/shapes";
import type {
  ObserveObjectCallbackArgs,
  ObserveObjectsCallbackArgs,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "../makeExternalStore.js";
import { OsdkContext2 } from "../OsdkContext2.js";
import { useStableValue } from "../shared/storeUtils.js";
import {
  type BatchedDerivedLinksStore,
  createBatchedDerivedLinksStore,
  createDerivedLinksStore,
  createEmptyDerivedLinksStore,
  type DerivedLinksPayload,
  type DerivedLinksStore,
  isBatchableLink,
} from "./executeDerivedLinks.js";
import type {
  UseShapeListOptions,
  UseShapeListResult,
  UseShapeResult,
} from "./useShape.js";

function classifyLinks(derivedLinks: readonly ShapeDerivedLinkDef[]): {
  batchable: ShapeDerivedLinkDef[];
  nonBatchable: ShapeDerivedLinkDef[];
} {
  const batchable: ShapeDerivedLinkDef[] = [];
  const nonBatchable: ShapeDerivedLinkDef[] = [];
  for (const linkDef of derivedLinks) {
    if (isBatchableLink(linkDef)) {
      batchable.push(linkDef);
    } else {
      nonBatchable.push(linkDef);
    }
  }
  return { batchable, nonBatchable };
}

/**
 * Internal hook implementation for loading a single object with a shape.
 * Used by useOsdkObject (with shape option).
 */
export function useShapeSingleInternal<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  primaryKey: PrimaryKeyType<ShapeBaseType<S>>,
  options?: {
    enabled?: boolean;
    links?: Partial<Record<string, LinkLoadConfig>> | undefined;
  },
): UseShapeResult<S> {
  const { enabled = true, links: linkConfig = {} } = options ?? {};
  const { observableClient, client } = React.useContext(OsdkContext2);
  // String needed for observeObject(objectType, pk)
  const objectType = shape.__baseTypeApiName;

  const selectProps = React.useMemo(
    () => Object.keys(shape.__props) as PropertyKeys<ShapeBaseType<S>>[],
    [shape.__props],
  );

  const baseStore = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectCallbackArgs<ShapeBaseType<S>>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `shape[${
              shape.__shapeId.slice(0, 8)
            }] ${objectType} ${primaryKey} [DISABLED]`
            : void 0,
        );
      }

      return makeExternalStore<ObserveObjectCallbackArgs<ShapeBaseType<S>>>(
        (observer) =>
          observableClient.observeObject(objectType, primaryKey, {
            select: selectProps,
          }, observer),
        process.env.NODE_ENV !== "production"
          ? `shape[${shape.__shapeId.slice(0, 8)}] ${objectType} ${primaryKey}`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      objectType,
      primaryKey,
      shape.__shapeId,
      selectProps,
    ],
  );

  const basePayload = React.useSyncExternalStore(
    baseStore.subscribe,
    baseStore.getSnapShot,
  );

  const transformResult = React.useMemo(() => {
    if (!basePayload?.object) {
      return {
        data: undefined,
        dropped: false,
        violations: [] as NullabilityViolation[],
      };
    }
    return applyShapeTransformations(
      shape,
      basePayload.object as Osdk.Instance<ShapeBaseType<S>>,
    );
  }, [shape, basePayload?.object]);

  const stableLinkConfig = useStableValue(linkConfig) as Partial<
    Record<keyof ShapeDerivedLinks<S>, LinkLoadConfig>
  >;

  const sourceObjectRef = React.useRef<
    Osdk.Instance<ShapeBaseType<S>> | undefined
  >(undefined);
  if (basePayload?.object) {
    sourceObjectRef.current = basePayload.object as Osdk.Instance<
      ShapeBaseType<S>
    >;
  }

  const linksStore = React.useMemo(() => {
    if (!enabled || !basePayload?.object || shape.__derivedLinks.length === 0) {
      return createEmptyDerivedLinksStore<S>();
    }
    return createDerivedLinksStore<S>(
      shape,
      sourceObjectRef.current as Osdk.Instance<ShapeBaseType<S>>,
      observableClient,
      client,
      stableLinkConfig,
    );
     
  }, [
    enabled,
    basePayload?.object?.$primaryKey,
    shape.__shapeId,
    observableClient,
    client,
    stableLinkConfig,
  ]);

  const linksPayload = React.useSyncExternalStore(
    linksStore.subscribe,
    linksStore.getSnapShot,
  );

  const dataWithLinks = React.useMemo(() => {
    if (!transformResult.data) {
      return undefined;
    }
    if (Object.keys(linksPayload.links).length === 0) {
      return transformResult.data;
    }
    return { ...transformResult.data, ...linksPayload.links } as ShapeInstance<
      S
    >;
  }, [transformResult.data, linksPayload.links]);

  let error: Error | undefined;
  if (basePayload && "error" in basePayload && basePayload.error) {
    error = basePayload.error;
  } else if (basePayload?.status === "error") {
    error = new Error("Failed to load object");
  } else if (
    transformResult.violations.some((v) => v.constraint === "require")
  ) {
    error = new ShapeNullabilityError(shape, transformResult.violations);
  } else if (linksPayload.anyError) {
    for (const [, status] of Object.entries(linksPayload.linkStatus)) {
      const ls = status as LinkStatus | undefined;
      if (ls?.error) {
        error = ls.error;
        break;
      }
    }
  }

  const invalidate = React.useCallback(
    (linkName?: keyof ShapeDerivedLinks<S>): void => {
      if (linkName) {
        const linkDef = shape.__derivedLinks.find(l => l.name === linkName);
        if (linkDef) {
          void observableClient.invalidateObjectType(
            linkDef.targetShape.__baseTypeApiName,
          );
        }
      } else {
        void observableClient.invalidateObjectType(objectType);
      }
    },
    [observableClient, shape.__shapeId, objectType],
  );

  const baseLoading = enabled
    ? (basePayload?.status === "loading" || basePayload?.status === "init"
      || !basePayload)
    : false;

  return {
    data: dataWithLinks,
    isLoading: baseLoading || linksPayload.anyLoading,
    isOptimistic: !!basePayload?.isOptimistic,
    error,
    droppedDueToNullability: transformResult.dropped,
    nullabilityViolations: transformResult.violations,
    linkStatus: linksPayload.linkStatus,
    loadDeferred: linksStore.loadDeferred,
    retry: linksStore.retry,
    invalidate,
  };
}

/**
 * Internal hook implementation for loading a list of objects with a shape.
 * Used by useOsdkObjects (with shape option).
 */
export function useShapeListInternal<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  options: UseShapeListOptions<S>,
): UseShapeListResult<S> {
  const {
    where,
    pageSize,
    orderBy,
    autoFetchMore,
    dedupeIntervalMs,
    streamUpdates,
    enabled = true,
    links: linkConfig = {},
  } = options;

  const { observableClient, client } = React.useContext(OsdkContext2);
  // Full object needed for observeList({ type: objectType })
  const objectType = shape.__baseType;
  const canonWhere = observableClient.canonicalizeWhereClause(where ?? {});

  const stableOrderBy = useStableValue(orderBy);
  const stableLinkConfig = useStableValue(linkConfig) as Partial<
    Record<keyof ShapeDerivedLinks<S>, LinkLoadConfig>
  >;

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectsCallbackArgs<ShapeBaseType<S>>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `shapeList[${
              shape.__shapeId.slice(0, 8)
            }] ${objectType.apiName} [DISABLED]`
            : void 0,
        );
      }

      return makeExternalStore<ObserveObjectsCallbackArgs<ShapeBaseType<S>>>(
        (observer) =>
          observableClient.observeList(
            {
              type: objectType,
              where: canonWhere,
              pageSize,
              orderBy: stableOrderBy,
              dedupeInterval: dedupeIntervalMs ?? 2_000,
              streamUpdates,
              autoFetchMore,
            },
            observer,
          ),
        process.env.NODE_ENV !== "production"
          ? `shapeList[${shape.__shapeId.slice(0, 8)}] ${objectType.apiName} ${
            JSON.stringify(canonWhere)
          }`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      objectType,
      canonWhere,
      pageSize,
      stableOrderBy,
      dedupeIntervalMs,
      streamUpdates,
      autoFetchMore,
      shape.__shapeId,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  const transformResult = React.useMemo(() => {
    if (!payload?.resolvedList) {
      return {
        data: [] as ShapeInstance<S>[],
        droppedCount: 0,
        violations: [] as NullabilityViolation[],
      };
    }
    return applyShapeTransformationsToArray(
      shape,
      payload.resolvedList as Osdk.Instance<ShapeBaseType<S>>[],
    );
  }, [shape, payload?.resolvedList]);

  const { batchable: batchableLinks, nonBatchable: nonBatchableLinks } = React
    .useMemo(
      () => classifyLinks(shape.__derivedLinks),
       
      [shape.__shapeId],
    );

  const hasBatchableLinks = batchableLinks.length > 0;
  const hasNonBatchableLinks = nonBatchableLinks.length > 0;

  const batchedStoreRef = React.useRef<BatchedDerivedLinksStore<S> | null>(
    null,
  );
  const [batchedLinksVersion, bumpBatchedVersion] = React.useReducer(
    (c: number) => c + 1,
    0,
  );

  React.useEffect(() => {
    if (!enabled || !hasBatchableLinks) {
      return;
    }
    const store = createBatchedDerivedLinksStore<S>(
      shape,
      batchableLinks,
      observableClient,
      client,
      stableLinkConfig as Partial<Record<string, LinkLoadConfig>>,
    );
    batchedStoreRef.current = store;
    bumpBatchedVersion();
    const unsubscribe = store.subscribe(bumpBatchedVersion);
    return () => {
      unsubscribe();
      store.destroy();
      batchedStoreRef.current = null;
    };
     
  }, [
    enabled,
    shape.__shapeId,
    observableClient,
    client,
    stableLinkConfig,
    hasBatchableLinks,
  ]);

  React.useEffect(() => {
    if (batchedStoreRef.current && payload?.resolvedList) {
      batchedStoreRef.current.updateSourceObjects(
        payload.resolvedList as Osdk.Instance<ObjectOrInterfaceDefinition>[],
      );
    }
  }, [payload?.resolvedList, hasBatchableLinks]);

  const nonBatchableShape = React.useMemo(() => {
    if (!hasNonBatchableLinks) {
      return null;
    }
    return {
      ...shape,
      __derivedLinks: nonBatchableLinks,
    } as S;
     
  }, [shape.__shapeId, hasNonBatchableLinks]);

  const linksStoresRef = React.useRef<
    Map<string | number, DerivedLinksStore<S>>
  >(new Map());
  const [linksVersion, bumpLinksVersion] = React.useReducer(
    (c: number) => c + 1,
    0,
  );

  React.useEffect(() => {
    if (
      !enabled || !hasNonBatchableLinks || !payload?.resolvedList
      || !nonBatchableShape
    ) {
      if (linksStoresRef.current.size > 0) {
        linksStoresRef.current.clear();
        bumpLinksVersion();
      }
      return;
    }

    const currentPks = new Set(
      transformResult.data.map(obj => obj.$primaryKey),
    );

    let storesRemoved = false;
    for (const pk of linksStoresRef.current.keys()) {
      if (!currentPks.has(pk)) {
        linksStoresRef.current.delete(pk);
        storesRemoved = true;
      }
    }

    const sourceObjectsByPk = new Map<
      string | number,
      Osdk.Instance<ShapeBaseType<S>>
    >();
    for (const obj of payload.resolvedList) {
      sourceObjectsByPk.set(
        obj.$primaryKey,
        obj as Osdk.Instance<ShapeBaseType<S>>,
      );
    }

    let storesCreated = false;
    for (const obj of transformResult.data) {
      const pk = obj.$primaryKey;
      if (!linksStoresRef.current.has(pk)) {
        const sourceObj = sourceObjectsByPk.get(pk);
        if (sourceObj) {
          linksStoresRef.current.set(
            pk,
            createDerivedLinksStore<S>(
              nonBatchableShape,
              sourceObj,
              observableClient,
              client,
              stableLinkConfig,
            ),
          );
          storesCreated = true;
        }
      }
    }

    if (storesCreated || storesRemoved) {
      bumpLinksVersion();
    }
  }, [
    enabled,
    hasNonBatchableLinks,
    nonBatchableShape,
    payload?.resolvedList,
    transformResult.data,
    observableClient,
    client,
    stableLinkConfig,
  ]);

  React.useEffect(() => {
    if (!hasNonBatchableLinks) {
      return;
    }
    const unsubscribes: (() => void)[] = [];
    for (const [, store] of linksStoresRef.current) {
      unsubscribes.push(store.subscribe(bumpLinksVersion));
    }
    return () => {
      for (const unsub of unsubscribes) unsub();
    };
  }, [linksVersion, hasNonBatchableLinks]);

  const itemLinksPayloads = React.useMemo(() => {
    const payloads = new Map<string | number, DerivedLinksPayload<S>>();
    const batchedSnapshot = batchedStoreRef.current?.getSnapshot();

    for (const obj of transformResult.data) {
      const pk = obj.$primaryKey;

      const batchedLinks = batchedSnapshot?.linksBySourcePk.get(pk) ?? {};
      const batchedStatuses = batchedSnapshot?.linkStatusBySourcePk.get(pk)
        ?? {};

      const perItemStore = linksStoresRef.current.get(pk);
      const perItemPayload = perItemStore?.getSnapShot();

      const mergedLinks: Record<
        string,
        ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
      > = {
        ...batchedLinks,
        ...(perItemPayload?.links ?? {}),
      };

      const mergedLinkStatus: Partial<
        { [K in keyof ShapeDerivedLinks<S>]: LinkStatus }
      > = {
        ...batchedStatuses,
        ...(perItemPayload?.linkStatus ?? {}),
      } as Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;

      let anyLoading = false;
      let anyError = false;
      for (const linkName of Object.keys(mergedLinkStatus)) {
        const s = mergedLinkStatus[linkName as keyof ShapeDerivedLinks<S>];
        if (s?.isLoading) {
          anyLoading = true;
        }
        if (s?.error) {
          anyError = true;
        }
      }

      payloads.set(pk, {
        links: mergedLinks,
        linkStatus: mergedLinkStatus,
        anyLoading,
        anyError,
      });
    }

    return payloads;
     
  }, [transformResult.data, linksVersion, batchedLinksVersion]);

  const dataWithLinks = React.useMemo(() => {
    if (!transformResult.data.length || shape.__derivedLinks.length === 0) {
      return transformResult.data;
    }
    return transformResult.data.map(obj => {
      const linksPayload = itemLinksPayloads.get(obj.$primaryKey);
      if (!linksPayload || Object.keys(linksPayload.links).length === 0) {
        return obj;
      }
      return { ...obj, ...linksPayload.links } as ShapeInstance<S>;
    });
  }, [transformResult.data, itemLinksPayloads, shape.__derivedLinks.length]);

  const itemLinkStatus = React.useMemo(() => {
    const statusMap = new Map<
      string | number,
      Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>
    >();
    for (const [pk, linksPayload] of itemLinksPayloads) {
      statusMap.set(pk, linksPayload.linkStatus);
    }
    return statusMap;
  }, [itemLinksPayloads]);

  const linkStatus = React.useMemo(() => {
    const aggregated: Partial<
      { [K in keyof ShapeDerivedLinks<S>]: LinkStatus }
    > = {};
    const batchedSnapshot = batchedStoreRef.current?.getSnapshot();

    for (const linkDef of shape.__derivedLinks) {
      const linkName = linkDef.name as keyof ShapeDerivedLinks<S>;

      const batchedAgg = batchedSnapshot?.aggregatedLinkStatus[linkDef.name];
      if (batchedAgg) {
        aggregated[linkName] = batchedAgg;
        continue;
      }

      let anyLoading = false, anyError: Error | undefined, anyHasMore = false;

      for (const [, lp] of itemLinksPayloads) {
        const status = lp.linkStatus[linkName];
        if (status?.isLoading) {
          anyLoading = true;
        }
        if (status?.error && !anyError) {
          anyError = status.error;
        }
        if (status?.hasMore) {
          anyHasMore = true;
        }
      }

      aggregated[linkName] = {
        isLoading: anyLoading,
        error: anyError,
        hasMore: anyHasMore,
        fetchMore: async () => {
          const promises: Promise<void>[] = [];
          for (const [pk] of itemLinksPayloads) {
            const store = linksStoresRef.current.get(pk);
            const status = store?.getSnapShot().linkStatus[linkName];
            if (status?.hasMore && status.fetchMore) {
              promises.push(status.fetchMore());
            }
          }
          await Promise.all(promises);
        },
      };
    }
    return aggregated;
     
  }, [itemLinksPayloads, shape.__shapeId, batchedLinksVersion]);

  const anyLinksLoading = React.useMemo(() => {
    for (const [, lp] of itemLinksPayloads) {
      if (lp.anyLoading) {
        return true;
      }
    }
    return false;
  }, [itemLinksPayloads]);

  let error: Error | undefined;
  if (payload && "error" in payload && payload.error) {
    error = payload.error;
  } else if (payload?.status === "error") {
    error = new Error("Failed to load objects");
  } else if (
    transformResult.violations.some((v) => v.constraint === "require")
  ) {
    error = new ShapeNullabilityError(shape, transformResult.violations);
  } else {
    for (const [, lp] of itemLinksPayloads) {
      if (lp.anyError) {
        for (const [, status] of Object.entries(lp.linkStatus)) {
          const ls = status as LinkStatus | undefined;
          if (ls?.error) {
            error = ls.error;
            break;
          }
        }
        if (error) {
          break;
        }
      }
    }
  }

  const loadDeferred = React.useCallback(
    async (
      primaryKeyArg: string | number,
      linkName: keyof ShapeDerivedLinks<S>,
    ): Promise<void> => {
      const batchedStore = batchedStoreRef.current;
      if (
        batchedStore && batchableLinks.some(l => l.name === String(linkName))
      ) {
        await batchedStore.loadDeferred(primaryKeyArg, String(linkName));
        return;
      }
      const store = linksStoresRef.current.get(primaryKeyArg);
      if (store) {
        await store.loadDeferred(linkName);
      }
    },
    [batchableLinks],
  );

  const retry = React.useCallback(
    (
      primaryKeyArg?: string | number,
      linkName?: keyof ShapeDerivedLinks<S>,
    ): void => {
      const linkNameStr = linkName !== undefined ? String(linkName) : undefined;
      const batchedStore = batchedStoreRef.current;

      if (batchedStore) {
        if (linkNameStr && batchableLinks.some(l => l.name === linkNameStr)) {
          batchedStore.retry(primaryKeyArg, linkNameStr);
          return;
        } else if (!linkNameStr) {
          batchedStore.retry(primaryKeyArg);
        }
      }

      if (primaryKeyArg !== undefined) {
        linksStoresRef.current.get(primaryKeyArg)?.retry(linkName);
      } else {
        for (const [, store] of linksStoresRef.current) {
          store.retry(linkName);
        }
      }
    },
    [batchableLinks],
  );

  const invalidate = React.useCallback(
    (linkName?: keyof ShapeDerivedLinks<S>): void => {
      if (linkName) {
        const linkDef = shape.__derivedLinks.find(l => l.name === linkName);
        if (linkDef) {
          void observableClient.invalidateObjectType(
            linkDef.targetShape.__baseTypeApiName,
          );
        }
      } else {
        void observableClient.invalidateObjectType(objectType.apiName);
      }
    },
    [observableClient, shape.__shapeId, objectType.apiName],
  );

  const baseLoading = enabled
    ? (payload?.status === "loading" || payload?.status === "init" || !payload)
    : false;

  return {
    data: payload?.resolvedList ? dataWithLinks : undefined,
    isLoading: baseLoading || anyLinksLoading,
    isOptimistic: payload?.isOptimistic ?? false,
    error,
    fetchMore: payload?.hasMore ? payload.fetchMore : undefined,
    droppedCount: transformResult.droppedCount,
    nullabilityViolations: transformResult.violations,
    itemLinkStatus,
    linkStatus,
    loadDeferred,
    retry,
    invalidate,
  };
}
