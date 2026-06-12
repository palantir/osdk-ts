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

import type {
  InterfaceDefinition,
  LinkHopDescriptor,
  ObjectRef,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import type { Unsubscribable } from "../Unsubscribable.js";
import type { Observer, Status } from "./common.js";

export namespace ObservePath {
  /**
   * Options for observing a multi-hop `.then()` path traversal.
   *
   * The path is driven as a sequence of single-hop, multi-source expansions: the
   * deduped endpoints of one hop become the source set of the next. Only the
   * final hop's endpoints are surfaced; intermediate nodes are dropped.
   */
  export interface Options {
    /** The node the traversal starts from. Excluded from the `data` result. */
    root: ObjectRef;
    /** The chained hops, left to right; length > 1 for a real path. */
    hops: ReadonlyArray<LinkHopDescriptor>;
  }

  /** User facing callback args for `observePath`: deduped endpoints only. */
  export interface CallbackArgs<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  > {
    /** deduped endpoint instances reachable across the full path. */
    data: Osdk.Instance<T, "$allBaseProperties">[];
    isOptimistic: boolean;
    status: Status;
    error: Error | undefined;
    lastUpdated: number;
  }
}

export interface ObservePath {
  /**
   * Observe a multi-hop `.then()` path traversal from a root node.
   *
   * A single snapshot is emitted once the last hop settles (no per-hop
   * streaming). Any `"many"` hop makes the whole path `"many"`.
   */
  observePath<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    options: ObservePath.Options,
    subFn: Observer<ObservePath.CallbackArgs<T>>,
  ): Unsubscribable;
}
