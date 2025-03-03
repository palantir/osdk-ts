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

import type {
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";

export function makeExternalStore<X>(
  createObservation: (
    callback: Observer<X | undefined>,
  ) => Unsubscribable,
  name?: string,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () =>
    | X
    | Partial<X> & { error: Error }
    | undefined;
} {
  let lastResult:
    | X
    | Partial<X> & { error: Error }
    | undefined;

  function getSnapShot():
    | X
    | Partial<X> & { error: Error }
    | undefined
  {
    return lastResult;
  }

  function subscribe(notifyUpdate: () => void) {
    const obs = createObservation({
      next: (payload) => {
        lastResult = payload;
        notifyUpdate();
      },
      error: (error: unknown) => {
        lastResult = {
          ...(lastResult ?? {}),
          error: error instanceof Error ? error : new Error(String(error)),
        } as Partial<X> & { error: Error };
        notifyUpdate();
      },
      complete: () => {},
    });

    return (): void => {
      obs.unsubscribe();
    };
  }

  return {
    subscribe,
    getSnapShot,
  };
}
