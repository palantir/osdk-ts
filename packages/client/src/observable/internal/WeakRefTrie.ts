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

/**
 * A Trie that stores WeakRef objects and automatically cleans them up
 * when the referenced objects are garbage collected.
 */
export class WeakRefTrie<X extends object> {
  #finalizer = new FinalizationRegistry<
    Array<any>
  >((array) => {
    this.#trie.removeArray(array);
  });

  #trie: Trie<WeakRef<X>>;

  constructor(makeData: (array: any[]) => X = defaultMakeData) {
    this.#trie = new Trie<WeakRef<X>>(
      false,
      (array) => {
        const data = makeData(array);
        this.#finalizer.register(data, array);
        return new WeakRef(data);
      },
    );
  }

  lookupArray<T extends IArguments | any[]>(array: T): X {
    const maybe = this.#trie.lookupArray(array);
    let ret = maybe.deref();
    if (maybe && !ret) {
      // in case finalizer hasn't run
      this.#trie.removeArray(array);
      ret = this.#trie.lookupArray(array).deref();
    }
    return ret!;
  }

  peekArray<T extends IArguments | any[]>(array: T): X | undefined {
    const maybe = this.#trie.peekArray(array);
    const ret = maybe?.deref();
    if (maybe && !ret) {
      // in case finalizer hasn't run
      this.#trie.removeArray(array);
    }
    return ret;
  }

  removeArray<T extends IArguments | any[]>(array: T): X | undefined {
    return this.#trie.removeArray(array)?.deref();
  }
}
