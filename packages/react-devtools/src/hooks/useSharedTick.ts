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

const tickListeners = new Set<() => void>();
let tickInterval: ReturnType<typeof setInterval> | null = null;
let tickVersion = 0;

function startTick() {
  if (!tickInterval) {
    tickInterval = setInterval(() => {
      tickVersion++;
      tickListeners.forEach(fn => fn());
    }, 1000);
  }
}

function stopTick() {
  if (tickListeners.size === 0 && tickInterval) {
    clearInterval(tickInterval);
    tickInterval = null;
  }
}

function subscribeTick(callback: () => void): () => void {
  tickListeners.add(callback);
  startTick();
  return () => {
    tickListeners.delete(callback);
    stopTick();
  };
}

function getTickSnapshot(): number {
  return tickVersion;
}

export function useSharedTick(callback: () => void): void {
  const callbackRef = React.useRef(callback);
  callbackRef.current = callback;

  React.useSyncExternalStore(subscribeTick, getTickSnapshot);

  callbackRef.current();
}
