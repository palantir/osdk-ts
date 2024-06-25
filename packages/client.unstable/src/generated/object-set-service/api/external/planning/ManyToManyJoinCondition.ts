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

import type { LinkTypeRid } from "../../LinkTypeRid.js";
import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { ReferenceObjectSet } from "./ReferenceObjectSet.js";

/**
 * Condition encoding a join between two Object Sets via a many to many Link Type. The equivalent SQL expression would be `objectSetA.objectSetAProperty = manyToMany.manyToManyAProperty AND manyToMany.manyToManyBProperty = objectSetB.objectSetBProperty`.
 */
export interface ManyToManyJoinCondition {
  objectSetA: ReferenceObjectSet;
  objectSetB: ReferenceObjectSet;
  objectSetAProperty: PropertyTypeRid;
  objectSetBProperty: PropertyTypeRid;
  manyToMany: LinkTypeRid;
  manyToManyAProperty: PropertyTypeRid;
  manyToManyBProperty: PropertyTypeRid;
}
