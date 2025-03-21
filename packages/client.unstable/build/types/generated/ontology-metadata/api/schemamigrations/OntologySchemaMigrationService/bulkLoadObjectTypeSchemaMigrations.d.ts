import { type ConjureContext } from "conjure-lite";
import type { BulkLoadObjectTypeSchemaMigrationsRequest } from "../BulkLoadObjectTypeSchemaMigrationsRequest.js";
import type { BulkLoadObjectTypeSchemaMigrationsResponse } from "../BulkLoadObjectTypeSchemaMigrationsResponse.js";
/**
* Endpoint to bulk load schema migrations for ObjectTypes at a given OntologyVersions. Requires viewer
* permissions on the ObjectTypes, and will filter out ObjectTypes for which the user does not have the required
* permissions as well as ObjectTypes that do not exist at the given version.
* Limited to maximum 50 VersionedObjectTypeRids per call and will throw if the limit is exceeded.
*/
export declare function bulkLoadObjectTypeSchemaMigrations(ctx: ConjureContext, request: BulkLoadObjectTypeSchemaMigrationsRequest): Promise<BulkLoadObjectTypeSchemaMigrationsResponse>;
