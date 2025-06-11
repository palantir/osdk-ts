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
  ModuleId as _ModuleId,
  ModuleStatus as _ModuleStatus,
} from "../__components.js";

/**
 * Returns the the status of a single module
 */
export async function getContainerModuleStatus(
  ctx: ConjureContext,
  moduleGroupName: _ModuleGroupName,
  moduleId: _ModuleId,
): Promise<_ModuleStatus> {
  return conjureFetch(
    ctx,
    `/module-group/${moduleGroupName}/${moduleId}/container-module-status`,
    "GET",
  );
}
