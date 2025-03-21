import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { RelationId } from "./RelationId.js";
/**
* Request to batch load Ontology entities. If any of the requested entities are not available
* in the specified OntologyVersion (or latest if not specified), they will not be present in the
* response.
*
* Please note that this has been deprecated. Please switch to the OntologyBulkLoadEntitiesRequest
* instead.
*/
export interface OntologyLoadRequest {
	partialObjectTypeVersions: Record<ObjectTypeId, OntologyVersion | undefined>;
	bidirectionalRelationVersions: Record<RelationId, OntologyVersion | undefined>;
}
