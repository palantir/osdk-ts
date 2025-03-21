import type { OsdkBase } from "../OsdkBase.js";
export interface EXPERIMENTAL_BulkLinkResult {
	object: OsdkBase<any>;
	linkApiName: string;
	otherObjectApiName: string | undefined;
	otherObjectPk: unknown;
}
