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

import { useCallback, useMemo, useState } from "react";

interface FilterVisibilityResult<D> {
  visibleDefinitions: Array<D>;
  hiddenDefinitions: Array<D>;
  showFilter: (key: string) => void;
  hideFilter: (key: string) => void;
  hasVisibilityChanges: boolean;
  resetVisibility: () => void;
}

export function useFilterVisibility<D>(
  filterDefinitions: Array<D> | undefined,
  getFilterKey: (definition: D) => string,
  getIsVisible: (definition: D) => boolean,
): FilterVisibilityResult<D> {
  const [visibilityOverrides, setVisibilityOverrides] = useState<
    Map<string, boolean>
  >(() => new Map());

  const { visibleDefinitions, hiddenDefinitions } = useMemo(() => {
    if (filterDefinitions == null) {
      return {
        visibleDefinitions: [] as Array<D>,
        hiddenDefinitions: [] as Array<D>,
      };
    }

    const visible: Array<D> = [];
    const hidden: Array<D> = [];

    for (const def of filterDefinitions) {
      const key = getFilterKey(def);
      const override = visibilityOverrides.get(key);
      const isVisible = override ?? getIsVisible(def);

      if (isVisible) {
        visible.push(def);
      } else {
        hidden.push(def);
      }
    }

    return { visibleDefinitions: visible, hiddenDefinitions: hidden };
  }, [filterDefinitions, getFilterKey, getIsVisible, visibilityOverrides]);

  const showFilter = useCallback((key: string) => {
    setVisibilityOverrides((prev) => {
      const next = new Map(prev);
      next.set(key, true);
      return next;
    });
  }, []);

  const hideFilter = useCallback((key: string) => {
    setVisibilityOverrides((prev) => {
      const next = new Map(prev);
      next.set(key, false);
      return next;
    });
  }, []);

  const hasVisibilityChanges = visibilityOverrides.size > 0;

  const resetVisibility = useCallback(() => {
    setVisibilityOverrides(new Map());
  }, []);

  return {
    visibleDefinitions,
    hiddenDefinitions,
    showFilter,
    hideFilter,
    hasVisibilityChanges,
    resetVisibility,
  };
}
