import type { SchemaVersion } from "../SchemaVersion.js";
/**
* Delete existing transition from given source schema version.
*/
export interface DeleteTransitionModification {
	source: SchemaVersion;
}
