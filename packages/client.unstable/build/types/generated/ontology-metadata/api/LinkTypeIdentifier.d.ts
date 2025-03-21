import type { LinkTypeId } from "./LinkTypeId.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
export interface LinkTypeIdentifier_linkTypeId {
	type: "linkTypeId";
	linkTypeId: LinkTypeId;
}
export interface LinkTypeIdentifier_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
/**
* Union type to represent the different identifiers for LinkType(s) in load requests.
*/
export type LinkTypeIdentifier = LinkTypeIdentifier_linkTypeId | LinkTypeIdentifier_linkTypeRid;
