import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
import type { VersionReference } from "./VersionReference.js";
/**
* Request to load a SharedPropertyType.
*/
export interface SharedPropertyTypeLoadRequest {
	rid: SharedPropertyTypeRid;
	versionReference: VersionReference | undefined;
}
