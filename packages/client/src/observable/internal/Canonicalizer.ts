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

/**
 * Interface for canonicalizing objects to ensure structural equality
 * maps to reference equality.
 */
export interface Canonicalizer<TInput, TCanonical> {
  /**
   * Canonicalizes the input object. Returns the same reference for
   * structurally identical inputs.
   */
  canonicalize(input: TInput | undefined): Canonical<TCanonical> | undefined;
}

/**
 * Base class for canonicalizers that provides common caching infrastructure.
 * Subclasses control how structural deduplication is performed.
 */
export abstract class CachingCanonicalizer<TInput extends object, TCanonical>
  implements Canonicalizer<TInput, TCanonical>
{
  /**
   * Cache for input object identity.
   */
  protected inputCache: WeakMap<TInput, Canonical<TCanonical>> = new WeakMap<
    TInput,
    Canonical<TCanonical>
  >();

  /**
   * Look up or create a canonical form for the given input.
   * This method handles the structural deduplication logic.
   *
   * @param input The input to canonicalize
   * @returns The canonical form
   */
  protected abstract lookupOrCreate(input: TInput): Canonical<TCanonical>;

  canonicalize(input: TInput): Canonical<TCanonical>;
  canonicalize(input: TInput | undefined): Canonical<TCanonical> | undefined;
  canonicalize(input: TInput | undefined): Canonical<TCanonical> | undefined {
    if (!input) {
      return undefined;
    }
    if (this.inputCache.has(input)) {
      return this.inputCache.get(input)!;
    }

    const canonical = this.lookupOrCreate(input);
    this.inputCache.set(input, canonical);

    return canonical;
  }
}
