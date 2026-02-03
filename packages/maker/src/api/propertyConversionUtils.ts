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

import type { TypeClass } from "./common/TypeClass.js";
import type { PropertyTypeType } from "./properties/PropertyTypeType.js";

export const defaultTypeClasses: TypeClass[] = [{
  kind: "render_hint",
  name: "SELECTABLE",
}, { kind: "render_hint", name: "SORTABLE" }];

// ExperimentalTimeDependentV1 and Attachment types should be included here once supported
export function shouldNotHaveRenderHints(type: PropertyTypeType): boolean {
  return ["struct", "mediaReference", "geotimeSeries", "attachment"].includes(
    getPropertyTypeName(type),
  );
}

export function hasRenderHints(typeClasses: TypeClass[] | undefined): boolean {
  return (typeClasses ?? []).some(tc =>
    tc.kind.toLowerCase() === "render_hint"
  );
}

export function getPropertyTypeName(type: PropertyTypeType): string {
  return typeof type === "object" ? type.type : type;
}

export function shouldBeIndexedForSearch(
  type: PropertyTypeType,
): boolean {
  const typeName = getPropertyTypeName(type);
  return !["attachment"].includes(
    getPropertyTypeName(type),
  );
}
