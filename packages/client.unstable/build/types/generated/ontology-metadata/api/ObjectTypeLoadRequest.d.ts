import type { ObjectTypeIdentifier } from "./ObjectTypeIdentifier.js";
import type { VersionReference } from "./VersionReference.js";
/**
* Request to load an ObjectType.
*/
export interface ObjectTypeLoadRequest {
	identifier: ObjectTypeIdentifier;
	versionReference: VersionReference | undefined;
}
