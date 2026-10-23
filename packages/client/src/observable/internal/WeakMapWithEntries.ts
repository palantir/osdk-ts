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

interface WeakMapIterables<K extends WeakKey, V> {
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K>;

  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V>;
}

export class WeakMapWithEntries<K extends WeakKey, V>
  implements WeakMap<K, V>, WeakMapIterables<K, V>
{
  #map = new WeakMap<K, { value: V; ref: WeakRef<K> }>();
  #refs = new Set<WeakRef<K>>();

  // functions for WeakMap
  delete(key: K): boolean {
    const entry = this.#map.get(key);
    if (!entry) {
      return false;
    }
    this.#refs.delete(entry.ref);
    return this.#map.delete(key);
  }

  get(key: K): V | undefined {
    return this.#map.get(key)?.value;
  }

  has(key: K): boolean {
    return this.#map.has(key);
  }

  /**
   * Adds a new element with a specified key and value.
   * @param key Must be an object or symbol.
   */
  set(key: K, value: V): this {
    const entry = this.#map.get(key);
    if (entry) {
      entry.value = value;
    } else {
      const ref = new WeakRef(key);
      this.#refs.add(ref);
      this.#map.set(key, { value, ref });
    }
    return this;
  }

  [Symbol.toStringTag] = "WeakMap";

  // functions for iterables
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   * @yields {[K, V]} A key and its stored value.
   */
  *entries(): IterableIterator<[K, V]> {
    for (const ref of this.#refs) {
      const key = ref.deref();
      if (key === undefined) {
        this.#refs.delete(ref);
        continue;
      }
      const entry = this.#map.get(key);
      if (entry) {
        yield [key, entry.value];
      }
    }
  }

  /**
   * Returns an iterable of keys in the map
   * @yields {K} A stored key.
   */
  *keys(): IterableIterator<K> {
    for (const [key] of this.entries()) {
      yield key;
    }
  }

  /**
   * Returns an iterable of values in the map
   * @yields {V} A stored value.
   */
  *values(): IterableIterator<V> {
    for (const [, value] of this.entries()) {
      yield value;
    }
  }
}
