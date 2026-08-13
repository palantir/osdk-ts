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
  onLoadedObjectsChanged?: (change: LoadedObjectsChange<Q, RDPs>) => void;
}

/**
 * Fires `onLoadedObjectsChanged` whenever the loaded rows or the total count
 * change. Stays silent until the first page has loaded, so callers never see a
 * payload for a table that has nothing in it yet.
 *
 * The row array identity also changes when a function-backed column's query
 * resolves, so the callback refires as those cell values fill in.
 */
export function useLoadedObjectsChanged<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>({
  loadedObjects,
  totalCount,
  onLoadedObjectsChanged,
}: UseLoadedObjectsChangedProps<Q, RDPs>): void {
  // Wrapped so a callback prop that isn't memoized doesn't re-run the effect
  // and refire on every render.
  const fireChanged = useEventCallback(
    (change: LoadedObjectsChange<Q, RDPs>) => {
      onLoadedObjectsChanged?.(change);
    },
  );

  useEffect(() => {
    if (loadedObjects === undefined) return;

    fireChanged({ loadedObjects, totalCount });
  }, [loadedObjects, totalCount, fireChanged]);
}
