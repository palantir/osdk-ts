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
import type { GetOntologySummaryRequest } from "../GetOntologySummaryRequest.js";
import type { GetOntologySummaryResponse } from "../GetOntologySummaryResponse.js";
import type { OntologyRid } from "../OntologyRid.js";

/**
 * Endpoint to load a summary of an Ontology including the number of entities of each type visible to the user.
 *
 * An entity is considered visible if the user has `view` or `discover` permissions. ObjectTypes and LinkTypes
 * migrated to roles are also considered visible regardless of the users permissions on the backing datasources
 * (i.e. the endpoint runs using `includeObjectTypesWithoutSearchableDatasources` set to true).
 *
 * The results in this endpoint are eventually consistent with the latest OntologyVersion and may lag slightly
 * behind the last Ontology modification.
 */
export async function getOntologySummary(
  ctx: ConjureContext,
  ontologyRid: OntologyRid,
  request: GetOntologySummaryRequest,
): Promise<GetOntologySummaryResponse> {
  return conjureFetch(
    ctx,
    `/ontology/ontology/load/${ontologyRid}/summary`,
    "POST",
    request,
  );
}
