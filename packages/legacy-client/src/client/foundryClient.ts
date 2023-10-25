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

import type { OntologyDefinition } from "../metadata";
import type { Auth } from "../oauth-client";
import type { FoundryClientOptions } from "./foundryClientOptions";
import { Ontology } from "./ontology";

export class BaseFoundryClient<
  O extends OntologyDefinition<any>,
  TAuth extends Auth = Auth,
> {
  constructor(private foundryClientOptions: FoundryClientOptions<TAuth>) {}

  get ontology(): Ontology<O> {
    return new Ontology<O>();
  }

  get auth(): TAuth {
    throw new Error("not implemented");
  }
}
