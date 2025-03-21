import type { ObjectSetRid } from "./ObjectSetRid.js";
import type { ObjectSetVersion } from "./ObjectSetVersion.js";
import type { VersionedObjectSetRid } from "./VersionedObjectSetRid.js";
export interface CreateVersionedObjectSetResponse {
	rid: VersionedObjectSetRid;
	version: ObjectSetVersion;
	objectSetRid: ObjectSetRid;
}
