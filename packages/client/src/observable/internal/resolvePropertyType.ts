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

import type { InterfaceMetadata, ObjectMetadata } from "@osdk/api";
import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
  RdpDefRef,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";

/**
 * Property types that the wire encodes as strings even though they're numbers.
 * Comparing them with `<` / `>` sorts them lexicographically ("10" < "9"), so
 * they need to be compared numerically instead.
 */
const NUMERIC_STRING_PROPERTY_TYPES: ReadonlySet<string> = new Set([
  "decimal",
  "long",
]);

export function isNumericStringType(type: string | undefined): boolean {
  return type != null && NUMERIC_STRING_PROPERTY_TYPES.has(type);
}

/**
 * Subset of a holder needed to resolve the declared type of a property. The
 * holder symbols are optional because a holder is either an object or an
 * interface, and only objects carry the object-level metadata.
 */
export interface PropertyTypeSource {
  readonly [ObjectDefRef]?: ObjectMetadata;
  readonly [InterfaceDefRef]?: InterfaceMetadata;
  readonly [RdpDefRef]?: DerivedPropertyRuntimeMetadata;
}

/**
 * Resolves the declared property type for a property key from a holder.
 * Regular properties live in the object/interface metadata; derived
 * (runtime-derived) properties live in the separate RDP metadata.
 * Returns undefined when the type can't be determined (e.g. derived
 * aggregations like avg that don't preserve a single source type).
 */
export function resolvePropertyType(
  holder: PropertyTypeSource | undefined,
  key: string,
): string | undefined {
  if (holder == null) {
    return undefined;
  }
  const objectType = holder[ObjectDefRef]?.properties?.[key]?.type;
  if (typeof objectType === "string") {
    return objectType;
  }
  const interfaceType = holder[InterfaceDefRef]?.properties?.[key]?.type;
  if (typeof interfaceType === "string") {
    return interfaceType;
  }
  const selectedType = holder[RdpDefRef]?.[key]?.selectedOrCollectedPropertyType
    ?.type;
  return typeof selectedType === "string" ? selectedType : undefined;
}
