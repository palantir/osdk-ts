import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../OntologyRid.js";
import type { LoadGothamTypeInstallationStatusesRequest } from "../typemapping/LoadGothamTypeInstallationStatusesRequest.js";
import type { LoadGothamTypeInstallationStatusesResponse } from "../typemapping/LoadGothamTypeInstallationStatusesResponse.js";
/**
* Retrieves the install status of a type by URI. Also returns its corresponding Foundry ontology version
* if the type is created by type mapping from Foundry.
* This will return the most recently queued version or most
* recently staged version or the runtime version if neither of the first two exist.
*
* For mapped Foundry object types, the installation status represents the status of the object itself along with
* all of its local property types. Specifically:
* 1. status shows "installed" only when all of its local property types have also been installed
* 2. status shows "failed" if any of its local property types failed installation
* For individual property type installation statuses, query by the property type URIs.
*/
export declare function loadGothamTypeInstallationStatuses(ctx: ConjureContext, ontologyRid: OntologyRid, request: LoadGothamTypeInstallationStatusesRequest): Promise<LoadGothamTypeInstallationStatusesResponse>;
