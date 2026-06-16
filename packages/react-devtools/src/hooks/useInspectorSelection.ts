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

import React from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { DiscoveredPrimitives } from "../utils/ComponentPrimitiveDiscovery.js";

export interface InspectorSelectionState {
  isSelectionActive: boolean;
  discoveredPrimitives: DiscoveredPrimitives | null;
  activateSelection: () => void;
  clearDiscoveredPrimitives: () => void;
}

interface InspectorSelectionSnapshot {
  isSelectionActive: boolean;
  discoveredPrimitives: DiscoveredPrimitives | null;
}

class InspectorSelectionStore {
  private state: InspectorSelectionSnapshot = {
    isSelectionActive: false,
    discoveredPrimitives: null,
  };
  private listeners = new Set<() => void>();

  subscribe(callback: () => void): () => void {
    this.listeners.add(callback);

    const handlePrimitivesDiscovered = (event: Event) => {
      const customEvent = event as CustomEvent<{
        componentId: string;
        primitives: DiscoveredPrimitives;
      }>;
      this.state = {
        isSelectionActive: false,
        discoveredPrimitives: customEvent.detail.primitives,
      };
      this.notify();
    };

    const handleSelectionModeDeactivated = () => {
      this.state = {
        ...this.state,
        isSelectionActive: false,
      };
      this.notify();
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
      this.listeners.delete(callback);
      window.removeEventListener(
        "primitives-discovered",
        handlePrimitivesDiscovered,
      );
      window.removeEventListener(
        "inspector-deactivated",
        handleSelectionModeDeactivated,
      );
    };
  }

  getSnapshot(): InspectorSelectionSnapshot {
    return this.state;
  }

  activateSelection(monitorStore: MonitorStore): void {
    const clickToInspect = monitorStore.getClickToInspectSystem();
    if (clickToInspect) {
      clickToInspect.activate();
      this.state = {
        isSelectionActive: true,
        discoveredPrimitives: null,
      };
      this.notify();
    }
  }

  clearDiscoveredPrimitives(): void {
    this.state = {
      ...this.state,
      discoveredPrimitives: null,
    };
    this.notify();
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
}

export function useInspectorSelection(
  monitorStore: MonitorStore,
): InspectorSelectionState {
  const storeRef = React.useRef<InspectorSelectionStore | null>(null);

  if (storeRef.current == null) {
    storeRef.current = new InspectorSelectionStore();
  }

  const store = storeRef.current;

  const subscribe = React.useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );

  const getSnapshot = React.useCallback(
    () => store.getSnapshot(),
    [store],
  );

  const snapshot = React.useSyncExternalStore(subscribe, getSnapshot);

  const activateSelection = React.useCallback(
    () => store.activateSelection(monitorStore),
    [store, monitorStore],
  );

  const clearDiscoveredPrimitives = React.useCallback(
    () => store.clearDiscoveredPrimitives(),
    [store],
  );

  return {
    isSelectionActive: snapshot.isSelectionActive,
    discoveredPrimitives: snapshot.discoveredPrimitives,
    activateSelection,
    clearDiscoveredPrimitives,
  };
}
