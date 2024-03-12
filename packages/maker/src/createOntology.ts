/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyFullMetadata } from "@osdk/gateway/types";

export let ontologyDefinition: Omit<OntologyFullMetadata, "ontology">;

export let namespace: string;

export function createOntology(ns: string, body: () => void) {
  namespace = ns;
  ontologyDefinition = {
    actionTypes: {},
    interfaceTypes: {},
    objectTypes: {},
    queryTypes: {},
    sharedPropertyTypes: {},
  };
  try {
    body();
  } catch (e) {
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }

  return ontologyDefinition;
}
