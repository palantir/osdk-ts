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

import { Trie } from "@wry/trie";
const defaultMakeData = () => Object.create(null);
export class WeakRefTrie {
  #finalizer = new FinalizationRegistry(orderBy => {
    this.#trie.removeArray(Object.entries(orderBy).flat());
  });
  #trie;
  constructor(makeData = defaultMakeData) {
    this.#trie = new Trie(false, array => {
      const data = makeData(array);
      this.#finalizer.register(data, array);
      return new WeakRef(data);
    });
  }
  lookupArray(array) {
    const maybe = this.#trie.lookupArray(array);
    let ret = maybe.deref();
    if (maybe && !ret) {
      // in case finalizer hasn't run
      this.#trie.removeArray(array);
      ret = this.#trie.lookupArray(array).deref();
    }
    return ret;
  }
  peekArray(array) {
    const maybe = this.#trie.peekArray(array);
    const ret = maybe?.deref();
    if (maybe && !ret) {
      // in case finalizer hasn't run
      this.#trie.removeArray(array);
    }
    return ret;
  }
  removeArray(array) {
    return this.#trie.removeArray(array)?.deref();
  }
}
export class OrderByCanonicalizer {
  #trie = new WeakRefTrie(array => {
    const pairs = array.reduce(function (result, _, index, array) {
      if (index % 2 === 0 && array[index] != null) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);
    let data = Object.fromEntries(pairs);
    if (process.env.NODE_ENV !== "production") {
      data = Object.freeze(data);
    }
    return data;
  });
  canonicalize = orderBy => {
    const strings = Object.entries(orderBy).flat();
    return this.#trie.lookupArray(strings);
  };
}
//# sourceMappingURL=OrderByCanonicalizer.js.map