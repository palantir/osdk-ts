import type { ObjectTypeSchemaTransitions } from "./ObjectTypeSchemaTransitions.js";
/**
* Response to BulkLoadObjectTypeSchemaMigrationsRequest. Contains the transitions defined up to the
* requested ontology version for each requested ObjectType.
*/
export interface BulkLoadObjectTypeSchemaMigrationsResponse {
	schemaTransitions: Array<ObjectTypeSchemaTransitions>;
}
