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

import type { CompileTimeMetadata, ObjectTypeDefinition } from "@osdk/api";

/**
 * Makes nullable properties optional while keeping non-nullable ones required.
 * `{ id: string; title: string | undefined }` becomes `{ id: string; title?: string }`.
 * This ensures required fields like primary keys must always be provided.
 */
type PartialForOptionalProperties<T> =
  & {
    [K in keyof T as undefined extends T[K] ? K : never]?: NonNullable<T[K]>;
  }
  & {
    [K in keyof T as undefined extends T[K] ? never : K]-?: T[K];
  };

/**
 * Derives the property types for seed data from the generated SDK type.
 * Uses CompileTimeMetadata<T>["props"] which resolves to the Props interface
 * on generated types (e.g., Employee.Props). Non-nullable properties like the
 * primary key are required; nullable properties are optional.
 */
export type SeedProps<T extends ObjectTypeDefinition> =
  PartialForOptionalProperties<
    CompileTimeMetadata<T>["props"]
  >;

/**
 * Unique symbol used to brand {@link SeedRef} instances. A branded type prevents
 * manually constructed objects from satisfying the interface — only `SeedBuilder.add()`
 * can produce a valid `SeedRef`. This ensures `link()` generics always have the
 * correct object type for compile-time link name and target type validation.
 */
declare const SEED_REF_BRAND: unique symbol;

/**
 * A typed reference returned by SeedBuilder.add(). The branded symbol field
 * carries the object type as a generic, enabling compile-time link validation.
 *
 * Cannot be constructed manually — the unique symbol key is not exported and
 * only `SeedBuilder.add()` can produce a valid `SeedRef` via an `as` cast.
 */
export interface SeedRef<
  Q extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  readonly __objectTypeApiName: string;
  readonly __primaryKey: string | number;
  /** @internal Brand field — never set at runtime. Enforces nominal typing. */
  readonly [SEED_REF_BRAND]: Q;
}

/** A link entry in the seed output. */
export interface SeedLinkEntry {
  name: string;
  linkType: string;
  sourceObjectType: string;
  sourceKey: string;
  targetObjectType: string;
  targetKey: string;
}

/** The final serializable seed data output. */
export interface SeedOutput {
  objects: Record<string, Array<Record<string, unknown>>>;
  links: SeedLinkEntry[];
}
