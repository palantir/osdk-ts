import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeStatus } from "../LinkTypeStatus.js";
import type { LinkDefinitionModification } from "./LinkDefinitionModification.js";
export interface LinkTypeModification {
	linkTypeId: LinkTypeId;
	definition: LinkDefinitionModification;
	status: LinkTypeStatus | undefined;
}
