import type { EntityMigrationStatus } from "./EntityMigrationStatus.js";
import type { SyncMetadata } from "./SyncMetadata.js";
/**
* Metadata associated with LinkTypes which can only be modified by services.
* Any metadata which is expected to be configured by users directly should instead
* be added to the LinkTypeEntityMetadata object.
*
* LinkTypeSystemEntityMetadata will automatically be deleted when
* the LinkType is deleted through an Ontology modification.
*/
export interface LinkTypeSystemEntityMetadata {
	syncMetadata: SyncMetadata;
	entityMigrationStatus: EntityMigrationStatus;
	redacted: boolean | undefined;
}
