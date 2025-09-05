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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  AvailableModulesResponse as _AvailableModulesResponse,
  ModuleGroupName as _ModuleGroupName,
} from "../__components.js";

/**
 * Returns the set of Spark modules in the group that are not currently being phased out and are responding to
 * health checks.
 *
 * The authHeader must be for a service user.
 *
 * Returns a 403 if the auth header does not have "contour:get-module-group" on the root module group node.
 */
export async function getAvailableSparkModules(
  ctx: ConjureContext,
  moduleGroupName: _ModuleGroupName,
): Promise<_AvailableModulesResponse> {
  return conjureFetch(
    ctx,
    `/module-group/${moduleGroupName}/available-modules`,
    "GET",
  );
}
