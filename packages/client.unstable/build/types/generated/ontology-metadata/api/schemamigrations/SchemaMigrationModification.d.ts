import type { SchemaTransitionModification } from "./SchemaTransitionModification.js";
export interface SchemaMigrationModification {
	transitions: Array<SchemaTransitionModification>;
}
