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

import type { LinkedPropertyRelationSide } from "./LinkedPropertyRelationSide.js";
import type { ObjectSet } from "./ObjectSet.js";
import type { PropertyId } from "./PropertyId.js";
import type { RelationId } from "./RelationId.js";

/**
 * A derived property that references a property on a linked object.
 * The linked object is specified by a link type and direction.
 *
 * NB: The contract for this derived property is that it may not change the cardinality of the source object set.
 * This means that only one-to-one and one-to-many link types are supported. Additionally, the target property
 * must be on the 'one' side of the link in the latter case.
 *
 * If the desired target property is on the 'many' side of a link, then either a linked objects aggregation
 * should be considered, or the link direction should be reversed (one-to-many case only).
 */
export interface LinkedObjectPropertyDefinition {
  relationId: RelationId;
  targetPropertyId: PropertyId;
  targetObjectSet: ObjectSet;
  relationSide: LinkedPropertyRelationSide | undefined;
}
