import type { LinkType } from "./LinkType.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectType } from "./ObjectType.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Response to OntologyLoadEntitiesRequest or OntologyLoadAllEntitiesRequest. If any of the requested entities
* are not available in the specified OntologyVersion (or latest if not specified),
* they will not be present in the response.
*/
export interface OntologyLoadEntitiesResponse {
	objectTypes: Record<ObjectTypeRid, ObjectType>;
	linkTypes: Record<LinkTypeRid, LinkType>;
	currentOntologyVersion: OntologyVersion | undefined;
}
