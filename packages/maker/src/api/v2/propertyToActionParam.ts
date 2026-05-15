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
  ActionParameterV2Config,
  ActionPrimitiveType,
} from "./defineActionV2.js";
import type { PropertyV2Config } from "./propertyMapping.js";

/** Property kinds that cannot map to an action parameter primitive. */
const NON_ACTION_TYPES = new Set([
  "struct",
  "geopoint",
  "geoshape",
  "mediaReference",
  "geotimeSeries",
]);

/** True for properties whose v1 type is a struct definition. */
export function isStructProperty(prop: PropertyV2Config): boolean {
  if (typeof prop === "string") {
    return false;
  }
  const t = prop.type;
  return typeof t === "object" && t.type === "struct";
}

/** True for properties whose v2 config declares `nullable: true`. */
export function isPropertyNullable(prop: PropertyV2Config): boolean {
  return typeof prop === "object" && prop.nullable === true;
}

/**
 * Extract the action-primitive type from a `PropertyV2Config`, or
 * `undefined` if the property kind is not representable as an action
 * parameter (struct, geopoint, geoshape, mediaReference, geotimeSeries).
 * Maps `"date"` → `"datetime"` because action parameters use the
 * datetime primitive, not date.
 */
export function propertyToActionPrimitive(
  prop: PropertyV2Config,
): ActionPrimitiveType | undefined {
  const raw = typeof prop === "string"
    ? prop
    : typeof prop.type === "string"
    ? prop.type
    : prop.type.type;
  if (NON_ACTION_TYPES.has(raw)) {
    return undefined;
  }
  if (raw === "date") {
    return "datetime";
  }
  return raw as ActionPrimitiveType;
}

/**
 * Build the `ActionParameterV2Config` for a single property, honoring
 * the caller-provided nullable override (e.g., modify-style actions
 * mark everything nullable; create-style honors the property's own
 * `nullable` flag).
 */
export function propertyToActionParam(
  prop: PropertyV2Config,
  forceNullable: boolean,
): ActionParameterV2Config | undefined {
  const primitive = propertyToActionPrimitive(prop);
  if (primitive === undefined) {
    return undefined;
  }
  const nullable = forceNullable || isPropertyNullable(prop);
  if (nullable) {
    return { type: primitive, nullable: true };
  }
  return primitive;
}
