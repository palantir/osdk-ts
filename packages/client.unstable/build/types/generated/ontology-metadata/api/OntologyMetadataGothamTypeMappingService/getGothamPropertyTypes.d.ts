import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../OntologyRid.js";
import type { GetGothamPropertyTypesResponse } from "../typemapping/GetGothamPropertyTypesResponse.js";
/**
* Returns a GetGothamPropertyTypesResponse that contains available gotham property types
* as shared property type modifications and the unavailable types along with the reason for the unavailability.
* If the shared property type requires any backing Value Types to be created, these will be included in the
* valueTypesToCreate field of the response. Will generate unique API names for the properties imported,
* de-duplicating using the provided existingSharedPropertyTypeApiNames. Note that
* GetGothamPropertyTypesResponse.gothamPropertyTypesAvailable, which does not return required Value
* Types, is deprecated.
* Returns all property types from the Gotham ontology that are not Foundry owned as
* SharedPropertyTypeModifications. This endpoint does not modify the ontology; to actually import a property
* type from Gotham, a user must eventually save a property as an SPT.
*/
export declare function getGothamPropertyTypes(ctx: ConjureContext, ontologyRid: OntologyRid): Promise<GetGothamPropertyTypesResponse>;
