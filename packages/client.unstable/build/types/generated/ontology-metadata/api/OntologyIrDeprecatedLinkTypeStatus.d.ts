import type { LinkTypeId } from "./LinkTypeId.js";
/**
* This status indicates that the LinkType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface OntologyIrDeprecatedLinkTypeStatus {
	message: string;
	deadline: string;
	replacedBy: LinkTypeId | undefined;
}
