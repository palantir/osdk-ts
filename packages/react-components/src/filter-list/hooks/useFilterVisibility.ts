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

import type { ObjectTypeDefinition } from "@osdk/api";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";

interface FilterVisibilityResult<D> {
  visibleDefinitions: Array<D>;
  hiddenDefinitions: Array<D>;
  showFilter: (key: string) => void;
  hideFilter: (key: string) => void;
  reorderVisible: (keys: string[]) => void;
  hasVisibilityChanges: boolean;
  resetVisibility: () => void;
}

export function useFilterVisibility<
  Q extends ObjectTypeDefinition,
>(
  filterDefinitions: Array<FilterDefinitionUnion<Q>> | undefined,
  onVisibilityChange?: (visibleKeys: string[], hiddenKeys: string[]) => void,
): FilterVisibilityResult<FilterDefinitionUnion<Q>> {
  const allKeys = useMemo(
    () => filterDefinitions?.map(getFilterKey) ?? [],
    [filterDefinitions],
  );

  const defaultVisibleKeyOrder = useMemo(
    () =>
      filterDefinitions
        ?.filter(def => def.isVisible !== false)
        .map(getFilterKey) ?? [],
    [filterDefinitions],
  );

  const [visibleKeyOrder, setVisibleKeyOrder] = useState<string[]>(
    () => defaultVisibleKeyOrder,
  );

  // Sync state when filterDefinitions changes
  useEffect(() => {
    setVisibleKeyOrder(defaultVisibleKeyOrder);
  }, [defaultVisibleKeyOrder]);

  // Keep a ref to onVisibilityChange so callbacks don't need it as a dependency
  const onVisibilityChangeRef = useRef(onVisibilityChange);
  onVisibilityChangeRef.current = onVisibilityChange;

  const fireVisibilityChange = useCallback(
    (nextVisibleKeyOrder: string[]) => {
      if (!onVisibilityChangeRef.current) return;
      const visibleSet = new Set(nextVisibleKeyOrder);
      const hiddenKeys = allKeys.filter((k) => !visibleSet.has(k));
      onVisibilityChangeRef.current(nextVisibleKeyOrder, hiddenKeys);
    },
    [allKeys],
  );

  const defByKey = useMemo(() => {
    const map = new Map<string, FilterDefinitionUnion<Q>>();
    if (filterDefinitions == null) return map;
    for (const def of filterDefinitions) {
      map.set(getFilterKey(def), def);
    }
    return map;
  }, [filterDefinitions]);

  const { visibleDefinitions, hiddenDefinitions } = useMemo(() => {
    if (filterDefinitions == null) {
      return {
        visibleDefinitions: [] as Array<FilterDefinitionUnion<Q>>,
        hiddenDefinitions: [] as Array<FilterDefinitionUnion<Q>>,
      };
    }

    const visibleSet = new Set(visibleKeyOrder);
    const visible: Array<FilterDefinitionUnion<Q>> = [];
    const hidden: Array<FilterDefinitionUnion<Q>> = [];

    for (const key of visibleKeyOrder) {
      const def = defByKey.get(key);
      if (def != null) {
        visible.push(def);
      }
    }

    for (const key of allKeys) {
      if (!visibleSet.has(key)) {
        const def = defByKey.get(key);
        if (def != null) {
          hidden.push(def);
        }
      }
    }

    return {
      visibleDefinitions: visible,
      hiddenDefinitions: hidden,
    };
  }, [filterDefinitions, defByKey, visibleKeyOrder, allKeys]);

  const showFilter = useCallback((key: string) => {
    setVisibleKeyOrder((prev) => {
      if (prev.includes(key)) return prev;
      const next = [...prev, key];
      fireVisibilityChange(next);
      return next;
    });
  }, [fireVisibilityChange]);

  const hideFilter = useCallback((key: string) => {
    setVisibleKeyOrder((prev) => {
      const next = prev.filter((k) => k !== key);
      fireVisibilityChange(next);
      return next;
    });
  }, [fireVisibilityChange]);

  const reorderVisible = useCallback((keys: string[]) => {
    setVisibleKeyOrder((prev) => {
      if (keys.length === prev.length && keys.every((k, i) => k === prev[i])) {
        return prev;
      }
      fireVisibilityChange(keys);
      return keys;
    });
  }, [fireVisibilityChange]);

  const resetVisibility = useCallback(() => {
    setVisibleKeyOrder((prev) => {
      if (
        defaultVisibleKeyOrder.length === prev.length
        && defaultVisibleKeyOrder.every((k, i) => k === prev[i])
      ) {
        return prev;
      }
      fireVisibilityChange(defaultVisibleKeyOrder);
      return defaultVisibleKeyOrder;
    });
  }, [defaultVisibleKeyOrder, fireVisibilityChange]);

  const hasVisibilityChanges = useMemo(() => {
    if (visibleKeyOrder.length !== defaultVisibleKeyOrder.length) {
      return true;
    }
    return !visibleKeyOrder.every((key, i) =>
      key === defaultVisibleKeyOrder[i]
    );
  }, [visibleKeyOrder, defaultVisibleKeyOrder]);

  return {
    visibleDefinitions,
    hiddenDefinitions,
    showFilter,
    hideFilter,
    reorderVisible,
    hasVisibilityChanges,
    resetVisibility,
  };
}
