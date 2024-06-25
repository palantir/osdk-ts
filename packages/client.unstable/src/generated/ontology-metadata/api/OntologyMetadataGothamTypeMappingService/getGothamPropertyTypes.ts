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
import type { GetGothamPropertyTypesResponse } from "../typemapping/GetGothamPropertyTypesResponse.js";

/**
 * Returns a GetGothamPropertyTypesResponse that contains available gotham property types
 * as shared property type modifications and the unavailable types along with the reason for the unavailability.
 * If the shared property type requires a backing Value Type to be created as well, the response will include a
 * non-empty CreateValueTypeRequest. Will generate unique API names for the properties imported,
 * de-duplicating using the provided existingSharedPropertyTypeApiNames. Note that
 * GetGothamPropertyTypesResponse.gothamPropertyTypesAvailable, which does not return required Value
 * Types, is deprecated.
 * Returns all property types from the Gotham ontology that are not Foundry owned as
 * SharedPropertyTypeModifications. This endpoint does not modify the ontology; to actually import a property
 * type from Gotham, a user must eventually save a property as an SPT.
 */
export async function getGothamPropertyTypes(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
): Promise<GetGothamPropertyTypesResponse> {
  return conjureFetch(
    ctx,
    `/ontology/typemapping/getGothamPropertyTypes/${ontologyRid}`,
    "GET",
  );
}
