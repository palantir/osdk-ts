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

import type { ObjectSet } from "./ObjectSet.js";
import type { RelationId } from "./RelationId.js";
import type { RelationSide } from "./RelationSide.js";

/**
 * Matches iff it contains a link to any object in the provided objectSet, along the provided RelationId, and if
 * the starting object is on the provided RelationSide of the relation.
 */
export interface ObjectSetLinkFilter {
  objectSet: ObjectSet;
  relationId: RelationId;
  relationSide: RelationSide;
}
