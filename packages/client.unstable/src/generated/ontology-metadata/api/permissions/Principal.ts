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

import type { EveryPrincipal } from "./EveryPrincipal.js";
import type { GroupPrincipal } from "./GroupPrincipal.js";
import type { UserPrincipal } from "./UserPrincipal.js";
export interface Principal_everyone {
  type: "everyone";
  everyone: EveryPrincipal;
}

export interface Principal_group {
  type: "group";
  group: GroupPrincipal;
}

export interface Principal_user {
  type: "user";
  user: UserPrincipal;
}
/**
 * The principal to add/remove a role to.
 */
export type Principal = Principal_everyone | Principal_group | Principal_user;
