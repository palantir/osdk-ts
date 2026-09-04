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
 * The keys that carry presentation only, dropped wherever they appear inside a property type,
 * as they should not affect backwards-compatibility checks.
 */
const PRESENTATION_KEYS = ["displayMetadata"] as const;

type PresentationKey = (typeof PRESENTATION_KEYS)[number];

function isPresentationKey(key: string): key is PresentationKey {
  return (PRESENTATION_KEYS as readonly string[]).includes(key);
}

/**
 * A {@link PropertyTypeType} without fields that do not affect backwards-compatibility.
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
 * Strips the parts of a type that carry no compatibility meaning. This involves:
 *
 * - dropping presentation-only keys like "display name" which are allowed to change without
 *   affecting anything depending on the property.
 * - dropping undefined-valued keys so that an absent key and a present-but-undefined key are treated
 *   equally during comparisons.
 */
export function normalizePropertyType(
  type: PropertyTypeType,
): LockedPropertyType {
  return strip(type) as LockedPropertyType;
}

/** How a property's type is named in error messages and in the rendered lockfile diff. */
export function describeType(type: LockedPropertyType): string {
  return JSON.stringify(type);
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
