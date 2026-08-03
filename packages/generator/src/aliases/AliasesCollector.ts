/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ActionTypeValue,
  AliasesFile,
  InterfaceTypeValue,
  ObjectTypeValue,
  OntologyValue,
  PropertyValue,
  QueryTypeValue,
} from "@osdk/aliases";
import type { EnhancedAction } from "../GenerateContext/EnhancedAction.js";
import type { EnhancedInterfaceType } from "../GenerateContext/EnhancedInterfaceType.js";
import type { EnhancedObjectType } from "../GenerateContext/EnhancedObjectType.js";
import type { EnhancedQuery } from "../GenerateContext/EnhancedQuery.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";

/**
 * Accumulates the alias entries for a single generated SDK.
 *
 * Every key is the source-environment *wire* api name, never the
 * namespace-stripped TypeScript-facing form, and never the sanitized
 * (camelized) action identifier.
 */
export class AliasesCollector {
  #ontologies: Record<string, OntologyValue> = {};
  #objects: Record<string, ObjectTypeValue> = {};
  #interfaces: Record<string, InterfaceTypeValue> = {};
  #actions: Record<string, ActionTypeValue> = {};
  #queries: Record<string, QueryTypeValue> = {};

  addOntology(raw: WireOntologyDefinition): void {
    const rid = raw.ontology.rid;
    this.#ontologies[rid] = {
      branch: raw.branch != null ? { rid: raw.branch.rid } : null,
      id: { rid },
    };
  }

  addObject(object: EnhancedObjectType): void {
    const definition = object.getCleanedUpDefinition(true);
    this.#objects[object.fullApiName] = {
      apiName: object.fullApiName,
      ...ridIdentifier(object.raw.objectType.rid),
      links: identityAliases(Object.keys(definition.links)),
      primaryKeyApiName: object.raw.objectType.primaryKey,
      properties: identityAliases(Object.keys(definition.properties)),
    };
  }

  addInterface(interfaceType: EnhancedInterfaceType): void {
    const raw = interfaceType.raw;
    const rawProperties: Record<string, { rid?: string }> =
      raw.allPropertiesV2 != null && Object.keys(raw.allPropertiesV2).length > 0
        ? raw.allPropertiesV2
        : (raw.allProperties ?? raw.properties ?? {});

    this.#interfaces[interfaceType.fullApiName] = {
      apiName: interfaceType.fullApiName,
      ...ridIdentifier(raw.rid),
      links: identityAliases(Object.keys(raw.allLinks ?? raw.links ?? {})),
      properties: Object.fromEntries(
        Object.entries(rawProperties).map(
          ([apiName, property]): [string, PropertyValue] => [
            apiName,
            { apiName, ...ridIdentifier(property.rid) },
          ],
        ),
      ),
    };
  }

  addAction(action: EnhancedAction): void {
    // `action.fullApiName` is camelized to be a valid TS identifier; the wire
    // name is the unsanitized one and that is what the alias is keyed by.
    const apiName = action.unsanitizedApiName ?? action.fullApiName;
    this.#actions[apiName] = {
      apiName,
      ...ridIdentifier(action.raw.rid),
    };
  }

  addQuery(query: EnhancedQuery): void {
    const apiName = query.fullApiName;
    this.#queries[apiName] = {
      apiName,
      ...(query.raw.rid != null
        ? { id: { rid: query.raw.rid, version: query.raw.version } }
        : {}),
      version: query.raw.version,
    };
  }

  build(): AliasesFile {
    return {
      defaults: {
        actions: this.#actions,
        custom: {},
        datasets: {},
        egressConnections: {},
        interfaces: this.#interfaces,
        mediasets: {},
        models: {},
        objects: this.#objects,
        ontologies: this.#ontologies,
        queries: this.#queries,
        streams: {},
      },
      version: 1,
    };
  }
}

/**
 * `id` is optional throughout the schema and an `id: {}` with no `rid` is not a
 * valid `RidIdentifier`. Hand-authored and older wire ontologies do omit rids
 * (a struct-typed interface property, for instance), so the key has to
 * disappear entirely rather than carry an empty object.
 */
function ridIdentifier(rid: string | undefined): { id?: { rid: string } } {
  return rid != null ? { id: { rid } } : {};
}

function identityAliases(
  apiNames: readonly string[],
): Record<string, { apiName: string }> {
  return Object.fromEntries(
    apiNames.map((apiName) => [apiName, { apiName }]),
  );
}
