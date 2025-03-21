import { type ConjureContext } from "conjure-lite";
import type { LoadAllWorkflowsPageRequest } from "../../workflow/api/LoadAllWorkflowsPageRequest.js";
import type { LoadAllWorkflowsPageResponse } from "../../workflow/api/LoadAllWorkflowsPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Endpoint to get all the Workflows a user has access to. There are no guarantees that the Workflow will have
* all the required entities to be able to adhere to the associated Workflow Archetype.
*
* Clients are expected to continue to page until there is an empty nextPageToken in the
* `LoadAllWorkflowsPageResponse`, which indicates that there are no more workflows to retrieve.
*/
export declare function loadAllWorkflowsFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyVersion: OntologyVersion, request: LoadAllWorkflowsPageRequest): Promise<LoadAllWorkflowsPageResponse>;
