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
  WhereClause,
} from "@osdk/api";
import type { ShapeDerivedLinkDef } from "@osdk/api/shapes-internal";
import type {
  LinkLoadConfig,
  LinkStatus,
  NullabilityViolation,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/unstable";
import { ShapeNullabilityError } from "@osdk/api/unstable";
import {
  applyShapeTransformations,
  applyShapeTransformationsToArray,
} from "@osdk/client/unstable-do-not-use";
import type {
  ObserveObjectCallbackArgs,
  ObserveObjectsCallbackArgs,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "../makeExternalStore.js";
import { OsdkContext2 } from "../OsdkContext2.js";
import { useStableValue } from "../shared/storeUtils.js";
import {
  createBatchedDerivedLinksStore,
  createEmptyBatchedDerivedLinksStore,
} from "./batchedDerivedLinksStore.js";
import {
  createDerivedLinksStore,
  createEmptyDerivedLinksStore,
} from "./derivedLinksStore.js";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface UseShapeResult<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  data: ShapeInstance<S> | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  droppedDueToNullability: boolean;
  nullabilityViolations: readonly NullabilityViolation[];
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => void;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}

export interface UseShapeListOptions<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  where?: WhereClause<ShapeBaseType<S>>;
  pageSize?: number;
  orderBy?: { [K in PropertyKeys<ShapeBaseType<S>>]?: "asc" | "desc" };
  autoFetchMore?: boolean | number;
  dedupeIntervalMs?: number;
  streamUpdates?: boolean;
  enabled?: boolean;
  links?: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkLoadConfig }>;
}

export type PerItemLinkStatus<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> = Map<
  string | number,
  Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>
>;

export interface UseShapeListResult<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  data: ShapeInstance<S>[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  fetchMore: (() => Promise<void>) | undefined;
  droppedCount: number;
  nullabilityViolations: readonly NullabilityViolation[];
  itemLinkStatus: PerItemLinkStatus<S>;
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (
    primaryKey: string | number,
    linkName: keyof ShapeDerivedLinks<S>,
  ) => void;
  retry: (
    primaryKey?: string | number,
    linkName?: keyof ShapeDerivedLinks<S>,
  ) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

export function useShapeSingle<
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
            mode: undefined,
            ...(selectProps.length > 0 ? { select: selectProps } : {}),
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

  const sourceObject = basePayload?.object as
    | Osdk.Instance<ShapeBaseType<S>>
    | undefined;

  const linksStore = React.useMemo(() => {
    if (
      !enabled || !sourceObject || shape.__derivedLinks.length === 0
    ) {
      return createEmptyDerivedLinksStore<S>();
    }
    return createDerivedLinksStore<S>(
      shape,
      sourceObject,
      observableClient,
      client,
      stableLinkConfig,
    );
  }, [
    enabled,
    // Use $primaryKey instead of sourceObject to avoid store recreation on same-PK re-renders
    sourceObject?.$primaryKey,
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
    // ShapeInstance<S> is a conditional type which TS can't spread directly
    return ({
      ...transformResult.data as Record<string, unknown>,
      ...linksPayload.links,
    }) as ShapeInstance<S>;
  }, [transformResult.data, linksPayload.links]);

  const invalidate = React.useCallback(
    (linkName?: keyof ShapeDerivedLinks<S>): void => {
      if (linkName) {
        const derivedLinks = shape
          .__derivedLinks as readonly ShapeDerivedLinkDef[];
        const linkDef = derivedLinks.find(l => l.name === linkName);
        if (linkDef) {
          void observableClient.invalidateObjectType(
            linkDef.targetShape.__baseTypeApiName,
          );
        }
      } else {
        void observableClient.invalidateObjectType(objectType);
      }
    },
    [observableClient, shape, objectType],
  );

  const baseLoading = enabled
    ? (basePayload?.status === "loading" || basePayload?.status === "init"
      || !basePayload)
    : false;

  return React.useMemo(() => {
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
  }, [
    dataWithLinks,
    basePayload,
    baseLoading,
    transformResult,
    linksPayload,
    linksStore,
    invalidate,
    shape,
  ]);
}

export function useShapeList<
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
  const objectType = shape.__baseType;
  const canonWhere = observableClient.canonicalizeWhereClause(where ?? {});
  const stableCanonWhere = React.useMemo(
    () => canonWhere,
    [JSON.stringify(canonWhere)],
  );

  const stableOrderBy = useStableValue(orderBy);
  const stableLinkConfig = useStableValue(linkConfig) as Partial<
    Record<string, LinkLoadConfig>
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
              where: stableCanonWhere,
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
      stableCanonWhere,
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

  const linksStore = React.useMemo(() => {
    if (!enabled || shape.__derivedLinks.length === 0) {
      return createEmptyBatchedDerivedLinksStore<S>();
    }
    return createBatchedDerivedLinksStore<S>(
      shape,
      shape.__derivedLinks as readonly ShapeDerivedLinkDef[],
      observableClient,
      client,
      stableLinkConfig,
    );
  }, [enabled, shape.__shapeId, observableClient, client, stableLinkConfig]);

  const prevSourceRef = React.useRef<{
    list: Osdk.Instance<ObjectOrInterfaceDefinition>[] | undefined;
    store: typeof linksStore;
  }>({ list: undefined, store: linksStore });
  if (
    payload?.resolvedList !== prevSourceRef.current.list
    || linksStore !== prevSourceRef.current.store
  ) {
    prevSourceRef.current = {
      list: payload?.resolvedList as
        | Osdk.Instance<ObjectOrInterfaceDefinition>[]
        | undefined,
      store: linksStore,
    };
    if (payload?.resolvedList) {
      linksStore.updateSourceObjects(
        payload.resolvedList as Osdk.Instance<ObjectOrInterfaceDefinition>[],
        transformResult.data,
      );
    }
  }

  const linksPayload = React.useSyncExternalStore(
    linksStore.subscribe,
    linksStore.getSnapshot,
  );

  const dataWithLinks = React.useMemo(() => {
    if (!transformResult.data.length || shape.__derivedLinks.length === 0) {
      return transformResult.data;
    }
    return transformResult.data.map(obj => {
      const pkLinks = linksPayload.linksBySourcePk.get(obj.$primaryKey);
      if (!pkLinks || Object.keys(pkLinks).length === 0) {
        return obj;
      }
      return ({
        ...obj as Record<string, unknown>,
        ...pkLinks,
      }) as ShapeInstance<S>;
    });
  }, [
    transformResult.data,
    linksPayload.linksBySourcePk,
    shape.__derivedLinks.length,
  ]);

  type LinkStatusMap = Partial<
    { [K in keyof ShapeDerivedLinks<S>]: LinkStatus }
  >;

  const itemLinkStatus = React.useMemo(() => {
    return linksPayload.linkStatusBySourcePk as Map<
      string | number,
      LinkStatusMap
    >;
  }, [linksPayload.linkStatusBySourcePk]);

  const linkStatus = React.useMemo(() => {
    return linksPayload.aggregatedLinkStatus as LinkStatusMap;
  }, [linksPayload.aggregatedLinkStatus]);

  const invalidate = React.useCallback(
    (linkName?: keyof ShapeDerivedLinks<S>): void => {
      if (linkName) {
        const derivedLinks = shape
          .__derivedLinks as readonly ShapeDerivedLinkDef[];
        const linkDef = derivedLinks.find(l => l.name === linkName);
        if (linkDef) {
          void observableClient.invalidateObjectType(
            linkDef.targetShape.__baseTypeApiName,
          );
        }
      } else {
        void observableClient.invalidateObjectType(objectType.apiName);
      }
    },
    [observableClient, shape, objectType.apiName],
  );

  const loadDeferred = React.useCallback(
    (
      pk: string | number,
      linkName: keyof ShapeDerivedLinks<S>,
    ) => {
      linksStore.loadDeferred(pk, String(linkName));
    },
    [linksStore],
  );

  const retry = React.useCallback(
    (
      pk?: string | number,
      linkName?: keyof ShapeDerivedLinks<S>,
    ) => {
      linksStore.retry(
        pk,
        linkName !== undefined ? String(linkName) : undefined,
      );
    },
    [linksStore],
  );

  const baseLoading = enabled
    ? (payload?.status === "loading" || payload?.status === "init" || !payload)
    : false;

  return React.useMemo(() => {
    let error: Error | undefined;
    if (payload && "error" in payload && payload.error) {
      error = payload.error;
    } else if (payload?.status === "error") {
      error = new Error("Failed to load objects");
    } else if (
      transformResult.violations.some((v) => v.constraint === "require")
    ) {
      error = new ShapeNullabilityError(shape, transformResult.violations);
    } else if (linksPayload.anyError) {
      for (const [, statuses] of linksPayload.linkStatusBySourcePk) {
        for (const [, status] of Object.entries(statuses)) {
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

    return {
      data: payload?.resolvedList ? dataWithLinks : undefined,
      isLoading: baseLoading || linksPayload.anyLoading,
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
  }, [
    dataWithLinks,
    payload,
    baseLoading,
    transformResult,
    linksPayload,
    itemLinkStatus,
    linkStatus,
    loadDeferred,
    retry,
    invalidate,
    shape,
  ]);
}
