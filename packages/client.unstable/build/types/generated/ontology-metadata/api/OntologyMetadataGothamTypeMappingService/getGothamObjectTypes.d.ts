import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../OntologyRid.js";
import type { GetGothamObjectTypesResponse } from "../typemapping/GetGothamObjectTypesResponse.js";
/**
* Returns all object types from the Gotham ontology that are not Foundry owned as instances of
* GothamObjectTypeAvailable. This endpoint does not modify the ontology; to actually import an object
* type from Gotham, a user must create an object type on OMA and set the desired object type
* as a target to take over.
* Also returns unavailable object types along with causes for unavailability.
*/
export declare function getGothamObjectTypes(ctx: ConjureContext, ontologyRid: OntologyRid): Promise<GetGothamObjectTypesResponse>;
