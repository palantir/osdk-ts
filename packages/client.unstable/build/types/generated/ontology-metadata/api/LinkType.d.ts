import type { LinkDefinition } from "./LinkDefinition.js";
import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { LinkTypeStatus } from "./LinkTypeStatus.js";
/**
* LinkType(s) are models for relationships between ObjectType(s).
*/
export interface LinkType {
	definition: LinkDefinition;
	id: LinkTypeId;
	rid: LinkTypeRid;
	status: LinkTypeStatus;
	redacted: boolean | undefined;
}
