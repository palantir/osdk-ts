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

import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";

/**
 * The entities used within an object set. i.e. object type rids and link type rids
 *
 * Note that relations belonging to an object set can change over time - this information should be treated as
 * dynamic and should not be persisted or treated as immutable.
 */
export interface ObjectSetEntities {
  linkTypeRids: Array<LinkTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}
