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

import type { LinkHopDescriptor, ObjectRef } from "@osdk/api";
import { objectRefKey, ObjectRefMap } from "@osdk/api";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ResolvedLink } from "../../../ontology/OntologyMetadataClient.js";
import type { Status } from "../../ObservableClient/common.js";
import type {
  ClosureExpansion,
  ExpandedChild,
  ExpansionContext,
} from "./ClosureExpansion.js";
import { ClientDrivenBfsExpansion } from "./ClosureExpansion.js";
import { cloneRefMap } from "./refMapUtils.js";

/** Flat, deduped BFS state, all keyed by {@link ObjectRef}. */
export interface ClosureState {
  /** objectRefKey of every node already discovered (root included). */
  visited: Set<string>;
  /** parent -> children, including back-edges to already-visited nodes. */
  adjacency: ObjectRefMap<ObjectRef[]>;
  byDepth: ObjectRefMap<number>;
  /** nodes with potentially-unexpanded children. */
  frontier: ObjectRef[];
  /** flat, deduped, root-excluded discovery order. */
  data: ObjectRef[];
  depthReached: number;
  isExpanding: boolean;
  truncated: { byDepth: boolean; byNodeBudget: boolean };
}

export interface ClosurePayload<I = ObjectHolder | InterfaceHolder>
  extends ClosureState
{
  /** resolved instances for every ref in {@link ClosureState.data}. */
  instances: ObjectRefMap<I>;
  /** extend the closure from one already-discovered node. */
  expand: (ref: ObjectRef) => void;
  status: Status;
  isOptimistic: boolean;
  error: Error | undefined;
  lastUpdated: number;
}

export interface ClosureQueryConfig<I = ObjectHolder | InterfaceHolder> {
  root: ObjectRef;
  hop: LinkHopDescriptor;
  options: { maxDepth: number | "unbounded"; maxNodes: number };
  resolveLink(
    concreteType: string,
    interfaceLinkApiName: string,
  ): Promise<ResolvedLink>;
  fetchLinks(
    concreteType: string,
    concreteLinkApiName: string,
    sources: ReadonlyArray<ObjectRef>,
    signal?: AbortSignal,
  ): Promise<ObjectRefMap<ReadonlyArray<ExpandedChild<I>>>>;
  emit: (payload: ClosurePayload<I>) => void;
  /**
   * Whether the node at `ref` currently sits on an optimistic layer. The
   * closure has no write primitive, so it becomes optimistic when any
   * discovered node is optimistically edited.
   */
  isOptimistic(ref: ObjectRef): boolean;
  /** defaults to {@link ClientDrivenBfsExpansion}. */
  expansion?: ClosureExpansion<I>;
}

/**
 * Drives an incremental, client-side BFS over a recursive link traversal.
 *
 * Canonical storage stays flat (`data` + `adjacency` + `byDepth`); a tree view
 * is derived elsewhere (WS7). The query streams: a snapshot is emitted after
 * each expanded level so callers see data as it arrives.
 */
export class ClosureQuery<I = ObjectHolder | InterfaceHolder> {
  readonly #root: ObjectRef;
  readonly #hop: LinkHopDescriptor;
  readonly #maxDepth: number;
  readonly #maxNodes: number;
  readonly #expansion: ClosureExpansion<I>;
  readonly #ctx: ExpansionContext<I>;
  readonly #emit: (payload: ClosurePayload<I>) => void;
  readonly #isOptimistic: (ref: ObjectRef) => boolean;

  readonly #visited = new Set<string>();
  readonly #adjacency = new ObjectRefMap<ObjectRef[]>();
  readonly #byDepth = new ObjectRefMap<number>();
  readonly #instances = new ObjectRefMap<I>();
  #frontier: ObjectRef[] = [];
  #data: ObjectRef[] = [];
  #depthReached = 0;
  #isExpanding = false;
  readonly #truncated = { byDepth: false, byNodeBudget: false };
  #error: Error | undefined;
  #lastUpdated = 0;

  constructor(config: ClosureQueryConfig<I>) {
    this.#root = config.root;
    this.#hop = config.hop;
    this.#maxDepth = config.options.maxDepth === "unbounded"
      ? Number.POSITIVE_INFINITY
      : config.options.maxDepth;
    this.#maxNodes = config.options.maxNodes;
    this.#expansion = config.expansion ?? new ClientDrivenBfsExpansion<I>();
    this.#emit = config.emit;
    this.#isOptimistic = config.isOptimistic;
    this.#ctx = {
      resolveLink: config.resolveLink,
      fetchLinks: config.fetchLinks,
      recordError: (error) => {
        this.#error = error;
      },
    };

    this.#visited.add(objectRefKey(this.#root));
    this.#byDepth.set(this.#root, 0);
    this.#frontier = [this.#root];
  }

  /** Runs the BFS from the root frontier to completion. */
  async run(): Promise<void> {
    let toExpand = this.#frontier;
    let depth = 0;

    while (
      toExpand.length > 0
      && depth < this.#maxDepth
      && !this.#truncated.byNodeBudget
    ) {
      this.#isExpanding = true;
      const childrenByParent = await this.#expansion.expandLevel(
        toExpand,
        this.#hop,
        this.#ctx,
      );

      const next: ObjectRef[] = [];
      for (const parent of toExpand) {
        const children = childrenByParent.get(parent) ?? [];
        const adjacency: ObjectRef[] = [];
        for (const childNode of children) {
          adjacency.push(childNode.ref);
          if (!this.#addNode(childNode, depth + 1)) {
            continue;
          }
          next.push(childNode.ref);
        }
        this.#adjacency.set(parent, adjacency);
      }

      depth += 1;
      this.#depthReached = depth;
      this.#frontier = next;
      this.#lastUpdated = Date.now();

      if (depth >= this.#maxDepth && next.length > 0) {
        this.#truncated.byDepth = true;
      }

      const willContinue = next.length > 0
        && depth < this.#maxDepth
        && !this.#truncated.byNodeBudget;
      this.#isExpanding = willContinue;
      this.#emit(this.snapshot());

      toExpand = next;
    }

    if (this.#isExpanding) {
      this.#isExpanding = false;
      this.#emit(this.snapshot());
    }
  }

  /** Extends the closure from one already-discovered node, reusing `visited`. */
  async expand(ref: ObjectRef): Promise<void> {
    this.#isExpanding = true;
    const parentDepth = this.#byDepth.get(ref) ?? 0;
    const childrenByParent = await this.#expansion.expandLevel(
      [ref],
      this.#hop,
      this.#ctx,
    );
    const children = childrenByParent.get(ref) ?? [];

    const adjacency: ObjectRef[] = [];
    const newlyExpandable: ObjectRef[] = [];
    for (const childNode of children) {
      adjacency.push(childNode.ref);
      if (!this.#addNode(childNode, parentDepth + 1)) {
        continue;
      }
      newlyExpandable.push(childNode.ref);
    }
    this.#adjacency.set(ref, adjacency);

    this.#frontier = [
      ...this.#frontier.filter((f) => objectRefKey(f) !== objectRefKey(ref)),
      ...newlyExpandable,
    ];
    if (parentDepth + 1 > this.#depthReached) {
      this.#depthReached = parentDepth + 1;
    }
    this.#lastUpdated = Date.now();
    this.#isExpanding = false;
    this.#emit(this.snapshot());
  }

  /**
   * Adds a discovered child to the closure unless it was already visited (cycle
   * / shared parent) or the node budget is exhausted. Returns whether the node
   * was newly added (and thus should join the next frontier).
   */
  #addNode(childNode: ExpandedChild<I>, depth: number): boolean {
    const key = objectRefKey(childNode.ref);
    if (this.#visited.has(key)) {
      return false;
    }
    if (this.#data.length >= this.#maxNodes) {
      this.#truncated.byNodeBudget = true;
      return false;
    }
    this.#visited.add(key);
    this.#data.push(childNode.ref);
    this.#instances.set(childNode.ref, childNode.instance);
    this.#byDepth.set(childNode.ref, depth);
    return true;
  }

  /** Builds a tear-free snapshot (fresh collections) of the current state. */
  snapshot(): ClosurePayload<I> {
    const adjacency = new ObjectRefMap<ObjectRef[]>();
    for (const [ref, children] of this.#adjacency.entries()) {
      adjacency.set(ref, [...children]);
    }
    return {
      visited: new Set(this.#visited),
      adjacency,
      byDepth: cloneRefMap(this.#byDepth),
      frontier: [...this.#frontier],
      data: [...this.#data],
      depthReached: this.#depthReached,
      isExpanding: this.#isExpanding,
      truncated: { ...this.#truncated },
      instances: cloneRefMap(this.#instances),
      expand: (ref) => {
        void this.expand(ref);
      },
      status: this.#error != null
        ? "error"
        : this.#isExpanding
        ? "loading"
        : "loaded",
      // OR over every discovered node (root included): an optimistic edit to
      // any node in the closure makes the whole closure optimistic.
      isOptimistic: this.#isOptimistic(this.#root)
        || this.#data.some((ref) => this.#isOptimistic(ref)),
      error: this.#error,
      lastUpdated: this.#lastUpdated,
    };
  }
}
