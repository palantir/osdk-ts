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
  ApplicationRid as _api_ApplicationRid,
  UpdateApplicationOrganizationsRequest
    as _api_UpdateApplicationOrganizationsRequest,
} from "../__components.js";

/**
 * Update the allowed organizations on a third-party application service project.
 *
 * The following conditions must be satisfied for the request to be successful:
 * - Calling user must have the following permissions:
 * - third-party-application:manage-application-organizations on the application rid.
 * - gatekeeper:use-marking (referred to as Apply) on each of the passed markingIds.
 * - gatekeeper:use-marking and gatekeeper:declassify-marking (referred to as Expand) on each of
 * the existing applied organizations present on the service project that aren't being modified.
 * - Ability to load the referenced organizations by their markingIds.
 * - The referenced markings are applied on the application's namespace.
 * - The application's main organization is not being modified.
 */
export async function updateApplicationOrganizations(
  ctx: ConjureContext,
  applicationRid: _api_ApplicationRid,
  request: _api_UpdateApplicationOrganizationsRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/applications/${applicationRid}/organizations`,
    "PUT",
    request,
  );
}
