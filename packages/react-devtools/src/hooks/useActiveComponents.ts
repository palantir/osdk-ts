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
import type { MonitorStore } from "../store/MonitorStore.js";
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import { useComponentRegistry } from "./useComponentRegistry.js";

/**
 * Hook to get all active (mounted) components with their hook bindings.
 *
 * Returns a Map of componentId → array of bindings.
 * Only includes components that are currently mounted (not unmounted).
 *
 * @param monitorStore - The monitor store instance
 * @returns Map of componentId to ComponentHookBinding array
 *
 * @example
 * ```tsx
 * function ComponentList({ monitorStore }: { monitorStore: MonitorStore }) {
 *   const activeComponents = useActiveComponents(monitorStore);
 *
 *   return (
 *     <div>
 *       {Array.from(activeComponents).map(([componentId, bindings]) => (
 *         <ComponentCard
 *           key={componentId}
 *           componentId={componentId}
 *           bindings={bindings}
 *         />
 *       ))}
 *     </div>
 *   );
 * }
 * ```
 */
export function useActiveComponents(
  monitorStore: MonitorStore,
): Map<string, ComponentHookBinding[]> {
  const registry = useComponentRegistry(monitorStore);

  return useMemo(() => {
    return registry.getActiveComponents();
  }, [registry]);
}
