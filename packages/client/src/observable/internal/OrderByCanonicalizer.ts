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

export class OrderByCanonicalizer extends CachingCanonicalizer<
  Record<string, "asc" | "desc" | undefined>,
  Record<string, "asc" | "desc" | undefined>
> {
  private structuralCache = new WeakRefTrie<
    Canonical<Record<string, "asc" | "desc" | undefined>>
  >(
    (array: Array<string>) => {
      const pairs = array.reduce<Array<[string, "asc" | "desc"]>>(
        function(result, _, index, array) {
          if (index % 2 === 0 && array[index] != null) {
            result.push(
              array.slice(index, index + 2) as [string, "asc" | "desc"],
            );
          }
          return result;
        },
        [],
      );
      const data = Object.fromEntries(pairs) satisfies Record<
        string,
        "asc" | "desc"
      >;

      return (process.env.NODE_ENV !== "production"
        ? Object.freeze(data)
        : data) as Canonical<
          Record<string, "asc" | "desc" | undefined>
        >;
    },
  );

  protected lookupOrCreate(
    orderBy: Record<string, "asc" | "desc" | undefined>,
  ): Canonical<Record<string, "asc" | "desc" | undefined>> {
    const strings = Object.entries(orderBy).flat();
    return this.structuralCache.lookupArray(strings);
  }
}
