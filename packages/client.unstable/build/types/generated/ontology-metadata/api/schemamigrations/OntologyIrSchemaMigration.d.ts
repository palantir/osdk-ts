import type { SchemaMigrationRid } from "../SchemaMigrationRid.js";
import type { OntologyIrSchemaMigrationInstruction } from "./OntologyIrSchemaMigrationInstruction.js";
/**
* A SchemaMigrationInstruction with a unique identifier.
*/
export interface OntologyIrSchemaMigration {
	rid: SchemaMigrationRid;
	instruction: OntologyIrSchemaMigrationInstruction;
}
