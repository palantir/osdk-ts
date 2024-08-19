/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeBinding } from "./ActionTypeBinding.js";
import type { FunctionBinding } from "./FunctionBinding.js";
import type { InterfaceTypeBinding } from "./InterfaceTypeBinding.js";
import type { LinkTypeBinding } from "./LinkTypeBinding.js";
import type { ObjectTypeBinding } from "./ObjectTypeBinding.js";

/**
 * Contains bindings for each resource included in an SDK.
 *
 * Each binding contains a resource's API name, as it was on the stack the
 * SDK originated from, along with the RID of the equivalent resource on the
 * current, local stack.
 */
export interface ResourceBindings {
  interfaceTypes: Array<InterfaceTypeBinding>;
  objectTypes: Array<ObjectTypeBinding>;
  linkTypes: Array<LinkTypeBinding>;
  actionTypes: Array<ActionTypeBinding>;
  functions: Array<FunctionBinding>;
}
