import type { PatchBackup } from "./PatchBackup.js";
export interface InitializationSource_backup {
	type: "backup";
	backup: PatchBackup;
}
/**
* Metadata regarding the source of data that can be used to run a one time initialization of an ontology entity.
*/
export type InitializationSource = InitializationSource_backup;
