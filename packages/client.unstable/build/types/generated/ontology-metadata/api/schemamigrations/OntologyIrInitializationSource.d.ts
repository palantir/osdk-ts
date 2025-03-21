import type { OntologyIrPatchBackup } from "./OntologyIrPatchBackup.js";
export interface OntologyIrInitializationSource_backup {
	type: "backup";
	backup: OntologyIrPatchBackup;
}
/**
* Metadata regarding the source of data that can be used to run a one time initialization of an ontology entity.
*/
export type OntologyIrInitializationSource = OntologyIrInitializationSource_backup;
