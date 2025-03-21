import { type ConjureContext } from "conjure-lite";
import type { OntologyRid } from "../../OntologyRid.js";
import type { SystemEntityMetadataModificationRequest } from "../SystemEntityMetadataModificationRequest.js";
import type { SystemEntityMetadataModificationResponse } from "../SystemEntityMetadataModificationResponse.js";
/**
* Endpoint to modify the SystemEntityMetadata for the specified ObjectType(s)/LinkType(s). This is intended to
* only be used by Services. The auth header needs to have permissions to edit ObjectTypes(s)/LinkType(s)
* and be from a privileged user with `ontology:edit-system-entity-metadatas` on the ontology root rid.
* These modifications will result in a new OntologyVersion, however they will not be present in the
* modification history.
*/
export declare function modifySystemEntityMetadata(ctx: ConjureContext, ontologyRid: OntologyRid, request: SystemEntityMetadataModificationRequest): Promise<SystemEntityMetadataModificationResponse>;
