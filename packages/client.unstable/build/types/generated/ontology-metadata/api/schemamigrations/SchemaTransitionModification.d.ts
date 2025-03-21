import type { DeleteTransitionModification } from "./DeleteTransitionModification.js";
import type { NewVersionSchemaTransitionModification } from "./NewVersionSchemaTransitionModification.js";
import type { PastVersionSchemaTransitionModification } from "./PastVersionSchemaTransitionModification.js";
export interface SchemaTransitionModification_newVersion {
	type: "newVersion";
	newVersion: NewVersionSchemaTransitionModification;
}
export interface SchemaTransitionModification_pastVersion {
	type: "pastVersion";
	pastVersion: PastVersionSchemaTransitionModification;
}
export interface SchemaTransitionModification_delete {
	type: "delete";
	delete: DeleteTransitionModification;
}
/**
* Type to represent a schema transition modification. Either to delete or create a new SchemaTransition where
* the target version is either the schema version that will be created as a result of the current modification,
* or a past schema version.
*/
export type SchemaTransitionModification = SchemaTransitionModification_newVersion | SchemaTransitionModification_pastVersion | SchemaTransitionModification_delete;
