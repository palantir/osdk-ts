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

import type {
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import { useEffect } from "react";

import { useEventCallback } from "../../shared/hooks/useEventCallback.js";
import type { LoadedObjectsChange } from "../ObjectTableApi.js";

const EMPTY_ROWS: never[] = [];

export interface UseLoadedObjectsChangedProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * The rows loaded so far, or `undefined` while the first page is still in
   * flight.
   */
  loadedObjects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined;
  /** Total objects matching the object set, if the API reported one. */
  totalCount: string | undefined;
  /** Whether the underlying query is currently fetching. */
  isLoading: boolean;
  onLoadedObjectsChanged?: (change: LoadedObjectsChange<Q, RDPs>) => void;
}

export function useLoadedObjectsChanged<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>({
  loadedObjects,
  totalCount,
  isLoading,
  onLoadedObjectsChanged,
}: UseLoadedObjectsChangedProps<Q, RDPs>): void {
  const fireChanged = useEventCallback(
    (change: LoadedObjectsChange<Q, RDPs>) => {
      onLoadedObjectsChanged?.(change);
    },
  );

  useEffect(() => {
    if (!isLoading) {
      fireChanged({ loadedObjects: loadedObjects ?? EMPTY_ROWS, totalCount });
    }
  }, [loadedObjects, totalCount, isLoading, fireChanged]);
}
