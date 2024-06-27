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

import type { MultipassAttribute } from "./MultipassAttribute.js";
import type { MultipassUserId } from "./MultipassUserId.js";
export interface UserContextValue_multipassUserId {
  type: "multipassUserId";
  multipassUserId: MultipassUserId;
}

export interface UserContextValue_multipassAttribute {
  type: "multipassAttribute";
  multipassAttribute: MultipassAttribute;
}
/**
 * Represents a value that is resolved at runtime via the context of who is querying the object set.
 */
export type UserContextValue =
  | UserContextValue_multipassUserId
  | UserContextValue_multipassAttribute;
