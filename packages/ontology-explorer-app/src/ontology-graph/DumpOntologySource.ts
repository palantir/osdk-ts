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
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import {
  wireActionTypeV2ToSdkActionMetadata,
  wireObjectTypeFullMetadataToSdkObjectMetadata,
  wireQueryTypeV2ToSdkQueryMetadata,
} from "@osdk/generator-converters";

import type {
  OntologyEntityRef,
  OntologyGraphModel,
} from "./OntologyGraphModel.js";
import type { OntologySource } from "./OntologySource.js";

/**
 * An {@link OntologySource} backed by a static ontology dump — the
 * `OntologyFullMetadata` JSON that OSDK tooling (`osdk generate`,
 * `@osdk/vite-plugin-oac`) produces and that `@osdk/ontology-explorer-server`
 * serves at `/api/ontology`.
 *
 * All object, action and query metadata is present up front, so `fetch*` is a
 * local lookup (no network) and the whole ontology can render immediately.
 */
export class DumpOntologySource implements OntologySource {
  readonly #objects: Map<string, ObjectMetadata>;
  readonly #actions: Map<string, ActionMetadata>;
  readonly #queries: Map<string, QueryMetadata>;

  private constructor(
    objects: Map<string, ObjectMetadata>,
    actions: Map<string, ActionMetadata>,
    queries: Map<string, QueryMetadata>,
  ) {
    this.#objects = objects;
    this.#actions = actions;
    this.#queries = queries;
  }

  /**
   * Parses an `OntologyFullMetadata` JSON string (the body served at
   * `/api/ontology`) into a source. Throws on invalid JSON or shape.
   */
  static parse(text: string): DumpOntologySource {
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      throw new Error("Invalid ontology dump: body is not valid JSON.", {
        cause: error,
      });
    }

    // The body served at /api/ontology is untrusted, so validate the shape
    // before iterating rather than trusting the JSON matches the type.
    const objectTypes = typeof parsed === "object" && parsed != null
      ? (parsed as { objectTypes?: unknown }).objectTypes
      : undefined;
    if (typeof objectTypes !== "object" || objectTypes == null) {
      throw new Error(
        "Invalid ontology dump: expected an object with an `objectTypes` map.",
      );
    }
    const full = parsed as OntologyFullMetadata;

    const objects = new Map<string, ObjectMetadata>();
    for (const [apiName, objectType] of Object.entries(full.objectTypes)) {
      objects.set(
        apiName,
        wireObjectTypeFullMetadataToSdkObjectMetadata(objectType, true),
      );
    }

    const actions = new Map<string, ActionMetadata>();
    for (
      const [apiName, actionType] of Object.entries(full.actionTypes ?? {})
    ) {
      actions.set(apiName, wireActionTypeV2ToSdkActionMetadata(actionType));
    }

    const queries = new Map<string, QueryMetadata>();
    for (const [apiName, queryType] of Object.entries(full.queryTypes ?? {})) {
      queries.set(apiName, wireQueryTypeV2ToSdkQueryMetadata(queryType));
    }

    return new DumpOntologySource(objects, actions, queries);
  }

  fetchObjectMetadata(apiName: string): Promise<ObjectMetadata> {
    return this.#resolve(this.#objects, apiName, "object type");
  }

  fetchActionMetadata(apiName: string): Promise<ActionMetadata> {
    return this.#resolve(this.#actions, apiName, "action type");
  }

  fetchQueryMetadata(apiName: string): Promise<QueryMetadata> {
    return this.#resolve(this.#queries, apiName, "query type");
  }

  #resolve<T>(map: Map<string, T>, apiName: string, kind: string): Promise<T> {
    const metadata = map.get(apiName);
    if (metadata == null) {
      return Promise.reject(
        new Error(`No metadata for ${kind} "${apiName}" in the dump.`),
      );
    }
    return Promise.resolve(metadata);
  }

  seed(model: OntologyGraphModel): void {
    const refs: OntologyEntityRef[] = [
      ...[...this.#objects.keys()].map((apiName) => ({
        kind: "object" as const,
        apiName,
      })),
      ...[...this.#actions.keys()].map((apiName) => ({
        kind: "action" as const,
        apiName,
      })),
      ...[...this.#queries.keys()].map((apiName) => ({
        kind: "query" as const,
        apiName,
      })),
    ];
    model.markUsed(refs);
  }
}
