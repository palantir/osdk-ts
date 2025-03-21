import type { RelationId } from "./RelationId.js";
import type { RelationSide } from "./RelationSide.js";
/**
* An object matches an ApproximateLinkPresenceFilter iff it contains a link to any object along the provided RelationId
* and if the starting object is on the provided RelationSide of the relation.
*
* WARNING: Due to the performance constraints, this filter does not always check if the linked object actually exists.
* As a consequence it is possible that ApproximateLinkPresenceFilter will yield more objects, including those which are
* linked to non-existent ones. Hence, whenever this filter is used, result set should be treated as approximate.
*
* It is guaranteed that no links will be missed during filtering, so in order to make results accurate, it is enough for
* clients to filter out results linked to non-existing objects.
*
* If use case relies on linked objects existence and requires accurate results, clients are encouraged to use ObjectSetLinkFilter instead.
*/
export interface ApproximateLinkPresenceFilter {
	relationId: RelationId;
	relationSide: RelationSide;
}
