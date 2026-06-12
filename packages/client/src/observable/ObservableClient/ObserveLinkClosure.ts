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
  ObjectRefMap,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import type { Unsubscribable } from "../Unsubscribable.js";
import type { Observer, Status } from "./common.js";

export namespace ObserveLinkClosure {
  /**
   * Options for observing the recursive closure of a self-referential link.
   *
   * The closure is driven as an incremental, client-side BFS: a snapshot is
   * emitted to the observer after each expanded level.
   */
  export interface Options {
    /** The node the BFS starts from. Excluded from the flat `data` result. */
    root: ObjectRef;
    /** The single decorated hop that is followed recursively. */
    hop: LinkHopDescriptor;
    /**
     * Maximum BFS depth. `"unbounded"` is allowed only because streaming plus
     * `maxNodes` keeps the traversal bounded.
     */
    maxDepth: number | "unbounded";
    /** Hard work budget; depth alone does not bound a client-driven BFS. */
    maxNodes: number;
  }

  /**
   * User facing callback args for `observeLinkClosure`. Canonical storage stays
   * flat (`data` + `adjacency` + `byDepth`); a tree view is derived elsewhere.
   */
  export interface CallbackArgs<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  > {
    /** flat, deduped, root-excluded discovery order, resolved to instances. */
    data: Osdk.Instance<T, "$allBaseProperties">[];
    /** parent -> children, including back-edges to already-visited nodes. */
    adjacency: ObjectRefMap<ObjectRef[]>;
    /** depth (root = 0) of every discovered node. */
    byDepth: ObjectRefMap<number>;
    /** nodes with potentially-unexpanded children. */
    frontier: ObjectRef[];
    /** deepest level reached so far. */
    depthReached: number;
    /** true while a level is still being expanded. */
    isExpanding: boolean;
    truncated: { byDepth: boolean; byNodeBudget: boolean };
    /** extend the closure from one already-discovered node. */
    expand: (ref: ObjectRef) => void;
    isOptimistic: boolean;
    status: Status;
    error: Error | undefined;
    lastUpdated: number;
  }
}

export interface ObserveLinkClosure {
  /**
   * Observe the recursive closure of a self-referential link from a root node.
   *
   * Streams: the observer receives a snapshot after each expanded BFS level so
   * data can render as it arrives.
   */
  observeLinkClosure<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    options: ObserveLinkClosure.Options,
    subFn: Observer<ObserveLinkClosure.CallbackArgs<T>>,
  ): Unsubscribable;
}
