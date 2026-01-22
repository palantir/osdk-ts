/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  GetObjectTypesForInterfaceTypesRequest
    as _api_GetObjectTypesForInterfaceTypesRequest,
  GetObjectTypesForInterfaceTypesResponse
    as _api_GetObjectTypesForInterfaceTypesResponse,
} from "../__components.js";

/**
 * Gets a map of interfaces to the set of object types that implement the interface. At most 50 interfaces can be
 * requested.
 */
export async function getObjectTypesForInterfaceTypes(
  ctx: ConjureContext,
  request: _api_GetObjectTypesForInterfaceTypesRequest,
): Promise<_api_GetObjectTypesForInterfaceTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/objectTypesForInterfaceTypes`,
    "PUT",
    request,
  );
}
