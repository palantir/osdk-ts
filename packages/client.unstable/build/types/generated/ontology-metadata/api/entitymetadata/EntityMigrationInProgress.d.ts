import type { OntologyVersion } from "../OntologyVersion.js";
import type { ActiveStorageBackend } from "./ActiveStorageBackend.js";
import type { EntityMigrationCategory } from "./EntityMigrationCategory.js";
import type { EntityMigrationStage } from "./EntityMigrationStage.js";
import type { SoakPeriodInformation } from "./SoakPeriodInformation.js";
import type { TimeWindow } from "./TimeWindow.js";
/**
* Contains the information for a running migration.
*/
export interface EntityMigrationInProgress {
	migrationStage: EntityMigrationStage;
	migrationType: EntityMigrationCategory;
	startedAt: string;
	atOntologyVersion: OntologyVersion;
	nextTransitionWindow: TimeWindow | undefined;
	readFrom: ActiveStorageBackend;
	writeTo: ActiveStorageBackend | undefined;
	soakPeriod: SoakPeriodInformation | undefined;
	timestampOfTheFirstSuccessfulSync: string | undefined;
	numberOfEdits: number | undefined;
}
