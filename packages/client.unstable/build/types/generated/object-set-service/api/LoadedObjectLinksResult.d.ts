import type { FoundryLink } from "./FoundryLink.js";
import type { ObjectIdentifier } from "./ObjectIdentifier.js";
/**
* Successful links retrieval result for a requested object.
*/
export interface LoadedObjectLinksResult {
	objectIdentifier: ObjectIdentifier;
	links: Array<FoundryLink>;
}
