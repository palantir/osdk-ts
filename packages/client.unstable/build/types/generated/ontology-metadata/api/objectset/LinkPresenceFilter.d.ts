import type { RelationId } from "../RelationId.js";
import type { RelationSide } from "../types/RelationSide.js";
/**
* An object matches a LinkPresenceFilter iff it contains a link to any object along the provided RelationId
* and if the starting object is on the provided RelationSide of the relation.
*/
export interface LinkPresenceFilter {
	relationId: RelationId;
	relationSide: RelationSide;
}
