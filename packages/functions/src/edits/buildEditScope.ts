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

import type { CompileTimeMetadata, ObjectTypeDefinition } from "@osdk/api";
import type {
  AddLink,
  AnyEdit,
  CreateObject,
  DeleteObject,
  RemoveLink,
  UpdateObject,
} from "./types.js";

interface EditScopeBuilder<T extends AnyEdit = never> {
  link: <
    S extends ObjectTypeDefinition,
    L extends keyof CompileTimeMetadata<S>["links"],
  >(s: S, l: L) => EditScopeBuilder<T | AddLink<S, L>>;

  unlink: <
    S extends ObjectTypeDefinition,
    L extends keyof CompileTimeMetadata<S>["links"],
  >(s: S, l: L) => EditScopeBuilder<T | RemoveLink<S, L>>;

  create: <S extends ObjectTypeDefinition>(
    s: S,
  ) => EditScopeBuilder<T | CreateObject<S>>;

  delete: <S extends ObjectTypeDefinition>(
    s: S,
  ) => EditScopeBuilder<T | DeleteObject<S>>;

  update: <S extends ObjectTypeDefinition>(
    s: S,
  ) => EditScopeBuilder<T | UpdateObject<S>>;

  build: () => T[];
}

declare function buildEditScope(): EditScopeBuilder;

export { buildEditScope };
