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
import type { EditScopeBuilder } from "./EditScopeBuilder.js";
import type {
  AddLink,
  AnyEdit,
  CreateObject,
  DeleteObject,
  RemoveLink,
  UpdateObject,
} from "./types.js";

class NoopEditScopeBuilder<T extends AnyEdit = never>
  implements EditScopeBuilder<T>
{
  public link<
    S extends ObjectTypeDefinition,
    L extends keyof CompileTimeMetadata<S>["links"],
  >(_s: S, _l: L): EditScopeBuilder<T | AddLink<S, L>> {
    return this;
  }

  public unlink<
    S extends ObjectTypeDefinition,
    L extends keyof CompileTimeMetadata<S>["links"],
  >(_s: S, _l: L): EditScopeBuilder<T | RemoveLink<S, L>> {
    return this;
  }

  public create<S extends ObjectTypeDefinition>(
    _s: S,
  ): EditScopeBuilder<T | CreateObject<S>> {
    return this;
  }

  public delete<S extends ObjectTypeDefinition>(
    s: S,
  ): EditScopeBuilder<T | DeleteObject<S>> {
    return this;
  }

  public update<S extends ObjectTypeDefinition>(
    s: S,
  ): EditScopeBuilder<T | UpdateObject<S>> {
    return this;
  }

  public build(): T[] {
    return [];
  }
}

function buildEditScope(): EditScopeBuilder {
  return new NoopEditScopeBuilder();
}

export { buildEditScope };
