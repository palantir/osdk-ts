import type { LinkTypeId } from "./LinkTypeId.js";
import type { ParameterId } from "./ParameterId.js";
export interface AddLinkRule {
	linkTypeId: LinkTypeId;
	sourceObject: ParameterId;
	targetObject: ParameterId;
}
