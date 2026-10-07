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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { WeakRefTrie } from "./WeakRefTrie.js";

describe("WeakRefTrie finalization", () => {
  let finalizations: Array<() => void>;

  beforeEach(() => {
    finalizations = [];
    vi.stubGlobal(
      "FinalizationRegistry",
      class<T> {
        constructor(private readonly cleanup: (heldValue: T) => void) {}

        register(_target: WeakKey, heldValue: T): void {
          finalizations.push(() => this.cleanup(heldValue));
        }
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("removes the original key path without deleting another path", () => {
    const trie = new WeakRefTrie<{ generation: number }>(() => ({
      generation: 1,
    }));
    trie.lookupArray(["first", "second"]);
    const unrelated = trie.lookupArray(["0", "first", "1", "second"]);

    finalizations[0]();

    expect(trie.lookupArray(["0", "first", "1", "second"])).toBe(unrelated);
    expect(trie.peekArray(["first", "second"])).toBeUndefined();
  });

  it("keeps a replacement when the removed value is finalized later", () => {
    let generation = 0;
    const trie = new WeakRefTrie<{ generation: number }>(() => ({
      generation: ++generation,
    }));
    trie.lookupArray(["first", "second"]);
    trie.removeArray(["first", "second"]);
    const replacement = trie.lookupArray(["first", "second"]);
    expect(replacement).toEqual({ generation: 2 });

    finalizations[0]();

    expect(trie.peekArray(["first", "second"])).toBe(replacement);
    expect(trie.lookupArray(["first", "second"])).toBe(replacement);
  });

  it("keeps the registered path when the input array changes", () => {
    const trie = new WeakRefTrie<{ generation: number }>(() => ({
      generation: 1,
    }));
    const keys = ["first", "second"];
    trie.lookupArray(keys);
    keys[0] = "changed";
    const unrelated = trie.lookupArray(keys);

    finalizations[0]();

    expect(trie.peekArray(["first", "second"])).toBeUndefined();
    expect(trie.lookupArray(["changed", "second"])).toBe(unrelated);
  });
});
