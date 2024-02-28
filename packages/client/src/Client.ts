/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ActionDefinition,
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectOrInterfaceDefinitionFrom,
  ObjectOrInterfaceKeysFrom,
  ObjectTypeDefinition,
  ObjectTypeKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { Actions, ActionSignatureFromDef } from "./actions/Actions.js";
import type { MinimalObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";
import type { ObjectSetCreator } from "./ObjectSetCreator.js";

export interface Client<O extends OntologyDefinition<any>>
  extends FutureClient
{
  /** @deprecated use client(MyType) */
  objectSet: <const K extends ObjectOrInterfaceKeysFrom<O>>(
    type: K,
  ) => ObjectSet<ObjectOrInterfaceDefinitionFrom<O, K>>;

  /** @deprecated use client(MyType) */
  objects: ObjectSetCreator<O>;

  /** @deprecated use client(myAction) */
  actions: Actions<O>;

  __UNSTABLE_preexistingObjectSet<const K extends ObjectTypeKeysFrom<O>>(
    type: K,
    rid: string,
  ): ObjectSet<ObjectOrInterfaceDefinitionFrom<O, K>>;
}

// Once we migrate everyone off of using the deprecated parts of `Client` we can rename this to `Client`.
export interface FutureClient {
  <
    Q extends ObjectOrInterfaceDefinition | ActionDefinition<any, any, any>,
  >(
    o: Q,
  ): Q extends ObjectTypeDefinition<any> ? ObjectSet<Q>
    : Q extends InterfaceDefinition<any, any> ? MinimalObjectSet<Q>
    : Q extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<Q>
    : never;
}
