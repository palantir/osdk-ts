import type { DirectedFoundryLink } from "./DirectedFoundryLink.js";
import type { ObjectIdentifier } from "./ObjectIdentifier.js";
/**
* Successful links retrieval result for a requested object.
*/
export interface LoadedObjectLinksResultV2 {
	objectIdentifier: ObjectIdentifier;
	links: Array<DirectedFoundryLink>;
}
