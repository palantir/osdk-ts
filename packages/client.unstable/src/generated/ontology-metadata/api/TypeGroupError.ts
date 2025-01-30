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

import type { TypeGroupsAlreadyExistError } from "./TypeGroupsAlreadyExistError.js";
import type { TypeGroupsNotFoundError } from "./TypeGroupsNotFoundError.js";
export interface TypeGroupError_typeGroupsNotFound {
  type: "typeGroupsNotFound";
  typeGroupsNotFound: TypeGroupsNotFoundError;
}

export interface TypeGroupError_typeGroupsAlreadyExist {
  type: "typeGroupsAlreadyExist";
  typeGroupsAlreadyExist: TypeGroupsAlreadyExistError;
}
export type TypeGroupError =
  | TypeGroupError_typeGroupsNotFound
  | TypeGroupError_typeGroupsAlreadyExist;
