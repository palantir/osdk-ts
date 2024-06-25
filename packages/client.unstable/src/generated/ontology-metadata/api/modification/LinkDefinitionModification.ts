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

import type { ManyToManyLinkDefinitionModification } from "./ManyToManyLinkDefinitionModification.js";
import type { OneToManyLinkDefinitionModification } from "./OneToManyLinkDefinitionModification.js";
export interface LinkDefinitionModification_manyToMany {
  type: "manyToMany";
  manyToMany: ManyToManyLinkDefinitionModification;
}

export interface LinkDefinitionModification_oneToMany {
  type: "oneToMany";
  oneToMany: OneToManyLinkDefinitionModification;
}
export type LinkDefinitionModification =
  | LinkDefinitionModification_manyToMany
  | LinkDefinitionModification_oneToMany;
