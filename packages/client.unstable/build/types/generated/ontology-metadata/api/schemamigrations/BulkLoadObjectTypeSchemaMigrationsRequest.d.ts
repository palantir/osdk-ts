import type { VersionedObjectTypeRid } from "./VersionedObjectTypeRid.js";
/**
* Request to load schema migrations for the given ObjectTypeRid at the given OntologyVersion. Maximum 50
* entries allowed.
*/
export interface BulkLoadObjectTypeSchemaMigrationsRequest {
	objectTypeRids: Array<VersionedObjectTypeRid>;
}
