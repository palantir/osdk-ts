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
 * Keys that carry presentation-only values (e.g. descriptions, etc.). These are dropped wherever
 * they appear as they should not affect backwards-compatibility checks.
 */
const PRESENTATION_KEYS = ["displayMetadata"] as const;

type PresentationKey = (typeof PRESENTATION_KEYS)[number];

function isPresentationKey(key: string): key is PresentationKey {
  return (PRESENTATION_KEYS as readonly string[]).includes(key);
}

/** A property's locked type, without fields that do not affect backwards-compatibility. */
export type LockedPropertyType = LockedScalarType | LockedArrayType;

type LockedScalarType = StripPresentation<PropertyTypeType>;

interface LockedArrayType {
  type: "array";
  subtype: LockedScalarType;
}

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
 * Strips the parts of a type that carry no compatibility meaning.
 *
 * @param array whether the property holds a list of `type` rather than a single value
 */
export function normalizePropertyType(
  type: PropertyTypeType,
  array: boolean,
): LockedPropertyType {
  const subtype = strip(type) as LockedScalarType;
  return array ? { type: "array", subtype } : subtype;
}

/** How a property's type is named in error messages and in the rendered lockfile diff. */
export function describeType(type: LockedPropertyType): string {
  return isArrayType(type)
    ? `${describeType(type.subtype)}[]`
    : JSON.stringify(type);
}

function isArrayType(type: LockedPropertyType): type is LockedArrayType {
  return typeof type === "object" && type.type === "array";
}

function strip(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(strip);
  }

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
