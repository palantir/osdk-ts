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

import type { ActionDefinition } from "./ActionDefinition.js";
import type { InterfaceDefinition } from "./InterfaceDefinition.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";
import type { OntologyMetadata } from "./OntologyMetadata.js";
import type { QueryDefinition } from "./QueryDefinition.js";

export interface OntologyDefinition<
  K extends string,
  A extends string = any,
  Q extends string = any,
  I extends string = any,
> {
  metadata: OntologyMetadata;
  objects: {
    [KK in K]: ObjectTypeDefinition<KK, K>;
  };
  actions: {
    [AA in A]: ActionDefinition<AA, K>;
  };
  queries: {
    [QQ in Q]: QueryDefinition<QQ, K>;
  };
  interfaces?: {
    [II in I]: InterfaceDefinition<II, K>;
  };
}
