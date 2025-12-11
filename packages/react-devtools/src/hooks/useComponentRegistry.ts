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

import { useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { ComponentQueryRegistry } from "../utils/ComponentQueryRegistry.js";

/**
 * Hook to access the ComponentQueryRegistry reactively.
 *
 * The registry updates periodically as components mount/unmount and hooks are called.
 * This hook ensures the UI re-renders when the registry changes.
 *
 * @param monitorStore - The monitor store instance
 * @param updateIntervalMs - How often to check for updates (default: 1000ms)
 * @returns The ComponentQueryRegistry instance
 *
 * @example
 * ```tsx
 * function ComponentsTab({ monitorStore }: { monitorStore: MonitorStore }) {
 *   const registry = useComponentRegistry(monitorStore);
 *   const stats = registry.getStats();
 *
 *   return <div>Total components: {stats.components}</div>;
 * }
 * ```
 */
export function useComponentRegistry(
  monitorStore: MonitorStore,
  updateIntervalMs: number = 1000,
): ComponentQueryRegistry {
  const [version, setVersion] = useState(0);

  useEffect(() => {
    // Force re-render periodically to reflect registry changes
    const interval = setInterval(() => {
      setVersion((v) => v + 1);
    }, updateIntervalMs);

    return () => clearInterval(interval);
  }, [updateIntervalMs]);

  // Force update by including version in dependency
  return monitorStore.getComponentRegistry();
}
