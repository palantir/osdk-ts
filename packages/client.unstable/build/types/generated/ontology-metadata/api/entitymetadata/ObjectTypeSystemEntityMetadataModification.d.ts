import type { EntityMigrationStatusModification } from "./EntityMigrationStatusModification.js";
import type { SyncMetadataModification } from "./SyncMetadataModification.js";
/**
* Used to set ObjectTypeSystemEntityMetadata for an ObjectType.
*
* NOTE: This modification request will carry out a complete overwrite of fields for which the values
* are provided.
*/
export interface ObjectTypeSystemEntityMetadataModification {
	syncMetadata: SyncMetadataModification | undefined;
	entityMigrationStatus: EntityMigrationStatusModification | undefined;
}
