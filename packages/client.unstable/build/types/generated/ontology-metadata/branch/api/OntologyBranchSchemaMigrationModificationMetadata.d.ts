import type { SchemaVersion } from "../../api/SchemaVersion.js";
export interface OntologyBranchSchemaMigrationModificationMetadata {
	branchedSchemaVersion: SchemaVersion;
	affectedSourceSchemaVersions: Array<SchemaVersion>;
}
