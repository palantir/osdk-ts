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

import {
  tabularResourceRefSchema,
  type TabularResourceRef,
  type TabularSchema,
} from "@osdk/resource";
import invariant from "tiny-invariant";

export interface ColumnSource<
  TResource extends TabularResourceRef = TabularResourceRef,
  TColumn extends string = string,
> {
  readonly type: "column";
  readonly resource: TResource;
  readonly column: TColumn;
}

export function column<
  const TResource extends TabularResourceRef,
  const TColumn extends TResource extends { readonly schema: TabularSchema }
    ? keyof TResource["schema"]["columns"] & string
    : string,
>(resource: TResource, name: TColumn): ColumnSource<TResource, TColumn> {
  tabularResourceRefSchema.parse(resource);
  invariant(name.length > 0, "Column name must not be empty");
  invariant(
    resource.schema === undefined ||
      Object.hasOwn(resource.schema.columns, name),
    `Unknown column "${name}"`,
  );
  return Object.freeze({ type: "column", resource, column: name });
}
