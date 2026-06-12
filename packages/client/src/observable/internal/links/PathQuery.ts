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

/** Settled result of a multi-hop path traversal: deduped endpoints only. */
export interface PathPayload<I = ObjectHolder | InterfaceHolder> {
  /** deduped endpoint refs reachable across the full path. */
  data: ObjectRef[];
  /** resolved instances for every ref in {@link PathPayload.data}. */
  instances: ObjectRefMap<I>;
  status: Status;
  isOptimistic: boolean;
  error: Error | undefined;
  lastUpdated: number;
}

export interface PathQueryConfig<I = ObjectHolder | InterfaceHolder> {
  root: ObjectRef;
  /** the chained hops, left to right; length > 1 for a real path. */
  hops: ReadonlyArray<LinkHopDescriptor>;
  resolveLink(
    concreteType: string,
    interfaceLinkApiName: string,
    hop: LinkHopDescriptor,
  ): Promise<ResolvedLink>;
  fetchLinks(
    concreteType: string,
    concreteLinkApiName: string,
    sources: ReadonlyArray<ObjectRef>,
    hop: LinkHopDescriptor,
    signal?: AbortSignal,
  ): Promise<ObjectRefMap<ReadonlyArray<ExpandedChild<I>>>>;
  emit: (payload: PathPayload<I>) => void;
  /**
   * Whether the endpoint at `ref` currently sits on an optimistic layer. The
   * path becomes optimistic when any endpoint is optimistically edited.
   */
  isOptimistic(ref: ObjectRef): boolean;
  /** defaults to {@link ClientDrivenBfsExpansion}. */
  expansion?: ClosureExpansion<I>;
}

/**
 * Drives a multi-hop `.then()` path traversal as a sequence of single-hop,
 * multi-source expansions.
 *
 * Each hop is exactly one {@link ClientDrivenBfsExpansion.expandLevel} over the
 * previous hop's endpoint set, applying that hop's own `where`/`orderBy`/`limit`
 * via the per-hop {@link ExpansionContext}. The deduped children of one hop are
 * carried forward as the source set of the next. Only the final hop's endpoints
 * are returned (intermediate nodes are dropped); any `"many"` hop makes the
 * whole path `"many"`. A single snapshot is emitted once the last hop settles
 * (no per-hop streaming).
 */
export class PathQuery<I = ObjectHolder | InterfaceHolder> {
  readonly #root: ObjectRef;
  readonly #hops: ReadonlyArray<LinkHopDescriptor>;
  readonly #expansion: ClosureExpansion<I>;
  readonly #config: PathQueryConfig<I>;

  #data: ObjectRef[] = [];
  readonly #instances = new ObjectRefMap<I>();
  #error: Error | undefined;
  #lastUpdated = 0;

  constructor(config: PathQueryConfig<I>) {
    this.#root = config.root;
    this.#hops = config.hops;
    this.#expansion = config.expansion ?? new ClientDrivenBfsExpansion<I>();
    this.#config = config;
  }

  /** Runs every hop left to right and emits the settled endpoint set. */
  async run(): Promise<void> {
    let frontier: ObjectRef[] = [this.#root];

    for (let i = 0; i < this.#hops.length; i++) {
      const hop = this.#hops[i];
      const isLastHop = i === this.#hops.length - 1;
      const childrenByParent = await this.#expansion.expandLevel(
        frontier,
        hop,
        this.#ctxFor(hop),
      );

      // Dedupe children across every source in the frontier so a node reachable
      // through multiple branches is carried forward (and returned) once.
      const seen = new Set<string>();
      const next: ObjectRef[] = [];
      for (const parent of frontier) {
        const children = childrenByParent.get(parent) ?? [];
        for (const childNode of children) {
          const key = objectRefKey(childNode.ref);
          if (seen.has(key)) {
            continue;
          }
          seen.add(key);
          next.push(childNode.ref);
          if (isLastHop) {
            this.#instances.set(childNode.ref, childNode.instance);
          }
        }
      }

      frontier = next;
      if (frontier.length === 0) {
        break;
      }
    }

    this.#data = frontier;
    this.#lastUpdated = Date.now();
    this.#config.emit(this.snapshot());
  }

  /** Per-hop expansion context that binds the hop's resolve + fetch. */
  #ctxFor(hop: LinkHopDescriptor): ExpansionContext<I> {
    return {
      resolveLink: (concreteType, interfaceLinkApiName) =>
        this.#config.resolveLink(concreteType, interfaceLinkApiName, hop),
      fetchLinks: (concreteType, concreteLinkApiName, sources, signal) =>
        this.#config.fetchLinks(
          concreteType,
          concreteLinkApiName,
          sources,
          hop,
          signal,
        ),
      recordError: (error) => {
        this.#error = error;
      },
    };
  }

  /** Builds a tear-free snapshot (fresh collections) of the settled state. */
  snapshot(): PathPayload<I> {
    return {
      data: [...this.#data],
      instances: cloneRefMap(this.#instances),
      status: this.#error != null ? "error" : "loaded",
      // OR over the settled endpoints: any endpoint on an optimistic layer
      // makes the whole path optimistic.
      isOptimistic: this.#data.some((ref) => this.#config.isOptimistic(ref)),
      error: this.#error,
      lastUpdated: this.#lastUpdated,
    };
  }
}
