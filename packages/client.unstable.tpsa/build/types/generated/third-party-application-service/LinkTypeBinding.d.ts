import type { LinkTypeApiName } from "./LinkTypeApiName.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface LinkTypeBinding {
	localRid: LinkTypeRid;
	sourceObjectTypeLocalRid: ObjectTypeRid;
	targetObjectTypeLocalRid: ObjectTypeRid;
	boundSourceToTargetApiName: LinkTypeApiName;
	boundTargetToSourceApiName: LinkTypeApiName;
}
