import { type ConjureContext } from "conjure-lite";
import type { CheckExistingUniqueIdentifiersRequest } from "../../modification/CheckExistingUniqueIdentifiersRequest.js";
import type { CheckExistingUniqueIdentifiersResponse } from "../../modification/CheckExistingUniqueIdentifiersResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Intended for use when making modifications to the Ontology. Allows checking ahead of time if identifiers that
* need to be unique are actually unique. This endpoint is not expected to be called on every keystroke of an
* input box, but rather once all text has been entered. A maximum of 500 identifiers is allowed.
* This will also return reused ObjectTypeIds if on a multitenant stack.
*/
export declare function checkExistingUniqueIdentifiers(ctx: ConjureContext, ontologyRid: OntologyRid, request: CheckExistingUniqueIdentifiersRequest): Promise<CheckExistingUniqueIdentifiersResponse>;
