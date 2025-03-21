import type { BidirectionalRelation } from "./BidirectionalRelation.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
export interface GetRelationsForObjectTypesResponse {
	bidirectionalRelations: Record<ObjectTypeId, Array<BidirectionalRelation>>;
}
