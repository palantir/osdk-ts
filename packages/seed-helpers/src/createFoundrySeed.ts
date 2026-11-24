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

import type * as Ontology from "@osdk/foundry.ontologies";

import { AdminSeedBuilder } from "./AdminSeedBuilder.js";
import { OntologySeedBuilder } from "./OntologySeedBuilder.js";
import type { FoundrySeedOutput } from "./types.js";

export type FoundrySeedFunction<T> = (seedFns: {
  ontologySeed: OntologySeedBuilder;
  adminSeed: AdminSeedBuilder;
}) => T;

/**
 * Utility handle for building Foundry seeds from a metadata
 * @param ontologyMetadata Ontology metadata to instantiate seed builder from
 * @param fn handle to create seeds, may return an arbitrary value
 * @returns The Foundry seed output and the context returned by the callback
 */
export function createFoundrySeed<T>(
  ontologyMetadata: Ontology.OntologyFullMetadata,
  seedFns: FoundrySeedFunction<T>,
): {
  output: FoundrySeedOutput;
  context: T;
} {
  const ontologySeed = new OntologySeedBuilder(ontologyMetadata);
  const adminSeed = new AdminSeedBuilder();

  const context = seedFns({ ontologySeed, adminSeed });
  return {
    output: { ontology: ontologySeed.build(), admin: adminSeed.build() },
    context,
  };
}
