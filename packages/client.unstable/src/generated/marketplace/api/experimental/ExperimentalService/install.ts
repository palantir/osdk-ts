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
  InstallRequest as _api_experimental_InstallRequest,
  InstallResponse as _api_experimental_InstallResponse,
} from "../__components.js";

/**
 * Simplified install endpoint. Features:
 *
 * - Automatically maps child shapes like properties and columns
 * - Has a simplified type for resolved shapes
 * - Uses input shape titles for mapping
 * - Automatically applies product links to installations within the target namespace
 * - Only supports fresh installs
 * - Only supports doing a single install at a time
 */
export async function install(
  ctx: ConjureContext,
  request: _api_experimental_InstallRequest,
): Promise<_api_experimental_InstallResponse> {
  return conjureFetch(ctx, `/experimental/installations`, "POST", request);
}
