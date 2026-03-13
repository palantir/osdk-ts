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

import { useCallback, useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { DiscoveredPrimitives } from "../utils/ComponentPrimitiveDiscovery.js";

export interface InspectorSelectionState {
  isSelectionActive: boolean;
  discoveredPrimitives: DiscoveredPrimitives | null;
  activateSelection: () => void;
  clearDiscoveredPrimitives: () => void;
}

export function useInspectorSelection(
  monitorStore: MonitorStore,
): InspectorSelectionState {
  const [isSelectionActive, setIsSelectionActive] = useState(false);
  const [discoveredPrimitives, setDiscoveredPrimitives] = useState<
    DiscoveredPrimitives | null
  >(null);

  useEffect(() => {
    const handlePrimitivesDiscovered = (event: Event) => {
      const customEvent = event as CustomEvent<{
        componentId: string;
        primitives: DiscoveredPrimitives;
      }>;
      setDiscoveredPrimitives(customEvent.detail.primitives);
      setIsSelectionActive(false);
    };

    const handleSelectionModeDeactivated = () => {
      setIsSelectionActive(false);
    };

    window.addEventListener(
      "primitives-discovered",
      handlePrimitivesDiscovered,
    );
    window.addEventListener(
      "inspector-deactivated",
      handleSelectionModeDeactivated,
    );

    return () => {
      window.removeEventListener(
        "primitives-discovered",
        handlePrimitivesDiscovered,
      );
      window.removeEventListener(
        "inspector-deactivated",
        handleSelectionModeDeactivated,
      );
    };
  }, []);

  const activateSelection = useCallback(() => {
    const clickToInspect = monitorStore.getClickToInspectSystem();
    if (clickToInspect) {
      clickToInspect.activate();
      setIsSelectionActive(true);
      setDiscoveredPrimitives(null);
    }
  }, [monitorStore]);

  const clearDiscoveredPrimitives = useCallback(() => {
    setDiscoveredPrimitives(null);
  }, []);

  return {
    isSelectionActive,
    discoveredPrimitives,
    activateSelection,
    clearDiscoveredPrimitives,
  };
}
