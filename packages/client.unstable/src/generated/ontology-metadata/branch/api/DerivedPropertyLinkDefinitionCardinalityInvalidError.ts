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
 * The link type in the derived property definition is not valid for the derived property definition.
 * For example, aggregation must be performed on a "many" side of a link, and linked property
 * must be on an "one" side.
 */
export interface DerivedPropertyLinkDefinitionCardinalityInvalidError {
  objectTypeRid: ObjectTypeRid;
  linkTypeRid: LinkTypeRid;
}
