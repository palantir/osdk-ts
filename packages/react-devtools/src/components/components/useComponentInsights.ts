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

import { useMemo } from "react";

import { useSharedTick } from "../../hooks/useSharedTick.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import type { UnusedProperty, WastedRender } from "../../types/index.js";

export interface ComponentInsights {
  wastedByComponent: Map<string, WastedRender>;
  unusedByComponent: Map<string, UnusedProperty[]>;
}

export function useComponentInsights(
  monitorStore: MonitorStore
): ComponentInsights {
  const tick = useSharedTick();
  return useMemo(() => {
    const tracker = monitorStore.getPropertyAccessTracker();
    const wastedByComponent = new Map<string, WastedRender>();
    for (const wasted of tracker.getWastedRenders()) {
      wastedByComponent.set(wasted.componentId, wasted);
    }
    const unusedByComponent = new Map<string, UnusedProperty[]>();
    for (const unused of tracker.getUnusedProperties()) {
      const list = unusedByComponent.get(unused.componentId) ?? [];
      list.push(unused);
      unusedByComponent.set(unused.componentId, list);
    }
    return { wastedByComponent, unusedByComponent };
  }, [monitorStore, tick]);
}
