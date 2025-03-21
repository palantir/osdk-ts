import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { VersionReference } from "./VersionReference.js";
export interface InterfaceTypeLoadRequest {
	rid: InterfaceTypeRid;
	versionReference: VersionReference | undefined;
}
