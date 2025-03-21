import type { LinkSide } from "./LinkSide.js";
import type { RelationId } from "./RelationId.js";
/**
* Information that specifies side of the given relation.
*/
export interface DirectedRelation {
	relationId: RelationId;
	linkSide: LinkSide;
}
