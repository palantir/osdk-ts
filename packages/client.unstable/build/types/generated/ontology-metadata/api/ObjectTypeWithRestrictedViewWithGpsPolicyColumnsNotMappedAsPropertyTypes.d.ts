import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface ObjectTypeWithRestrictedViewWithGpsPolicyColumnsNotMappedAsPropertyTypes {
	objectTypeRid: ObjectTypeRid;
	missingGpsPolicyColumnsPerRestrictedView: Record<string, Array<string>>;
}
