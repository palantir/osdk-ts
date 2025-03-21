import type { SchemaVersion } from "../SchemaVersion.js";
import type { LoadSchemaMigrationsPagingToken } from "./LoadSchemaMigrationsPagingToken.js";
import type { SchemaTransition } from "./SchemaTransition.js";
/**
* Response to LoadObjectTypeSchemaMigrationsRequest. Contains the transitions defined up to the
* requested ontology version.
*/
export interface LoadObjectTypeSchemaMigrationsResponse {
	migrationPageItems: Array<SchemaTransition>;
	schemaVersion: SchemaVersion;
	nextPageToken: LoadSchemaMigrationsPagingToken | undefined;
}
