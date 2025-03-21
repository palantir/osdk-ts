import type { TypeGroupRid } from "./TypeGroupRid.js";
import type { VersionReference } from "./VersionReference.js";
export interface TypeGroupLoadRequest {
	rid: TypeGroupRid;
	versionReference: VersionReference | undefined;
}
