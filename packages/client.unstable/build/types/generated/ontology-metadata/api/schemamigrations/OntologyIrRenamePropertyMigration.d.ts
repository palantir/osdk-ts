import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
/**
* Migration to rename one property to another.
*/
export interface OntologyIrRenamePropertyMigration {
	source: ObjectTypeFieldApiName;
	target: ObjectTypeFieldApiName;
}
