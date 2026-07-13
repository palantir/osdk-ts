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

import type { ObjectMetadata } from "@osdk/api";

/**
 * What {@link OntologyGraphModel} needs to load full metadata for a type. Kept
 * to a single method so any metadata source (a live OSDK client, a static
 * ontology dump, a test double) can satisfy it.
 */
export interface OntologyGraphModelDeps {
  fetchObjectMetadata(apiName: string): Promise<ObjectMetadata>;
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

/** One node in the ontology graph. */
export interface OntologyTypeInfo {
  apiName: string;
  displayName: string;
  pluralDisplayName?: string;
  primaryKeyApiName?: string;
  icon?: { color: string; name: string };
  status?: string;
  properties: OntologyPropertyInfo[];
  links: OntologyLinkInfo[];
  /**
   * `used` — explicitly marked as in-use by the caller (e.g. a live app query,
   * or a top-level type in a static ontology dump). A node that only appears
   * as a link target starts as `used: false`.
   */
  used: boolean;
  loadState: "stub" | "loading" | "loaded" | "error";
  error?: string;
}

function makeStub(apiName: string, used: boolean): OntologyTypeInfo {
  return {
    apiName,
    displayName: apiName,
    properties: [],
    links: [],
    used,
    loadState: "stub",
  };
}

/**
 * Builds and maintains a graph of ontology object types for rendering. Nodes
 * are whichever apiNames the caller marks as {@link markUsed}; full metadata
 * (properties + links) is fetched lazily per type via {@link
 * OntologyGraphModelDeps.fetchObjectMetadata}. Link targets are added as stub
 * nodes so edges render, and can be expanded on demand with {@link loadType}.
 *
 * This model has no knowledge of where "used" types come from — that's the
 * caller's job. A React DevTools-style caller might mark a type used the
 * moment a component queries it; a static-ontology-explorer caller might mark
 * every top-level type used immediately after fetching the ontology dump.
 *
 * A small subscribable store, consumed via `useSyncExternalStore`.
 */
export class OntologyGraphModel {
  readonly #store: OntologyGraphModelDeps;
  readonly #types = new Map<string, OntologyTypeInfo>();
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

  getTypes(): OntologyTypeInfo[] {
    return [...this.#types.values()];
  }

  getType(apiName: string): OntologyTypeInfo | undefined {
    return this.#types.get(apiName);
  }

  /** Fetches full metadata for a type (e.g. a link-target stub the user clicked). */
  loadType(apiName: string): void {
    void this.#loadType(apiName);
  }

  /**
   * Marks the given apiNames as used. New apiNames are added as stub nodes and
   * immediately queued for metadata loading; apiNames already known keep their
   * current state except `used` is flipped to `true` if it wasn't already
   * (this never demotes a type back to unused).
   */
  markUsed(apiNames: Iterable<string>): void {
    let changed = false;
    for (const apiName of apiNames) {
      const existing = this.#types.get(apiName);
      if (!existing) {
        this.#types.set(apiName, makeStub(apiName, true));
        changed = true;
        void this.#loadType(apiName);
      } else if (!existing.used) {
        this.#types.set(apiName, { ...existing, used: true });
        changed = true;
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

  async #loadType(apiName: string): Promise<void> {
    if (this.#inFlight.has(apiName)) {
      return;
    }
    const current = this.#types.get(apiName);
    if (current && current.loadState === "loaded") {
      return;
    }
    this.#inFlight.add(apiName);
    this.#setLoadState(apiName, "loading");
    try {
      const metadata = await this.#store.fetchObjectMetadata(apiName);
      this.#applyMetadata(apiName, metadata);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const existing = this.#types.get(apiName) ?? makeStub(apiName, false);
      this.#types.set(apiName, {
        ...existing,
        loadState: "error",
        error: message,
      });
      this.#notify();
    } finally {
      this.#inFlight.delete(apiName);
    }
  }

  #setLoadState(
    apiName: string,
    loadState: OntologyTypeInfo["loadState"],
  ): void {
    const existing = this.#types.get(apiName) ?? makeStub(apiName, false);
    if (existing.loadState === loadState) {
      return;
    }
    this.#types.set(apiName, { ...existing, loadState });
    this.#notify();
  }

  #applyMetadata(apiName: string, metadata: ObjectMetadata): void {
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

    const existing = this.#types.get(apiName) ?? makeStub(apiName, false);
    this.#types.set(apiName, {
      ...existing,
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
      if (!this.#types.has(link.targetType)) {
        this.#types.set(link.targetType, makeStub(link.targetType, false));
      }
    }

    this.#notify();
  }
}
