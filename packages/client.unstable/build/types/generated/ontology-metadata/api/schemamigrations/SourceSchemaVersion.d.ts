import type { SchemaVersion } from "../SchemaVersion.js";
import type { LatestSchemaVersion } from "./LatestSchemaVersion.js";
export interface SourceSchemaVersion_latestVersion {
	type: "latestVersion";
	latestVersion: LatestSchemaVersion;
}
export interface SourceSchemaVersion_specificVersion {
	type: "specificVersion";
	specificVersion: SchemaVersion;
}
/**
* Type to represent either a specific source schema version or the latest one
*/
export type SourceSchemaVersion = SourceSchemaVersion_latestVersion | SourceSchemaVersion_specificVersion;
