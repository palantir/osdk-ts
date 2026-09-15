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

import type { OntologyIrBaseFormatter } from "@osdk/client.unstable";

import type { TypeClass } from "../common/TypeClass.js";
import type { Nullability } from "../properties/Nullability.js";
import type { PropertyTypeType } from "../properties/PropertyTypeType.js";
import type {
  PropertyType,
  SharedPropertyType,
} from "../properties/SharedPropertyType.js";

export type InterfacePropertyType =
  | InterfaceSharedPropertyType
  | InterfaceDefinedProperty;

export type PrimaryKeyConstraint =
  | "MUST_BE_PK"
  | "CANNOT_BE_PK"
  | "NO_RESTRICTION";

export interface InterfaceDefinedProperty extends PropertyType {
  required?: boolean;
  primaryKeyConstraint?: PrimaryKeyConstraint;
  baseFormatter?: OntologyIrBaseFormatter;
}

export interface InterfaceSharedPropertyType {
  sharedPropertyType: SharedPropertyType;
  required: boolean;
}

export function isInterfaceSharedPropertyType(
  interfacePropertyType: InterfacePropertyType,
): interfacePropertyType is InterfaceSharedPropertyType {
  return "sharedPropertyType" in interfacePropertyType;
}

export function getInterfacePropertyTypeType(
  interfacePropertyType: InterfacePropertyType,
): PropertyTypeType {
  return isInterfaceSharedPropertyType(interfacePropertyType)
    ? interfacePropertyType.sharedPropertyType.type
    : interfacePropertyType.type;
}

/**
 * Whether this property holds a list of its declared type rather than a single value.
 */
export function isInterfacePropertyArray(
  interfacePropertyType: InterfacePropertyType,
): boolean {
  const { array } = isInterfaceSharedPropertyType(interfacePropertyType)
    ? interfacePropertyType.sharedPropertyType
    : interfacePropertyType;
  return array ?? false;
}

/**
 * The type classes this property carries, or `undefined` if it declares none.
 *
 * Type classes drive render hints like sorting and filtering, so they are part of what an
 * implementing object type has to satisfy rather than presentation-only metadata.
 */
export function interfacePropertyTypeClasses(
  interfacePropertyType: InterfacePropertyType,
): TypeClass[] | undefined {
  const { typeClasses } = isInterfaceSharedPropertyType(interfacePropertyType)
    ? interfacePropertyType.sharedPropertyType
    : interfacePropertyType;
  return typeClasses;
}

/** What a marking property constrains when it declares no nullability of its own. */
const MARKING_NULLABILITY: Nullability = {
  noNulls: true,
  noEmptyCollections: true,
};

/**
 * What this property constrains about nulls and empty collections, or `undefined` if it declares
 * nothing.
 *
 * Resolves the default the wire conversion applies, which is type-dependent: a marking property
 * that says nothing is published as non-null and non-empty, every other type as unconstrained.
 * See `convertNullabilityToDataConstraint`.
 */
export function interfacePropertyNullability(
  interfacePropertyType: InterfacePropertyType,
): Nullability | undefined {
  const source = isInterfaceSharedPropertyType(interfacePropertyType)
    ? interfacePropertyType.sharedPropertyType
    : interfacePropertyType;
  if (typeof source.type === "object" && source.type.type === "marking") {
    return source.nullability ?? MARKING_NULLABILITY;
  }
  return source.nullability;
}

export function interfacePropertyPrimaryKeyConstraint(
  interfacePropertyType: InterfacePropertyType,
): PrimaryKeyConstraint {
  return isInterfaceSharedPropertyType(interfacePropertyType)
    ? "NO_RESTRICTION"
    : (interfacePropertyType.primaryKeyConstraint ?? "NO_RESTRICTION");
}

/**
 * Whether implementing object types must provide this property.
 */
export function isInterfacePropertyRequired(
  interfacePropertyType: InterfacePropertyType,
): boolean {
  return isInterfaceSharedPropertyType(interfacePropertyType)
    ? interfacePropertyType.required
    : (interfacePropertyType.required ?? true);
}

/**
 * The name a property is keyed by on the wire.
 */
export function interfacePropertyWireApiName(
  interfacePropertyType: InterfacePropertyType,
  authoredApiName: string,
): string {
  return isInterfaceSharedPropertyType(interfacePropertyType)
    ? interfacePropertyType.sharedPropertyType.apiName
    : authoredApiName;
}
