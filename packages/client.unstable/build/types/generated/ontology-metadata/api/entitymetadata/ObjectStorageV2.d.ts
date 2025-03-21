import type { EditsHistoryImportConfiguration } from "./EditsHistoryImportConfiguration.js";
import type { MigrationConfiguration } from "./MigrationConfiguration.js";
/**
* Entity can be stored in Highbury and other V2 Object DBs. It is not possible to store the entity in Phonograph.
* Edits can be enabled or disabled using the `arePatchesEnabled` field in ObjectTypeEntityMetadata/LinkTypeEntityMetadata.
*
* Note that this field indicates a target state. There is no guarantee that the object type or link type has
* finished syncing. A migration may currently be in progress and queries may still be served by Phonograph during
* particular stages of the migration process.
*
* In order to determine whether the object type or link type can be queried via OSv2 the Funnel getCurrentView
* endpoint can be used.
*/
export interface ObjectStorageV2 {
	migrationConfiguration: MigrationConfiguration | undefined;
	editsHistoryImportConfiguration: EditsHistoryImportConfiguration | undefined;
}
