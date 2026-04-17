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

import React, { createContext, useCallback, useContext, useRef } from "react";

interface PortalTrackerContextValue {
  register: (element: HTMLElement) => () => void;
  containsElement: (element: Node) => boolean;
}

const PortalTrackerContext = createContext<
  PortalTrackerContextValue | undefined
>(
  undefined,
);

export function PortalTrackerProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const portalsRef = useRef<Set<HTMLElement>>(new Set());

  const register = useCallback((element: HTMLElement) => {
    portalsRef.current.add(element);
    return () => {
      portalsRef.current.delete(element);
    };
  }, []);

  const containsElement = useCallback((node: Node) => {
    for (const portal of portalsRef.current) {
      if (portal.contains(node)) {
        return true;
      }
    }
    return false;
  }, []);

  const value = useRef<PortalTrackerContextValue>({
    register,
    containsElement,
  });

  return (
    <PortalTrackerContext.Provider value={value.current}>
      {children}
    </PortalTrackerContext.Provider>
  );
}

export function usePortalTracker(): PortalTrackerContextValue | undefined {
  return useContext(PortalTrackerContext);
}

/**
 * Registers a DOM element as a tracked portal container.
 * Call with the portal's root element once it mounts.
 * The element is automatically unregistered on unmount.
 *
 * Usage in a component that renders a portaled dropdown:
 * ```tsx
 * const registerPortal = useRegisterPortal();
 * <Select.Portal ref={registerPortal}>...</Select.Portal>
 * ```
 */
export function useRegisterPortal(): (element: HTMLElement | null) => void {
  const tracker = useContext(PortalTrackerContext);
  const cleanupRef = useRef<(() => void) | null>(null);

  return useCallback(
    (element: HTMLElement | null) => {
      cleanupRef.current?.();
      cleanupRef.current = null;

      if (element && tracker) {
        cleanupRef.current = tracker.register(element);
      }
    },
    [tracker],
  );
}
