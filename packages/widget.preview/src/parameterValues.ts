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

import type { ParameterValue } from "@osdk/widget.api";

import type { PreviewParameterType } from "./config.js";

/** @public */
export function loadedParameterValue(
  definition: PreviewParameterType,
  value: unknown,
): ParameterValue {
  if (value != null && !validValue(definition, value)) {
    throw new Error(
      `Expected ${definition.type === "array" ? `${definition.subType}[]` : definition.type}.`,
    );
  }
  return {
    type: definition.type,
    ...(definition.type === "array" ? { subType: definition.subType } : {}),
    value: { type: "loaded", value: value ?? undefined },
  } as ParameterValue;
}

function validValue(
  definition: PreviewParameterType,
  value: NonNullable<unknown>,
): boolean {
  if (definition.type === "array") {
    return (
      Array.isArray(value) &&
      value.every((item) => validPrimitive(definition.subType, item))
    );
  }
  if (definition.type === "objectSet") {
    return (
      typeof value === "object" &&
      "objectSetRid" in value &&
      typeof value.objectSetRid === "string" &&
      value.objectSetRid.length > 0
    );
  }
  if (definition.type === "mapTileLayer") {
    return (
      typeof value === "object" &&
      "styleJsonUrl" in value &&
      typeof value.styleJsonUrl === "string" &&
      value.styleJsonUrl.length > 0
    );
  }
  return validPrimitive(definition.type, value);
}

function validPrimitive(
  type: ParameterValue.PrimitiveType,
  value: unknown,
): boolean {
  switch (type) {
    case "number":
      return typeof value === "number" && Number.isFinite(value);
    case "boolean":
      return typeof value === "boolean";
    case "date":
      return (
        typeof value === "string" &&
        /^\d{4}-\d{2}-\d{2}$/u.test(value) &&
        !Number.isNaN(Date.parse(value))
      );
    case "timestamp":
      return (
        typeof value === "string" &&
        /^\d{4}-\d{2}-\d{2}T/u.test(value) &&
        !Number.isNaN(Date.parse(value))
      );
    default:
      return typeof value === "string";
  }
}
