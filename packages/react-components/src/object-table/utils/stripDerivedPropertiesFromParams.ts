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

import { getWireObjectSet, isObjectSet } from "@osdk/client";

// TODO: Remove this workaround once function queries support
// derivedProperties (withProperties) in the ObjectSet payload.

/**
 * Function queries fail when the payload contains ObjectSets with
 * derivedProperties (withProperties nodes). This strips them by
 * converting any ObjectSet param values to their wire representation
 * with withProperties nodes unwrapped.
 */
export function stripDerivedPropertiesFromParams(params: unknown): unknown {
  if (params == null || typeof params !== "object") {
    return params;
  }

  if (isObjectSet(params)) {
    const wire = getWireObjectSet(params) as unknown as Record<string, unknown>;
    return stripWithPropertiesFromWire(wire);
  }

  if (Array.isArray(params)) {
    return params.map(stripDerivedPropertiesFromParams);
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    result[key] = stripDerivedPropertiesFromParams(value);
  }
  return result;
}

export function stripWithPropertiesFromWire(
  wire: Record<string, unknown>,
): Record<string, unknown> {
  if (wire.type === "withProperties") {
    return stripWithPropertiesFromWire(
      wire.objectSet as Record<string, unknown>,
    );
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(wire)) {
    if (
      key === "objectSet" &&
      value != null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      result[key] = stripWithPropertiesFromWire(
        value as Record<string, unknown>,
      );
    } else if (key === "objectSets" && Array.isArray(value)) {
      result[key] = value.map((os) =>
        stripWithPropertiesFromWire(os as Record<string, unknown>),
      );
    } else {
      result[key] = value;
    }
  }
  return result;
}
