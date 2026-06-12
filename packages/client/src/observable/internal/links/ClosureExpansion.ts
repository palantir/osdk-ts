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
import { ObjectRefMap } from "@osdk/api";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ResolvedLink } from "../../../ontology/OntologyMetadataClient.js";

/** One resolved child: its canonical ref plus the resolved instance. */
export interface ExpandedChild<I = ObjectHolder | InterfaceHolder> {
  readonly ref: ObjectRef;
  readonly instance: I;
}

/**
 * The capabilities a {@link ClosureExpansion} needs from the surrounding
 * client. Keeping these behind callbacks (rather than reaching into the store
 * directly) makes the expansion strategy unit-testable and lets a future
 * server-side transitive-closure implementation swap in without touching the
 * BFS driver.
 */
export interface ExpansionContext<I = ObjectHolder | InterfaceHolder> {
  /**
   * Resolve an interface link on a concrete type to its concrete link. May
   * reject with {@link InterfaceLinkNotResolvableError} for concrete types that
   * do not implement the link.
   */
  resolveLink(
    concreteType: string,
    interfaceLinkApiName: string,
  ): Promise<ResolvedLink>;
  /**
   * Issue ONE batched link fetch for a set of sources of the same concrete
   * type, returning children grouped by their source ref.
   */
  fetchLinks(
    concreteType: string,
    concreteLinkApiName: string,
    sources: ReadonlyArray<ObjectRef>,
    signal?: AbortSignal,
  ): Promise<ObjectRefMap<ReadonlyArray<ExpandedChild<I>>>>;
  /** Record a non-fatal expansion error (e.g. a concrete type that cannot resolve the link). */
  recordError(error: Error): void;
}

/**
 * Strategy seam for expanding one BFS frontier level into the next. v1 is a
 * client-driven batched BFS ({@link ClientDrivenBfsExpansion}); a server-side
 * transitive-closure expansion can implement the same interface later.
 */
export interface ClosureExpansion<I = ObjectHolder | InterfaceHolder> {
  expandLevel(
    frontier: ReadonlyArray<ObjectRef>,
    hop: LinkHopDescriptor,
    ctx: ExpansionContext<I>,
  ): Promise<ObjectRefMap<ReadonlyArray<ExpandedChild<I>>>>;
}

/**
 * v1 client-driven BFS expansion: partition the frontier by concrete
 * `$objectType`, resolve the (possibly interface) link per concrete type, and
 * issue one batched fetch per concrete type. Concrete types that cannot resolve
 * the link are skipped and recorded via {@link ExpansionContext.recordError}.
 */
export class ClientDrivenBfsExpansion<I = ObjectHolder | InterfaceHolder>
  implements ClosureExpansion<I>
{
  async expandLevel(
    frontier: ReadonlyArray<ObjectRef>,
    hop: LinkHopDescriptor,
    ctx: ExpansionContext<I>,
  ): Promise<ObjectRefMap<ReadonlyArray<ExpandedChild<I>>>> {
    const byType = new Map<string, ObjectRef[]>();
    for (const ref of frontier) {
      const group = byType.get(ref.$objectType);
      if (group == null) {
        byType.set(ref.$objectType, [ref]);
      } else {
        group.push(ref);
      }
    }

    const result = new ObjectRefMap<ReadonlyArray<ExpandedChild<I>>>();

    await Promise.all(
      [...byType.entries()].map(async ([concreteType, sources]) => {
        let resolved: ResolvedLink;
        try {
          resolved = await ctx.resolveLink(concreteType, hop.linkApiName);
        } catch (e) {
          ctx.recordError(e instanceof Error ? e : new Error(String(e)));
          return;
        }

        const childrenBySource = await ctx.fetchLinks(
          concreteType,
          resolved.concreteLinkApiName,
          sources,
        );

        for (const source of sources) {
          result.set(source, childrenBySource.get(source) ?? []);
        }
      }),
    );

    return result;
  }
}
