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

import type { Canonical } from "./Canonical.js";
import { CachingCanonicalizer } from "./Canonicalizer.js";
import { WeakRefTrie } from "./WeakRefTrie.js";

/**
 * Canonicalizes JSON-serializable objects to stable references.
 * Structurally identical inputs return the same object reference.
 *
 * Extends CachingCanonicalizer but overrides canonicalize method with per-call
 * generics to preserve the specific type T of the input.
 */
export class GenericCanonicalizer extends CachingCanonicalizer<object, object> {
  #trie = new WeakRefTrie<object>((array) => {
    const key = array[0];
    if (typeof key !== "string") {
      throw new Error("error canonicalizing: expected string key");
    }
    return JSON.parse(key);
  });

  protected lookupOrCreate(value: object): Canonical<object> {
    const key = JSON.stringify(value);
    return this.#trie.lookupArray([key]) as Canonical<object>;
  }

  canonicalize<T extends object>(value: T): Canonical<T>;
  canonicalize<T extends object>(
    value: T | undefined,
  ): Canonical<T> | undefined;
  canonicalize<T extends object>(
    value: T | undefined,
  ): Canonical<T> | undefined {
    return super.canonicalize(value) as Canonical<T> | undefined;
  }
}
