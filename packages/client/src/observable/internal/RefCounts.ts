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

import { DEBUG_REFCOUNTS } from "../DebugFlags.js";

export class RefCounts<T extends {}> {
  private refCounts = new Map<T, number>();

  // keeps our objects around for some extended duration after they are no longer
  // needed which is good for quick clicks across tabs.
  private gcMap = new Map<T, number /* death time */>();

  constructor(private keepAlive: number, private cleanup: (key: T) => void) {
  }

  register<X extends T>(key: X): X {
    if (!this.refCounts.has(key)) {
      this.gcMap.set(key, Date.now() + this.keepAlive);
    }

    return key;
  }

  retain(key: T): void {
    const count = this.refCounts.get(key) ?? 0;
    this.refCounts.set(key, count + 1);
    if (this.gcMap.has(key)) {
      this.gcMap.delete(key);
    }
  }

  release(key: T): void {
    const count = this.refCounts.get(key) ?? 0;
    if (count === 1) {
      this.refCounts.delete(key);
      this.gcMap.set(key, Date.now() + this.keepAlive);
    } else {
      this.refCounts.set(key, count - 1);
    }
  }

  has(key: T): boolean {
    return this.refCounts.has(key);
  }

  gc(): void {
    const now = Date.now();

    if (DEBUG_REFCOUNTS) {
      for (const [key, count] of this.refCounts) {
        // eslint-disable-next-line no-console
        console.debug("RefCounts.gc() - counts: ", JSON.stringify(key), count);
      }
    }

    for (const [key, deathTime] of this.gcMap) {
      if (DEBUG_REFCOUNTS && deathTime >= now) {
        // eslint-disable-next-line no-console
        console.debug(
          "RefCounts.gc() - ttl ",
          JSON.stringify(key),
          deathTime - now,
        );
      }

      if (deathTime < now) {
        if (DEBUG_REFCOUNTS) {
          // eslint-disable-next-line no-console
          console.debug(
            "RefCounts.gc() - registering cleaning up",
            JSON.stringify(key),
          );
        }
        this.gcMap.delete(key);
        this.cleanup(key);
      }
    }
  }
}
