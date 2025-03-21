import type { BidirectionalRelation } from "./BidirectionalRelation.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { PartialObjectType } from "./PartialObjectType.js";
import type { RelationId } from "./RelationId.js";
/**
* Response to OntologyLoadRequest.
*/
export interface OntologyLoadResponse {
	partialObjectTypes: Record<ObjectTypeId, PartialObjectType>;
	bidirectionalRelations: Record<RelationId, BidirectionalRelation>;
	currentOntologyVersion: OntologyVersion | undefined;
}
