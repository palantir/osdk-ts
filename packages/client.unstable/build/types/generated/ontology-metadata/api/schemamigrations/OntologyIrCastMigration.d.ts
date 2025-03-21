import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { OntologyIrType } from "../OntologyIrType.js";
/**
* Migration to cast a property to another type.
*/
export interface OntologyIrCastMigration {
	property: ObjectTypeFieldApiName;
	source: OntologyIrType;
	target: OntologyIrType;
}
