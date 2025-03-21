import { type ConjureContext } from "conjure-lite";
import type { GetCreateOntologyPermissionsResponse } from "../GetCreateOntologyPermissionsResponse.js";
/**
* Returns whether the user has permissions to create a new Ontology.
*/
export declare function getCreateOntologyPermissions(ctx: ConjureContext): Promise<GetCreateOntologyPermissionsResponse>;
