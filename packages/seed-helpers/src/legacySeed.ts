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

import type { ObjectTypeDefinition } from "@osdk/api";

import {
  createOntologySeedWithMetadata,
  OntologySeedBuilder,
  type OntologySeedFunction,
} from "./OntologySeedBuilder.js";
import type {
  OntologySeedLinkEntry,
  OntologySeedOutput,
  OntologySeedProps,
  OntologySeedRef,
} from "./types.js";

/** @deprecated Use {@link createOntologySeedWithMetadata}. */
export const createSeedWithMetadata: typeof createOntologySeedWithMetadata =
  createOntologySeedWithMetadata;

/** @deprecated Use {@link OntologySeedBuilder}. */
export const SeedBuilder: typeof OntologySeedBuilder = OntologySeedBuilder;
/** @deprecated Use {@link OntologySeedBuilder}. */
export type SeedBuilder = OntologySeedBuilder;

/** @deprecated Use {@link OntologySeedFunction}. */
export type SeedFunction<T> = OntologySeedFunction<T>;

/** @deprecated Use {@link OntologySeedLinkEntry}. */
export type SeedLinkEntry = OntologySeedLinkEntry;

/** @deprecated Use {@link OntologySeedOutput}. */
export type SeedOutput = OntologySeedOutput;

/** @deprecated Use {@link OntologySeedProps}. */
export type SeedProps<T extends ObjectTypeDefinition> = OntologySeedProps<T>;

/** @deprecated Use {@link OntologySeedRef}. */
export type SeedRef<Q extends ObjectTypeDefinition> = OntologySeedRef<Q>;
