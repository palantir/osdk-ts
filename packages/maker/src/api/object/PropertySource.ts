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

import invariant from "tiny-invariant";

import type { ColumnSource } from "./column.js";
import type { ObjectPropertyType } from "./ObjectPropertyType.js";

export interface StructPropertySource {
  readonly type: "struct";
  readonly column: ColumnSource;
  /** Property field API name to backing column field name. */
  readonly fields: Readonly<Record<string, string>>;
}

export type ColumnPropertySource = ColumnSource | StructPropertySource;

export interface EditOnlyPropertySource {
  readonly type: "editOnly";
}

export interface DirectPropertySource {
  readonly type: "direct";
}

export type PropertySource =
  | ColumnPropertySource
  | EditOnlyPropertySource
  | DirectPropertySource;

export type PropertySourceInput = PropertySource | "editOnly";

/** Resolves shorthand and the legacy editOnly flag without changing the definition. */
export function getPropertySource(
  property: Pick<ObjectPropertyType, "source" | "editOnly">,
): PropertySource | undefined {
  const source =
    property.source === "editOnly"
      ? { type: "editOnly" as const }
      : property.source;
  invariant(
    !property.editOnly || source === undefined || source.type === "editOnly",
    "A property cannot combine editOnly: true with a non-edit-only source",
  );
  return source ?? (property.editOnly ? { type: "editOnly" } : undefined);
}
