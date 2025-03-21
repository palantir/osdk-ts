import type { SchemaMigrationRid } from "../SchemaMigrationRid.js";
import type { SchemaMigrationInstruction } from "./SchemaMigrationInstruction.js";
/**
* A SchemaMigrationInstruction with a unique identifier.
*/
export interface SchemaMigration {
	rid: SchemaMigrationRid;
	instruction: SchemaMigrationInstruction;
}
