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

import type { LinkedType, LinkNames } from "@osdk/api";
import type {
  CompileTimeMetadata,
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  WhereClause,
} from "@osdk/client";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseLinksOptions<
  T extends ObjectTypeDefinition | InterfaceDefinition,
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
   * The mode to use for fetching data.
   * - undefined: Fetch data if not already in cache
   * - "force": Always fetch fresh data
   * - "offline": Only use cached data, don't make network requests
   */
  mode?: "force" | "offline";
}

export interface UseLinksResult<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
> {
  links: Osdk.Instance<Q>[] | undefined;
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

const emptyArray = Object.freeze([]);

/**
 * Hook to observe links from an object or array of objects.
 *
 * @param objects The source object(s) to observe links from
 * @param linkName The name of the link to observe
 * @param options Optional configuration for the link query
 * @returns UseLinksResult with links data and metadata
 */
export function useLinks<
  T extends ObjectTypeDefinition,
  L extends LinkNames<T>,
>(
  objects: Osdk.Instance<T> | Array<Osdk.Instance<T>> | undefined,
  linkName: L,
  options: UseLinksOptions<LinkedType<T, L>> = {},
): UseLinksResult<LinkedType<T, L>> {
  const { observableClient } = React.useContext(OsdkContext2);

  // Convert single object to array for consistent handling
  const objectsArray: ReadonlyArray<Osdk.Instance<T>> = React.useMemo(() => {
    return objects === undefined
      ? emptyArray
      : Array.isArray(objects)
      ? objects
      : [objects];
  }, [objects]);

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      return makeExternalStore(
        (observer) =>
          observableClient.observeLinks(
            objectsArray,
            linkName,
            {
              linkName,
              where: options.where,
              pageSize: options.pageSize,
              orderBy: options.orderBy,
              mode: options.mode,
            },
            observer,
          ),
        `links ${linkName} for ${
          objectsArray.map(obj => `${obj.$apiName}:${obj.$primaryKey}`).join(
            ",",
          )
        }`,
      );
    },
    [
      observableClient,
      objectsArray,
      linkName,
      options.where,
      options.pageSize,
      options.orderBy,
      options.mode,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot) as {
    resolvedLinks?: Osdk.Instance<
      CompileTimeMetadata<T>["links"][L]["targetType"]
    >[];
    status?: string;
    isOptimistic?: boolean;
    error?: Error;
    fetchMore?: () => Promise<unknown>;
    hasMore?: boolean;
  } | undefined;

  return {
    links: payload?.resolvedLinks,
    isLoading: payload?.status === "loading",
    isOptimistic: payload?.isOptimistic ?? false,
    error: payload?.error,
    fetchMore: payload?.fetchMore,
    hasMore: payload?.hasMore ?? false,
  };
}
