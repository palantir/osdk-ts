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

import type {
  CompileTimeMetadata,
  ObjectTypeDefinition,
  OsdkBase,
} from "@osdk/api";
import type { User } from "@osdk/foundry.admin";

type PartialForOptionalProperties<T> = {
  [K in keyof T as undefined extends T[K] ? K : never]?: NonNullable<T[K]>;
} & {
  [K in keyof T as undefined extends T[K] ? never : K]-?: T[K];
};

export type OntologySeedProps<T extends ObjectTypeDefinition> =
  PartialForOptionalProperties<CompileTimeMetadata<T>["props"]>;

export type OntologySeedRef<Q extends ObjectTypeDefinition> = Readonly<
  OsdkBase<Q> & OntologySeedProps<Q>
>;

/** A link entry in the seed output. */
export interface OntologySeedLinkEntry {
  name: string;
  linkType: string;
  sourceObjectType: string;
  sourceKey: string;
  targetObjectType: string;
  targetKey: string;
}

/** The final serializable Ontology seed data output. */
export interface OntologySeedOutput {
  objects: Record<string, Array<Record<string, unknown>>>;
  links: OntologySeedLinkEntry[];
}

/** The final serializable Admin seed data output. */
export interface AdminSeedOutput {
  users: User[];
  currentUserId: User["id"] | undefined;
}

/** The final serializable Foundry seed data output. */
export interface FoundrySeedOutput {
  ontology: OntologySeedOutput;
  admin: AdminSeedOutput;
}
