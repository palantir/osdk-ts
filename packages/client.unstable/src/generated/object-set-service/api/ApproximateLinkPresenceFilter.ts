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

import type { RelationId } from "./RelationId.js";
import type { RelationSide } from "./RelationSide.js";

/**
 * An object matches an ApproximateLinkPresenceFilter iff it contains a link to any object along the provided RelationId
 * and if the starting object is on the provided RelationSide of the relation.
 *
 * WARNING: Due to the performance constraints, this filter does not always check if the linked object actually exists.
 * As a consequence it is possible that ApproximateLinkPresenceFilter will yield more objects, including those which are
 * linked to non-existent ones. Hence, whenever this filter is used, result set should be treated as approximate.
 *
 * It is guaranteed that no links will be missed during filtering, so in order to make results accurate, it is enough for
 * clients to filter out results linked to non-existing objects.
 *
 * If use case relies on linked objects existence and requires accurate results, clients are encouraged to use ObjectSetLinkFilter instead.
 */
export interface ApproximateLinkPresenceFilter {
  relationId: RelationId;
  relationSide: RelationSide;
}
