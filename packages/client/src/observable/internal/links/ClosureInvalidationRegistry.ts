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

/**
 * A live closure that can re-expand a single node in response to an edge change
 * sourced at that node. Satisfied structurally by {@link ClosureQuery}.
 */
export interface ClosureParticipant {
  expand(ref: ObjectRef): void | Promise<void>;
}

/**
 * Reverse index from a source object to the live link closures that contain it
 * as an expanded node.
 *
 * A closure built by client-driven BFS holds an adjacency entry for every node
 * it has expanded. When an edge sourced at one of those nodes changes, the
 * closure must re-read just that node's children rather than rebuild from the
 * root. This index lets {@link Store} route a per-object invalidation to the
 * `expand(parentRef)` of every closure that participates in it.
 *
 * Mirrors {@link SpecificLinkCacheKeyRegistry}: a closure registers each node it
 * discovers and unregisters them when the traversal is torn down.
 */
export class ClosureInvalidationRegistry {
  /** Source object -> the set of live closures that expanded it. */
  readonly #sourceToClosures = new ObjectRefMap<Set<ClosureParticipant>>();

  /**
   * Register a closure as a participant for a source object it has expanded.
   */
  register(sourceRef: ObjectRef, participant: ClosureParticipant): void {
    let closures = this.#sourceToClosures.get(sourceRef);
    if (!closures) {
      closures = new Set();
      this.#sourceToClosures.set(sourceRef, closures);
    }
    closures.add(participant);
  }

  /**
   * Stop routing invalidations for a source object to a closure that no longer
   * participates in it (e.g. the traversal was torn down).
   */
  unregister(sourceRef: ObjectRef, participant: ClosureParticipant): void {
    const closures = this.#sourceToClosures.get(sourceRef);
    if (!closures) {
      return;
    }
    closures.delete(participant);
    if (closures.size === 0) {
      this.#sourceToClosures.delete(sourceRef);
    }
  }

  /**
   * Re-expand just the affected node in every live closure that contains the
   * edited source. No-op when no live closure participates in it.
   */
  async invalidateSource(sourceRef: ObjectRef): Promise<void> {
    const closures = this.#sourceToClosures.get(sourceRef);
    if (!closures || closures.size === 0) {
      return;
    }
    const promises: Array<void | Promise<void>> = [];
    for (const participant of closures) {
      promises.push(participant.expand(sourceRef));
    }
    await Promise.all(promises);
  }
}
