import type { LinkTypeId } from "../LinkTypeId.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
export interface StorageDerivedPropertyLinkTypeIdentifierInRequest_linkType {
	type: "linkType";
	linkType: LinkTypeId;
}
export interface StorageDerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
export type StorageDerivedPropertyLinkTypeIdentifierInRequest = StorageDerivedPropertyLinkTypeIdentifierInRequest_linkType | StorageDerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid;
