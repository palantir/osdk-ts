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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import type { ShapeDerivedLinkDef } from "@osdk/api/shapes-internal";
import type {
  LinkStatus,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/unstable";
import { ShapeNullabilityError } from "@osdk/api/unstable";
import type { Unsubscribable } from "@osdk/client/unstable-do-not-use";

export type AnyShapeInstance = ShapeInstance<
  ShapeDefinition<ObjectOrInterfaceDefinition>
>;

export type ListObserverPayload = {
  resolvedList: Osdk.Instance<ObjectOrInterfaceDefinition>[] | undefined;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
  status: string;
  isOptimistic: boolean;
};

export const NOOP_FETCH_MORE = async (): Promise<void> => {};

export function violationsToError(
  shape: ShapeDefinition<ObjectOrInterfaceDefinition>,
  violations: readonly { property: string; constraint: string }[],
): Error | undefined {
  if (violations.some(v => v.constraint === "require")) {
    return new ShapeNullabilityError(
      shape,
      violations as readonly {
        property: string;
        primaryKey: unknown;
        constraint: "require" | "dropIfNull" | "transformError";
      }[],
    );
  }
  return undefined;
}

export interface LinkEntry {
  linkDef: ShapeDerivedLinkDef;
  sourceObject: Osdk.Instance<ObjectOrInterfaceDefinition>;
  status: "init" | "loading" | "loaded" | "error" | "deferred";
  data: AnyShapeInstance[];
  error?: Error;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
  subscription?: Unsubscribable;
  nestedByPk: Map<string | number, Map<string, LinkEntry>>;
  cleaned: boolean;
}

export function createLinkEntry(
  linkDef: ShapeDerivedLinkDef,
  sourceObject: Osdk.Instance<ObjectOrInterfaceDefinition>,
  configDefer?: boolean,
): LinkEntry {
  const isDeferred = linkDef.config.defer ?? configDefer ?? false;
  return {
    linkDef,
    sourceObject,
    status: isDeferred ? "deferred" : "init",
    data: [],
    error: undefined,
    hasMore: false,
    fetchMore: NOOP_FETCH_MORE,
    subscription: undefined,
    nestedByPk: new Map(),
    cleaned: false,
  };
}

export interface DerivedLinksPayload<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  links: Record<string, AnyShapeInstance[]>;
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  anyLoading: boolean;
  anyError: boolean;
}

export interface DerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => DerivedLinksPayload<S>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => void;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
  destroy: () => void;
}

export function createEmptyDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(): DerivedLinksStore<S> {
  const emptyPayload: DerivedLinksPayload<S> = {
    links: {},
    linkStatus: {},
    anyLoading: false,
    anyError: false,
  };

  return {
    subscribe: () => () => {},
    getSnapShot: () => emptyPayload,
    loadDeferred: () => {},
    retry: () => {},
    destroy: () => {},
  };
}

export function cleanupNestedMap(map: Map<string, LinkEntry>): void {
  for (const entry of map.values()) {
    entry.cleaned = true;
    entry.subscription?.unsubscribe();
    for (const nestedMap of entry.nestedByPk.values()) {
      cleanupNestedMap(nestedMap);
    }
  }
}

export function buildDataWithNestedLinks(
  entry: LinkEntry,
  transformedData: AnyShapeInstance[],
): AnyShapeInstance[] {
  const targetShape = entry.linkDef.targetShape;
  if (targetShape.__derivedLinks.length === 0) {
    return transformedData;
  }

  return transformedData.map((obj) => {
    const pk = obj.$primaryKey;
    const nestedMap = entry.nestedByPk.get(pk);
    if (!nestedMap || nestedMap.size === 0) {
      return obj;
    }

    const nestedLinks: Record<string, AnyShapeInstance[]> = {};
    for (const [linkName, nestedEntry] of nestedMap) {
      nestedLinks[linkName] = buildDataWithNestedLinks(
        nestedEntry,
        nestedEntry.data,
      );
    }

    return { ...obj, ...nestedLinks } as AnyShapeInstance;
  });
}

/**
 * A link is batchable when it can use observeLinks (one API call for all source
 * objects) instead of per-object observeObjectSet calls. This requires a simple
 * single-hop pivotTo with no filters, ordering, limits, or set operations,
 * since observeLinks doesn't support those query features.
 */
export function isBatchableLink(linkDef: ShapeDerivedLinkDef): boolean {
  const def = linkDef.objectSetDef;
  return (
    def.segments.length === 1
    && def.segments[0].type === "pivotTo"
    && (!def.setOperations || def.setOperations.length === 0)
    && !def.where
    && !def.orderBy
    && def.limit == null
    && !def.distinct
  );
}
