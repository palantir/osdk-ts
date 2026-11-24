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

export { AdminSeedBuilder } from "./AdminSeedBuilder.js";
export {
  createFoundrySeed,
  type FoundrySeedFunction,
} from "./createFoundrySeed.js";
export {
  createOntologySeedWithMetadata,
  OntologySeedBuilder,
  type OntologySeedFunction,
} from "./OntologySeedBuilder.js";
export type {
  AdminSeedOutput,
  FoundrySeedOutput,
  OntologySeedLinkEntry,
  OntologySeedOutput,
  OntologySeedProps,
  OntologySeedRef,
} from "./types.js";
export type { LinkTargetType, LinkTargets } from "./linkTypes.js";
export {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  createSeedWithMetadata,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  SeedBuilder,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  type SeedFunction,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  type SeedLinkEntry,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  type SeedOutput,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  type SeedProps,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  type SeedRef,
} from "./legacySeed.js";
