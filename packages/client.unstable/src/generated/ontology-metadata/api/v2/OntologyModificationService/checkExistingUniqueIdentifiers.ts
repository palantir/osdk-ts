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
import type { CheckExistingUniqueIdentifiersRequest } from "../../modification/CheckExistingUniqueIdentifiersRequest.js";
import type { CheckExistingUniqueIdentifiersResponse } from "../../modification/CheckExistingUniqueIdentifiersResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";

/**
 * Intended for use when making modifications to the Ontology. Allows checking ahead of time if identifiers that
 * need to be unique are actually unique. This endpoint is not expected to be called on every keystroke of an
 * input box, but rather once all text has been entered. A maximum of 500 identifiers is allowed.
 * This will also return reused ObjectTypeIds if on a multitenant stack.
 */
export async function checkExistingUniqueIdentifiers(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: CheckExistingUniqueIdentifiersRequest,
): Promise<CheckExistingUniqueIdentifiersResponse> {
  return conjureFetch(
    ctx,
    `/ontology/v2/${ontologyRid}/modification/check-uniqueness`,
    "POST",
    request,
  );
}
