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

export interface PivotInfo {
  sourceType: string;
  linkName: string;
  targetType: string;
}

export class PivotCanonicalizer {
  #cache = new Map<string, Canonical<PivotInfo>>();

  canonicalize(sourceType: string, linkName: string): Canonical<PivotInfo> {
    const key = `${sourceType}::${linkName}`;

    let canonical = this.#cache.get(key);

    if (!canonical) {
      canonical = {
        sourceType,
        linkName,
        targetType: "<targetType>",
      } as Canonical<PivotInfo>;
      this.#cache.set(key, canonical);
    }

    return canonical;
  }
}
