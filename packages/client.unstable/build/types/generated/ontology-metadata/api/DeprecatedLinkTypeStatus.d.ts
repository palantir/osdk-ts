import type { LinkTypeRid } from "./LinkTypeRid.js";
/**
* This status indicates that the LinkType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface DeprecatedLinkTypeStatus {
	message: string;
	deadline: string;
	replacedBy: LinkTypeRid | undefined;
}
