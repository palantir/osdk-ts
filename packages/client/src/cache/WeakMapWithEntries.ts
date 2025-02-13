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
  #map = new WeakMap<K, V>();
  #list: WeakRef<K>[] = [];
  #toClean: WeakRef<WeakKey>[] = [];
  #needsCleaning = false;

  #registry = new FinalizationRegistry(() => {
    this.#toClean.push(new WeakRef({}));
    this.#needsCleaning = true;
  });

  constructor() {
    const weakThis = new WeakRef(this);
    const intervalId = setInterval(() => {
      const self = weakThis.deref();
      if (self) {
        if (this.#needsCleaning) {
          this.#clean();
        }
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  #clean() {
    this.#list = this.#list.filter((ref) => ref.deref() !== undefined);
  }

  // functions for WeakMap
  delete(key: K): boolean {
    const ret = this.#map.delete(key);
    this.#toClean.push(new WeakRef(key));
    this.#needsCleaning = true;

    return ret;
  }

  get(key: K): V | undefined {
    return this.#map.get(key);
  }

  has(key: K): boolean {
    return this.#map.has(key);
  }

  /**
   * Adds a new element with a specified key and value.
   * @param key Must be an object or symbol.
   */
  set(key: K, value: V): this {
    if (!this.#map.has(key)) {
      this.#list.push(new WeakRef(key));
    }
    this.#map.set(key, value);

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
   */
  entries(): IterableIterator<[K, V]> {
    const self = this;
    function* iter(): IterableIterator<[K, V]> {
      for (const ref of self.#list) {
        const key = ref.deref();
        if (key !== undefined) {
          yield [key, self.#map.get(key)] as [K, V];
        }
      }
    }
    return iter();
  }

  /**
   * Returns an iterable of keys in the map
   */
  keys(): IterableIterator<K> {
    const self = this;
    function* iter(): IterableIterator<K> {
      for (const ref of self.#list) {
        const key = ref.deref();
        if (key !== undefined) {
          yield key;
        }
      }
    }
    return iter();
  }

  /**
   * Returns an iterable of values in the map
   */
  values(): IterableIterator<V> {
    const self = this;
    function* iter(): IterableIterator<V> {
      for (const ref of self.#list) {
        const key = ref.deref();
        if (key !== undefined) {
          const value = self.#map.get(key);
          if (value !== undefined) {
            yield value;
          }
        }
      }
    }
    return iter();
  }
}
