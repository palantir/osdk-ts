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

import type { ActionMetadata, ObjectMetadata, QueryMetadata } from "@osdk/api";

/**
 * What {@link OntologyGraphModel} needs to load full metadata for each entity
 * kind. Kept to per-kind methods so any source (a live OSDK client, a static
 * ontology dump, a test double) can satisfy it.
 */
export interface OntologyGraphModelDeps {
  fetchObjectMetadata(apiName: string): Promise<ObjectMetadata>;
  fetchActionMetadata(apiName: string): Promise<ActionMetadata>;
  fetchQueryMetadata(apiName: string): Promise<QueryMetadata>;
}

/** The kinds of ontology entity the graph renders. */
export type OntologyEntityKind = "object" | "action" | "query";

/** Identifies one entity across kinds (an action and object can share a name). */
export interface OntologyEntityRef {
  kind: OntologyEntityKind;
  apiName: string;
}

/** Node id for an entity — unique across kinds. */
export function entityNodeId(ref: OntologyEntityRef): string {
  return `${ref.kind}:${ref.apiName}`;
}

export interface OntologyPropertyInfo {
  apiName: string;
  displayName?: string;
  type: string;
  nullable: boolean;
  multiplicity: boolean;
}

export interface OntologyLinkInfo {
  /** The link's own apiName (edge label). */
  apiName: string;
  targetType: string;
  multiplicity: boolean;
}

export interface OntologyParameterInfo {
  name: string;
  type: string;
}

/** An object type an action creates or modifies (an action -> object edge). */
export interface OntologyActionOperation {
  targetType: string;
  operation: "create" | "modify";
}

interface OntologyEntityBase {
  kind: OntologyEntityKind;
  apiName: string;
  displayName: string;
  /**
   * `used` — explicitly marked in-use by the caller (a live app query/action,
   * or any entity in a static ontology dump). An entity that only appears as a
   * link/operation target starts as `used: false`.
   */
  used: boolean;
  loadState: "stub" | "loading" | "loaded" | "error";
  error?: string;
}

/** One object-type node in the graph. */
export interface OntologyTypeInfo extends OntologyEntityBase {
  kind: "object";
  pluralDisplayName?: string;
  primaryKeyApiName?: string;
  icon?: { color: string; name: string };
  status?: string;
  properties: OntologyPropertyInfo[];
  links: OntologyLinkInfo[];
}

/** One action-type node in the graph. */
export interface OntologyActionInfo extends OntologyEntityBase {
  kind: "action";
  parameters: OntologyParameterInfo[];
  operations: OntologyActionOperation[];
}

/** One query-type node in the graph. */
export interface OntologyQueryInfo extends OntologyEntityBase {
  kind: "query";
  parameters: OntologyParameterInfo[];
  output: string;
}

export type OntologyEntity =
  | OntologyTypeInfo
  | OntologyActionInfo
  | OntologyQueryInfo;

function describeDataType(type: unknown): string {
  if (typeof type === "string") {
    return type;
  }
  if (type != null && typeof type === "object" && "type" in type) {
    const inner = type.type;
    if (typeof inner === "string") {
      return inner;
    }
  }
  return "value";
}

function makeStub(ref: OntologyEntityRef, used: boolean): OntologyEntity {
  const base = {
    apiName: ref.apiName,
    displayName: ref.apiName,
    used,
    loadState: "stub" as const,
  };
  switch (ref.kind) {
    case "action":
      return { ...base, kind: "action", parameters: [], operations: [] };
    case "query":
      return { ...base, kind: "query", parameters: [], output: "" };
    case "object":
      return { ...base, kind: "object", properties: [], links: [] };
  }
}

/**
 * Builds and maintains a graph of ontology entities (object, action and query
 * types) for rendering. Entities are whichever the caller marks {@link
 * markUsed}; full metadata is fetched lazily per entity via {@link
 * OntologyGraphModelDeps}. An object referenced by a link or an action
 * operation is added as a stub node so its edge renders, and can be expanded on
 * demand with {@link loadEntity}.
 *
 * This model has no knowledge of where "used" entities come from — that's the
 * caller's job. A React DevTools-style caller marks entities used as components
 * query them; a static-ontology-explorer caller marks every entity in the dump.
 *
 * A small subscribable store, consumed via `useSyncExternalStore`.
 */
export class OntologyGraphModel {
  readonly #store: OntologyGraphModelDeps;
  readonly #entities = new Map<string, OntologyEntity>();
  readonly #inFlight = new Set<string>();
  readonly #listeners = new Set<() => void>();
  #version = 0;

  constructor(store: OntologyGraphModelDeps) {
    this.#store = store;
  }

  subscribe(listener: () => void): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  getVersion(): number {
    return this.#version;
  }

  getEntities(): OntologyEntity[] {
    return [...this.#entities.values()];
  }

  getEntity(ref: OntologyEntityRef): OntologyEntity | undefined {
    return this.#entities.get(entityNodeId(ref));
  }

  getEntityByNodeId(nodeId: string): OntologyEntity | undefined {
    return this.#entities.get(nodeId);
  }

  /** Fetches full metadata for an entity (e.g. a stub the user clicked). */
  loadEntity(ref: OntologyEntityRef): void {
    void this.#loadEntity(ref);
  }

  /**
   * Marks the given entities as used. New refs are added as stub nodes and
   * queued for metadata loading; known refs keep their state except `used` is
   * flipped to `true` if it wasn't (this never demotes an entity to unused).
   */
  markUsed(refs: Iterable<OntologyEntityRef>): void {
    let changed = false;
    for (const ref of refs) {
      const id = entityNodeId(ref);
      const existing = this.#entities.get(id);
      if (!existing) {
        this.#entities.set(id, makeStub(ref, true));
        changed = true;
        void this.#loadEntity(ref);
      } else if (!existing.used) {
        this.#entities.set(id, { ...existing, used: true });
        changed = true;
        // A stub that was only an edge target and is now used should load its
        // full metadata, matching a freshly-used entity (which loads on add).
        if (existing.loadState === "stub") {
          void this.#loadEntity(ref);
        }
      }
    }
    if (changed) {
      this.#notify();
    }
  }

  #notify(): void {
    this.#version++;
    for (const listener of this.#listeners) {
      listener();
    }
  }

  async #loadEntity(ref: OntologyEntityRef): Promise<void> {
    const id = entityNodeId(ref);
    if (this.#inFlight.has(id)) {
      return;
    }
    const current = this.#entities.get(id);
    if (current && current.loadState === "loaded") {
      return;
    }
    this.#inFlight.add(id);
    this.#setLoadState(ref, "loading");
    try {
      switch (ref.kind) {
        case "object":
          this.#applyObject(
            ref.apiName,
            await this.#store.fetchObjectMetadata(ref.apiName),
          );
          break;
        case "action":
          this.#applyAction(
            ref.apiName,
            await this.#store.fetchActionMetadata(ref.apiName),
          );
          break;
        case "query":
          this.#applyQuery(
            ref.apiName,
            await this.#store.fetchQueryMetadata(ref.apiName),
          );
          break;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const existing = this.#entities.get(id) ?? makeStub(ref, false);
      this.#entities.set(id, {
        ...existing,
        loadState: "error",
        error: message,
      });
      this.#notify();
    } finally {
      this.#inFlight.delete(id);
    }
  }

  #setLoadState(
    ref: OntologyEntityRef,
    loadState: OntologyEntity["loadState"],
  ): void {
    const id = entityNodeId(ref);
    const existing = this.#entities.get(id) ?? makeStub(ref, false);
    if (existing.loadState === loadState) {
      return;
    }
    this.#entities.set(id, { ...existing, loadState });
    this.#notify();
  }

  #addObjectStub(apiName: string): void {
    const id = entityNodeId({ kind: "object", apiName });
    if (!this.#entities.has(id)) {
      this.#entities.set(id, makeStub({ kind: "object", apiName }, false));
    }
  }

  #applyObject(apiName: string, metadata: ObjectMetadata): void {
    const properties: OntologyPropertyInfo[] = Object.entries(
      metadata.properties ?? {},
    ).map(([propApiName, prop]) => ({
      apiName: propApiName,
      displayName: prop.displayName,
      type: String(prop.type),
      nullable: prop.nullable ?? false,
      multiplicity: prop.multiplicity ?? false,
    }));

    const links: OntologyLinkInfo[] = Object.entries(metadata.links ?? {}).map(
      ([linkApiName, link]) => ({
        apiName: linkApiName,
        targetType: link.targetType,
        multiplicity: link.multiplicity,
      }),
    );

    const existing = this.#entities.get(
      entityNodeId({ kind: "object", apiName }),
    );
    this.#entities.set(entityNodeId({ kind: "object", apiName }), {
      kind: "object",
      apiName,
      used: existing?.used ?? false,
      displayName: metadata.displayName ?? apiName,
      pluralDisplayName: metadata.pluralDisplayName,
      primaryKeyApiName: metadata.primaryKeyApiName != null
        ? String(metadata.primaryKeyApiName)
        : undefined,
      icon: metadata.icon != null
        ? { color: metadata.icon.color, name: metadata.icon.name }
        : undefined,
      status: metadata.status,
      properties,
      links,
      loadState: "loaded",
      error: undefined,
    });

    // Add link targets as stub nodes so their edges render.
    for (const link of links) {
      this.#addObjectStub(link.targetType);
    }

    this.#notify();
  }

  #applyAction(apiName: string, metadata: ActionMetadata): void {
    const parameters: OntologyParameterInfo[] = Object.entries(
      metadata.parameters ?? {},
    ).map(([name, param]) => ({ name, type: describeDataType(param.type) }));

    const operations: OntologyActionOperation[] = Object.entries(
      metadata.modifiedEntities ?? {},
    ).flatMap(([targetType, mod]) => {
      const result: OntologyActionOperation[] = [];
      if (mod?.created) {
        result.push({ targetType, operation: "create" });
      }
      if (mod?.modified) {
        result.push({ targetType, operation: "modify" });
      }
      return result;
    });

    const existing = this.#entities.get(
      entityNodeId({ kind: "action", apiName }),
    );
    this.#entities.set(entityNodeId({ kind: "action", apiName }), {
      kind: "action",
      apiName,
      used: existing?.used ?? false,
      displayName: metadata.displayName ?? apiName,
      parameters,
      operations,
      loadState: "loaded",
      error: undefined,
    });

    for (const operation of operations) {
      this.#addObjectStub(operation.targetType);
    }

    this.#notify();
  }

  #applyQuery(apiName: string, metadata: QueryMetadata): void {
    const parameters: OntologyParameterInfo[] = Object.entries(
      metadata.parameters ?? {},
    ).map(([name, param]) => ({ name, type: describeDataType(param.type) }));

    const existing = this.#entities.get(
      entityNodeId({ kind: "query", apiName }),
    );
    this.#entities.set(entityNodeId({ kind: "query", apiName }), {
      kind: "query",
      apiName,
      used: existing?.used ?? false,
      displayName: metadata.displayName ?? apiName,
      parameters,
      output: describeDataType(metadata.output),
      loadState: "loaded",
      error: undefined,
    });

    this.#notify();
  }
}
