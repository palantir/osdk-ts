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

import type { WhereClause } from "../aggregate/WhereClause.js";

export interface RecursiveOptions {
  /** default 10; "unbounded" allowed only because of streaming + maxNodes. */
  maxDepth: number | "unbounded";
  /** hard work budget; depth alone does not bound a client-driven BFS. default 1000. */
  maxNodes: number;
}

/** A single decorated hop. Plain data, structurally hashable. */
export interface LinkHopDescriptor {
  readonly sourceTypeApiName: string;
  readonly linkApiName: string;
  readonly targetTypeApiName: string;
  /** false = "one", true = "many". */
  readonly multiplicity: boolean;
  /** true when the source type is an interface (needs WS1 resolution per concrete type). */
  readonly sourceIsInterface: boolean;
  readonly where?: WhereClause<never>;
  readonly orderBy?: ReadonlyArray<
    { property: string; direction: "asc" | "desc" }
  >;
  readonly limit?: number;
  /** projection shape id, if .project() was called. */
  readonly projectShapeId?: string;
}

export type LinkTraversalKind = "single" | "path" | "recursive";

export interface LinkTraversalDescriptor {
  readonly kind: LinkTraversalKind;
  /** length 1 for single/recursive; >1 for path. Pairwise adjacency is pre-validated by the builder. */
  readonly hops: ReadonlyArray<LinkHopDescriptor>;
  /** present iff kind === "recursive". */
  readonly recursive?: RecursiveOptions;
}
