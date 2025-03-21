import type { LinkTypeId } from "./LinkTypeId.js";
import type { ParameterId } from "./ParameterId.js";
export interface DeleteLinkRule {
	linkTypeId: LinkTypeId;
	sourceObject: ParameterId;
	targetObject: ParameterId;
}
