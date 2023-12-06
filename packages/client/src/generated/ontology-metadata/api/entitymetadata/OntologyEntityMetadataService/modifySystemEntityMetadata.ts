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
import type { OntologyRid } from "../../OntologyRid.js";
import type { SystemEntityMetadataModificationRequest } from "../SystemEntityMetadataModificationRequest.js";
import type { SystemEntityMetadataModificationResponse } from "../SystemEntityMetadataModificationResponse.js";

/**
 * Endpoint to modify the SystemEntityMetadata for the specified ObjectType(s)/LinkType(s). This is intended to
 * only be used by Services. The auth header needs to have permissions to edit ObjectTypes(s)/LinkType(s)
 * and be from a privileged user with `ontology:edit-system-entity-metadatas` on the ontology root rid.
 * These modifications will result in a new OntologyVersion, however they will not be present in the
 * modification history.
 */
export async function modifySystemEntityMetadata(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: SystemEntityMetadataModificationRequest,
): Promise<SystemEntityMetadataModificationResponse> {
  return conjureFetch(
    ctx,
    `/entityMetadata/system/modify?${new URLSearchParams({
      "ontologyRid": ontologyRid,
    })}`,
    "POST",
    request,
  );
}
