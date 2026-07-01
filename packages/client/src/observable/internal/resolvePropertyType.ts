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
import { extractNamespace } from "../../internal/conversions/extractNamespace.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";

/**
 * Property types that the wire encodes as strings even though they're numbers.
 * Comparing them with `<` / `>` sorts them lexicographically ("10" < "9"), so
 * they need to be compared numerically instead. (`integer`/`double`/`float`
 * arrive as JS numbers and don't need this path.)
 */
const NUMERIC_STRING_PROPERTY_TYPES: ReadonlySet<string> = new Set([
  "decimal",
  "long",
]);

export function isStringEncodedNumericType(type: string | undefined): boolean {
  return type != null && NUMERIC_STRING_PROPERTY_TYPES.has(type);
}

/**
 * Subset of a holder needed to resolve the declared type of a regular property.
 * The holder symbols are optional because a holder is either an object or an
 * interface, and only objects carry the object-level metadata. Derived-property
 * types are not on the holder -- they come from the separate runtime metadata
 * passed alongside (see {@link resolvePropertyType}).
 */
export interface PropertyTypeSource {
  readonly [ObjectDefRef]?: ObjectMetadata;
  readonly [InterfaceDefRef]?: InterfaceMetadata;
}

/**
 * Resolves the declared property type for a property key. Regular properties
 * live in the object/interface metadata carried on the holder; derived
 * (runtime-derived) properties live in the separate RDP metadata, which is
 * threaded in as an argument rather than stored on the holder so object/
 * interface construction stays untouched.
 *
 * Returns undefined when the type can't be determined (e.g. derived
 * aggregations like avg/sum that resolve to a JS-number type and so never need
 * string-based numeric comparison).
 */
export function resolvePropertyType(
  holder: PropertyTypeSource | undefined,
  key: string,
  derivedPropertyMetadata: DerivedPropertyRuntimeMetadata = {}
): string | undefined {
  const objectType = holder?.[ObjectDefRef]?.properties?.[key]?.type;
  if (typeof objectType === "string") {
    return objectType;
  }
  const interfaceType = resolveInterfacePropertyType(
    holder?.[InterfaceDefRef],
    key
  );
  if (typeof interfaceType === "string") {
    return interfaceType;
  }
  const selectedType =
    derivedPropertyMetadata[key]?.selectedOrCollectedPropertyType?.type;
  return typeof selectedType === "string" ? selectedType : undefined;
}

/**
 * Looks up an interface property's type by the key the interface holder exposes.
 * The holder strips the namespace from a property whose namespace matches the
 * interface's (createOsdkInterface), but `interfaceDef.properties` is keyed by
 * the full wire apiName -- so a direct lookup of the stripped key misses for a
 * namespaced interface. Re-qualify with the interface's namespace on miss so
 * numeric comparison still engages for namespaced interface properties.
 */
function resolveInterfacePropertyType(
  interfaceDef: InterfaceMetadata | undefined,
  key: string
): string | undefined {
  if (interfaceDef == null) {
    return undefined;
  }
  const direct = interfaceDef.properties?.[key]?.type;
  if (typeof direct === "string") {
    return direct;
  }
  const [namespace] = extractNamespace(interfaceDef.apiName);
  if (namespace == null) {
    return undefined;
  }
  const qualifiedType = interfaceDef.properties?.[`${namespace}.${key}`]?.type;
  return typeof qualifiedType === "string" ? qualifiedType : undefined;
}
