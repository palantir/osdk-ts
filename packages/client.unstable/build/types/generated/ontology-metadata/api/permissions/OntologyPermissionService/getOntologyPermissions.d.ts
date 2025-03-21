import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../OntologyBranchRid.js";
import type { OntologyRid } from "../../OntologyRid.js";
import type { GetOntologyPermissionsResponse } from "../GetOntologyPermissionsResponse.js";
/**
* Returns the Ontology-level permissions which the user has.
*/
export declare function getOntologyPermissions(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyBranchRid: OntologyBranchRid | undefined): Promise<GetOntologyPermissionsResponse>;
