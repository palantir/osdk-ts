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

export type Snapshot<X> =
  | X & { error?: Error }
  | (Partial<X> & { error?: Error })
  | undefined;

export function makeExternalStore<X>(
  createObservation: (callback: Observer<X | undefined>) => Unsubscribable,
  _name?: string,
  initialValue?: Snapshot<X>,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => Snapshot<X>;
} {
  let lastResult: Snapshot<X> = initialValue;

  function getSnapShot(): Snapshot<X> {
    return lastResult;
  }

  function subscribe(notifyUpdate: () => void) {
    const obs = createObservation({
      next: (payload) => {
        lastResult = payload as Snapshot<X>;
        notifyUpdate();
      },
      error: (error: unknown) => {
        lastResult = {
          ...(lastResult ?? {}),
          error: error instanceof Error ? error : new Error(String(error)),
        } as Snapshot<X>;
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

/**
 * Like makeExternalStore but for async subscription creation.
 *
 * Uses an isActive flag to handle race conditions:
 * If cleanup runs before promise resolves, the stale subscription is
 * immediately unsubscribed when it eventually resolves
 */
export function makeExternalStoreAsync<X>(
  createObservation: (
    callback: Observer<X | undefined>,
  ) => Promise<Unsubscribable>,
  _name?: string,
  initialValue?: Snapshot<X>,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => Snapshot<X>;
} {
  let lastResult: Snapshot<X> = initialValue;

  function getSnapShot(): Snapshot<X> {
    return lastResult;
  }

  function subscribe(notifyUpdate: () => void) {
    let isActive = true;
    let currentSubscription: Unsubscribable | undefined;

    const subscriptionPromise = createObservation({
      next: (payload) => {
        if (isActive) {
          lastResult = payload as Snapshot<X>;
          notifyUpdate();
        }
      },
      error: (error: unknown) => {
        if (isActive) {
          lastResult = {
            ...(lastResult ?? {}),
            error: error instanceof Error ? error : new Error(String(error)),
          } as Snapshot<X>;
          notifyUpdate();
        }
      },
      complete: () => {},
    });

    subscriptionPromise.then((sub) => {
      if (isActive) {
        currentSubscription = sub;
      } else {
        sub.unsubscribe();
      }
    }).catch((error: unknown) => {
      if (isActive) {
        lastResult = {
          ...(lastResult ?? {}),
          error: error instanceof Error ? error : new Error(String(error)),
        } as Snapshot<X>;
        notifyUpdate();
      }
    });

    return (): void => {
      isActive = false;
      if (currentSubscription) {
        currentSubscription.unsubscribe();
      }
    };
  }

  return {
    subscribe,
    getSnapShot,
  };
}
