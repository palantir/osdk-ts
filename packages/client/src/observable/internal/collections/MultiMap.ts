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

export class MultiMap<K, V> {
  #map = new Map<K, V[]>();
  #size = 0;

  set(key: K, value: V): void {
    const arr = this.#map.get(key);
    if (arr) {
      arr.push(value);
    } else {
      this.#map.set(key, [value]);
    }
    this.#size++;
  }

  get(key: K): V[] | undefined {
    return this.#map.get(key);
  }

  get size(): number {
    return this.#size;
  }

  associations(): IterableIterator<[K, V[]]> {
    return this.#map.entries();
  }

  *[Symbol.iterator](): IterableIterator<[K, V]> {
    for (const [key, values] of this.#map) {
      for (const value of values) {
        yield [key, value];
      }
    }
  }
}
