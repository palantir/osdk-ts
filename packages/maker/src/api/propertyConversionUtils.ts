/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import invariant from "tiny-invariant";

import type { TypeClass } from "./common/TypeClass.js";
import type { PropertyTypeType } from "./properties/PropertyTypeType.js";
import { isVector } from "./properties/PropertyTypeType.js";

export const defaultTypeClasses: TypeClass[] = [
  {
    kind: "render_hint",
    name: "SELECTABLE",
  },
  { kind: "render_hint", name: "SORTABLE" },
];

// ExperimentalTimeDependentV1 and Attachment types should be included here once supported
const TYPES_WITHOUT_RENDER_HINTS = [
  "struct",
  "geoshape",
  "mediaReference",
  "geotimeSeries",
  "attachment",
  "vector",
];

export function shouldNotHaveRenderHints(type: PropertyTypeType): boolean {
  return TYPES_WITHOUT_RENDER_HINTS.includes(getPropertyTypeName(type));
}

export function hasRenderHints(typeClasses: TypeClass[] | undefined): boolean {
  return (typeClasses ?? []).some(
    (tc) => tc.kind.toLowerCase() === "render_hint",
  );
}

/** The type classes a property of the named type publishes when it declares none. */
export function defaultTypeClassesFor(typeName: string): TypeClass[] {
  return TYPES_WITHOUT_RENDER_HINTS.includes(typeName)
    ? []
    : defaultTypeClasses;
}

/** The type classes a property publishes: the declared ones, or the defaults for its type. */
export function resolveTypeClasses(
  type: PropertyTypeType,
  typeClasses: TypeClass[] | undefined,
): TypeClass[] {
  return typeClasses ?? defaultTypeClassesFor(getPropertyTypeName(type));
}

/** The type classes a struct field publishes: the declared ones, or render hints for strings. */
export function resolveStructFieldTypeClasses(
  fieldType: PropertyTypeType,
  typeClasses: TypeClass[] | undefined,
): TypeClass[] {
  return (
    typeClasses ??
    (getPropertyTypeName(fieldType) === "string" ? defaultTypeClasses : [])
  );
}

export function getPropertyTypeName(type: PropertyTypeType): string {
  return typeof type === "object" ? type.type : type;
}

export function validateVectorProperty(
  apiName: string,
  type: PropertyTypeType,
  array: boolean | undefined,
): void {
  if (!isVector(type)) {
    return;
  }
  invariant(!array, `Vector property '${apiName}' cannot be an array`);
  invariant(
    Number.isInteger(type.dimension) && type.dimension >= 1,
    `Vector property '${apiName}' must have an integer 'dimension' of at least 1, but got ${type.dimension}`,
  );
}

export function shouldBeIndexedForSearch(type: PropertyTypeType): boolean {
  const typeName = getPropertyTypeName(type);
  return !["attachment"].includes(getPropertyTypeName(type));
}
