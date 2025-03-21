import type { JoinDefinition } from "./JoinDefinition.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { RelationCardinality } from "./RelationCardinality.js";
import type { RelationDisplayMetadata } from "./RelationDisplayMetadata.js";
import type { RelationId } from "./RelationId.js";
export interface BidirectionalRelationWithoutRid {
	id: RelationId;
	cardinality: RelationCardinality;
	sourceObjectTypeId: ObjectTypeId;
	targetObjectTypeId: ObjectTypeId;
	displayMetadataOnSource: RelationDisplayMetadata | undefined;
	displayMetadataOnTarget: RelationDisplayMetadata | undefined;
	definition: JoinDefinition;
}
