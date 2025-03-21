import type { ObjectSet } from "./ObjectSet.js";
import type { RelationId } from "./RelationId.js";
import type { RelationSide } from "./RelationSide.js";
/**
* Matches iff it contains a link to any object in the provided objectSet, along the provided RelationId, and if
* the starting object is on the provided RelationSide of the relation.
*/
export interface ObjectSetLinkFilter {
	objectSet: ObjectSet;
	relationId: RelationId;
	relationSide: RelationSide;
}
