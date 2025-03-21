import type { OntologyIrInitializationSource } from "./OntologyIrInitializationSource.js";
import type { OntologyIrPrimaryKeyRenames } from "./OntologyIrPrimaryKeyRenames.js";
import type { OntologyIrRenamePropertyMigration } from "./OntologyIrRenamePropertyMigration.js";
import type { RenameDatasourceMigration } from "./RenameDatasourceMigration.js";
/**
* Migration that can be used to initialize an ontology entity with data that's stored in the initialization
* source.
*/
export interface OntologyIrInitializePatchesMigration {
	datasourceRenames: Array<RenameDatasourceMigration>;
	propertyRenames: Array<OntologyIrRenamePropertyMigration>;
	primaryKeyRenames: OntologyIrPrimaryKeyRenames;
	initializationSource: OntologyIrInitializationSource;
}
