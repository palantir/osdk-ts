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

export class GenericCanonicalizer extends CachingCanonicalizer<
  object,
  object
> {
  private structuralCache = new Map<string, Canonical<object>>();

  canonicalize<T extends object>(input: T): Canonical<T>;
  canonicalize<T extends object>(
    input: T | undefined,
  ): Canonical<T> | undefined;
  canonicalize<T extends object>(
    input: T | undefined,
  ): Canonical<T> | undefined {
    return super.canonicalize(input as object) as Canonical<T> | undefined;
  }

  protected lookupOrCreate(input: object): Canonical<object> {
    const structuralKey = JSON.stringify(input, (_key, value) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        const sorted: Record<string, unknown> = {};
        for (const key of Object.keys(value).sort()) {
          sorted[key] = (value as Record<string, unknown>)[key];
        }
        return sorted;
      }
      return value;
    });

    let canonical = this.structuralCache.get(structuralKey);
    if (!canonical) {
      canonical = input as Canonical<object>;
      this.structuralCache.set(structuralKey, canonical);
    }

    return canonical;
  }
}
