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
import type { OntologyRid } from "../OntologyRid.js";
import type { GetGothamObjectTypesResponse } from "../typemapping/GetGothamObjectTypesResponse.js";

/**
 * Returns all object types from the Gotham ontology that are not Foundry owned as instances of
 * GothamObjectTypeAvailable. This endpoint does not modify the ontology; to actually import an object
 * type from Gotham, a user must create an object type on OMA and set the desired object type
 * as a target to take over.
 * Also returns unavailable object types along with causes for unavailability.
 */
export async function getGothamObjectTypes(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
): Promise<GetGothamObjectTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/typemapping/getGothamObjectTypes/${ontologyRid}`,
    "GET",
  );
}
