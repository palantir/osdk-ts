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
  CreateReleaseRequest as _release_api_CreateReleaseRequest,
  CreateReleaseResponse as _release_api_CreateReleaseResponse,
} from "../__components.js";

/**
 * Creates a new release.
 *
 * A release may include an OSDK for the corresponding ontology package and/or publishing a marketplace product.
 * If a release for this compass project already exists, a new version is created. If a previous version
 * published a marketplace product, a new version of the marketplace product is published.
 *
 * When generation of an OSDK generation is selected, all resources in the ontology package will be imported to
 * the compass project in which the artifacts repository is located.
 *
 * Requires marketplace:manage-compass on compass project rid
 *
 * Throws:
 * Release:CreateReleaseConflict if a release with this version number already exists for this project.
 * Release:NoMavenProductIdOnCompassProject on the first release if the compass project is missing
 * a maven product id.
 * Release:MavenProductIdChangedBetweenReleases on subsequent releases if a maven project id was provided that
 * differs from the previous release.
 */
export async function createRelease(
  ctx: ConjureContext,
  request: _release_api_CreateReleaseRequest,
): Promise<_release_api_CreateReleaseResponse> {
  return conjureFetch(ctx, `/releases/create`, "POST", request);
}
