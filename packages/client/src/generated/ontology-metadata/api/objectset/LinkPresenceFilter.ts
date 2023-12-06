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

import type { RelationId } from "../RelationId.js";
import type { RelationSide } from "../types/RelationSide.js";

/**
 * An object matches a LinkPresenceFilter iff it contains a link to any object along the provided RelationId
 * and if the starting object is on the provided RelationSide of the relation.
 */
export interface LinkPresenceFilter {
  relationId: RelationId;
  relationSide: RelationSide;
}
