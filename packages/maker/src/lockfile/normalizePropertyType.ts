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

import type { PropertyTypeType } from "../api/properties/PropertyTypeType.js";

/**
 * The keys that carry presentation only, dropped wherever they appear inside a property type.
 *
 * Deliberately a set of key names applied structurally, rather than a walk over the type's
 * variants: a variant-by-variant normalizer silently stops normalizing the day a new variant
 * carries one of these, which is the maintenance burden that recording the whole
 * {@link PropertyTypeType} is meant to avoid in the first place.
 */
const PRESENTATION_KEYS = ["displayMetadata"] as const;

type PresentationKey = (typeof PRESENTATION_KEYS)[number];

function isPresentationKey(key: string): key is PresentationKey {
  return (PRESENTATION_KEYS as readonly string[]).includes(key);
}

/**
 * A {@link PropertyTypeType} in the form the lockfile records it: presentation stripped.
 *
 * Distinct from `PropertyTypeType` because the stripped form is not one — `displayMetadata` is
 * required on a struct field — and because the distinction is worth keeping: it makes "this has
 * already been normalized" a fact the compiler enforces rather than a convention that
 * `generateOntologySchemaLockfile` happens to observe.
 *
 * Derived from `PropertyTypeType` rather than hand-written, so that a new property type variant, or
 * a new field on an existing one, is recorded from the day it lands with no edit here.
 */
export type LockedPropertyType = StripPresentation<PropertyTypeType>;

type StripPresentation<T> =
  T extends Array<infer E>
    ? Array<StripPresentation<E>>
    : T extends object
      ? {
          [K in keyof T as K extends PresentationKey
            ? never
            : K]: StripPresentation<T[K]>;
        }
      : T;

/**
 * Strips the parts of a type that carry no compatibility meaning, giving the form the lockfile
 * records and every downstream comparison reads.
 *
 * Two rules, both structural:
 *
 * - presentation-only keys are dropped, so that renaming a struct field's display name does not
 *   read as a change to the property's type. Nothing about whether an object type can implement
 *   the property depends on them.
 * - `undefined`-valued keys are dropped, so that the result matches a lockfile read back from
 *   disk, where an explicit `undefined` cannot survive the round trip. Every comparison downstream
 *   is a deep equality, which distinguishes an absent key from a present-but-`undefined` one.
 *
 * Applied when the lockfile is generated rather than when it is compared, so that every comparison
 * downstream — the per-property diff, the transition replay, and the whole-file staleness check —
 * agrees on what a type is without each having to remember to normalize.
 */
export function normalizePropertyType(
  type: PropertyTypeType,
): LockedPropertyType {
  return strip(type) as LockedPropertyType;
}

function strip(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(strip);
  }
  // `typeof null === "object"`, so a bare `typeof` check would try to enumerate it.
  if (typeof value !== "object" || value == null) {
    return value;
  }
  return Object.fromEntries(
    Object.entries(value)
      .filter(
        ([key, nested]) => nested !== undefined && !isPresentationKey(key),
      )
      .map(([key, nested]) => [key, strip(nested)] as const),
  );
}
