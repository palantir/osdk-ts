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

import { useCallback, useSyncExternalStore } from "react";
import type { ComputeStore } from "../store/ComputeStore.js";
import type {
  ComputeMetrics,
  ComputeRequest,
  RecordingEvent,
} from "../types/compute.js";

export function useComputeMetrics(store: ComputeStore): ComputeMetrics {
  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );
  const getSnapshot = useCallback(() => store.getSnapshot().metrics, [store]);
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function useComputeRequests(
  store: ComputeStore,
): ReadonlyArray<ComputeRequest> {
  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );
  const getSnapshot = useCallback(() => store.getSnapshot().requests, [store]);
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function useComputeRecording(store: ComputeStore): boolean {
  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );
  const getSnapshot = useCallback(() => store.getSnapshot().isRecording, [
    store,
  ]);
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function useComputeNetworkPaused(store: ComputeStore): boolean {
  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );
  const getSnapshot = useCallback(
    () => store.getSnapshot().isNetworkPaused,
    [store],
  );
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function useComputeLastRecordingEvent(
  store: ComputeStore,
): RecordingEvent | undefined {
  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(callback),
    [store],
  );
  const getSnapshot = useCallback(
    () => store.getSnapshot().lastRecordingEvent,
    [store],
  );
  return useSyncExternalStore(subscribe, getSnapshot);
}
