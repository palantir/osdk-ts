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

import type { OntologyDefinition } from "@osdk/api";

import { ObjectTypeWithAllPropertyTypes } from "./ontology/objects/ObjectTypeWithAllPropertyTypes";
import { Person } from "./ontology/objects/Person";
import { Todo } from "./ontology/objects/Todo";

export const Ontology: {
  metadata: {
    ontologyRid: "ridHere";
    ontologyApiName: "OntologyApiName";
    userAgent: "foundry-typescript-osdk/0.0.1";
  };
  objects: {
    Todo: typeof Todo;
    Person: typeof Person;
    ObjectTypeWithAllPropertyTypes: typeof ObjectTypeWithAllPropertyTypes;
  };
  actions: {};
  queries: {};
} = {
  metadata: {
    ontologyRid: "ridHere" as const,
    ontologyApiName: "OntologyApiName" as const,
    userAgent: "foundry-typescript-osdk/0.0.1" as const,
  },
  objects: {
    Todo,
    Person,
    ObjectTypeWithAllPropertyTypes,
  },
  actions: {},
  queries: {},
} satisfies OntologyDefinition<
  "Todo" | "Person" | "ObjectTypeWithAllPropertyTypes"
>;
