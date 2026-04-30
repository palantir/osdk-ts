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

import { throttle } from "lodash-es";
import type { LegacyRef } from "react";
import { useCallback, useEffect, useRef } from "react";
import { useEventCallback } from "./useEventCallback.js";

const THRESHOLD = 0.5;
const OPTIONS = {
  threshold: THRESHOLD,
};

export interface UseInfiniteScrollOptions {
  /**
   * Callback to call when new items should be loaded.
   */
  callback: () => void;
  /**
   * The current count of the number of loaded items in the infinite scroll. This is used to
   * detect changes when the height of the container is large and can hold multiple initial
   * loaded pages without making the target element scroll out of the viewport.
   */
  loadedCount: number;
}

/**
 * This hooks handles the logic of triggering a callback when the user reaches the target element (e.g. spinner).
 * It returns a callback that must be set as the ref of the target element at the bottom of the
 * scroll container.
 */
export function useInfiniteScroll(
  { callback, loadedCount }: UseInfiniteScrollOptions,
): LegacyRef<HTMLDivElement> {
  const observer = useRef<IntersectionObserver>();
  const targetRef = useRef<Element | undefined>();

  const eventCallback = useEventCallback(callback);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledCallback = useCallback(throttle(eventCallback), []);

  /**
   * If the observer updates the entry in a way that indicates that the target element is intersecting
   * with the scroll container, invoke the callback.
   */
  const handleObserverUpdate: IntersectionObserverCallback = useCallback(
    entries => {
      const ent = entries[0];
      if (ent && ent.isIntersecting) {
        throttledCallback();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  /**
   * Retrigger visibility detection whenever the loaded count of items changes. This allows us to
   * detect loading initial pages in a tall container that do not cause the target element to
   * change visibility.
   */
  useEffect(() => {
    const { current: targetElement } = targetRef;
    if (observer.current == null || targetElement == null) {
      return;
    }
    observer.current.observe(targetElement);
    return () => {
      observer.current?.unobserve(targetElement);
    };
  }, [loadedCount]);

  const setRef = (node: HTMLDivElement) => {
    if (node != null) {
      targetRef.current = node;
      if (observer.current == null) {
        observer.current = new IntersectionObserver(
          handleObserverUpdate,
          OPTIONS,
        );
      }
      observer.current.observe(node);
    } else if (targetRef.current != null) {
      observer.current?.unobserve(targetRef.current);
    }
  };

  return setRef;
}
