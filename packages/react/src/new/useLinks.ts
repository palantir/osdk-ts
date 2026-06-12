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
  LinkDef,
  LinkedType,
  LinkHopDescriptor,
  LinkNames,
  LinkTraversal,
  ObjectOrInterfaceDefinition,
  ObjectRef,
  Path,
  RecursiveTraversal,
} from "@osdk/api";
import { hashTraversal, ObjectRefMap } from "@osdk/api";
import type { Osdk, PropertyKeys, WhereClause } from "@osdk/client";
import type {
  ObservableClient,
  ObserveLinkClosure,
  ObserveLinks,
  ObservePath,
} from "@osdk/client/observable";
import React from "react";
import { extractPayloadError, isPayloadLoading } from "./hookUtils.js";
import { devToolsMetadata, makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext } from "./OsdkContext.js";
import type { ResolveToObjectTypeOption } from "./useOsdkObjects.js";

export type UseLinksOptions<
  T extends ObjectOrInterfaceDefinition,
> =
  & UseLinksBaseOptions<T>
  & ResolveToObjectTypeOption<T>;

interface UseLinksBaseOptions<
  T extends ObjectOrInterfaceDefinition,
> {
  /**
   * Standard OSDK Where clause for filtering linked objects
   */
  where?: WhereClause<T>;

  /**
   * The preferred page size for the links list.
   */
  pageSize?: number;

  /** Sorting options for the linked objects */
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };

  /**
   * Restrict which properties are returned for each linked object.
   * When provided, only the specified properties will be fetched,
   * reducing payload sizes for list views.
   */
  $select?: readonly PropertyKeys<T>[];

  /**
   * The mode to use for fetching data.
   * - undefined: Fetch data if not already in cache
   * - "force": Always fetch fresh data
   * - "offline": Only use cached data, don't make network requests
   */
  mode?: "force" | "offline";

  /**
   * The number of milliseconds to wait after the last observed link change.
   *
   * Two uses of `useLinks` with the same parameters will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;

  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute. It will still
   * return any cached data, but will not fetch from the server.
   *
   * This is useful for:
   * - Lazy/on-demand queries that should wait for user interaction
   * - Dependent queries that need data from another query first
   * - Conditional queries based on component state
   *
   * @default true
   * @example
   * ```tsx
   * // Dependent query - wait for employee data
   * const { object: employee } = useOsdkObject(Employee, employeeId);
   * const { links: reports } = useLinks(employee, "reports", {
   *   enabled: !!employee,
   * });
   * ```
   */
  enabled?: boolean;

  /**
   * When true, includes all properties of the underlying concrete object type
   * for interface link targets. Has no effect when the link target is a plain
   * object type.
   */
  $includeAllBaseObjectProperties?: boolean;
}

export interface UseLinksResult<Q extends ObjectOrInterfaceDefinition> {
  links: Osdk.Instance<Q, "$allBaseProperties">[] | undefined;

  /**
   * Maps each source object's primary key to its linked object instances.
   * Useful when observing links from multiple source objects to determine
   * which source links to which targets.
   */
  linkedObjectsBySourcePrimaryKey: ReadonlyMap<
    string | number,
    ReadonlyArray<Osdk.Instance<Q, "$allBaseProperties">>
  >;

  isLoading: boolean;
  error: Error | undefined;

  /**
   * Refers to whether the links are optimistic or not.
   */
  isOptimistic: boolean;

  /**
   * Fetch more linked objects if pagination is supported
   */
  fetchMore: (() => Promise<unknown>) | undefined;

  /**
   * Indicates if there are more linked objects available to fetch
   */
  hasMore: boolean;
}

/**
 * Options accepted by the token overloads of {@link useLinks}. Filtering and
 * ordering live on the token itself (via `.where(...)` / `.orderBy(...)`), so
 * only runtime knobs are configured here.
 */
export interface UseLinkTokenOptions {
  /** The preferred page size for the linked objects list. */
  pageSize?: number;

  /**
   * The mode to use for fetching data.
   * - undefined: Fetch data if not already in cache
   * - "force": Always fetch fresh data
   * - "offline": Only use cached data, don't make network requests
   */
  mode?: "force" | "offline";

  /**
   * The number of milliseconds to wait after the last observed link change.
   */
  dedupeIntervalMs?: number;

  /**
   * Enable or disable the query. When `false`, the query will not automatically
   * execute, returning cached data without fetching from the server.
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * When true, includes all properties of the underlying concrete object type
   * for interface link targets. Has no effect when the link target is a plain
   * object type.
   */
  $includeAllBaseObjectProperties?: boolean;

  /**
   * When traversing an interface link target, return the full concrete object
   * type instances instead of interface views. Has no effect when the link
   * target is already an object type.
   */
  resolveToObjectType?: boolean;
}

/**
 * Result of a cardinality `"one"` token traversal.
 *
 * `data` distinguishes three states: `undefined` while loading, `null` when the
 * link is definitively absent, and the object instance when present.
 */
export interface UseLinkOneResult<T extends ObjectOrInterfaceDefinition> {
  data: Osdk.Instance<T, "$allBaseProperties"> | null | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
}

/**
 * Result of a cardinality `"many"` token traversal.
 *
 * `data` is the list of linked instances, or `undefined` while loading.
 */
export interface UseLinkManyResult<T extends ObjectOrInterfaceDefinition> {
  data: Osdk.Instance<T, "$allBaseProperties">[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  fetchMore: (() => Promise<unknown>) | undefined;
  hasMore: boolean;

  /**
   * Maps each source object's {@link ObjectRef} to its linked object instances.
   * Present when observing a `"many"` link; useful when observing links from
   * multiple source objects to determine which source links to which targets.
   */
  bySource?: ObjectRefMap<
    ReadonlyArray<Osdk.Instance<T, "$allBaseProperties">>
  >;
}

/**
 * Result of a recursive token traversal (`Type.links.X.recursive({...})`).
 *
 * The closure is streamed: `data` is the flat, deduped, root-excluded discovery
 * order, growing one BFS level at a time. `adjacency` and `byDepth` describe the
 * shape (a tree view is derived in a later work-stream), `frontier` lists nodes
 * with potentially-unexpanded children, and `expand(ref)` extends the closure
 * from one already-discovered node.
 */
export interface UseLinkClosureResult<T extends ObjectOrInterfaceDefinition> {
  data: Osdk.Instance<T, "$allBaseProperties">[];
  /** parent -> children, including back-edges to already-visited nodes. */
  adjacency: ObjectRefMap<ObjectRef[]>;
  /** depth (root = 0) of every discovered node. */
  byDepth: ObjectRefMap<number>;
  /** nodes with potentially-unexpanded children. */
  frontier: ObjectRef[];
  /** deepest level reached so far. */
  depthReached: number;
  /** true while a level is still being expanded. */
  isExpanding: boolean;
  truncated: { byDepth: boolean; byNodeBudget: boolean };
  /** extend the closure from one already-discovered node. */
  expand: (ref: ObjectRef) => void;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
}

/**
 * Payload surfaced by the external store backing {@link useLinks}. The string
 * and `"one"`/`"many"` token paths emit {@link ObserveLinks.CallbackArgs}; the
 * recursive token path emits {@link ObserveLinkClosure.CallbackArgs}.
 */
type LinksStorePayload =
  | ObserveLinks.CallbackArgs<ObjectOrInterfaceDefinition>
  | ObserveLinkClosure.CallbackArgs<ObjectOrInterfaceDefinition>
  | ObservePath.CallbackArgs<ObjectOrInterfaceDefinition>;

const emptyArray = Object.freeze([]);
const emptyMap: ReadonlyMap<string | number, ReadonlyArray<never>> = new Map();
const emptyAdjacency: ObjectRefMap<ObjectRef[]> = new ObjectRefMap();
const emptyByDepth: ObjectRefMap<number> = new ObjectRefMap();
const defaultTruncated = Object.freeze({
  byDepth: false,
  byNodeBudget: false,
});
const noopExpand = (_ref: ObjectRef): void => {};
const emptyBySource: ObjectRefMap<
  ReadonlyArray<
    Osdk.Instance<ObjectOrInterfaceDefinition, "$allBaseProperties">
  >
> = new ObjectRefMap();

interface ObserveLinksOptionInputs {
  linkName: string;
  where: object | undefined;
  orderBy: Record<string, "asc" | "desc" | undefined> | undefined;
  $select: readonly string[] | undefined;
  pageSize: number | undefined;
  mode: "force" | "offline" | undefined;
  dedupeIntervalMs: number | undefined;
  $includeAllBaseObjectProperties: boolean | undefined;
  resolveToObjectType: boolean | undefined;
}

/**
 * Canonicalizes the where/orderBy/$select inputs via the observable client and
 * assembles the options object passed to `observeLinks`. Shared by both the
 * legacy string path and the token path so they canonicalize identically.
 */
function buildObserveLinksOptions(
  observableClient: ObservableClient,
  inputs: ObserveLinksOptionInputs,
): {
  linkName: string;
  where: object | undefined;
  pageSize: number | undefined;
  orderBy: Record<string, "asc" | "desc" | undefined> | undefined;
  mode: "force" | "offline" | undefined;
  dedupeInterval: number;
  $includeAllBaseObjectProperties: boolean | undefined;
  resolveToObjectType: boolean | undefined;
  select?: readonly string[];
} {
  const canon = observableClient.canonicalizeOptions({
    where: inputs.where,
    orderBy: inputs.orderBy,
    $select: inputs.$select,
  });
  return {
    linkName: inputs.linkName,
    where: canon.where,
    pageSize: inputs.pageSize,
    orderBy: canon.orderBy,
    mode: inputs.mode,
    dedupeInterval: inputs.dedupeIntervalMs ?? 2_000,
    $includeAllBaseObjectProperties: inputs.$includeAllBaseObjectProperties,
    resolveToObjectType: inputs.resolveToObjectType,
    ...(canon.$select ? { select: canon.$select } : {}),
  };
}

function orderByFromDescriptor(
  hop: LinkHopDescriptor | undefined,
): Record<string, "asc" | "desc" | undefined> | undefined {
  if (hop?.orderBy == null) {
    return undefined;
  }
  const result: Record<string, "asc" | "desc"> = {};
  for (const entry of hop.orderBy) {
    result[entry.property] = entry.direction;
  }
  return result;
}

/**
 * Hook to observe the recursive closure of a self-referential link from a
 * source object using a `Type.links.<name>.recursive({...})` token. The closure
 * streams: `data` grows one BFS level at a time. Must be declared before the
 * `"many"` overload because a {@link RecursiveTraversal} structurally satisfies
 * `LinkTraversal<S, T, "many">`.
 */
export function useLinks<
  S extends ObjectOrInterfaceDefinition,
  T extends ObjectOrInterfaceDefinition,
>(
  source: Osdk.Instance<S> | undefined,
  link: RecursiveTraversal<S, T>,
  options?: UseLinkTokenOptions,
): UseLinkClosureResult<T>;
/**
 * Hook to observe a multi-hop `.then()` path traversal whose every hop is
 * cardinality `"one"`. The deduped endpoint resolves to the one-shape: `data`
 * is `undefined` while loading, `null` when the path is definitively empty, and
 * the endpoint instance when present.
 */
export function useLinks<
  S extends ObjectOrInterfaceDefinition,
  T extends ObjectOrInterfaceDefinition,
>(
  source: Osdk.Instance<S> | undefined,
  link: Path<S, T, "one">,
  options?: UseLinkTokenOptions,
): UseLinkOneResult<T>;
/**
 * Hook to observe a cardinality `"one"` link from a source object using a
 * generated `Type.links.<name>` token. `data` is `undefined` while loading,
 * `null` when the link is definitively absent, and the linked instance when
 * present.
 */
export function useLinks<
  S extends ObjectOrInterfaceDefinition,
  T extends ObjectOrInterfaceDefinition,
>(
  source: Osdk.Instance<S> | undefined,
  link: LinkDef<S, T, "one">,
  options?: UseLinkTokenOptions,
): UseLinkOneResult<T>;
/**
 * Hook to observe a cardinality `"many"` link or traversal from a source
 * object using a generated `Type.links.<name>` token. `data` is the list of
 * linked instances, or `undefined` while loading.
 */
export function useLinks<
  S extends ObjectOrInterfaceDefinition,
  T extends ObjectOrInterfaceDefinition,
>(
  source: Osdk.Instance<S> | undefined,
  link: LinkDef<S, T, "many"> | LinkTraversal<S, T, "many">,
  options?: UseLinkTokenOptions,
): UseLinkManyResult<T>;
/**
 * Hook to observe a cardinality `"many"` link or traversal from multiple source
 * objects using a generated `Type.links.<name>` token. In addition to the
 * deduped, flattened `data` list, the result exposes `bySource`, an
 * {@link ObjectRefMap} keyed by each source object's `ObjectRef`, mapping it to
 * the linked instances reachable from that source.
 */
export function useLinks<
  S extends ObjectOrInterfaceDefinition,
  T extends ObjectOrInterfaceDefinition,
>(
  sources: ReadonlyArray<Osdk.Instance<S>> | undefined,
  link: LinkDef<S, T, "many"> | LinkTraversal<S, T, "many">,
  options?: UseLinkTokenOptions,
): UseLinkManyResult<T> & {
  bySource: ObjectRefMap<ReadonlyArray<Osdk.Instance<T, "$allBaseProperties">>>;
};
/**
 * Hook to observe links from an object or array of objects.
 *
 * @param objects The source object(s) to observe links from
 * @param linkName The name of the link to observe
 * @param options Optional configuration for the link query
 * @returns UseLinksResult with links data and metadata
 */
export function useLinks<
  T extends ObjectOrInterfaceDefinition,
  L extends LinkNames<T>,
>(
  objects: Osdk.Instance<T> | Array<Osdk.Instance<T>> | undefined,
  linkName: L,
  options?: UseLinksOptions<LinkedType<T, L>>,
): UseLinksResult<LinkedType<T, L>>;
export function useLinks(
  objects:
    | Osdk.Instance<ObjectOrInterfaceDefinition>
    | ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>
    | undefined,
  link:
    | string
    | LinkTraversal<
      ObjectOrInterfaceDefinition,
      ObjectOrInterfaceDefinition,
      "one" | "many"
    >,
  options:
    & UseLinksBaseOptions<ObjectOrInterfaceDefinition>
    & { resolveToObjectType?: boolean } = {},
):
  | UseLinksResult<ObjectOrInterfaceDefinition>
  | UseLinkOneResult<ObjectOrInterfaceDefinition>
  | UseLinkManyResult<ObjectOrInterfaceDefinition>
  | UseLinkClosureResult<ObjectOrInterfaceDefinition>
{
  const { observableClient } = React.useContext(OsdkContext);

  const isToken = typeof link !== "string";
  const descriptor = typeof link === "string" ? undefined : link.__descriptor;
  // Token descriptors rebuild their hops/recursive objects every render, so key
  // the subscription off a structural hash rather than object identity.
  const descriptorHash = descriptor === undefined
    ? undefined
    : hashTraversal(descriptor);
  const hop = descriptor?.hops[0];
  const recursive = descriptor?.kind === "recursive"
    ? descriptor.recursive
    : undefined;
  const pathHops = descriptor?.kind === "path" ? descriptor.hops : undefined;
  const allHopsOne = pathHops?.every((h) => !h.multiplicity) ?? false;
  // The token recreates its `hops` array each render, so key the subscription
  // off the hops' stable content rather than the array's identity.
  const pathHopsKey = pathHops === undefined
    ? ""
    : JSON.stringify(pathHops);
  const cardinality: "one" | "many" | undefined = hop === undefined
    ? undefined
    : hop.multiplicity
    ? "many"
    : "one";
  const linkName = typeof link === "string"
    ? link
    : link.__descriptor.hops[0].linkApiName;

  const {
    enabled = true,
    $includeAllBaseObjectProperties,
    resolveToObjectType,
    ...otherOptions
  } = options;

  const observeOptionInputs: ObserveLinksOptionInputs = {
    linkName,
    mode: otherOptions.mode,
    dedupeIntervalMs: otherOptions.dedupeIntervalMs,
    $includeAllBaseObjectProperties,
    resolveToObjectType,
    // Token traversals carry where/orderBy/limit on the descriptor; the string
    // path reads them off the options object instead.
    ...(isToken
      ? {
        where: hop?.where,
        orderBy: orderByFromDescriptor(hop),
        $select: undefined,
        pageSize: otherOptions.pageSize ?? hop?.limit,
      }
      : {
        where: otherOptions.where,
        orderBy: otherOptions.orderBy,
        $select: otherOptions.$select,
        pageSize: otherOptions.pageSize,
      }),
  };

  // The recursive path drives a client-side BFS via observeLinkClosure and does
  // not go through link-list canonicalization, so skip it (and its
  // canonicalizeOptions call) entirely when a recursive token is supplied.
  const observeOptions = (recursive !== undefined || pathHops !== undefined)
    ? undefined
    : buildObserveLinksOptions(observableClient, observeOptionInputs);

  const objectsKey = React.useMemo(() => {
    if (objects === undefined) return "";
    const arr = Array.isArray(objects) ? objects : [objects];
    return arr.map(obj => `${obj.$apiName}:${obj.$primaryKey}`).join(",");
  }, [objects]);

  // Convert single object to array for consistent handling
  const objectsArray: ReadonlyArray<
    Osdk.Instance<ObjectOrInterfaceDefinition>
  > = React.useMemo(() => {
    return objects === undefined
      ? emptyArray
      : Array.isArray(objects)
      ? objects
      : [objects];
  }, [objectsKey, objects]);

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      const source = objectsArray[0];
      const metadata = devToolsMetadata({
        hookType: "useLinks",
        sourceObjectType: source?.$apiName,
        linkName,
      });

      if (recursive !== undefined && hop !== undefined) {
        if (!enabled || source === undefined) {
          return makeExternalStore<LinksStorePayload>(
            () => ({ unsubscribe: () => {} }),
            metadata,
          );
        }
        const root: ObjectRef = {
          $objectType: source.$objectType,
          $primaryKey: source.$primaryKey,
        };
        return makeExternalStore<LinksStorePayload>(
          (observer) =>
            observableClient.observeLinkClosure(
              {
                root,
                hop,
                maxDepth: recursive.maxDepth,
                maxNodes: recursive.maxNodes,
              },
              observer,
            ),
          metadata,
        );
      }

      if (pathHops !== undefined) {
        if (!enabled || source === undefined) {
          return makeExternalStore<LinksStorePayload>(
            () => ({ unsubscribe: () => {} }),
            metadata,
          );
        }
        const root: ObjectRef = {
          $objectType: source.$objectType,
          $primaryKey: source.$primaryKey,
        };
        return makeExternalStore<LinksStorePayload>(
          (observer) =>
            observableClient.observePath({ root, hops: pathHops }, observer),
          metadata,
        );
      }

      if (!enabled || observeOptions === undefined) {
        return makeExternalStore<LinksStorePayload>(
          () => ({ unsubscribe: () => {} }),
          metadata,
        );
      }
      return makeExternalStore<LinksStorePayload>(
        (observer) =>
          observableClient.observeLinks(
            objectsArray,
            linkName,
            observeOptions,
            observer,
          ),
        metadata,
      );
    },
    [
      enabled,
      observableClient,
      objectsArray,
      objectsKey,
      linkName,
      // Token path: structural hash covers hops/where/orderBy/recursive/path.
      descriptorHash,
      // String path keeps keying off the canonicalized option identities; for
      // the token path these derive from the descriptor and are folded into the
      // hash above, so they must not force a resubscribe on every render.
      isToken ? undefined : observeOptions?.where,
      observeOptions?.pageSize,
      isToken ? undefined : observeOptions?.orderBy,
      observeOptions?.mode,
      observeOptions?.dedupeInterval,
      observeOptions?.select,
      $includeAllBaseObjectProperties,
      !!resolveToObjectType,
    ],
  );

  const payload = React.useSyncExternalStore(
    subscribe,
    getSnapShot,
  );

  return React.useMemo(() => {
    const isLoading = isPayloadLoading(payload, enabled);
    const error = extractPayloadError(payload, "Failed to load links");
    const isOptimistic = payload?.isOptimistic ?? false;

    if (recursive !== undefined) {
      const closure = payload as
        | ObserveLinkClosure.CallbackArgs<ObjectOrInterfaceDefinition>
        | undefined;
      return {
        data: closure?.data ?? [],
        adjacency: closure?.adjacency ?? emptyAdjacency,
        byDepth: closure?.byDepth ?? emptyByDepth,
        frontier: closure?.frontier ?? [],
        depthReached: closure?.depthReached ?? 0,
        isExpanding: closure?.isExpanding ?? false,
        truncated: closure?.truncated ?? defaultTruncated,
        expand: closure?.expand ?? noopExpand,
        isLoading,
        error,
        isOptimistic,
      };
    }

    if (pathHops !== undefined) {
      const pathPayload = payload as
        | ObservePath.CallbackArgs<ObjectOrInterfaceDefinition>
        | undefined;
      if (allHopsOne) {
        return {
          data: pathPayload?.data === undefined
            ? undefined
            : (pathPayload.data[0] ?? null),
          isLoading,
          error,
          isOptimistic,
        };
      }
      return {
        data: pathPayload?.data,
        isLoading,
        error,
        isOptimistic,
        fetchMore: undefined,
        hasMore: false,
      };
    }

    const linksPayload = payload as
      | ObserveLinks.CallbackArgs<ObjectOrInterfaceDefinition>
      | undefined;

    if (cardinality === "one") {
      return {
        data: linksPayload?.resolvedList === undefined
          ? undefined
          : (linksPayload.resolvedList[0] ?? null),
        isLoading,
        error,
        isOptimistic,
      };
    }

    if (cardinality === "many") {
      return {
        data: linksPayload?.resolvedList,
        isLoading,
        error,
        isOptimistic,
        fetchMore: linksPayload?.hasMore ? linksPayload?.fetchMore : undefined,
        hasMore: linksPayload?.hasMore ?? false,
        bySource: linksPayload?.linkedObjectsBySource ?? emptyBySource,
      };
    }

    return {
      links: linksPayload?.resolvedList,
      linkedObjectsBySourcePrimaryKey:
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- legacy result surface intentionally mirrors the deprecated payload alias
        linksPayload?.linkedObjectsBySourcePrimaryKey ?? emptyMap,
      isLoading,
      isOptimistic,
      error,
      fetchMore: linksPayload?.hasMore ? linksPayload?.fetchMore : undefined,
      hasMore: linksPayload?.hasMore ?? false,
    };
  }, [payload, enabled, cardinality, recursive, pathHopsKey, allHopsOne]);
}
