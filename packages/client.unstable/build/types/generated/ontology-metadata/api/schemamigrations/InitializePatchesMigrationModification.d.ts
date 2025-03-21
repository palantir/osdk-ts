import type { InitializationSource } from "./InitializationSource.js";
import type { PrimaryKeyRenamesModification } from "./PrimaryKeyRenamesModification.js";
import type { RenameDatasourceMigrationModification } from "./RenameDatasourceMigrationModification.js";
import type { RenamePropertyMigrationModification } from "./RenamePropertyMigrationModification.js";
/**
* Migration that can be used to initialize an ontology entity with data that's stored in the initialization
* source.
*/
export interface InitializePatchesMigrationModification {
	datasourceRenames: Array<RenameDatasourceMigrationModification>;
	propertyRenames: Array<RenamePropertyMigrationModification>;
	primaryKeyRenames: PrimaryKeyRenamesModification;
	initializationSource: InitializationSource;
}
