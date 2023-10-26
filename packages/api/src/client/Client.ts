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

import type { ObjectTypesFrom, OntologyDefinition } from "../ontology";
import type { ObjectSet, ObjectSetOptions } from "./objectSet/ObjectSet";
import type { ObjectSetCreator } from "./ObjectSetCreator";

export type ConcreteObjectType<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = O["objects"][K];

export interface Client<O extends OntologyDefinition<any>> {
  objectSet: <const K extends ObjectTypesFrom<O>>(
    type: K,
    opts?: ObjectSetOptions<O, K>,
  ) => ObjectSet<O, K>;

  objects: ObjectSetCreator<O>;
}
