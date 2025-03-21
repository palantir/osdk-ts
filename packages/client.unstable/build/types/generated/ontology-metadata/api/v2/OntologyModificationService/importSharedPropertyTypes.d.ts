import { type ConjureContext } from "conjure-lite";
import type { ImportSharedPropertyTypesRequest } from "../../modification/ImportSharedPropertyTypesRequest.js";
import type { ImportSharedPropertyTypesResponse } from "../../modification/ImportSharedPropertyTypesResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Imports SharedPropertyTypes from their corresponding ontology to another. This will result in both ontologies
* having the exact same SharedPropertyType in their latest ontology version. An imported SharedPropertyType can
* no longer be modified while it is still imported into at least one ontology.
*
* The user running the import must be owner of the imported SharedPropertyTypes and have owner privileges on the
* importing ontology.
*
* The imported SharedPropertyTypes are subject to the same validations and checks as if it was created in the
* importing ontology.
*
* A maximum of 50 SharedPropertyTypes can be imported per request.
*/
export declare function importSharedPropertyTypes(ctx: ConjureContext, ontologyRid: OntologyRid, request: ImportSharedPropertyTypesRequest): Promise<ImportSharedPropertyTypesResponse>;
