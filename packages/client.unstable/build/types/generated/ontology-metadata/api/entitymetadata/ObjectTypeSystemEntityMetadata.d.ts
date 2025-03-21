import type { EntityMigrationStatus } from "./EntityMigrationStatus.js";
import type { SyncMetadata } from "./SyncMetadata.js";
/**
* Metadata associated with ObjectTypes which can only be modified by services.
* Any metadata which is expected to be configured by users directly should instead
* be added to the ObjectTypeEntityMetadata object.
*
* ObjectTypeSystemEntityMetadata will automatically be deleted when
* the ObjectType is deleted through an Ontology modification.
*/
export interface ObjectTypeSystemEntityMetadata {
	syncMetadata: SyncMetadata;
	entityMigrationStatus: EntityMigrationStatus;
	redacted: boolean | undefined;
}
