import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface GetReferencedEntitiesResponse {
	linkTypeRids: Array<LinkTypeRid>;
	objectTypeRids: Array<ObjectTypeRid>;
}
