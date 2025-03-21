import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
export interface DerivedPropertyLinkTypeIdentifierInRequest_linkType {
	type: "linkType";
	linkType: LinkTypeId;
}
export interface DerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
export type DerivedPropertyLinkTypeIdentifierInRequest = DerivedPropertyLinkTypeIdentifierInRequest_linkType | DerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid;
