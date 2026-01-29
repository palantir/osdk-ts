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

export class RidListCanonicalizer {
  private cache = new Map<string, Canonical<string[]>>();

  canonicalize(rids: readonly string[]): Canonical<string[]> {
    const sorted = [...new Set(rids)].sort();
    const key = sorted.join("\0");

    let canonical = this.cache.get(key);
    if (!canonical) {
      canonical = sorted as Canonical<string[]>;
      this.cache.set(key, canonical);
    }
    return canonical;
  }
}
