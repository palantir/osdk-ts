import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { BackupId } from "./BackupId.js";
/**
* Contains the information that can be used to restore patches that were deleted by mistake.
*/
export interface PatchBackup {
	backupId: BackupId;
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion;
}
