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

import type { Unsubscribable } from "@osdk/client";

export function makeExternalStore<X>(
  createObservation: (callback: (x: X | undefined) => void) => Unsubscribable,
  name?: string,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => X | undefined;
} {
  let lastResult: X | undefined;

  function getSnapShot(): X | undefined {
    return lastResult;
  }

  function subscribe(notifyUpdate: () => void) {
    // eslint-disable-next-line no-console
    console.log("Subscribing", name);
    const obs = createObservation((payload) => {
      lastResult = payload;
      notifyUpdate();
    });

    return (): void => {
      // eslint-disable-next-line no-console
      console.log("Unsubscribing", name);
      obs.unsubscribe();
    };
  }

  return {
    subscribe,
    getSnapShot,
  };
}
