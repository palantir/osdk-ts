/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectRef } from "@osdk/api";
import { ObjectRefMap } from "@osdk/api";
import type { SpecificLinkCacheKey } from "./SpecificLinkCacheKey.js";

/**
 * Reverse index from a source object to the `specificLink` cache keys that read
 * outgoing links from it.
 *
 * `specificLink` queries are keyed on `(srcType, srcPk, linkName, ...)` rather
 * than on the linked (target) object's primary key, so per-object change
 * propagation never reaches them. When an action edits a known object we use
 * this index to find exactly the link records whose source was touched and
 * revalidate only those, instead of walking every cached link query.
 *
 * Mirrors {@link ObjectCacheKeyRegistry}: a link query registers when created
 * and unregisters when its cache key is cleaned up.
 */
export class SpecificLinkCacheKeyRegistry {
  /** Source object -> the set of link records that read from it. */
  readonly #sourceToLinks = new ObjectRefMap<Set<SpecificLinkCacheKey>>();

  /** Link record -> the source it was registered under (for unregister). */
  readonly #linkToSource = new WeakMap<SpecificLinkCacheKey, ObjectRef>();

  /**
   * Register a link record under its source object.
   */
  register(cacheKey: SpecificLinkCacheKey, sourceRef: ObjectRef): void {
    this.#linkToSource.set(cacheKey, sourceRef);

    let links = this.#sourceToLinks.get(sourceRef);
    if (!links) {
      links = new Set();
      this.#sourceToLinks.set(sourceRef, links);
    }
    links.add(cacheKey);
  }

  /**
   * Get every link record currently registered for a source object.
   */
  getLinksForSource(sourceRef: ObjectRef): Set<SpecificLinkCacheKey> {
    return new Set(this.#sourceToLinks.get(sourceRef) ?? []);
  }

  /**
   * Unregister a link record when its cache key is being cleaned up.
   */
  unregister(cacheKey: SpecificLinkCacheKey): void {
    const sourceRef = this.#linkToSource.get(cacheKey);
    if (!sourceRef) {
      return;
    }

    const links = this.#sourceToLinks.get(sourceRef);
    if (links) {
      links.delete(cacheKey);
      if (links.size === 0) {
        this.#sourceToLinks.delete(sourceRef);
      }
    }

    this.#linkToSource.delete(cacheKey);
  }
}
