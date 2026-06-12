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

import type { ObjectRef } from "./ObjectRef.js";
import { objectRefKey } from "./ObjectRef.js";

/**
 * Map keyed structurally by {@link ObjectRef}. A plain `Map<ObjectRef, V>`
 * keyed by object identity will not dedupe structurally-equal refs, so this
 * wrapper keys by {@link objectRefKey} while preserving the original ref.
 */
export class ObjectRefMap<V> {
  readonly #m = new Map<string, { ref: ObjectRef; value: V }>();

  get size(): number {
    return this.#m.size;
  }

  get(ref: ObjectRef): V | undefined {
    return this.#m.get(objectRefKey(ref))?.value;
  }

  has(ref: ObjectRef): boolean {
    return this.#m.has(objectRefKey(ref));
  }

  set(ref: ObjectRef, value: V): this {
    this.#m.set(objectRefKey(ref), { ref, value });
    return this;
  }

  delete(ref: ObjectRef): boolean {
    return this.#m.delete(objectRefKey(ref));
  }

  keys(): ObjectRef[] {
    return [...this.#m.values()].map((e) => e.ref);
  }

  entries(): Array<[ObjectRef, V]> {
    return [...this.#m.values()].map((e) => [e.ref, e.value]);
  }

  forEach(fn: (value: V, ref: ObjectRef) => void): void {
    for (const e of this.#m.values()) {
      fn(e.value, e.ref);
    }
  }
}
