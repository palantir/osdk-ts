/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";

/**
 * The link definition in the derived property definition is not compatible with the object type that the
 * derived property definition belongs to. The link type specified must link the object type, and if a
 * link type side is specified, it must be the opposite side from the current object type's side. The
 * "source" side is always the side linking with the primary key.
 */
export interface DerivedPropertyLinkDefinitionInvalidError {
  objectTypeRid: ObjectTypeRid;
  linkTypeRid: LinkTypeRid;
}
