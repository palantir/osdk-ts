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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { GetSecurityProvenanceRequest } from "../objectstorage/GetSecurityProvenanceRequest.js";
import type { GetSecurityProvenanceResponse } from "../objectstorage/GetSecurityProvenanceResponse.js";

/**
 * Called by OMS ObjectTypeInputManager and LinkTypeInputManager to retrieve security provenance information
 * about Ontology entities made available by Object Storage services.
 */
export async function getSecurityProvenanceInformation(
  ctx: ConjureContext,
  request: GetSecurityProvenanceRequest,
): Promise<GetSecurityProvenanceResponse> {
  return conjureFetch(
    ctx,
    `/object-storage-security-provenance/get-security-provenance`,
    "POST",
    request,
  );
}
