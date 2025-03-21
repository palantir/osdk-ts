import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* The entities used within an object set. i.e. object type rids and link type rids
*
* Note that relations belonging to an object set can change over time - this information should be treated as
* dynamic and should not be persisted or treated as immutable.
*/
export interface ObjectSetEntities {
	linkTypeRids: Array<LinkTypeRid>;
	objectTypeRids: Array<ObjectTypeRid>;
}
