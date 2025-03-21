import type { LinkTypeIdentifier } from "./LinkTypeIdentifier.js";
import type { VersionReference } from "./VersionReference.js";
/**
* Request to load an LinkType.
*/
export interface LinkTypeLoadRequest {
	identifier: LinkTypeIdentifier;
	versionReference: VersionReference | undefined;
}
