import type { Version } from "./Version.js";
/**
* An identifier of a Compass entity with a version.
*/
export interface VersionedResource {
	rid: string;
	version: Version;
}
