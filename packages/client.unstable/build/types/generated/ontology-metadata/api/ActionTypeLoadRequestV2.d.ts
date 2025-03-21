import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { VersionReference } from "./VersionReference.js";
export interface ActionTypeLoadRequestV2 {
	rid: ActionTypeRid;
	versionReference: VersionReference | undefined;
}
