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

import type { ObjectMetadata } from "@osdk/api";

import type { ComponentQueryRegistry } from "../utils/ComponentQueryRegistry.js";

/**
 * The subset of {@link MonitorStore} the ontology graph needs. Narrowing the
 * dependency keeps the model unit-testable without a full monitor store.
 */
export interface OntologyGraphModelDeps {
  getComponentRegistry(): ComponentQueryRegistry;
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
   * `used` — referenced directly by the app (via a hook).
   * A node that only appears as a link target starts as `used: false`.
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
 * Collects the set of object-type apiNames the app has referenced, from the
 * component/query registry. Covers object/list/aggregation queries (which carry
 * an `objectType`) and link traversals (whose `sourceObject` is a type apiName).
 */
function collectUsedObjectTypes(registry: ComponentQueryRegistry): Set<string> {
  const result = new Set<string>();
  for (const binding of registry.getAllBindings()) {
    const params = binding.queryParams;
    let apiName: string | undefined;
    if (
      params.type === "object" ||
      params.type === "list" ||
      params.type === "aggregation"
    ) {
      apiName = params.objectType;
    } else if (params.type === "links") {
      apiName = params.sourceObject;
    }
    if (apiName && apiName !== "Unknown") {
      result.add(apiName);
    }
  }
  return result;
}

/**
 * Builds and maintains the ontology graph for the devtools Ontology Graph tab.
 *
 * Nodes are the object types the running app references (discovered from the
 * component registry); full metadata (properties + links) is fetched lazily per
 * type via the client. Link targets are added as stub nodes so edges render, and
 * can be expanded on demand with {@link loadType}.
 *
 * This is a small subscribable store, consumed via `useSyncExternalStore`.
 */
export class OntologyGraphModel {
  readonly #store: OntologyGraphModelDeps;
  readonly #types = new Map<string, OntologyTypeInfo>();
  readonly #inFlight = new Set<string>();
  readonly #listeners = new Set<() => void>();
  #version = 0;
  #unsubscribeRegistry: (() => void) | null = null;
  #started = false;

  constructor(store: OntologyGraphModelDeps) {
    this.#store = store;
  }

  start(): void {
    if (this.#started) {
      return;
    }
    this.#started = true;
    const registry = this.#store.getComponentRegistry();
    this.#unsubscribeRegistry = registry.subscribe(() => this.#syncUsedTypes());
    this.#syncUsedTypes();
  }

  stop(): void {
    this.#unsubscribeRegistry?.();
    this.#unsubscribeRegistry = null;
    this.#started = false;
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

  #notify(): void {
    this.#version++;
    for (const listener of this.#listeners) {
      listener();
    }
  }

  #syncUsedTypes(): void {
    const used = collectUsedObjectTypes(this.#store.getComponentRegistry());
    let changed = false;
    for (const apiName of used) {
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
    loadState: OntologyTypeInfo["loadState"]
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
      metadata.properties ?? {}
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
      })
    );

    const existing = this.#types.get(apiName) ?? makeStub(apiName, false);
    this.#types.set(apiName, {
      ...existing,
      displayName: metadata.displayName ?? apiName,
      pluralDisplayName: metadata.pluralDisplayName,
      primaryKeyApiName:
        metadata.primaryKeyApiName != null
          ? String(metadata.primaryKeyApiName)
          : undefined,
      icon:
        metadata.icon != null
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
