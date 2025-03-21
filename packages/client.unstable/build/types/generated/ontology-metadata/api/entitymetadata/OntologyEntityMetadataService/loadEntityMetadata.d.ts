import { type ConjureContext } from "conjure-lite";
import type { LoadEntityMetadataRequest } from "../LoadEntityMetadataRequest.js";
import type { LoadEntityMetadataResponse } from "../LoadEntityMetadataResponse.js";
/**
* Endpoint to load the EntityMetadata for the specified ObjectTypeRids/LinkTypeRids at the specified
* OntologyVersion.
*
* The response will contain EntityMetadata for a requested ObjectType/LinkType unless at least one of the
* the following applies:
* - the specified version is invalid
* - the ObjectType/LinkType does not exist at the specified version
* - the ObjectType/LinkType is not visible to the user
*
* If no EntityMetadata has been set for an existing ObjectType or LinkType, then a default empty
* ObjectTypeEntityMetadata/LinkTypeEntityMetadata object will be returned.
*
* There are limits on the number of EntityMetadatas that can be loaded in one request. Please refer to
* documentation of LoadEntityMetadataRequest for the values of these limits.
*/
export declare function loadEntityMetadata(ctx: ConjureContext, request: LoadEntityMetadataRequest): Promise<LoadEntityMetadataResponse>;
