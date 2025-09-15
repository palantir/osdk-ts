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

import type { Logger } from "@osdk/api";
import { BehaviorSubject } from "rxjs";
import { createInitEntry } from "./createInitEntry.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Entry } from "./Layer.js";
import { type Layers } from "./Layers.js";
import type { SubjectPayload } from "./SubjectPayload.js";

export class Subjects {
  #layers: Layers;

  // we can use a regular Map here because the refCounting will
  // handle cleanup.
  #cacheKeyToSubject = new WeakMap<
    KnownCacheKey,
    BehaviorSubject<SubjectPayload<any>>
  >();

  logger?: Logger;

  constructor({ logger, layers }: { logger?: Logger; layers: Layers }) {
    this.logger = logger;
    this.#layers = layers;
  }

  peek = <KEY extends KnownCacheKey>(
    cacheKey: KEY,
  ):
    | BehaviorSubject<SubjectPayload<KEY>>
    | undefined =>
  {
    return this.#cacheKeyToSubject.get(cacheKey);
  };

  get = <KEY extends KnownCacheKey>(
    cacheKey: KEY,
  ): BehaviorSubject<SubjectPayload<KEY>> => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      const initialValue: Entry<KEY> = this.#layers.top.get(cacheKey)
        ?? createInitEntry(cacheKey);

      subject = new BehaviorSubject({
        ...initialValue,
        isOptimistic:
          initialValue.value !== this.#layers.truth.get(cacheKey)?.value,
      });
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }

    return subject;
  };

  delete = <KEY extends KnownCacheKey>(
    cacheKey: KEY,
  ): void => {
    const subject = this.peek(cacheKey);
    if (subject) {
      subject.complete();
      this.#cacheKeyToSubject.delete(cacheKey);
    }
  };
}
