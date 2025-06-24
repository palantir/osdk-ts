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
  ModuleGroupName as _ModuleGroupName,
  SparkModuleGroupCreationOrUpdateRequest
    as _SparkModuleGroupCreationOrUpdateRequest,
} from "../__components.js";

/**
 * Creates a Spark module group according to the provided group definition.
 * If the group already exists, it updates its definition to the provided one.
 *
 * The authHeader must be for a service user.
 *
 * Returns a 403 if the auth header does not have "contour:create-module-group" on the root module group node.
 */
export async function createOrUpdateSparkModuleGroupDeprecated(
  ctx: ConjureContext,
  moduleGroupName: _ModuleGroupName,
  moduleGroupCreationOrUpdateRequest: _SparkModuleGroupCreationOrUpdateRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/module-group/${moduleGroupName}`,
    "POST",
    moduleGroupCreationOrUpdateRequest,
  );
}
