import type { EntityMigrationStatusModification } from "./EntityMigrationStatusModification.js";
import type { SyncMetadataModification } from "./SyncMetadataModification.js";
/**
* Used to set LinkTypeSystemEntityMetadata for a LinkType.
*
* NOTE: This modification request will carry out a complete overwrite of fields for which the values
* are provided.
*/
export interface LinkTypeSystemEntityMetadataModification {
	syncMetadata: SyncMetadataModification | undefined;
	entityMigrationStatus: EntityMigrationStatusModification | undefined;
}
