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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
import {
  InterfaceLinkNotResolvableError,
  OntologyMetadataNotFoundError,
} from "./errors/InterfaceLinkErrors.js";

export interface ResolvedLink {
  readonly concreteLinkApiName: string;
  /** Concrete or interface target apiName. */
  readonly targetType: string;
  /** false = "one", true = "many". */
  readonly multiplicity: boolean;
}

/**
 * Narrow read surface the metadata client depends on. The full
 * {@link OntologyProvider} structurally satisfies this, so the real provider
 * can be passed directly while tests can supply a minimal stub.
 */
export interface OntologyMetadataSource {
  getInterfaceDefinition(
    apiName: string,
  ): Promise<{ apiName: string; implementedBy?: ReadonlyArray<string> }>;
  getObjectDefinition(
    apiName: string,
  ): Promise<{
    apiName: string;
    links: Record<string, { targetType: string; multiplicity: boolean }>;
    interfaceLinkMap?: Record<string, Record<string, string>>;
  }>;
}

export interface OntologyMetadataClient {
  /** Concrete object type apiNames implementing the interface. */
  implementationsOf(iface: InterfaceDefinition | string): Promise<string[]>;
  /** Whether a concrete object type implements the interface. */
  implements(
    objectTypeApiName: string,
    iface: InterfaceDefinition | string,
  ): Promise<boolean>;
  /**
   * Resolve an interface link on a concrete type to its concrete link.
   * Throws {@link InterfaceLinkNotResolvableError} if the concrete type does not
   * implement that interface link (interface evolution / per-type gaps).
   */
  resolveLink(
    concreteType: ObjectTypeDefinition | string,
    interfaceLinkApiName: string,
  ): Promise<ResolvedLink>;
}

function apiNameOf(value: { apiName: string } | string): string {
  return typeof value === "string" ? value : value.apiName;
}

/**
 * Creates the `client.ontologyMetadata` discovery surface.
 *
 * `versionKey` resolves a cache-busting token for the active ontology. v1 keys
 * by ontology rid + branch (see `ontologyVersionKey`); when the token changes,
 * memoized results are dropped so a mid-session ontology edit cannot surface
 * stale interface-link resolution. A live per-request ontology version token is
 * a v2 refinement left as the `versionKey` seam.
 */
export function createOntologyMetadataClient(
  source: OntologyMetadataSource,
  versionKey: () => Promise<string>,
): OntologyMetadataClient {
  let cachedVersion: string | undefined;
  const implementationsCache = new Map<string, Promise<string[]>>();

  async function resetIfVersionChanged(): Promise<void> {
    const version = await versionKey();
    if (version !== cachedVersion) {
      cachedVersion = version;
      implementationsCache.clear();
    }
  }

  async function implementationsOf(
    iface: InterfaceDefinition | string,
  ): Promise<string[]> {
    await resetIfVersionChanged();
    const name = apiNameOf(iface);
    const cached = implementationsCache.get(name);
    if (cached != null) {
      return cached;
    }
    const result = (async () => {
      let def: { implementedBy?: ReadonlyArray<string> };
      try {
        def = await source.getInterfaceDefinition(name);
      } catch (e) {
        throw new OntologyMetadataNotFoundError(
          name,
          e instanceof Error ? e.message : undefined,
        );
      }
      return [...(def.implementedBy ?? [])];
    })();
    implementationsCache.set(name, result);
    return result;
  }

  async function impl(
    objectTypeApiName: string,
    iface: InterfaceDefinition | string,
  ): Promise<boolean> {
    const implementations = await implementationsOf(iface);
    return implementations.includes(objectTypeApiName);
  }

  async function resolveLink(
    concreteType: ObjectTypeDefinition | string,
    interfaceLinkApiName: string,
  ): Promise<ResolvedLink> {
    await resetIfVersionChanged();
    const concreteApiName = apiNameOf(concreteType);
    let objMd: {
      links: Record<string, { targetType: string; multiplicity: boolean }>;
      interfaceLinkMap?: Record<string, Record<string, string>>;
    };
    try {
      objMd = await source.getObjectDefinition(concreteApiName);
    } catch (e) {
      throw new OntologyMetadataNotFoundError(
        concreteApiName,
        e instanceof Error ? e.message : undefined,
      );
    }

    const interfaceLinkMap = objMd.interfaceLinkMap ?? {};
    let concreteLinkApiName: string | undefined;
    for (const linkMap of Object.values(interfaceLinkMap)) {
      if (interfaceLinkApiName in linkMap) {
        concreteLinkApiName = linkMap[interfaceLinkApiName];
        break;
      }
    }

    if (concreteLinkApiName == null) {
      throw new InterfaceLinkNotResolvableError(
        concreteApiName,
        interfaceLinkApiName,
      );
    }

    const link = objMd.links[concreteLinkApiName];
    if (link == null) {
      throw new InterfaceLinkNotResolvableError(
        concreteApiName,
        interfaceLinkApiName,
        `Interface link "${interfaceLinkApiName}" resolved to concrete link "${concreteLinkApiName}" on "${concreteApiName}", but that link is not present in the object metadata.`,
      );
    }

    return {
      concreteLinkApiName,
      targetType: link.targetType,
      multiplicity: link.multiplicity,
    };
  }

  return {
    implementationsOf,
    implements: impl,
    resolveLink,
  };
}
