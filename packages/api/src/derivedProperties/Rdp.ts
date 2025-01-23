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

import type {
  ObjectOrInterfaceDefinition,
} from "../ontology/ObjectOrInterface.js";
import type { SimplePropertyDef } from "../ontology/SimplePropertyDef.js";
import type {
  BaseWithPropertyObjectSet,
  WithPropertyObjectSet,
} from "./WithPropertyObjectSet.js";

export namespace Rdp {
  export type SelectorResult<
    T extends SimplePropertyDef,
  > = {
    type: T;
  };

  export type Clause<
    Q extends ObjectOrInterfaceDefinition,
  > = {
    [key: string]: Selector<Q, SimplePropertyDef>;
  };

  export type Selector<
    Q extends ObjectOrInterfaceDefinition,
    T extends SimplePropertyDef,
  > = (
    baseObjectSet: Rdp.Builder<Q>,
  ) => SelectorResult<T>;

  export interface Builder<Q extends ObjectOrInterfaceDefinition> extends
    // Fixme, just move the contents of BaseWithPropertyObjectSet in place
    BaseWithPropertyObjectSet<Q>
  {
  }

  export namespace Builder {
    export interface Full<Q extends ObjectOrInterfaceDefinition> extends
      // Fixme, just move the contents of WithPropertyObjectSet in place
      WithPropertyObjectSet<Q>
    {
    }
  }
}
