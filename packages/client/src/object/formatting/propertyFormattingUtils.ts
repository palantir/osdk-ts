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

import type { PropertyTypeReferenceOrStringConstant } from "@osdk/api";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";

/**
 * Resolves a property reference or string constant to its actual value
 */

export function resolvePropertyReference(
  ref: PropertyTypeReferenceOrStringConstant,
  objectData: SimpleOsdkProperties
): string | undefined {
  if (ref.type === "constant") {
    return ref.value;
  } else if (ref.type === "propertyType") {
    const value = objectData[ref.propertyApiName];
    return value != null ? String(value) : undefined;
  }
  return undefined;
}
/**
 * Gets the browser's current locale
 */
export function getBrowserLocale(): string {
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language;
  }
  return "en-US";
}
