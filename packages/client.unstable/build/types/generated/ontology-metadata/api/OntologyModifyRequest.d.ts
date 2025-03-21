import type { BidirectionalRelationModifyRequest } from "./BidirectionalRelationModifyRequest.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { PartialObjectTypeModifyRequest } from "./PartialObjectTypeModifyRequest.js";
import type { RelationId } from "./RelationId.js";
export interface OntologyModifyRequest {
	partialObjectTypes: Record<ObjectTypeId, PartialObjectTypeModifyRequest>;
	bidirectionalRelations: Record<RelationId, BidirectionalRelationModifyRequest>;
	expectedOntologyVersion: OntologyVersion | undefined;
}
