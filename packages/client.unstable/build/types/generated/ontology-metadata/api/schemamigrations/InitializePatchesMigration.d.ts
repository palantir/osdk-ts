import type { InitializationSource } from "./InitializationSource.js";
import type { PrimaryKeyRenames } from "./PrimaryKeyRenames.js";
import type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
import type { RenamePropertyMigration } from "./RenamePropertyMigration.js";
/**
* Migration that can be used to initialize an ontology entity with data that's stored in the initialization
* source.
*/
export interface InitializePatchesMigration {
	datasourceRenames: Array<RenameDatasourceMigration>;
	propertyRenames: Array<RenamePropertyMigration>;
	primaryKeyRenames: PrimaryKeyRenames;
	initializationSource: InitializationSource;
}
