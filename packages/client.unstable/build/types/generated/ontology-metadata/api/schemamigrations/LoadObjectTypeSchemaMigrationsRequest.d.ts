import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { LoadSchemaMigrationsPagingToken } from "./LoadSchemaMigrationsPagingToken.js";
/**
* Request to load schema migrations for the given ObjectTypeRid at the given OntologyVersion.
*/
export interface LoadObjectTypeSchemaMigrationsRequest {
	objectTypeRid: ObjectTypeRid;
	ontologyVersion: OntologyVersion | undefined;
	pageToken: LoadSchemaMigrationsPagingToken | undefined;
}
